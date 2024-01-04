import { Hospital } from "./Hospital.entity";
import { Doctor } from "./doctor.entity";

export interface ScheduleInterface {
    schedule_id?: string;
    doctor_name?: Doctor;
    hospital_name?: Hospital;
    dayid?: number;
    from_date?: Date;
    to_date?: Date;
    from_time?: Date;
    to_time?: Date;
    created_at?: Date;
    last_modified?: Date;
    is_delete?: boolean;
}

export interface UpdateScheduleInterface {
    doctor_name?: Doctor;
    hospital_name?: Hospital;
    dayid?: number;
    from_date?: Date;
    to_date?: Date;
    from_time?: Date;
    to_time?: Date;
    last_modified?: Date;
  }