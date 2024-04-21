class HttpException extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

/**
 * The HyperText Transfer Protocol (HTTP) 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
class BadRequest extends HttpException {
  constructor(message: string) {
    super(message, 400);
  }
}

/**
 * The HTTP 401 Unauthorized client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.
 */
class Unauthorized extends HttpException {
  constructor(message: string) {
    super(message, 401);
  }
}

/**
 * The HTTP 403 Forbidden client error status response code indicates that the server understood the request but refuses to authorize it.
 */
class Forbidden extends HttpException {
  constructor(message: string) {
    super(message, 403);
  }
}

/**
 * The HTTP 404 Not Found client error response code indicates that the server can't find the requested resource.
 */
class NotFound extends HttpException {
  constructor(message: string) {
    super(message, 404);
  }
}

/**
 * The HTTP 409 Conflict response status code indicates a request conflict with current state of the target resource.
 */
class Conflict extends HttpException {
  constructor(message: string) {
    super(message, 409);
  }
}

/**
 * The HyperText Transfer Protocol (HTTP) 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
 */
class InternalServerError extends HttpException {
  constructor(message: string) {
    super(message, 500);
  }
}

/**
 * The HyperText Transfer Protocol (HTTP) 501 Not Implemented server error response code means that the server does not support the functionality required to fulfill the request.
 */
class NotImplemented extends HttpException {
  constructor(message: string) {
    super(message, 501);
  }
}

/**
 * Custom error throws a statusCode from the API requested.
 */
class CustomError extends HttpException {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}

export {
  HttpException,
  BadRequest,
  NotFound,
  Conflict,
  InternalServerError,
  Forbidden,
  Unauthorized,
  CustomError,
  NotImplemented
};
