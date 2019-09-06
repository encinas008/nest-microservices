import { Injectable, Inject, HttpService } from '@nestjs/common';
import { Model } from 'mongoose';
import { Patient } from './interfaces/patient.interface';
import { PatientDto } from './dto/patient.dto';
import { HistoryDto } from './dto/history.dto';
import { APPCONFIG } from '../constants/app.config';
import * as mongoose from 'mongoose';

@Injectable()
export class PatientsService {
  constructor(@Inject('PATIENT_MODEL') private readonly patientModel: Model<Patient>,
              private http: HttpService, ) { }

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

  async addFileToHistory(id, files) {
    const ObjectId = mongoose.Types.ObjectId;
    this.patientModel.findOne({'histories._id': new ObjectId(id)}, (error, history) => {
      if (!error) {
        this.http.post(APPCONFIG.URL_UPLOAD_FILE, files).toPromise()
          .then(() => {
            console.log('It is works');
          })
          .catch(error => {
            console.log('ERROR: ', error.message);
          })
      }
    })
  }
}
