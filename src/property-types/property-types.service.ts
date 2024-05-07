import { Injectable, NotFoundException } from '@nestjs/common';
import { ErrorManager } from 'src/utils/error-manager';
import { Prisma, PropertyType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropertyTypeDto, UpdatePropertyTypeDto } from './dto';

@Injectable()
export class PropertyTypesService {
  constructor(private prisma: PrismaService) {}

  async create(
    createPropertyTypeDto: CreatePropertyTypeDto,
  ): Promise<PropertyType> {
    try {
      return await this.prisma.propertyType.create({
        data: createPropertyTypeDto,
      });
    } catch (error) {
      throw ErrorManager.createSignatureError('Failed to create property type');
    }
  }

  async findAll(): Promise<PropertyType[]> {
    try {
      return await this.prisma.propertyType.findMany();
    } catch (error) {
      throw ErrorManager.createSignatureError(
        'Failed to retrieve property types',
      );
    }
  }

  async findOne(id: number): Promise<PropertyType | null> {
    try {
      const propertyType = await this.prisma.propertyType.findUnique({
        where: { id },
      });
      if (!propertyType) {
        throw new NotFoundException(`Property type with ID ${id} not found`);
      }
      return propertyType;
    } catch (error) {
      throw ErrorManager.createSignatureError(
        `Failed to retrieve property type with ID ${id}`,
      );
    }
  }

  async update(
    id: number,
    updatePropertyTypeDto: UpdatePropertyTypeDto,
  ): Promise<PropertyType> {
    try {
      return await this.prisma.propertyType.update({
        where: { id },
        data: updatePropertyTypeDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw ErrorManager.createSignatureError(
          `Property type with ID ${id} not found`,
        );
      }
      throw ErrorManager.createSignatureError(
        `Failed to update property type with ID ${id}`,
      );
    }
  }

  async remove(id: number): Promise<PropertyType> {
    try {
      return await this.prisma.propertyType.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw ErrorManager.createSignatureError(
          `Property type with ID ${id} not found`,
        );
      }
      throw ErrorManager.createSignatureError(
        `Failed to delete property type with ID ${id}`,
      );
    }
  }
}
