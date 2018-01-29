import React from 'react'
import { Redirect } from 'react-router-dom'

const SIGNIN_API_URL=`${process.env.REACT_APP_API_URL}/signin`

export default ({ onSignOut }) => {
  onSignOut()
  return (<Redirect to = 'https://cleaningstar-xwxwaccfar.now.sh/signin'/>)
}
