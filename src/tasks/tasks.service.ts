import { CreateTaskDto } from './../DTO/create-task.dto';
import { TasksEntity, TaskStatus } from './../Entity/task.entity';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity) private repo: Repository<TasksEntity>,
  ) {}

  async getAllTasks(): Promise<any> {
    return await this.repo.find();
  }

  async createTask(createTaskDto: CreateTaskDto) {
    const task: TasksEntity = new TasksEntity();
    const { title, description, due_date } = createTaskDto;
    task.title = title;
    task.description = description;
    task.due_date = due_date;
    task.status = TaskStatus.OPEN;
    this.repo.create(task);
    try {
      return await this.repo.save(task);
    } catch (err) {
      throw new InternalServerErrorException(
        'Something went wrong, task not created',
      );
    }
  }

  async updateTask(id: number, status: TaskStatus) {
    try {
      await this.repo.update({ id }, { status });
      return this.repo.findOne({ id });
    } catch (err) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async deleteTask(id: number) {
    try {
      return await this.repo.delete({ id });
    } catch (err) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
