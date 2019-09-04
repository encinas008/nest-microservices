import { Controller, Post, UseInterceptors, UploadedFiles, Inject } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from  'multer';
import { extname } from  'path';
import { FileService } from './file.service';

@Controller('files')
export class FileController {
  SERVER_URL: string = "http://localhost:3003/";

  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files', null, 
    {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}${extname(file.originalname)}`)
        }
      })
    }))
  uploadedFile(@UploadedFiles() files) {
    files.map((item) => {
      const absolutePath = `${this.SERVER_URL}${item.path}`;
      this.fileService.createFile({path: absolutePath});
    })
  }
}
