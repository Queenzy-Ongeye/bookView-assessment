import React from "react";
import {TextField} from "@mui/material";

const SearchBar = ({ searchQuery, setSearchQuery }: any) => {
  return (
    <TextField
      label="search books"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
          '& input': {
            color: 'white',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'white',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'white',
        },
      }}
    />
  );
};

export default SearchBar;
