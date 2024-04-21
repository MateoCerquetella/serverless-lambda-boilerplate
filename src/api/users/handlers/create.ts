import { Context, Handler } from 'aws-lambda';

import { PrismaService } from '../../../prisma/prisma.service';
import { UsersController } from '../controller';
import { UsersService } from '../service';

export const handler: Handler = async (event: any, context: Context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const prisma = await PrismaService.createInstance();
    const service = new UsersService(prisma);
    const controller = new UsersController(service);

    try {
        const response = await controller.create(event, context);
        return response;
    } finally {
        await prisma.disconnect();
    }
};
