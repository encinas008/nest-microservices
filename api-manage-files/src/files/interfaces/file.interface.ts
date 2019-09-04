import { Document } from 'mongoose';

export interface File extends Document {
  readonly path: String;
}