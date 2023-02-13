export class Blog {
  id!: number;
  title!: string;
  author!: string;
  content!: string;
  compteurUP!: number;
  compteurDown!: number;
  information!: string;

  constructor(
    id: number,
    title: string,
    author: string,
    content: string,
    compteurUP: number,
    compteurDown: number,
    information: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.content = content;
    this.compteurUP = compteurUP;
    this.compteurDown = compteurDown;
    this.information = information;
  }
}
