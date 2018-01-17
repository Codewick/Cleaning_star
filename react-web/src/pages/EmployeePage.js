import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EmployeeList from '../components/EmployeeList'
import Employee from '../components/Employee'

export default ({ employees }) => (
  !!employees ? (
    <Switch>
      <Route path='/employees/:id' render={
        ({ match }) => {
          console.log(match)
          const id = match.params.id
          const employee = employees.find((employee) => employee._id === id)
          if (!employee) {
            return (<p>Employee Not Found! ({id})</p>)
          }
          return (<Employee {...employee} />)
        }} />
        <Route path='/employees' render={() => (
          <EmployeeList employees={employees} />
      )} />
    </Switch>
  ) : (
        "Loading..."
    )
  )
