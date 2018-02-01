import React from "react"
import { Route, Link } from "react-router-dom"
import ListComments from "./listcomments"
import AddComment from "./addcomment"

const Comments = ({ state, getOneComments, getAddComment, subAddComment }) => {
  const getComments = props => {
    const { link_id } = props.match.params
    return (
      <ListComments
        state={state}
        getOneComments={getOneComments}
        link_id={link_id}
      />
    )
  }

  const addComment = props => {
    const { link_id } = props.match.params
    return (
      <div>
        <ListComments
          state={state}
          getOneComments={getOneComments}
          link_id={link_id}
        />
        <AddComment
          link_id={link_id}
          state={state}
          getAddComment={getAddComment}
          subAddComment={subAddComment}
        />
      </div>
    )
  }

  const commentAdded = props => {
    const { link_id } = props.match.params
    return (
      <div>
        <p>Comment Added</p>
        <Link to={`/comments/${link_id}/all`}>Back</Link>
      </div>
    )
  }

  return (
    <div>
      <Route path="/comments/:link_id/all" render={getComments} />
      <Route path="/comments/:link_id/new" render={addComment} />
      <Route path="/comments/:link_id/added" render={commentAdded} />
    </div>
  )
}

export default Comments
