import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import SignIn from '@pages/SignIn'
import SignUp from '@pages/SignUp'

function App() {
  return ( 
    <Switch>      
      <Redirect exact path='/' to='/login' />
      <Route path='/login' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </Switch>
  )
}

export default App
