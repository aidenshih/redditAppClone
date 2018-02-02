import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkList extends Component {
  componentDidMount() {
    this.props.getAllLinks();
  }

  render() {
    const { state } = this.props;

    const allList = state.allMemes.map((item) => {
      return (
        <Link to={`/links/s/${item.id}`}>
          <li id={item.id}>
            {item.title}
          </li>
        </Link>
      )
    });

    return (
      <div>
        <Link to='/links/new'>Add A Link</Link>
        <ul>
          {allList}
        </ul>
      </div>
    )
  }
}

export default LinkList;
