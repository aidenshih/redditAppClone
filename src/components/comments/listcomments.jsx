import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ListComments extends Component {

    componentDidMount(){
        const {getOneComments, link_id} = this.props
        getOneComments(link_id)
        console.log(link_id)
    }

    render () {
        const {state, link_id} = this.props
        let show = state.showComments.map( (comment, i) => {
            return <li key={i}>{comment}</li>
            })
        

        return (
            <div>
                <Link to={`/comments/${link_id}/new`}>Add Comment</Link>
                <ul>
                    {show}
                </ul>
            </div>
        )
    } 
}

export default ListComments