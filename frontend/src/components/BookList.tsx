import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Book } from "./types";
import { Link } from "react-router-dom";

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

interface BookListProps {
  addBook: (book: Book) => void;
  searchQuery: string;
  readingList: Book[];
}

const BookList: React.FC<BookListProps> = ({
  addBook,
  searchQuery,
  readingList,
}) => {
  const { loading, error, data } = useQuery<{ books: Book[] }>(GET_BOOKS);
  const [addedBooks, setAddedBooks] = useState<Set<string>>(new Set());

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleAddBook = (book: Book) => {
    addBook(book);
    setAddedBooks((prev) => new Set(prev).add(book.title));
  };

  const filteredBooks = data?.books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Grid container spacing={3}>
      {filteredBooks?.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.title}>
          <Card sx={{ maxWidth: 345, marginTop: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={process.env.PUBLIC_URL + book.coverPhotoURL}
              title={book.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Author: {book.author} <br /> Level: {book.readingLevel}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                onClick={() => handleAddBook(book)}
                disabled={addedBooks.has(book.title)}
              >
                {addedBooks.has(book.title)
                  ? "Book Added"
                  : "Add to Reading List"}
              </Button>
              {addedBooks.has(book.title) && (
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/reading-list"
                >
                  View Reading List
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
