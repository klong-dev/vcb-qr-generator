import { Injectable, Module } from '@nestjs/common';
import { QrService } from './qr.service';
import { QrController } from './qr.controller';
import * as QRCode from 'qrcode';

@Module({
  controllers: [QrController],
  providers: [QrService],
})
export class QrModule { }
