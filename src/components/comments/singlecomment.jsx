import React from 'react'

const SingleComment = ({comment, i}) => {
    return (
        <li key={i}>
            {comment}
        </li>
    )
}

export default SingleComment