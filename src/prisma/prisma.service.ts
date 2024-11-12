import { logger } from 'utils/logger';

import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient {
  private static instance: PrismaService | null = null;

  private constructor() {
    super();
  }

  public static getInstance(): PrismaService {
    logger.debug('Attempting to get instance of PrismaService');
    if (!PrismaService.instance) {
      logger.debug('No instance found, creating new one');
      PrismaService.instance = new PrismaService();
    } else {
      logger.debug('Instance already exists, returning existing instance');
    }
    return PrismaService.instance;
  }

  public static async createInstance(): Promise<PrismaService> {
    logger.debug('Connecting to the database...');
    const instance = new PrismaService();
    await instance
      .$connect()
      .then(() => logger.debug('Successfully connected to the database'))
      .catch(e => logger.error('Error connecting to the database: %s', e));
    return instance;
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.$queryRaw`SELECT now()`;
      logger.debug('Connection test passed.');
      return true;
    } catch (error) {
      logger.error('❌ Failed to connect to the database: %s', error);
      return false;
    }
  }

  async disconnect() {
    await this.$disconnect();
    logger.debug('Successfully disconnected from the database');
  }
}
