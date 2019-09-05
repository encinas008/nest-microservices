import { Schema } from 'mongoose';
import { ImageSchema } from './image.schema';
import { VideoSchema } from './video.schema';

export const HistorySchema = new Schema({
  weight: {
    type: Number,
    required: true
  },
  bloodPressure: {
    type: Number,
    required: true
  },
  glucose: {
    type: Number,
    required: true
  },
  disease: {
    type: String
  },
  treatment: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  },
  deletedAt: {
    type: Date
  },
  actived: {
    type: Boolean,
    default: true
  },
  images: [ImageSchema],
  videos: [VideoSchema]
});