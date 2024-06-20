# Book Assignment View

## Description

The goal is to build a teacher-facing UI for assigning books to students. The application includes functionalities such as searching for books, adding books to a reading list, and viewing the reading list.

## Features

- Search for books by title.
- Display a list of books based on the search query.
- Add books to the reading list.
- View and manage the reading list.
- Responsive and user-friendly UI.

## Technologies Used

- React
- Material-UI
- Apollo Client
- GraphQL
- React Router

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Queenzy-Ongeye/bookView-assessment.git
   cd <repository-directory>
```
2. Install dependencies:

```bash
npm install
```
3. Start the backend server:

```bash
Copy code
cd src/backend
npm install
npm start
```
4. Start the frontend server:

```bash
Copy code
cd src/frontend
npm start
```
## Usage
Search for Books: Use the search bar at the top of the page to search for books by title.

Add Books to Reading List: Click the "Add to Reading List" button on any book card to add the book to your reading list. The button will change to "Book Added" and become disabled once the book is added.

View Reading List: Click the "View Reading List" button to navigate to the reading list page. Here you can see all the books you've added to your reading list and remove any book from the list.

## License
The project is [MIT licensed](LICENSE).