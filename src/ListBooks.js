import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  componentDidMount() {
    console.log(this);
  }

  render() {
    let imageLinkss = this.props.bk.imageLinks && this.props.bk.imageLinks.thumbnail || '';
    console.log(imageLinkss);
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: 'url("${imageLinkss}")' }}>
            </div>
            <div className="book-shelf-changer">
              <select>
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
