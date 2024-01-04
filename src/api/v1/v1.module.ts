import { Module } from '@nestjs/common';
import { V1Service } from './v1.service';
import { V1Controller } from './v1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './Entity/doctor.entity';
import { Speciality } from './Entity/Speciality.entity';
import { Schedule } from './Entity/Schedule.entity';
import { Hospital } from './Entity/Hospital.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Speciality, Schedule, Hospital])],
  providers: [V1Service],
  controllers: [V1Controller]
})
export class V1Module {}
