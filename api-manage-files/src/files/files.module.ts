import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { DatabaseModule } from '../database/database.module';
import { FileService } from './file.service';
import { fileProviders } from './file.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [FileController],
  providers: [FileService, ...fileProviders]
})
export class FilesModule {}
