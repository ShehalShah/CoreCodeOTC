import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormDto } from './form.dto';

@Injectable()
export class FormService {
  constructor(private readonly prisma: PrismaService) {}

  async getForm() {
    return this.prisma.form.findMany();
  }

  async postForm(body: FormDto) {
    const { userEmail, request } = body;
    return this.prisma.form.create({
      data: {
        userEmail,
        request,
      },
    });
  }
}
