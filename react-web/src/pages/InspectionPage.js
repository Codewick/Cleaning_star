import React from 'react'
import { Route, Switch } from 'react-router-dom'
import InspectionList from '../components/InspectionList'
import Inspection from '../components/Inspection'

export default ({ inspections, clients, employees }) => (
  !!inspections && !!clients && !!employees ? (
    <Switch>
    <Route path='/inspections' render={() => (
      <InspectionList inspections={inspections} clients={clients} employees={employees} />
    )} />

    <Route path='/inspections/:id' render={
      ({ match }) => {
        console.log(match)
        const id = match.params.id
        const inspection = inspections.find((inspection) => inspection._id === id)
        if (!inspection) {
          return (<p>Inspection Not Found! ({id})</p>)
        }
        return (<Inspection {...inspection} />)
      }} />

    </Switch>
  ) : (
        console.log({ inspections, clients, employees }), (<div>"Loading..."</div>)
    )
  )
