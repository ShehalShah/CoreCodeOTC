import { IsEmail, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePartipateDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsOptional()
  readonly state: string;

  @IsString()
  @IsOptional()
  readonly country: string;
}

export class UpdatePartipateDto {
  @IsString()
  @IsOptional()
  readonly state: string;

  @IsString()
  @IsOptional()
  readonly country: string;
}
