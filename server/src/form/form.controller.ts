import { Controller, Get, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { FormDto } from './form.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get()
  async getForm() {
    return this.formService.getForm();
  }

  @Post()
  async postForm(@Body() body: FormDto) {
    return this.formService.postForm(body);
  }
}
