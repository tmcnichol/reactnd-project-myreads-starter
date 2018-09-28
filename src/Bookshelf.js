import React from 'react'
import ListBooks from './ListBooks'

class Bookshelf extends React.Component {
  componentDidMount() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((bk, key) =>
                <ListBooks bookUpdate={this.props.bookUpdate} bk={bk} key={key} />
              )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf
