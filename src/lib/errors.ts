export class ApiError extends Error {
  readonly name = "ApiError";
  constructor(
    public message: string,
    public code: number,
    public endpoint: string,
    public details?: any,
    public original?: any
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      endpoint: this.endpoint,
      details: this.details,
    };
  }
}

export class ValidationError extends Error {
  constructor(message: string, public fields?: Record<string, string>) {
    super(message);
    this.name = "ValidationError";
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}
