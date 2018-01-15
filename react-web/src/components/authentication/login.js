import React from 'react';

export default function LoginForm({onSubmit}) {
  function handleFormSubmission(event) {
    event.preventDefault();
    // event.preventPropagation();
    const {elements} = event.target;
    const loginName = elements["userName"].value;
    const password = elements["password"].value;
    onSubmit({ loginName, password })
  }

  return (
    <form onSubmit={handleFormSubmission}>

      <label>
        Login name
        &nbsp;
        <input type="text" name="loginName"/>
      </label>

      &nbsp;

      <label>
        Password
        &nbsp;
        <input type="text" name="password" />
      </label>

      &nbsp;

      <button type="submit">Save</button>

    </form>
  )
}
