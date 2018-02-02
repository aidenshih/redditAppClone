import React, { Component } from "react"
import { Redirect } from "react-router"

class AddComment extends Component {
  constructor() {
    super()
    this.state = {
      fireRedirect: false
    }
  }

  submit = e => {
    const { link_id, subAddComment } = this.props
    const { fireRedirect } = this.state
    e.preventDefault()
    subAddComment(link_id)
    this.setState({ fireRedirect: true })
  }

  render() {
    const { state, link_id, getAddComment } = this.props
    const { fireRedirect } = this.state
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            type="text"
            placeholder="Enter Comment Here"
            onChange={function title(e) {
              getAddComment(e.target.value, link_id)
            }}
            value={state.comment}
          />
          <button>Add</button>
        </form>
        {fireRedirect && <Redirect to={`/comments/${link_id}/all`} />}
      </div>
    )
  }
}

export default AddComment
