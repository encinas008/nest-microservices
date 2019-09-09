import { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

export const FileSchema = new Schema({
  id: ObjectId,
  path: String,
});
