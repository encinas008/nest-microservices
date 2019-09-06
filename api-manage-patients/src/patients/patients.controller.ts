import { Controller, Get, Post, Body, Param, Put, Delete, UploadedFiles, UseInterceptors, Request } from '@nestjs/common';
import { PatientDto } from './dto/patient.dto';
import { PatientsService } from './patients.service';
import { HistoryDto } from './dto/history.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

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

  @Post(':id/histories')
  async createHistoryByUser(@Param('id') id: String, @Body() historyDto: HistoryDto) {
    return this.patientService.createHistory(id, historyDto);
  }

  @Post('histories/:id/files')
  @UseInterceptors(FilesInterceptor('files', null, {}))
  async AddFileToHistory(@Param('id') id: String, @UploadedFiles() files) {
    this.patientService.addFileToHistory(id, files);
    return id;
  }
}
