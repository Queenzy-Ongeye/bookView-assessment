import React from "react";
import {
  Grid,
  CardMedia,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import { ReadingListProps } from "./types";


const ReadingList: React.FC<ReadingListProps> = ({
  readingList,
  removeBook,
}) => (
  <Grid container spacing={2}>
    {readingList.length === 0 ? (
      <Typography
        variant="h6"
        sx={{ width: "100%", textAlign: "center", marginTop: 2 }}
      >
        No books available
      </Typography>
    ) : (
      readingList.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.title}>
          <Card sx={{ maxWidth: 345, marginTop: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={book.coverPhotoURL}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
              <Typography
                variant="body2"
                borderColor="primary"
                color="text.secondary"
              >
                Author: {book.author} <br></br> Level: {book.readingLevel}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                onClick={() => removeBook(book)}
                sx={{color:"#dc004e"}}
              >
                Remove from Reading List
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))
    )}
  </Grid>
);

export default ReadingList;
