import React from 'react';
import { connect } from 'react-redux';
import Comments from '../components/comments/comments'

class CommentsContainer extends React.Component {

  getOneComments = (link_id) => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ONE_C", link_id: link_id});
  };

  getAddComment = (inputValue, link_id) => {
    const { dispatch } = this.props;
    dispatch({ type: "ADD_ONE_C", inputValue: inputValue, link_id: link_id});
  };

  subAddComment = (link_id) => {
    const { dispatch } = this.props;
    dispatch({ type: "SUB_ONE_C", link_id: link_id});
  };

  render() {
    const { comments } = this.props;

    return (
      <Comments
        state={comments}
        getOneComments={this.getOneComments}
        getAddComment={this.getAddComment}
        subAddComment={this.subAddComment}
      />
    )
  }
}

export default connect(state => state)(CommentsContainer);
