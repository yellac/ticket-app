import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  public statusCode = 500;
  public reason = "Failed to connect database";

  constructor() {
    super("Failed to connect database");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  public serializeErrors() {
    return [{ message: this.reason }];
  }
}
