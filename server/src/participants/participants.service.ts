import { Injectable } from '@nestjs/common';
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

  async update(id: string, body: UpdatePartipateDto) {
    const { state, country } = body;
    return await this.prisma.participants.update({
      where: { id: Number(id) },
      data: { state, country },
    });
  }
}
