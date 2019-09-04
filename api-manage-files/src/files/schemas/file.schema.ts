import { Schema }from 'mongoose';
export const FileSchema = new Schema({
  path: {
    type: String,
    required: true
  }
});

