import { BadRequest } from 'core/models/http/http-exception';

import { errorResponse, okResponse } from '../../core/middleware/response-handler';
import { UsersService } from './service';
import {
  idSchema, userCreateSchema, UserCreateType, userUpdateSchema, UserUpdateType
} from './validator';

export class UsersController {
  usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }


  async create(event: any) {
    try {
      const user: UserCreateType = JSON.parse(event.body);

      await this.handleValidation(userCreateSchema, user);

      const data = await this.usersService.create(user);

      return okResponse({ data });
    } catch (error) {
      return errorResponse(error);
    }
  }


  async delete(event: any) {
    try {
      const { id } = event.pathParameters || {};

      await this.handleValidation(idSchema, { id });

      const data = await this.usersService.delete(id);
      return okResponse({ data });
    } catch (error) {
      return errorResponse(error);
    }
  }


  async update(event: any) {
    try {
      const { id } = event.pathParameters || {};
      const user: UserUpdateType = JSON.parse(event.body);

      await this.handleValidation(idSchema, { id });
      await this.handleValidation(userUpdateSchema, user);

      const data = await this.usersService.update(id, user);
      return okResponse({ data });
    } catch (error) {
      return errorResponse(error);
    }
  }

  async findAll(event: any) {
    try {
      const data = await this.usersService.findAll();
      return okResponse({ data });
    } catch (error) {
      return errorResponse(error);
    }
  }

  async findOne(event: any) {
    try {
      const { id } = event.pathParameters || {};

      await this.handleValidation(idSchema, { id });

      const data = await this.usersService.findOne(id);
      return okResponse({ data });
    } catch (error) {
      return errorResponse(error);
    }
  }

  async handleValidation(schema, data) {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      throw new BadRequest(validationResult.error.message);
    }
    return validationResult.data;
  }

}
