import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';
import { CreatePropertyDto } from './create-property.dto';

export class UpdatePropertyDto extends PartialType(CreatePropertyDto)  {
    @IsOptional()
    @IsString()
    name?: string;
  
    @IsOptional()
    @IsInt()
    @Min(1)
    ownerId?: number;
  
    @IsOptional()
    @IsInt()
    @Min(1)
    typeId?: number;
  }
  
