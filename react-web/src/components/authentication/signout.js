import React from 'react'
import { Redirect } from 'react-router-dom'

export default ({ onSignOut }) => {
  onSignOut()
  return (<Redirect to = '/signin'/>)
}
