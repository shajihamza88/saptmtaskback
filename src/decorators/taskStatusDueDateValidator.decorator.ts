import { TaskStatus } from './../Entity/task.entity';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import * as moment from 'moment';

export function TaskStatusDueDateValidator(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: TaskStatusDueDateContraint,
    });
  };
}

@ValidatorConstraint({ name: 'TaskStatusDueDateValidator' })
export class TaskStatusDueDateContraint
  implements ValidatorConstraintInterface
{
  readonly doneStatus = TaskStatus.DONE;

  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    value = value.toUpperCase();
    const now = new Date();
    const today = moment(now).format('YYYY-MM-DD');
    if (value === this.doneStatus)
      if (moment(relatedValue).isBefore(today)) return false;
    return true;
  }
}
