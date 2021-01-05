import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home';
import { PC } from './components/pc';
import { XBOX } from './components/xbox';
import { PS } from './components/ps';
import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';

//This is my App.js method which controls the Navbar and the routh paths for my React App
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">The Game</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/ps">PS</Nav.Link>
              <Nav.Link href="/xbox">Xbox</Nav.Link>
              <Nav.Link href="/pc">PC</Nav.Link>
              <Nav.Link href="/read">Wishlist</Nav.Link>
              <Nav.Link href="/create">Add to Library</Nav.Link>
            </Nav>
          </Navbar>

          <br />

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/pc' component={PC} />
            <Route path='/xbox' component={XBOX} />
            <Route path='/ps' component={PS} />
            <Route path='/create' component={Create} />
            <Route path='/read' component={Read} />
            <Route path='/edit/:id' component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
