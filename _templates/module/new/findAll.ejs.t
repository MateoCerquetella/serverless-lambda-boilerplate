---
to: src/api/<%= h.inflection.dasherize(h.inflection.singularize(name)) %>/handlers/findAll.ts
---
import { Context, Handler } from 'aws-lambda';

<% const serviceName = h.inflection.classify(name) + 'Service'; %>
<% const controllerName = h.inflection.classify(name) + 'Controller'; %>
<% const variableName = h.inflection.camelize(name, true) + 'Service'; %>

import { <%= controllerName %> } from '../controller';
import { <%= serviceName %> } from '../service';
import { PrismaService } from 'prisma/prisma.service';

export const handler: Handler = async (event: any, context: Context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const prisma = await PrismaService.createInstance(event);
    const <%= variableName %> = new <%= serviceName %>(prismaService);
    const controller = new <%= controllerName %>(<%= variableName %>);
    try {
        const response = await controller.findAll(event, context);
        return response;
    } finally {
        await prisma.disconnect();
    }
};
