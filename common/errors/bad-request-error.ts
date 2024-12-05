import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  public statusCode: number = 400;
  public message: string;

  constructor(message: string) {
    super(message);
    this.message = message;

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  public serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.message }];
  }
}
