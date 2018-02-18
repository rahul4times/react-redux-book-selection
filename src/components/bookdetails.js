import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

class BookDetails extends Component{
  render(){

    const bookDetails = this.props.selectedBook ? this.props.selectedBook : "Loading...!";

    return(
      <Card>
        <CardBody>
          <CardTitle>Book Details</CardTitle>
          <CardSubtitle>Title: {bookDetails.title}</CardSubtitle>
          <CardText>Pages: {bookDetails.pages}</CardText>
        </CardBody>
      </Card>
    );
  }
}

function mapStateToProps(state){
  return{
    selectedBook: state.selectedBook
  }
}

export default connect(mapStateToProps, null)(BookDetails);
