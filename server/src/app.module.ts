import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ParticipantsModule } from './participants/participants.module';

@Module({
  imports: [ParticipantsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
