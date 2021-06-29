import { UpdateTaskDto } from './../DTO/update-task.dto';
import { TaskStatus } from './../Entity/task.entity';
import { TaskStatusValidationPipe } from './../pipes/TaskStatusValidation.pipe';
import { CreateTaskDto } from './../DTO/create-task.dto';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createNewTask(@Body(ValidationPipe) data: CreateTaskDto) {
    return this.tasksService.createTask(data);
  }

  @Patch(':id')
  updateTask(
    @Body(ValidationPipe) data: UpdateTaskDto,
    @Body('status', TaskStatusValidationPipe)
    status: TaskStatus,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.tasksService.updateTask(id, status);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.deleteTask(id);
  }
}
