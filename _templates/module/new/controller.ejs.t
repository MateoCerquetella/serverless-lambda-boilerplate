---
to: src/api/<%= h.inflection.dasherize(h.inflection.singularize(name)) %>/controller.ts
---
import { Context } from 'aws-lambda';
import { errorResponse, okResponse } from '../../core/middleware/response-handler';

<% const serviceName = h.inflection.classify(name) + 'Service'; %>
<% const validatorName = h.inflection.classify(name) + 'Validator'; %>
<% const controllerName = h.inflection.classify(name) + 'Controller'; %>
<% const variableName = h.inflection.camelize(name, true) + 'Service'; %>

import { <%= serviceName %> } from './service';

export class <%= controllerName %> {
  <%= variableName %>: <%= serviceName %>;

  constructor(<%= variableName %>: <%= serviceName %>) {
    this.<%= variableName %> = <%= variableName %>;
  }

  async findAll(event, context: Context) {
    // Implement findAll logic here
    try {
      return okResponse({
        data: await this.<%= variableName %>.findAll(),
      });
    } catch (error) {
      return errorResponse(error);
    }
  };

  // Add more methods as needed...
}
