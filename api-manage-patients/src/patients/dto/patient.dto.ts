import { IsDate, IsNotEmpty, IsDateString } from 'class-validator';

export class PatientDto {
  @IsNotEmpty()
  readonly fullName: String;
  @IsNotEmpty()
  readonly address: String;
  @IsNotEmpty()
  readonly birthday: Date;
  @IsNotEmpty()
  readonly gender: Boolean;
  @IsNotEmpty()
  readonly country: String;
  @IsNotEmpty()
  readonly city: String;
  readonly phone: String;
  readonly referencesPhone: String;
}