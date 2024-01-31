import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePartipateDto, UpdatePartipateDto } from './dto/participants.dto';

@Injectable()
export class ParticipantsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.participants.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.participants.findUnique({
      where: { id: Number(id) },
    });
  }

  async create(data: CreatePartipateDto) {
    return await this.prisma.participants.create({
      data,
    });
  }
}
