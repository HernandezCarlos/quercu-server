import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOwnerDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
