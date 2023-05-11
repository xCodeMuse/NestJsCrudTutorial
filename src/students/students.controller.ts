import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './schemas/students.schema';
import { UpdateStudentDto } from './dto/update-student.dto';
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    await this.studentsService.create(createStudentDto);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Student> {
    return this.studentsService.findOne(id);
  }

  @Put(':id')
  async findByIdAndUpdate(@Param('id') id: string, @Body() updateStudentDto:UpdateStudentDto){
    return this.studentsService.findByIdAndUpdate(id,updateStudentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.studentsService.delete(id);
  }
}