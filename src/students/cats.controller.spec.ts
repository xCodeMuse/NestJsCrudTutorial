import { Test, TestingModule } from '@nestjs/testing';
import { StudentsController } from './students.controller';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';

describe('Students Controller', () => {
  let controller: StudentsController;
  let service: StudentsService;
  const createStudentDto: CreateStudentDto = {
    name: 'Student #1',
    class: 1,
    age: 4,
    address:'UDB Apartment Nirman Nagar Jaipur'
  };

  const mockStudent = {
    name: 'Student #1',
    class: 1,
    age: 4,
    address:'UDB Apartment Nirman Nagar Jaipur',
    _id: 'a id',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController],
      providers: [
        {
          provide: StudentsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                name: 'Student #1',
                class: 1,
                age: 4,
                address:'UDB Apartment Nirman Nagar Jaipur'
              },
              {
                name: 'Student #2',
                class: 12,
                age: 16,
                address:'UDB Apartment Nirman Nagar Delhi'
              },
              {
                name: 'Student #2',
                class: 8,
                age: 12,
                address:'UDB Apartment Nirman Nagar Pune'
              },
            ]),
            create: jest.fn().mockResolvedValue(createStudentDto),
          },
        },
      ],
    }).compile();

    controller = module.get<StudentsController>(StudentsController);
    service = module.get<StudentsService>(StudentsService);
  });

  describe('create()', () => {
    it('should create a new student', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValueOnce(mockStudent);

      await controller.create(createStudentDto);
      expect(createSpy).toHaveBeenCalledWith(createStudentDto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of students', async () => {
      expect(controller.findAll()).resolves.toEqual([
        {
          name: 'Student #1',
          class: 1,
          age: 4,
          address:'UDB Apartment Nirman Nagar Jaipur'
        },
        {
          name: 'Student #2',
          class: 12,
          age: 16,
          address:'UDB Apartment Nirman Nagar Delhi'
        },
        {
          name: 'Student #2',
          class: 8,
          age: 12,
          address:'UDB Apartment Nirman Nagar Pune'
        },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});