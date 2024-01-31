import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { CreatePartipateDto, UpdatePartipateDto } from './dto/participants.dto';

@Controller('participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  @Get()
  async findAll() {
    return await this.participantsService.findAll();
  }

  @Get(':id')
  async findOne(@Query('id') id: string) {
    return await this.participantsService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreatePartipateDto) {
    return await this.participantsService.create(body);
  }

  @Patch(':id')
  async update(@Query('id') id: string, @Body() body: UpdatePartipateDto) {
    return await this.participantsService.update(id, body);
  }
}
