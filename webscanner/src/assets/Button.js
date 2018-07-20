import React, { Component } from 'react';

class Button extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }

    this.toggleClick = this.toggleClick.bind(this)
  }

  toggleClick = () => {
    const currentState = this.state.isActive
    this.setState ({
      isActive: !currentState
    })
    this.props.onToggleBtn(currentState)
  }

  render() {
    const { btnStatus } = this.props

    return (
      <button onClick={this.toggleClick}>
        {this.props.title} - {btnStatus ? 'deactive': 'active'}
      </button>
    );
  }
}

export default Button;
