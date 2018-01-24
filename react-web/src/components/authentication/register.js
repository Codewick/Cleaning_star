import React from 'react';



export default function RegisterForm({onSubmit}) {
  function handleFormSubmission(event) {
    event.preventDefault();
    // event.preventPropagation();
    const {elements} = event.target;
    const firstName = elements["firstName"].value;
    const lastName = elements["lastName"].value;
    const email = elements["email"].value;
    const password = elements["password"].value;
    onSubmit({ firstName, lastName, email, password })
    console.log(onSubmit)
  }

  return (

    <form onSubmit={handleFormSubmission}>

      <div className="container">

        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="first_name" name="firstName" type="text" className="validate"/>
              <label for="first_name">First Name</label>
            </div>
          <div className="col m2"></div>
        </div>


        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="last_name" name="lastName" type="text" className="validate"/>
              <label for="last_name">Last Name</label>
            </div>
          <div className="col m2"></div>
        </div>

        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="email" name="email" type="email" className="validate"/>
              <label for="email">Email</label>
            </div>
          <div className="col m2"></div>
        </div>

        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="password" name="password" type="password" className="validate"/>
              <label for="password">Password</label>
            </div>
          <div className="col m2"></div>
        </div>

        <button className="btn waves-effect waves-light orange darken-2" type="submit">
          Sign up<i className="material-icons right">send</i>
        </button>

      </div>


    </form>
  )
}
