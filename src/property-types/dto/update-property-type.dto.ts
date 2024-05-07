import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyTypeDto } from './create-property-type.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePropertyTypeDto extends PartialType(CreatePropertyTypeDto) {
  @IsOptional()
  @IsString()
  description?: string;
}
