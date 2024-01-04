import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, JoinTable, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { Schedule } from './Schedule.entity';

@Entity('hospital_table')
export class Hospital {
  @PrimaryGeneratedColumn('uuid')
  hospital_id: string;

  @Column({nullable: true})
  hospital_name: string;

  @Column({nullable: true})
  hospital_area: string;

  @CreateDateColumn({ type:'timestamp', default: ()=> 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type:'timestamp', default: ()=> 'CURRENT_TIMESTAMP' })
  last_modified: Date;
  
  @DeleteDateColumn({ default: null })
  delete_date: Date;

  @JoinTable()
  @OneToMany(() => Schedule, schedule => schedule.hospital_name, {cascade: true,})
  schedule: Schedule;
}