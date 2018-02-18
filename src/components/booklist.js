import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/selection';

import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class BookList extends Component {
  render(){
    const bookList = this.props.books.map((book, i) => {
      return(
        <ListGroupItem key={i} onClick={()=>this.props.selectBook(book)}>
          { book.title }
        </ListGroupItem>
      )
    })
  
    return(
      <Card>
        <CardBody>
          <CardTitle>Books</CardTitle>
          <ListGroup>
            { bookList }
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}
function mapStateToProps(state){
  return{
    books: state.books
  }
}

function mapDispatchToProps(dispatch){
  return{
    selectBook: bindActionCreators(selectBook, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
