import winston from 'winston';

const { combine, timestamp, json, printf, colorize, align, errors, splat } =
  winston.format;

const options = {
  level: process.env.LOG_LEVEL ?? 'info',
  format: process.env.LOG_FORMAT ?? 'pretty'
};

export const logger = winston.createLogger({
  level: options.level,
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }),
    splat(),
    errors({ stack: true }),
    options.format === 'json'
      ? json()
      : printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`),
    colorize({ all: options.format === 'pretty' }),
    align()
  ),
  transports: [new winston.transports.Console()]
});
