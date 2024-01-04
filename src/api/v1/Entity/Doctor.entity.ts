import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, JoinTable, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { Speciality } from './Speciality.entity';
import { Schedule } from './Schedule.entity';

@Entity('doctor_table')
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  doctor_id: string;

  @Column({ default: null })
  doctor_name: string;

  @ManyToOne(() => Speciality, doctor_speciality => doctor_speciality.doctor, { eager: true })
  @JoinColumn({ name: 'speciality_name' })
  doctor_speciality: Speciality;

  @Column({ default: true })
  doctor_availability: boolean;

  @CreateDateColumn({ type:'timestamp', default: ()=> 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type:'timestamp', default: ()=> 'CURRENT_TIMESTAMP' })
  last_modified: Date;
  
  @DeleteDateColumn({ default: null })
  delete_date: Date;

  @JoinTable()
  @OneToMany(() => Schedule, schedule => schedule.doctor_name, {cascade: true})
  schedule: Schedule;
  
}