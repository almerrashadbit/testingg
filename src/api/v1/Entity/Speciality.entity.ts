import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, JoinTable, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { Doctor } from './doctor.entity';

@Entity('speciality_table')
export class Speciality {
  @PrimaryGeneratedColumn('uuid')
  speciality_id: string;

  @Column({ default: null })
  speciality_name: string;

  @CreateDateColumn({ type:'timestamp', default: ()=> 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type:'timestamp', default: ()=> 'CURRENT_TIMESTAMP' })
  last_modified: Date;
  
  @DeleteDateColumn({ default: null, nullable: true })
  delete_date: Date;

  @JoinTable()
  @OneToMany(() => Doctor, doctor => doctor.doctor_speciality, {cascade: true,})
  doctor: Doctor
}