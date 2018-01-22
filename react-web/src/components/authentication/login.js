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
    // this.setState({ email, password })
    // this.setState((prevState) => {
    //   return {email: email}
    // });
    // console.log("State is now: ", this.state.email, this.state.password);
    console.log("Saved input from login form", { email, password })

    const errors = this.validate(email, password)
    this.setState({ errors })
    console.log({ errors })
    //if (Object.keys(errors).length > 0) return;
    this.setState({ redirect: true })
    var loginParams = {
      email: email,
      password: password
      // ,
      // blah: "1"
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
