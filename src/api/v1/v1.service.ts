import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
import { Schedule } from './Entity/Schedule.entity';
import { ScheduleInterface, UpdateScheduleInterface } from './Entity/Schedule.interface';

@Injectable()
export class V1Service {
    constructor(
        @InjectRepository(Schedule)
        private readonly ScheduleRepository: Repository<Schedule>
    ) {}

    findAllPost(): Observable<ScheduleInterface[]> {
        return from(this.ScheduleRepository.find({ withDeleted: false}));
    }

    createPost(schedulePost: ScheduleInterface) {
        return from(this.ScheduleRepository.save(schedulePost))
    }

    updatePost(id: string, scheduleUpdate: UpdateScheduleInterface): Observable<UpdateResult> {
        return from(this.ScheduleRepository.update(id, scheduleUpdate));
      }

    deletePost(id: string): Observable<DeleteResult> {
        return from(this.ScheduleRepository.softDelete(id));
      }
    
    findDoctorPost(id: string): Observable<ScheduleInterface[]>{
        return from(
            this.ScheduleRepository.find({
                where: {
                  doctor_name: {
                    doctor_id: id,
                  },
                },
                relations: ['doctor_name', 'hospital_name'], // Adjust the relationship names based on your entity definitions
              })
        )
    }
        

}

