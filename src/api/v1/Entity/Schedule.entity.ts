import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Hospital } from './Hospital.entity';

@Entity('schedule_table')
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  schedule_id: string;

  @ManyToOne(() => Doctor, doctor => doctor.schedule, { eager: true })
  @JoinColumn({ name: 'doctor_name' })
  doctor_name: Doctor;

  @ManyToOne(() => Hospital, hospital => hospital.schedule, { eager: true })
  @JoinColumn({ name: 'hospital_name' })
  hospital_name: Hospital;

  @Column({nullable: false})
  dayid: number;

  @Column({ type:'date', default: ()=> 'CURRENT_TIMESTAMP', nullable: true})
  from_date: Date;

  @Column({ type:'date', default: ()=> 'CURRENT_TIMESTAMP', nullable: true })
  to_date: Date;

  @Column({ type:'time', default: ()=> 'CURRENT_TIMESTAMP', nullable: true})
  from_time: Date;

  @Column({ type:'time', default: ()=> 'CURRENT_TIMESTAMP', nullable: true})
  to_time: Date;

  @CreateDateColumn({ type:'timestamp', default: ()=> 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  last_modified: Date;
  
  @DeleteDateColumn({ default: null })
  delete_date: Date;

}