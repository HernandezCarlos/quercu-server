import { IsNotEmpty, IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateOwnerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  telephone: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsString()
  identificationNumber: string;

  @IsOptional()
  @IsString()
  address?: string;
}
