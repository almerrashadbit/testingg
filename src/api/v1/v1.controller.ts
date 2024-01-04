import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { V1Service } from './v1.service';
import { Observable } from 'rxjs';
import { ScheduleInterface, UpdateScheduleInterface } from './Entity/Schedule.interface';
import { Schedule } from './Entity/Schedule.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateScheduleDto } from './dto/schedule.dto';
import { Request, Response } from 'express';


@Controller('v1')
export class V1Controller {
    constructor(private v1Service: V1Service) {}
    @Get('getschedule')
    findAll(): Observable<ScheduleInterface[]> {
        return this.v1Service.findAllPost();
    }

    @Get('getschedulebydoctor/:username')
    @HttpCode(200)
    findOne(@Param('username') username: string): Observable<ScheduleInterface[]> {
      return this.v1Service.findDoctorPost(username);
    }

    @Post('createschedule')
    @UsePipes(ValidationPipe)
    async create(
      @Req() request: Request,
      @Res() response: Response,
      @Body() body: CreateScheduleDto,
    ) { 
      try {
      const data: ScheduleInterface = body

    await this.v1Service.createPost(data);

    return response.status(200).json({
      code: 200,
      success: true,
      message: 'Success - Author created successfully',
      data: null,
    });
  } catch (error) {
    return response.status(500).json({
      code: 500,
      success: false,
      message: error.message,
      data: null,
    });
  }
}


    @Put('updateschedule/:id')
    @HttpCode(200)
    update(
      @Param('id') id: string,
      @Body() schedulePost: UpdateScheduleInterface,
    ): Observable<UpdateResult> {
      return this.v1Service.updatePost(id, schedulePost);
    }

    @Delete('deleteschedule/:id')
    delete(@Param('id') id: string): Observable<DeleteResult> {
      return this.v1Service.deletePost(id);
    }

}
