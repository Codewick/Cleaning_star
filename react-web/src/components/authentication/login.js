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

        <div className="container">

          <div className="row">
            <div className="col m2"></div>
              <div className="input-field col s12 m8">
                <input id="email" name="email" type="email" >{ this.state.errors.email }</input>
                <label for="email">Login Email</label>
              </div>
            <div className="col m2"></div>
          </div>

          <div className="row">
            <div className="col m2"></div>
              <div className="input-field col s12 m8">
                <input id="password" name="password" type="password" >{ this.state.errors.password }</input>
                <label for="password">Password</label>
              </div>
            <div className="col m2"></div>
          </div>


          <button className="btn waves-effect waves-light orange darken-2" type="submit">
            Login<i className="material-icons right">send</i>
          </button>
          <span className="error">{ this.state.errors.base }</span>

        </div>

        </form>



      </div>
    )
  }

}

export default LoginForm
