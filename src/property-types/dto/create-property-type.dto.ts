import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePropertyTypeDto {
  @IsNotEmpty()
  @IsString()
  description: string;
}
