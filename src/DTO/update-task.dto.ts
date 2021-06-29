import { TaskStatusDueDateValidator } from 'src/decorators/taskStatusDueDateValidator.decorator';

export class UpdateTaskDto {
  @TaskStatusDueDateValidator('due_date', {
    message: 'Due date already passed',
  })
  status: string;
}
