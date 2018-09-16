import  React, { Component }  from 'react'
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


const Btn = styled.button `
  color: ${props => props.primary ? '#fff' : '#000'};
  background-color: ${props => props.primary ? '#ffbc00' : '#d2d0d0'};
  border: none;
  padding: ${props => props.bigButton ? '15px 30px' : '10px 20px'};
  font-size: ${props => props.bigButton ? '1.2em' : '0.8em'};
  border-radius: 5px;
  
  ${props => props.active && css `
    color: #000
  `}
  
`

class Button extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: this.props.active
    }

    this.handleActiveState = this.handleActiveState.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (event) => {
    this.handleActiveState(this.props.active)
  }

  handleChange = (event) => {
    if (this.props.onChange) {
      this.props.onChange(event)
      if (this.props.active) {
        this.handleActiveState(this.props.active)
      }
    }
  }

  handleActiveState = (status) => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <Btn primary={this.props.primary} bigButton={this.props.bigButton} active={this.state.active} onClick={this.handleClick} onChange={this.handleChange}>
        {this.props.text}
      </Btn>
    )
  }

}


Button.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  bigButton: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
}

export default Button