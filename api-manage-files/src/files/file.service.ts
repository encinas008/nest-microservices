import { Inject } from "@nestjs/common";
import { Model } from 'mongoose';
import { File } from './interfaces/file.interface';

export class FileService {
  constructor(@Inject('FILE_MODEL') private readonly file: Model<File>) { }

  async createFile(data) {
    return this.file.insertMany(data);
  }
}