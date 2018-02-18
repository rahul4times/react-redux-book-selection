import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/header';
import BookList from './components/booklist';
import BookDetails from './components/bookdetails';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs="12" sm="5">
              <br/>
              <BookList />
            </Col>
            <Col xs="12" sm="7">
              <br/>
              <BookDetails />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
