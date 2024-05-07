import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, IsInt, IsDecimal } from 'class-validator';
import { CreatePropertyDto } from './create-property.dto';

export class UpdatePropertyDto extends PartialType(CreatePropertyDto)  {
  @IsOptional()
  @IsString()
  number?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsDecimal()
  area?: number;

  @IsOptional()
  @IsDecimal()
  constructionArea?: number;

  @IsOptional()
  @IsInt()
  ownerId?: number;

  @IsOptional()
  @IsInt()
  propertyTypeId?: number;
}
  
