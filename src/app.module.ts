import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PropertiesModule } from './properties/properties.module';
import { OwnersModule } from './owners/owners.module';
import { PropertyTypesModule } from './property-types/property-types.module';

@Module({
  imports: [PropertiesModule, OwnersModule, PropertyTypesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
