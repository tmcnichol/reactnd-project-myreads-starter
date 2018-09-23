import React, { Component } from 'react'

class ListBooks extends Component {
  render() {

    return (
      <ol className='list-books'>
        {this.props.books.map((book) => (
          <li key={book.title}>
            <div className="book-top">
            <img className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(${book.bookCoverURL})'  }} alt=""/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
          </li>
        ))}
      </ol>
    )
  }
}

export default ListBooks
