import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { QrDto } from './dto/qr.dto';

@Injectable()
export class QrService {
    async generateQrCode(qrDto: QrDto): Promise<Object> {
        try {
            const data = this.createQRData(qrDto.bankNumber, qrDto.amount, qrDto.content);
            const crc = this.calculateCRC16(data);
            const qrCodeDataURL = await QRCode.toDataURL(data + crc);
            return { base64: qrCodeDataURL };
        } catch (err) {
            throw new Error('Failed to generate QR code');
        }
    }

    createQRData(bankNumber: string, amount: number, content: string): string {
        // Format amount with thousands separators and two decimal places
        const amountFmtLength = this.hyperStringLength(amount.toString(), 0);

        const bankNumberLenght = this.hyperStringLength(bankNumber, 0);

        const qrData = "00020101021238540010A0000007270124000697043601" +
            bankNumberLenght + bankNumber + "0208QRIBFTTA530370454" +
            amountFmtLength + amount.toString() + "5802VN62" +
            this.hyperStringLength(content, 4) + "08" +
            this.hyperStringLength(content, 0) + content + "6304";
        return qrData;
    }

    hyperStringLength(s: string, plus: number): string {
        const tmp = s.length + plus;
        return tmp < 10 ? '0' + tmp : tmp.toString();
    }

    calculateCRC16(data: string): string {
        let crc = 0xFFFF;
        for (let i = 0; i < data.length; i++) {
            crc ^= data.charCodeAt(i) << 8;
            for (let j = 0; j < 8; j++) {
                if (crc & 0x8000) {
                    crc = (crc << 1) ^ 0x1021;
                } else {
                    crc = crc << 1;
                }
            }
        }
        return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
    }
}
