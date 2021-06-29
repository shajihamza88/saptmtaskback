import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @MaxLength(15, { message: 'Max length is 15 Characters.' })
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  due_date: Date;
}
