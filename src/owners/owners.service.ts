import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Owner } from '@prisma/client';
import { CreateOwnerDto, UpdateOwnerDto } from './dto';

@Injectable()
export class OwnersService {
  constructor(private prisma: PrismaService) {}

  async create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    try {
      return await this.prisma.owner.create({
        data: createOwnerDto,
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to create owner');
    }
  }

  async findAll(): Promise<Owner[]> {
    try {
      return await this.prisma.owner.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve owners');
    }
  }

  async findOne(id: number): Promise<Owner | null> {
    try {
      const owner = await this.prisma.owner.findUnique({
        where: { id },
      });
      if (!owner) {
        throw new NotFoundException(`Owner with ID ${id} not found`);
      }
      return owner;
    } catch (error) {
      throw new InternalServerErrorException(`Failed to retrieve owner with ID ${id}`);
    }
  }

  async update(id: number, updateOwnerDto: UpdateOwnerDto): Promise<Owner> {
    try {
      return await this.prisma.owner.update({
        where: { id },
        data: updateOwnerDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException(`Owner with ID ${id} not found`);
      }
      throw new InternalServerErrorException(`Failed to update owner with ID ${id}`);
    }
  }

  async remove(id: number): Promise<Owner> {
    try {
      return await this.prisma.owner.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException(`Owner with ID ${id} not found`);
      }
      throw new InternalServerErrorException(`Failed to delete owner with ID ${id}`);
    }
  }
}