export class Description {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}

export type Offer = {
  id: number;
  title: string;
  description: Array<Description>;
  poster: string;
  endingQuote: string;
};
