import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Patient } from './interfaces/patient.interface';
import { PatientDto } from './dto/patient.dto';
import { HistoryDto } from './dto/history.dto';
import * as mongoose from 'mongoose';

@Injectable()
export class PatientsService {
  constructor(@Inject('PATIENT_MODEL') private readonly patientModel: Model<Patient>) { }

  async createPatient(patientDto: PatientDto): Promise<Patient> {
    const createPatient = this.patientModel(patientDto);
    return await createPatient.save();
  }

  async getAllPatients(): Promise<Patient[]> {
    return await this.patientModel.find().exec();
  }

  async getPatientById(id: String): Promise<Patient> {
    return await this.patientModel.findById(id);
  }

  async updatePatient(id: String, patientDto: PatientDto): Promise<Patient> {
    return await this.patientModel.findByIdAndUpdate(id, patientDto);
  }

  async deletePatient(id: String): Promise<Patient> {
    return await this.patientModel.findByIdAndRemove(id);
  }

  async createHistory(id: String, historyDto: HistoryDto): Promise<Patient> {
    return this.patientModel.findById(id, function (err, patient) {
      if (!err) {
        patient.histories.push(historyDto);
        return patient.save();
      }
    });
  }

  async addFileToHistory(id, fileDtos) {
    const ObjectId = mongoose.Types.ObjectId;
    this.patientModel.findOne({'histories._id': ObjectId(id)}, (error, history) => {
      if (!error) {
        history.files.push(fileDtos);
        history.save();
      }
    })
  }
}
