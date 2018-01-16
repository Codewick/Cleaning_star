


import React from 'react';



export default function LoginForm({onSubmit}) {
  function handleFormSubmission(event) {
    event.preventDefault();
    // event.preventPropagation();
    const {elements} = event.target;
    const email = elements["email"].value;
    const password = elements["password"].value;
    onSubmit({ email, password })
    console.log("App received", { email, password })
      // .then((data) => {
      //   const token = data.token
      //   this.setState({ token })
      // })

  }

  return (
    <form onSubmit={handleFormSubmission}>

      <label>
        Login name
        &nbsp;
        <input type="email" name="email"/>
      </label>

      &nbsp;

      <label>
        Password
        &nbsp;
        <input type="password" name="password" />
      </label>

      &nbsp;

      <button type="submit">Sign In</button>

    </form>
  )
}
