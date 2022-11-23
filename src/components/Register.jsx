import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div className="container text-center my-5">
  <div className="user my-3">
    <i className="fas fa-user-secret user-icon" />
    <h4 className="register">Register</h4>
  </div>
  <div className="card p-5 w-50 m-auto">
    <form method="POST" action="/handleRegister">
      <input className="form-control" placeholder="Enter your email" type="text" name="email" />
      <input className="form-control my-4" placeholder="Enter your name" type="text" name="username" />

      <input className="form-control my-4 " placeholder="Enter your Password" type="text" name="password" />
      <input className="form-control my-4 " placeholder="Confirm your Password" type="text" name="cpassword" />

      <button className="btn btn-default-outline my-4 w-100 rounded">Register</button>
      <p><a className="text-muted forgot btn" href>I Forgot My Password</a></p>
      <a className="btn btn-default-outline" to="register">Register</a>
    </form>
  </div>
</div>

    )
  }
}
