import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient {
  private static instance: PrismaService | null = null;

  private constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  public static getInstance(): PrismaService {
    console.log('Attempting to get instance of PrismaService');
    if (!PrismaService.instance) {
      console.log('No instance found, creating new one');
      PrismaService.instance = new PrismaService();
    } else {
      console.log('Instance already exists, returning existing instance');
    }
    return PrismaService.instance;
  }

  public static async createInstance(): Promise<PrismaService> {
    console.log('🐘', 'Connecting to the database...');
    const instance = new PrismaService();
    await instance.$connect()
      .then(() => console.log('🐘', 'Successfully connected to the database'))
      .catch(e => console.log('❌', 'Error connecting to the database:', e));
    return instance;
  }

  async disconnect() {
    await this.$disconnect();
    console.log('🐘', 'Successfully disconnected from the database');
  }
}
