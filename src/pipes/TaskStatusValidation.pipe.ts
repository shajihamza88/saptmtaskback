import { TaskStatus } from './../Entity/task.entity';
import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [TaskStatus.OPEN, TaskStatus.DONE];

  transform(value: any): any {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status.`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.allowedStatus.indexOf(status);

    return index !== -1;
  }
}
