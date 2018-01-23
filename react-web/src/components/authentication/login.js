import React from 'react';
import { Redirect } from 'react-router-dom';



class LoginForm extends React.Component {

  state = {
    redirect: false,
    email: {},
    password: {},
    errors: {}
  }

  validate = (email, password) => {
    const errors = {}
    if (!email) errors.email = "User name is required"
    if (!password) errors.password = "Password is required"
    if (!email && !password) errors.base = ' Please fill out the form'
    return errors
  }

  //onSubmit={this.handleLoginSubmission}

  handleFormSubmission = (event) =>  {
    event.preventDefault();
    const {elements} = event.target;
    const email = elements["email"].value;
    const password = elements["password"].value;

    console.log("Saved input from login form", { email, password })
    const errors = this.validate(email, password)
    console.log({ errors })
    
    // If there are errors, don't do anything more
    if (Object.keys(errors).length > 0) return

    // There were no errors, and so we can Redirect and inform the parent
    // components via the props.onSubmit callback
    this.setState({ redirect: true })
    var loginParams = {
      email: email,
      password: password

    }
    this.props.onSubmit(loginParams)
  }



  render () {
    const { redirect } = this.state
    return (
      <div>
       { redirect && <Redirect to='/inspections'/> }
        <form onSubmit={this.handleFormSubmission}>

          <label>
            Login name
            <span className="error">{ this.state.errors.email }</span>
            &nbsp;
            <input type="email" name="email" />

          </label>

          &nbsp;

          <label>
            Password
            <span className="error">{ this.state.errors.password }</span>
            &nbsp;
            <input type="password" name="password"/>

          </label>

          &nbsp;

          <button type="submit">Sign In</button> &nbsp;
          <span className="error">{ this.state.errors.base }</span>
        </form>



      </div>
    )
  }

}

export default LoginForm
