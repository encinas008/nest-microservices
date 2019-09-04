import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PatientDto } from './dto/patient.dto';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientService: PatientsService) {}

  @Post()
  async create(@Body() patientDto: PatientDto) {
    return this.patientService.createPatient(patientDto);
  }

  @Get()
  async getAll() {
    return this.patientService.getAllPatients();
  }

  @Get(':id')
  async getPatientById(@Param('id') id: String) {
    return this.patientService.getPatientById(id);
  }

  @Put(':id')
  async updatePatient(@Param('id') id: String, @Body() patientDto: PatientDto) {
    return this.patientService.updatePatient(id, patientDto);
  }

  @Delete(':id')
  async deletePatient(@Param('id') id: String) {
    return this.patientService.deletePatient(id);
  }
}
