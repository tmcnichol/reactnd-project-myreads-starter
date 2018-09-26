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

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              <Bookshelf name="Currently Reading" books={this.state.books.filter(bk => bk.shelf === "currentlyReading")} />
              <Bookshelf name="Want To Read" books={this.state.books.filter(bk => bk.shelf === "wantToRead")} />
              <Bookshelf name="Read" books={this.state.books.filter(bk => bk.shelf === "read")} />

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
