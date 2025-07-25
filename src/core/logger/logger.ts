import { LoggerService, LogLevel } from '@nestjs/common';
import { createLogger, transports, Logger as WinstonLogger } from 'winston';
export class Logger implements LoggerService {
    private logLevel: string;
    private logger: WinstonLogger;
    constructor(private readonly context: string) {
        this.logger = createLogger({
            level: this.logLevel,
            transports: [new transports.Console()],
        });
    }
    log(message: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    error(message: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    warn(message: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    debug?(message: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    verbose?(message: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    fatal?(message: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    setLogLevels?(levels: LogLevel[]) {
        throw new Error('Method not implemented.');
    }
}
