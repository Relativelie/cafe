export class HttpResponseError extends Error {
  constructor(private errorCode: number) {
    super();
    this.name = 'HttpResponseError';
    this.errorCode = errorCode;
  }

  get message(): string {
    if (this.message.length) {
      return `${this.message} Status code: ${this.errorCode}`;
    }
    return `Something went wrong... Status code: ${this.errorCode}`;
  }
}
