import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Book } from "./components/types";
import BookList from "./components/BookList";
import ReadingListPage from "./components/ReadingListPage";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [readingList, setReadingList] = useState<Book[]>([]);

  const addBook = (book: Book) => {
    if (!readingList.some((b) => book.title === book.title)) {
      setReadingList([...readingList, book]);
    }
  };

  const removeBook = (book: Book) => {
    setReadingList(readingList.filter((b) => b.title !== book.title));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                  backgroundImage: `url("/assets/image6.webp")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 3,
                  zIndex: 1,
                }}
              >
                <Typography variant="h3" gutterBottom>
                  The Book Assignment View
                </Typography>
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </Box>
              <Box my={2}>
                <BookList
                  addBook={addBook}
                  searchQuery={searchQuery}
                  readingList={readingList}
                />
              </Box>
            </>
          }
        />
        <Route
          path="/reading-list"
          element={
            <ReadingListPage
              readingList={readingList}
              removeBook={removeBook}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
