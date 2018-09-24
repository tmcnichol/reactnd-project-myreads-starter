import React from 'react'
import ListBooks from './ListBooks'


class Bookshelf extends React.Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <ListBooks />
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf
