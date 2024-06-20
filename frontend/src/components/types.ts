export interface Book {
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
    title: string;
}
export interface ReadingListProps {
    readingList: Book[];
    removeBook: (book: Book) => void;
  }