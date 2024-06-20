import React from "react";
import ReadingList from "./ReadingList";
import { ReadingListProps } from "./types";
import { Container, Typography, Box, Button } from "@mui/material";

const ReadingListPage: React.FC<ReadingListProps> = ({
  readingList,
  removeBook,
}) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "300px",
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/image6.webp"
          })`,
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
        <Typography variant="h4" gutterBottom>
          Reading List
        </Typography>
      </Box>
      <Container>
        <Button href="/" variant="contained" color="primary">
          Back to Home
        </Button>
        <Box my={2}>
          <ReadingList readingList={readingList} removeBook={removeBook} />
        </Box>
      </Container>
    </>
  );
};

export default ReadingListPage;
