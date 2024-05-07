import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersController } from './owners.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [OwnersController],
  providers: [OwnersService, PrismaService, ConfigService],
})
export class OwnersModule {}
