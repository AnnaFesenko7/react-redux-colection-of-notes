import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchTodos() {
  const response = await axios.get('/todos');
  return response.data;
}

// export async function fetchAuthorById(id) {
//   const response = await axios.get(`/authors/${id}?_embed=books`);
//   return response.data;
// }

// export async function fetchBooks() {
//   const response = await axios.get('/books');
//   return response.data;
// }

// export async function fetchBookById(bookId) {
//   const response = await axios.get(`/books/${bookId}?_expand=author`);
//   return response.data;
// }
