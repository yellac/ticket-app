export abstract class CustomError extends Error {
  public abstract statusCode: number;

  constructor(message: string) {
    // For logging purpose only
    super(message);

    // When we are extending a built in class, we have to set the prototype explicitly
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  public abstract serializeErrors(): { message: string; field?: string }[];
}
