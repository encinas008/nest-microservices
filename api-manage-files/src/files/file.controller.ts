import { Controller, Post, UseInterceptors, UploadedFiles, Res, Param, Get } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from  'multer';
import { extname } from  'path';
import { FileService } from './file.service';
import { APPCONFIG } from '../constants/app.config';

@Controller('files')
export class FileController {

  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', null, 
    {
      preservePath: true,
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}${extname(file.originalname)}`)
        }
      })
    }))
  uploadedFile(@UploadedFiles() files) {
    const pathFiles = [];
    files.map((file) => pathFiles.push({path: `${APPCONFIG.HOST_SERVER_FILES}/${file.path}`}));
    return this.fileService.createFile(pathFiles);
  }

  @Get(':fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads'});
  }
}
