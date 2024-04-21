---
to: src/api/<%= h.inflection.dasherize(h.inflection.singularize(name)) %>/service.ts
---
import { PrismaService } from '../../prisma/prisma.service';

<% const serviceName = h.inflection.classify(name) + 'Service'; %>
<% const modelName = h.inflection.classify(h.inflection.singularize(name)); %>

export class <%= serviceName %> {
  prisma: any;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  async findAll() {
    // Implement findAll logic here
    return await this.prisma.<%= modelName %>.findMany({});
  }

  // Add more CRUD methods as needed...
}
