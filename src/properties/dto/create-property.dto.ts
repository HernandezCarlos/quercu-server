import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsDecimal,
  IsInt,
} from 'class-validator';

export class CreatePropertyDto {
  @IsNotEmpty()
  @IsString()
  number: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsDecimal()
  area: number;

  @IsOptional()
  @IsDecimal()
  constructionArea?: number;

  @IsNotEmpty()
  @IsInt()
  ownerId: number;

  @IsNotEmpty()
  @IsInt()
  propertyTypeId: number;
}
