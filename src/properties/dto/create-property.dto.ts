import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreatePropertyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  ownerId: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  typeId: number;
}

