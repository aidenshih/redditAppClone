import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleLink extends Component {
  componentDidMount () {
    this.props.getSingleLink(this.props.id);
  }

  render () {
    const { state } = this.props;
    return (
      <div>
        <h3>{state.oneMeme.title}</h3>
        <a href={state.oneMeme.url} target="_blank">
          <p>
            Go to Site
          </p>
        </a>
        <Link to={`/comments/${this.props.id}/all`}>See Comments</Link>
      </div>
    );
  }
}

export default SingleLink;
