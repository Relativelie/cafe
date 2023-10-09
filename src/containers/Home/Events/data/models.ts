export class EventContent {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;

  constructor({
    id,
    title,
    description,
    date,
    image,
  }: {
    id: number;
    title: string;
    description: string;
    date: string;
    image: string;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.image = image;
  }
}
