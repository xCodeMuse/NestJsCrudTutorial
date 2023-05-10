import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Surya:Surya@cluster0.bwfkc.mongodb.net/nestJs?retryWrites=true&w=majority'),
    StudentsModule
  ],
})
export class AppModule {}
