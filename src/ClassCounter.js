import React, { Component } from 'react'

 class ClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    
      count: 0
    }
  }
  incrementCount =() => {
    this.setState({
      count : this.state.count + 5
    })
  
}
decrementCount =() => {
  this.setState({
    count : this.state.count - 5
  })

 }
  render() {
    return (
      <div>
        {/* <button
        onClick ={this.incrementCount}> + count {this.state.count}
        </button>
        <button
        onClick ={this.decrementCount}> - count {this.state.count}
        </button> */}
      </div>

    )
  }
}

export default ClassCounter