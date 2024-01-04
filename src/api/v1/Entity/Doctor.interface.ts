import { Schedule } from "./Schedule.entity";
import { Speciality } from "./Speciality.entity";

export interface DoctorInterface {
    doctor_id?: string;
    doctor_speciality?: Speciality; 
    doctor_availability?: boolean;
    schedule?: Schedule[];
}