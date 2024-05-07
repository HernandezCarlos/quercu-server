import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService, PrismaService, ConfigService],
})
export class PropertiesModule {}
