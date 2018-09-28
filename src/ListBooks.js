import React, { Component } from 'react'
import HomePage from './HomePage'
import SearchPage from './SearchPage'

class ListBooks extends Component {
  render() {
    let imageURL = this.props.bk.imageLinks && this.props.bk.imageLinks.thumbnail;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: 'url("${imageURL}")' }}>
            </div>
            <div className="book-shelf-changer">
              <select value={this.props.bk.shelf} onChange={(event) => {
                this.props.bookUpdate(this.props.bk, event.target.value) }}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.bk.title}</div>
          <div className="book-authors">{this.props.bk.authors}</div>
        </div>
      </li>
    )
  }
}

export default ListBooks
