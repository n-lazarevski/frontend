import './App.css';
import { Component } from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header/header'
import Categories from './components/Categories/categories'
import Books from './components/Books/BookList/books'
import BookAdd from './components/Books/BookAdd/bookAdd'
import BookEdit from './components/Books/BookEdit/bookEdit'
import LibraryService from './repository/libraryRepository';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      authors: [],
      categories: [],
      coutries: [],
      selectedBook: {}
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <main>
          <div className="container">
            <Routes>
              <Route path={"/books/add"} element={<BookAdd
                authors={this.state.authors}
                categories={this.state.categories}
                onAddBook={this.addBook} />} />
              <Route path={"/books/edit/:id"} element={<BookEdit
                authors={this.state.authors}
                categories={this.state.categories}
                onEditBook={this.editBook}
                book={this.state.selectedBook} />} />
              <Route path={"/books"} element={<Books
                books={this.state.books}
                onMark={this.markBook}
                onEdit={this.getBook}
                onDelete={this.deleteBook} />} />
              <Route path={"/categories"} element={<Categories categories={this.state.categories} />} />
              <Route path="*" element={<Navigate to="/books" replace />} />
            </Routes>
          </div>
        </main>
      </Router>
    );
  }

  componentDidMount() {
    this.loadBooks()
    this.loadAuthors()
    this.loadCategories()
  }

  loadBooks = () => {
    LibraryService.fetchBooks()
      .then((data) => {
        this.setState({
          books: data.data
        })
      })
  }

  loadAuthors = () => {
    LibraryService.fetchAuthors()
      .then((data) => {
        this.setState({
          authors: data.data
        })
      })
  }

  loadCategories = () => {
    LibraryService.fetchCategories()
      .then((data) => {
        this.setState({
          categories: data.data
        })
      })
  }

  getBook = (id) => {
    LibraryService.getBook(id)
      .then((data) => {
        this.setState({
          selectedBook: data.data
        })
      })
  }

  addBook = (name, category, author, availableCopies) => {
    LibraryService.addBook(name, category, author, availableCopies)
      .then(() => {
        this.loadBooks()
      })
  }

  editBook = (id, name, category, author, availableCopies) => {
    LibraryService.editBook(id, name, category, author, availableCopies)
      .then(() => {
        this.loadBooks()
      })
  }

  markBook = (id) => {
    LibraryService.markBook(id)
      .then(() => {
        this.loadBooks()
      })
  }

  deleteBook = (id) => {
    LibraryService.deleteBook(id)
      .then(() => {
        this.loadBooks()
      })
  }



}

export default App;
