import React, { Component } from "react"

class New extends Component {
  render() {
    const { state, addSingleURL, addSingleTITLE, reset } = this.props
    return (
      <div>
        <form onSubmit={reset} >
          <input type="text" value={state.title} onChange={ function title (e) { addSingleTITLE(e.target.value)}} placeholder='TITLE' />
          <input type="text" value={state.url} onChange={ function url (e) { addSingleURL(e.target.value)}} placeholder='URL' />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default New
