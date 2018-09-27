import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books : []
    }
  }

componentDidMount() {
  BooksAPI.getAll().then(books => {
    this.setState({ books })
  })
}

bookUpdate = (book, shelf) => {
  BooksAPI.update(book, shelf).then(input => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(bk => bk.id !== book.id).concat([book])
    }))
  })
}

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              <Bookshelf bookUpdate={this.bookUpdate} name="Currently Reading" books={this.state.books.filter(bk => bk.shelf === "currentlyReading")} />
              <Bookshelf bookUpdate={this.bookUpdate} name="Want To Read" books={this.state.books.filter(bk => bk.shelf === "wantToRead")} />
              <Bookshelf bookUpdate={this.bookUpdate} name="Read" books={this.state.books.filter(bk => bk.shelf === "read")} />

            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}

  export default HomePage
