import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Property } from '@prisma/client';
import { CreatePropertyDto, UpdatePropertyDto } from './dto';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    try {
      return await this.prisma.property.create({
        data: createPropertyDto,
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to create property');
    }
  }

  async findAll(): Promise<Property[]> {
    try {
      return await this.prisma.property.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve properties');
    }
  }

  async findOne(id: number): Promise<Property | null> {
    try {
      const property = await this.prisma.property.findUnique({
        where: { id },
      });
      if (!property) {
        throw new NotFoundException(`Property with ID ${id} not found`);
      }
      return property;
    } catch (error) {
      throw new InternalServerErrorException(`Failed to retrieve property with ID ${id}`);
    }
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto): Promise<Property> {
    try {
      return await this.prisma.property.update({
        where: { id },
        data: updatePropertyDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException(`Property with ID ${id} not found`);
      }
      throw new InternalServerErrorException(`Failed to update property with ID ${id}`);
    }
  }

  async remove(id: number): Promise<Property> {
    try {
      return await this.prisma.property.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException(`Property with ID ${id} not found`);
      }
      throw new InternalServerErrorException(`Failed to delete property with ID ${id}`);
    }
  }
}
