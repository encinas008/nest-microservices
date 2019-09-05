import { Schema } from 'mongoose';
import { HistorySchema } from './history.schema';

export const PatientSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  gender: {
    type: Boolean,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  referencesPhone: {
    type: String
  },
  histories: [HistorySchema],
  createdAt: {
    type: Date,
    Default: Date.now
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
  }
});


