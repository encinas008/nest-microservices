import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { patientProviders } from './patient.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PatientsController],
  providers: [PatientsService, ...patientProviders]
})
export class PatientsModule {}
