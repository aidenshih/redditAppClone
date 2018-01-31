import React from 'react'

const AddComment = ({state, link_id, getAddComment, subAddComment}) => {
    
    const submit = e => {
        e.preventDefault()
        subAddComment(link_id)
    }
    
    return (
        <div>
            <form onSubmit={submit} >
                <input type='text' placeholder='Enter Comment Here' onChange={ function title (e) { getAddComment(e.target.value)}} value={state.comment}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddComment