import React from "react"
import { connect } from "react-redux"
import New from "../components/new/new"

class NewContainer extends React.Component {
  addSingleURL = url => {
    const { dispatch } = this.props
    dispatch({ type: "ADD_URL", url: url })
  }

  addSingleTITLE = title => {
    const { dispatch } = this.props
    dispatch({ type: "ADD_TITLE", title: title })
  }

  reset = e => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch({ type: "RESET_ALL" })
  }

  render() {
    const { links } = this.props

    return (
      <New
        state={links}
        addSingleURL={this.addSingleURL}
        reset={this.reset}
        addSingleTITLE={this.addSingleTITLE}
      />
    )
  }
}

export default connect(state => state)(NewContainer)
