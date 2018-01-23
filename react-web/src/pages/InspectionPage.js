import React from 'react'
import { Route, Switch } from 'react-router-dom'
import InspectionList from '../components/InspectionList'
import Inspection from '../components/Inspection'
import IssuesForm from '../components/IssuesForm'

export default ({ inspections, clients, employees }) => (
  !!inspections && !!clients && !!employees ? (
    <Switch>

      <Route exact path='/inspections/:id' render={
        ({ match }) => {
          console.log(match)
          const id = match.params.id
          const inspection = inspections.find((inspection) => inspection._id === id)
          const client = clients.find((client) => client._id === inspection.client)
          const employee = employees.find((employee) => employee._id === inspection.employee)

          if (!inspection) {
            return (<p>Inspection Not Found! ({id})</p>)
          }
          match = Object.assign({}, inspection, { clientName: client.name }, { employeeName: employee.name });
          return (
            <div>
              <Inspection key={inspection._id} inspection={match} />
              <IssuesForm inspection={match} />
            </div>
          );
      }} />
      <Route path='/inspections' render={() => (
          <InspectionList inspections={inspections} clients={clients} employees={employees} />
      )} />


    </Switch>
  ) : (
        console.log({ inspections, clients, employees }), (<div>"Loading..."</div>)
    )
  )
