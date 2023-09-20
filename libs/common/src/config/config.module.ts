import { Module } from '@nestjs/common';
import { ConfigModule as NestConfig, ConfigService } from '@nestjs/config';
import { config } from './config';

@Module({
    imports: [
        NestConfig.forRoot({
            validationSchema: config
        })
    ],
    providers: [
        ConfigService
    ],
    exports: [
        ConfigService
    ]
})
export class ConfigModule {}
