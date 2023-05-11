import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './schemas/students.schema';
import { UpdateStudentDto } from './dto/update-student.dto';

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

  async findByIdAndUpdate(id:string, updateStudentDto:UpdateStudentDto): Promise<Student>{
    const updatedStudent = await this.studentModel.findByIdAndUpdate(id,{...updateStudentDto},{ new: true })
    return updatedStudent
  }

  async delete(id: string) {
    const deletedStudent = await this.studentModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedStudent;
  }
}