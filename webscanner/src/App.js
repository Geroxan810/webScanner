import React, { Component } from 'react';
import './App.css';
import DomainInput from "./domainInput/DomainInput";
import ResulTable from "./resultTable/ResulTable";
import Button_old from "./assets/Button_old";
import styled from 'styled-components';
import Container from './assets/Container'

// import config with urls
import jsonData from './config.json';
import Button from "./assets/Button";

const AppContainer = styled.div` 
  background-color: #ebebeb;
  height: 100vh;
`

const SearchZone = styled.div`
 margin: 10em;
 padding: 15px;
 display: flex;
 flex-direction: column;
 align-items: center;
`


let testData = []

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      domainName: '',
      urls: [],
      runTest: false,
    }

    this.setDomainName = this.setDomainName.bind(this)
    this.toggleClick = this.toggleClick.bind(this)
  }

  componentDidMount() {
    const loadData = () => JSON.parse(JSON.stringify(jsonData))
    this.setState({
      urls: loadData()
    })
  }

  setDomainName = (input) => {
    // remove any protocol and slash on end?
    input = input.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '')
    this.setState({
      domainName: input
    })
  }

  toggleClick = (runTest) => {
    this.setState({
      runTest: !runTest
    })

    if (runTest) {
      let url = this.state.urls.map((x)=>{
        return x.url
      });
      testData = url.map((data)=>{
        return '//' + this.state.domainName + '/' + data
      })
    }
  }

  render() {
    return (
      <AppContainer>
        <Container>
          <Button primary bigButton text={'btn test'}/>
          <SearchZone>
            <DomainInput onChangeInput={this.setDomainName} />
            <Button_old primary btnStatus={this.state.runTest} title='Analyze page' onToggleBtn={this.toggleClick}/>
          </SearchZone>
        </Container>

        <ResulTable data={testData}/>

      </AppContainer>
    );
  }
}

export default App;
