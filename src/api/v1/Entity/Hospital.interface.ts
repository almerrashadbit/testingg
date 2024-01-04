import { Schedule } from "./Schedule.entity";

export interface DoctorInterface {
    hospital_id?: string;
    hospital_name?: string; 
    hospital_area?: string;
    schedule?: Schedule[];
}