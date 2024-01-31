import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class AnalysisDto {
  @IsString()
  @IsNotEmpty()
  readonly summary: string;

  @IsString()
  @IsArray()
  readonly keywords: string[];
}
