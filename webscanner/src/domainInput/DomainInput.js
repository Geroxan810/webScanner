import React, { Component } from 'react';

class DomainInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput = (event) => {
    this.setState({
      text: event.target.value
    })

    this.props.onChangeInput(event.target.value)
  }

  render() {
    return (
      <div className="">
        <input type="text" value={this.state.text} onChange={this.handleInput}/>
      </div>
    );
  }
}

export default DomainInput;
