import { IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsTimeZone, IsUUID, MinLength, isDateString } from "class-validator";
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
    
    @IsDateString()
    from_date?: Date;

    @IsDateString()
    to_date?: Date;

    @IsString()
    from_time?: Date;

    @IsString()
    to_time?: Date;


  }

  export class UpdateScheduleDto {

    @IsOptional()
    @IsUUID()
    doctor_name?: Doctor;

    @IsOptional()
    @IsUUID()
    hospital_name?: Hospital;
  
    @IsOptional()
    @IsInt()
    dayid?: number;
    
    @IsOptional()
    @IsDateString()
    from_date?: Date;

    @IsOptional()
    @IsDateString()
    to_date?: Date;

    @IsOptional()
    @IsString()
    from_time?: Date;

    @IsOptional()
    @IsString()
    to_time?: Date;


  }