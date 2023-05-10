import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { StudentsModule } from './students/students.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Surya:Surya@cluster0.bwfkc.mongodb.net/nestJs?retryWrites=true&w=majority'),
    CatsModule,
    StudentsModule
  ],
})
export class AppModule {}
