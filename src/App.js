import React from 'react';
import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Questionnaire from './Questionnaire.js'

require('jsesc')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monthlyRate: 0,
      monthlyCosts: 0,
      costPerUser: 0,
      pricePerUser: 0,
    }

    this.handleFormChange = this.handleFormChange.bind(this)
  }

  async handleFormChange(result) {
    await this.setState({
      monthlyRate: result.monthlyRate,
      monthlyCosts: result.monthlyCosts,
      costPerUser: result.costPerUser,
      pricePerUser: result.pricePerUser,
    })
  }

  render() {
    return (
      <div className="App">
        <Jumbotron className="pb-0" style={{backgroundColor: '#fafafa'}}>
          <Row>
            <Col md={12} className="text-center">
              <img src="logo.png" width="300" alt="Pricegun logo" />
              <p>
                Estimate the minimum you should charge for your SaaS side project.
                <br />
                <small><i>No information leaves your computer.</i></small>
              </p>
            </Col>
          </Row>
        </Jumbotron>
        <Container>
          <Row>
            <Col md={6}>
              <Questionnaire onFormChange={this.handleFormChange} />
            </Col>
            <Col md={6} className="text-center">
              <h5>You should charge users at least</h5>
              <h1>${this.state.pricePerUser.toLocaleString(navigator.language, {minimumFractionDigits: 0, maximumFractionDigits: 0})} per month</h1>
              <h5>Explanation:</h5>
              Your rate: ${this.state.monthlyRate.toLocaleString(navigator.language, {minimumFractionDigits: 0, maximumFractionDigits: 0})} per month
              <br />
                Your project's costs: ${this.state.monthlyCosts.toLocaleString(navigator.language, {minimumFractionDigits: 0, maximumFractionDigits: 0})} per month
              <br />
                User cost: {this.state.costPerUser < 1 ?
                    "< $1 " :
                    `$${this.state.costPerUser.toLocaleString(navigator.language, {minimumFractionDigits: 0, maximumFractionDigits: 0})} `}
                per user per month
              <br />
              <br />
              <br />
              <p>
                <i>
                  <small>
                    This is an estimated minimum.<br />
                    You may want to charge more based on demand.<br />
                    Read <a href="https://amzn.to/2YEkAMu">How to Price Effectively</a> for more.
                  </small>
                </i>
              </p>
              <div className="mx-auto my-5">
                <small>
                  <i>by Ben Carlsson @ <a href="https://twos.dev">twos.dev</a></i>
                </small>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
