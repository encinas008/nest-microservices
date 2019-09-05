import { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

export const ImageSchema = new Schema({
  patientId: ObjectId,
  path: String
});
