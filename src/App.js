
import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './features/styles/App.css';

import Actors from './features/list/Actors';
import Movies from './features/list/Movies';
import StoryboardsGallery from './features/list/StoryboardsGallery';
import ConceptArtGallery from './features/list/ConceptArtGallery';

const App = props => {
  return (
    <Router className="App-header">
      <div>
        <Navbar className="matrixNavBar"
          variant="matrix"
          expand="md">
          <Navbar.Brand href="/actors">MatrixDB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto">
              <NavItem eventkey={1} href="/actors">
                <Nav.Link as={Link} to="/actors">Actors</Nav.Link>
              </NavItem>

              <NavItem eventkey={2} href="/movies">
                <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
              </NavItem>
              <NavItem eventkey={3} href="/storyboards">
                <Nav.Link as={Link} to="/storyboards">Storyboards</Nav.Link>
              </NavItem>
              <NavItem eventkey={4} href="/conceptart">
                <Nav.Link as={Link} to="/conceptart">Concept Art</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/actors">
            <Actors />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/storyboards">
            <StoryboardsGallery images={props.storyboards} />
          </Route>
          <Route path="/conceptart">
            <ConceptArtGallery images={props.conceptArt} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default hot(App);
