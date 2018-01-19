


import React from 'react';



//export default function LoginForm({onSubmit}) {

export default class LoginForm extends React.component({onSubmit}) {
  state = {
    email: null,
    password: null
  }


  function handleFormSubmission(event) {
    event.preventDefault();
    // event.preventPropagation();
    const {elements} = event.target;
    const email = elements["email"].value;
    const password = elements["password"].value;
    onSubmit({ email, password })
    console.log("Saved input from login form", { email, password })
      // .then((data) => {
      //   const token = data.token
      //   this.setState({ token })
      // })

    function handleInputChange (event) {
      const email = event.target.email
      const password = event.target.password
      console.log({email, password})
    }



  }

  return (
    <form onSubmit={handleFormSubmission}>

      <label>
        Login name
        &nbsp;
        <input onChange={this.handleInputChange} type="email" name="email"/>
      </label>

      &nbsp;

      <label>
        Password
        &nbsp;
        <input onChange={this.handleInputChange} type="password" name="password"/>
      </label>

      &nbsp;

      <button type="submit">Sign In</button>

    </form>
  )
}
