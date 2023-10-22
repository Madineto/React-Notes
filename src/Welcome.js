import React, { Component } from 'react'

 class Welcome extends Component {
  render() {
    return (
      <div>
      <h1>
      Welcome to a New Week{this.props.name} who likes to  {this.props.hobby} </h1>
      </div>
    )
  }
}

export default Welcome