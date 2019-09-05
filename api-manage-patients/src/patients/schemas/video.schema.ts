import { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

export const VideoSchema = new Schema({
  patientId: ObjectId,
  path: String
});
