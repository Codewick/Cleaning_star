import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ClientList from '../components/ClientList'
import Client from '../components/Client'

export default ({ clients }) => (
  !!clients ? (
    <Switch>
      <Route path='/clients/:id' render={
        ({ match }) => {
          console.log(match)
          const id = match.params.id
          const client = clients.find((client) => client._id === id)
          if (!client) {
            return (<p>Client Not Found! ({id})</p>)
          }
          return (<Client {...client} />)
        }}
      />
      <Route path='/clients' render={
        () => (
          <ClientList clients={clients} />
        )}
      />
    </Switch>
  ) : (
        "Loading..."
    )
  )
