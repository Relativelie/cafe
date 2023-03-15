export class HttpResponseError extends Error {
  constructor(
    private statusCode: number,
    private statusText: string,
    private localizedMessage?: string | string[],
    private timestamp?: string,
  ) {
    super();
    this.name = "HttpResponseError";
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.localizedMessage = localizedMessage;
    this.timestamp = timestamp;
  }

  get message(): string {
    if (!!this.localizedMessage) {
      if (Array.isArray(this.localizedMessage)) {
        return `Ошибка валидации: ${this.localizedMessage.map((item) => `\n${item}`)}`;
      } else return this.localizedMessage;
    }
    return `Необработанная ошибка: ${this.statusText}, с кодом ${this.statusCode}`;
  }

  get errorTimestamp(): string {
    if (!!this.timestamp) return this.timestamp;
    return `Метка времени отсутствует`;
  }
}
