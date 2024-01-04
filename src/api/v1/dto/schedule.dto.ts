import { IsInt, IsNotEmpty, IsNumber, IsString, IsUUID, MinLength } from "class-validator";
import { Doctor } from "../Entity/doctor.entity";
import { Hospital } from "../Entity/Hospital.entity";

export class CreateScheduleDto {
  
    @IsNotEmpty()
    @IsUUID()
    doctor_name?: Doctor;
  
    @IsNotEmpty()
    @IsUUID()
    hospital_name?: Hospital;
  
    @IsNotEmpty()
    @IsInt()
    dayid?: number;

  }