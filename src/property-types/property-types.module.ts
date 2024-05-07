import { Module } from '@nestjs/common';
import { PropertyTypesService } from './property-types.service';
import { PropertyTypesController } from './property-types.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [PropertyTypesController],
  providers: [PropertyTypesService, PrismaService, ConfigService],
})
export class PropertyTypesModule {}
