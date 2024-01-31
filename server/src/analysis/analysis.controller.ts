import { Controller, Get, Post, Body } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { AnalysisDto } from './analysis.dto';

@Controller('analysis')
export class AnalysisController {
  constructor(private analysisService: AnalysisService) {}

  @Get()
  async getAnalysis() {
    return this.analysisService.getAnalysis();
  }

  @Post()
  async createAnalysis(@Body() body: AnalysisDto) {
    return this.analysisService.createAnalysis(body);
  }
}
