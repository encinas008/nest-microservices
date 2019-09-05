import { IsDate, IsNotEmpty } from 'class-validator';

export class PatientDto {
  @IsNotEmpty()
  readonly fullName: String;
  @IsNotEmpty()
  readonly address: String;
  @IsDate()
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