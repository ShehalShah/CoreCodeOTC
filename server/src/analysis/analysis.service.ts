import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnalysisDto } from './analysis.dto';

@Injectable()
export class AnalysisService {
  constructor(private readonly prisma: PrismaService) {}

  async getAnalysis() {
    return this.prisma.analysis.findMany();
  }

  async createAnalysis(body: AnalysisDto) {
    const { summary, keywords } = body;
    return this.prisma.analysis.create({
      data: {
        summary,
        keywords,
      },
    });
  }
}
