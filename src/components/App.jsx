import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LinksContainer from '../containers/linkscontainer';
import CommentsContainer from '../containers/commentscontainer';
import NewContainer from '../containers/newcontainer';
import Home from './home';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link> {" "}
        <Link to='/links'>All Links</Link>{" "}
        <Link to='/new'>Add New</Link>
      </nav>

      <h2> <span role="img" aria-label="emojis">💯🔥🙏👌 Meme-ddit 👌🙏🔥💯</span> </h2>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/links' component={LinksContainer} />
        <Route path='/new' component={NewContainer} />
        <Route path='/comments' component={CommentsContainer} />
      </Switch>
    </div>
  );
}

export default App;
