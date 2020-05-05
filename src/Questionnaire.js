import React from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default class Questionnaire extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoursPerWeek: 10,
      hostingDollarsPerMonthFixed: 100,
      hostingDollarsPerMonthVariable: 100,
      conversionRate: 0.5,
      opportunityCostDollarsPerYear: 100000,
      margin: 0.2,
      numUsers: 1000,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChange({target: ''})
  }

  async handleChange(event) {
    let val
    switch (event.target.name) {
      case 'margin':
      val = Number(event.target.value) / 100
      break
      case 'conversionRate':
      val = Number(event.target.value) / 100
      break
      default:
      val = Number(event.target.value)
    }

    await this.setState({
      [event.target.name]: val
    })

    const monthlyRate = (this.state.opportunityCostDollarsPerYear / 12) * (this.state.hoursPerWeek / 40)
    const monthlyCosts = this.state.hostingDollarsPerMonthFixed + (this.state.hostingDollarsPerMonthVariable / 1000 * this.state.numUsers)
    const costPerUser = (monthlyRate + monthlyCosts) / this.state.numUsers
    const pricePerUser = costPerUser * (1 / this.state.conversionRate) * (1 + this.state.margin)

    this.props.onFormChange({
      monthlyRate: Math.floor(monthlyRate),
      monthlyCosts: Math.floor(monthlyCosts),
      costPerUser: Math.floor(costPerUser),
      pricePerUser: Math.floor(pricePerUser),
    })
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>
            How many hours per week do you work on it?
          </Form.Label>
          <Form.Control type="text" placeholder="10" name="hoursPerWeek" onChange={this.handleChange} autoFocus />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            What are your <b>fixed</b> costs?
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="text" placeholder="100" name="hostingDollarsPerMonthFixed" onChange={this.handleChange} />
            <InputGroup.Append>
              <InputGroup.Text>per month</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Form.Text>i.e. how much would it cost you to stay online even with zero users?</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            What are your <b>variable</b> costs, per 1k users?
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="text" placeholder="100" name="hostingDollarsPerMonthVariable" onChange={this.handleChange} />
            <InputGroup.Append>
              <InputGroup.Text>per month</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            What percentage of users will pay?
          </Form.Label>
          <InputGroup>
            <Form.Control type="text" placeholder="1" name="conversionRate" onChange={this.handleChange}  />
            <InputGroup.Append>
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            How much do you make at your traditional job?
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="text" placeholder="100000" name="opportunityCostDollarsPerYear" onChange={this.handleChange}  />
            <InputGroup.Append>
              <InputGroup.Text>per year</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            What margins do you want?
          </Form.Label>
          <InputGroup>
            <Form.Control type="text" placeholder="20" name="margin" onChange={this.handleChange}  />
            <InputGroup.Append>
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            How many users will you have?
          </Form.Label>
          <InputGroup>
            <Form.Control type="text" placeholder="1000" name="numUsers" onChange={this.handleChange}  />
            <InputGroup.Append>
              <InputGroup.Text>users</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Form.Text>Whether paying or non-paying.</Form.Text>
        </Form.Group>
      </Form>
    )
  }
}
