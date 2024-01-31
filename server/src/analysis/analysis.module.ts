import { Module } from '@nestjs/common';
import { AnalysisController } from './analysis.controller';
import { AnalysisService } from './analysis.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AnalysisController],
  providers: [AnalysisService, PrismaService],
})
export class AnalysisModule {}
