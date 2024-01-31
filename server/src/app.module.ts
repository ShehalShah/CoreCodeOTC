import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AnalysisModule } from './analysis/analysis.module';
import { FormModule } from './form/form.module';

@Module({
  imports: [AnalysisModule, FormModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
