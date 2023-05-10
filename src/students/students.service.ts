import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './schemas/students.schema';

@Injectable()
export class StudentsService {
  constructor(@InjectModel(Student.name) private readonly studentModel: Model<Student>) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    
    const createdStudent = await this.studentModel.create(createStudentDto);
    return createdStudent;
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<Student> {
    return this.studentModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedStudent = await this.studentModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedStudent;
  }
}