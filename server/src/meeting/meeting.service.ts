import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMeetingDto } from './dto/meeting.dto';

@Injectable()
export class MeetingService {
  constructor(private readonly prisma: PrismaService) {}
}
