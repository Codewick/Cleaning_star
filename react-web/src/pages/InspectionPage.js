import React from 'react'
import { Route, Switch } from 'react-router-dom'
import InspectionList from '../components/InspectionList'
import Inspection from '../components/Inspection'

export default ({ inspections }) => (
  !!inspections ? (
    <Switch>
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
        <Route path='/inspections' render={() => (
          <InspectionList inspections={inspections} />
      )} />
    </Switch>
  ) : (
        "Loading..."
    )
  )
