import React from "react"
import { Route, Link, Switch } from "react-router-dom"
import LinksContainer from "../containers/linkscontainer"
import CommentsContainer from "../containers/commentscontainer"
import Home from "./home"
import "./App.css"
import Users from "./users/users"

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> <Link to="/links">All Memes</Link>{" "}
        <Link to="/users">User List</Link> {"  "}
        <Link to="/users/new">Add New User</Link> {"  "}
        <Link to="/users/login">Log In User</Link>{"  "}
      </nav>

      <h2>
        {" "}
        <span role="img" aria-label="emojis">
          💯🔥🙏👌 Meme-ddit 👌🙏🔥💯
        </span>{" "}
      </h2>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/links" component={LinksContainer} />
        <Route path="/comments" component={CommentsContainer} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  )
}

export default App
