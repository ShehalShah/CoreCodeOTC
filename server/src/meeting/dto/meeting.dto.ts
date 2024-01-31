import { IsEmail, IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMeetingDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNumber()
  @IsNotEmpty()
  readonly duration: number;

  @IsString()
  @IsNotEmpty()
  readonly link: string;
}
