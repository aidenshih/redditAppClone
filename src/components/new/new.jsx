import React, { Component } from "react"
import { Redirect } from 'react-router'

class New extends Component {
  constructor(){
    super()
    this.state = {
      fireRedirect: false
    }
  }

  helper = (reset) => {
    this.setState({
      fireRedirect: true
    }, reset)
  }
  render() {
    const { state, addSingleURL, addSingleTITLE, reset } = this.props
    const {fireRedirect} = this.state
    return (
      <div>
        <form onSubmit={this.helper} >
          <input type="text" value={state.title} onChange={ function title (e) { addSingleTITLE(e.target.value)}} placeholder='TITLE' />
          <input type="text" value={state.url} onChange={ function url (e) { addSingleURL(e.target.value)}} placeholder='URL' />
          <button>Add</button>
        </form>
        {fireRedirect && (
          <Redirect to='/links'/>
        ) }
      </div>
    )
  }
}

export default New
