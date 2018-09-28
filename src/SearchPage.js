import React from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import HomePage from './HomePage'
import * as BooksAPI from './BooksAPI'

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books : [],
      searchReturn: [],
      search: ''
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

  updateSearch = (search) => {
    this.setState({ search }, this.searchSubmit);
  }

  searchSubmit () {
    if(this.state.search === '') {
      return this.setState({ searchReturn: [] });
    }
    BooksAPI.search(this.state.search.trim()).then(results => {
      if(results.error) {
        return this.setState({ searchReturn: [] });
      }
      else {
        results.forEach(book => {
          let check = this.state.books.filter(bk => bk.id === book.id);
          if(check[0]) {
            book.shelf = check[0].shelf;
        }
      });
        return this.setState({ searchReturn: results });
      }

    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">

            <input type="text" placeholder="Search by title or author" value={this.state.search} onChange={(event) => this.updateSearch(event.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchReturn.map((bk, key) => <ListBooks bookUpdate={this.bookUpdate} key={key} bk={bk} />)}
          </ol>

        </div>
      </div>
    )
  }
}

  export default SearchPage
