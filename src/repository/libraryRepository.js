import axios from '../custom-axios/axios';

const LibraryService = {
    fetchBooks: () => {
        return axios.get("/books")
    },

    fetchAuthors: () => {
        return axios.get("/authors")
    },

    fetchCategories: () => {
        return axios.get("/books/categories")
    },

    getBook: (id) => {
        return axios.get(`/books/${id}`)
    },

    addBook: (name, category, author, availableCopies) => {
        return axios.post("/books/add", {
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        })
    },

    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        })
    },

    markBook: (id) => {
        return axios.put(`/books/mark/${id}`)
    },

    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`)
    },

    addAuthor: (name, surname, country) => {
        return axios.post("/authors/add", {
            "name": name,
            "surname": surname,
            "country": country
        })
    }
}

export default LibraryService;