import React, { Component } from 'react';
import styled from 'styled-components';


const Btn = styled.button`
  background-color: #ffbc00;    
  padding: 20px 25px;
  border-radius: 5px;
  border: none;
  font-size: 0.9em;
  cursor: pointer;
  transition: box-shadow 0.3s ease
  &:hover {
    box-shadow: 3px 3px 5px 1px #b9b9b9;
  }
`;

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
      <Btn onClick={this.toggleClick}>
        {this.props.title} - {btnStatus ? 'deactive': 'active'}
      </Btn>
    );
  }
}

export default Button;
