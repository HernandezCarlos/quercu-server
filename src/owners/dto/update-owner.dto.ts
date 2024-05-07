import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerDto } from './create-owner.dto';
import { IsOptional, IsString, IsEmail } from 'class-validator';

export class UpdateOwnerDto extends PartialType(CreateOwnerDto) {
    @IsOptional()
    @IsString()
    name?: string;
  
    @IsOptional()
    @IsString()
    telephone?: string;
  
    @IsOptional()
    @IsEmail()
    email?: string;
  
    @IsOptional()
    @IsString()
    identificationNumber?: string;
  
    @IsOptional()
    @IsString()
    address?: string;
}
