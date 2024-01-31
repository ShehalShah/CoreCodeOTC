import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ParticipantsModule } from './participants/participants.module';
import { MeetingModule } from './meeting/meeting.module';

@Module({
  imports: [ParticipantsModule, MeetingModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
