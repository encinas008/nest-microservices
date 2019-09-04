import { Document } from 'mongoose';

export interface Patient extends Document {
  readonly fullName: String;
  readonly age: Number;
  readonly address: String;
}