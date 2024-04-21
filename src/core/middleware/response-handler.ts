import { HttpException } from '../../core/models/http/http-exception';
import {  HttpStatusCode } from '../../core/models/http/http-status-code';

export async function responseHandler({
  statusCode,
  data
}: {
  statusCode: HttpStatusCode;
  data: any;
}) {
  return {
    statusCode,
    data: JSON.stringify(data)
  };
}

export function okResponse({ data }) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
}

export function errorResponse(error: HttpException) {
  console.error(error);
  return {
    statusCode: error?.statusCode || 500,
    headers: {
      'Content-Type': 'application/json'
    },
    body: error?.message || 'An error occurred'
  };
}
