import React, { Component } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: 1.3em;
`

const Input = styled.input`
  border-radius: 10px;
  font-size: 25px;
  padding: 15px 25px;
  background: #fff;
  color: #3b3b3b;
  border: none;
  box-shadow: 2px 5px 8px 1px #ababab9c;
`;

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
      <InputWrapper>
        <Input type="text" value={this.state.text} onChange={this.handleInput} placeholder='example.com' />
      </InputWrapper>
    );
  }
}

export default DomainInput;
