import React from 'react';
import {
  BrowserRouter as Router,
 Route,
 Link,
 Switch
} from 'react-router-dom';


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

      <label>
        First name
        &nbsp;
        <input type="text" name="firstName"/>
      </label>

      &nbsp;

      <label>
        Last name
        &nbsp;
        <input type="text" name="lastName" />
      </label>

      &nbsp;

      <label>
        Email
        &nbsp;
        <input type="email" name="email" />
      </label>

      &nbsp;

      <label>
        Password
        &nbsp;
        <input type="password" name="password" />
      </label>

      &nbsp;

      <button type="submit">Save</button>


    </form>
  )
}
