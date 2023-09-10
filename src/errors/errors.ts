export class HttpResponseError extends Error {
  constructor(
    private statusCode: number,
    private statusText: string,
    private localizedMessage?: string | string[],
  ) {
    super();
    this.name = 'HttpResponseError';
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.localizedMessage = localizedMessage;
  }

  get message(): string {
    if (!!this.localizedMessage) {
      if (Array.isArray(this.localizedMessage)) {
        return `Ошибка валидации: ${this.localizedMessage.map((item) => `\n${item}`)}`;
      } else return this.localizedMessage;
    }
    return `Необработанная ошибка: ${this.statusText}, с кодом ${this.statusCode}`;
  }
}
