import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-css';
import Boards from './components/Boards'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Switch>
            <Route exact path="/" component={Boards} />
            <Route exact path="/boards" component={Boards} />
            {/* <Route exact path="/boards/:id" component={Board} /> */}
          </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;
