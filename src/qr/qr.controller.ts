import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { QrService } from './qr.service';
import { QrDto } from './dto/qr.dto';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) { }

  @Post('generate')
  generateQrCode(@Body(new ValidationPipe()) qrDto: QrDto) {
    return this.qrService.generateQrCode(qrDto);
  }
}
