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
        <Link to={`/links/${item.id+1}`}>
          <li id={item.id+1}>
            {item.title}
          </li>
        </Link>
      )
    });

    return (
      <div>
        <Link to='/new'>Add A Link</Link>
        <ul>
          {allList}
        </ul>
      </div>
    )
  }
}

export default LinkList;
