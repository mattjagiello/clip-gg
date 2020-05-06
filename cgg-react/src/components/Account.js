import React, { Component } from 'react';

class Account extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      name: '',
      twitch_username: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('create user here');

    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
          name: this.state.name,
          git_username: this.state.git_username,
          git_id: this.state.git_id
        }
      })
    })
      .then(res => res.json())
      // .then(json => console.log(json.jwt))
      .then(json => {
        this.props.sendToken(json.jwt)
      })
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('login here');

    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        }
      })
    })
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(json => this.props.sendToken(json.jwt))
  }

  render() {
    return <div id="login-page">

      <h2>Existing User?</h2>
      <form onSubmit={this.handleLoginSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type="text"
          name="email"
          onChange={event => this.handleChange(event)}
          value={this.state.email}
        />

        <label htmlFor='password'>Password</label>
        <input
          type="text"
          name="password"
          onChange={event => this.handleChange(event)}
          value={this.state.password}
        />

        <button type="submit">Login</button>
        <input type="button" onClick={this.props.login} />
      </form>

        <h2>Create Account</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            type="text"
            name="email"
            onChange={event => this.handleChange(event)}
            value={this.state.email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type="text"
            name="password"
            onChange={event => this.handleChange(event)}
            value={this.state.password}
          />

          <label htmlFor='password_confirmation'>Confirm Password</label>
          <input
            type="text"
            name="password_confirmation"
            onChange={event => this.handleChange(event)}
            value={this.state.password_confirmation}
          />

          <label htmlFor='name'>Twitch Username</label>
          <input
            type="text"
            name="name"
            onChange={event => this.handleChange(event)}
            value={this.state.name}
          />

          {/* <LinkButton to='/signup'>Signup</LinkButton> */}
          <button type="submit">Create Account</button>
          <input type="button" onClick={this.props.login} />

        </form>
      </div>
      }
    }
export default Account;