import { Connection } from 'mongoose';
import { FileSchema } from './schemas/file.schema';

export const fileProviders = [
  {
    provide: 'FILE_MODEL',
    useFactory: (connection: Connection) => connection.model('File', FileSchema),
    inject: ['DATABASE_CONNECTION']
  }
]