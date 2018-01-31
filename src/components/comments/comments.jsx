import React from 'react'
import { Route } from 'react-router-dom';
import ListComments from './listcomments'
import AddComment from './addcomment'

const Comments = ({state, getOneComments, getAddComment, subAddComment}) => {
    console.log(state)

    const getComments = (props) => {
        const { link_id } = props.match.params
        return <ListComments state={state} getOneComments={getOneComments} link_id={link_id}/>
    }

    const addComment = (props) => {
        const { link_id } = props.match.params
        return <AddComment link_id={link_id} state={state} getAddComment={getAddComment} subAddComment={subAddComment}/>
    }

    return (
        <div>
            <Route path='/comments/:link_id' render={getComments}/>
            <Route path='/comments/:link_id/new' render={addComment}/>
        </div>
    )
}

export default Comments