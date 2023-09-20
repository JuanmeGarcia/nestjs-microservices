import { Module } from '@nestjs/common';
import { LoggerModule as NestPinoLogger } from 'nestjs-pino'

@Module({
  imports: [
    NestPinoLogger.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true
          }
        }
      }
    })
  ]
})
export class LoggerModule { }
