export interface Books {
  books: Book[];
}

export interface Book {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
}
