import { IsString, IsNotEmpty } from 'class-validator';

export class FormDto {
  @IsString()
  @IsNotEmpty()
  readonly userEmail: string;

  @IsString()
  @IsNotEmpty()
  readonly request: string;
}
