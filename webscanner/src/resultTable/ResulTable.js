import React, { Component } from 'react';
import ResultItem from "./resultItem/ResultItem";
import styled from 'styled-components';
import Button_old from "../assets/Button_old";
import Button from "../assets/Button";

const ResultBody = styled.div`
  padding: 0 20px;
`

const ShowButton = styled.button`
  width: 100%;
  padding: 0 20px;
  
`

class ResulTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showResult: false,
    }

    this.showResult = this.showResult.bind(this);

  }

  showResult (event) {
    event.preventDefault();

    this.setState({
      showResult: !this.state.showResult,
    });
  }

  render() {

    if (this.props.data.length) {
      const {data} = this.props

      const resultItems = data.map((item, index) =>
        <ResultItem key={index} value={item}/>
      )

      return (
        <ResultBody className="">
          <div className="showResult">
            <Button_old value={'show'} onClick={this.showResult} />
            {this.state.showResult ? resultItems : null}
          </div>
        </ResultBody>
      );
    } else {
      return null
    }
  }
}

export default ResulTable;
