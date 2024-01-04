import { Doctor } from "./doctor.entity";

export interface SpecialityInterface {
    speciality_id?: string;
    speciality_name?: string;
    created_at?: Date;
    last_modified?: Date;
    is_delete?: boolean;
    doctor?: Doctor[];
}
