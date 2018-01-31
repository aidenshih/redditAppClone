import React from 'react';
import { connect } from 'react-redux';
import Links from '../components/links/links'

class LinksContainer extends React.Component {
  getAllLinks = () => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ALL" });
  };

  getSingleLink = (id) => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ONE", id: id });
  }

  addSingleLink = (url) => {
    const { dispatch } = this.props;
    dispatch({ type: "ADD_ONE", url: url });
  }

  render() {
    const { links } = this.props;

    return (
      <Links
        state={links}
        getAllLinks={this.getAllLinks}
        getSingleLink={this.getSingleLink}
        addSingleLink={this.addSingleLink}
      />
    );
  }
}

export default connect(state => state)(LinksContainer);
