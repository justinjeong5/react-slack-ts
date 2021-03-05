import React from 'react'
import loadable from '@loadable/component'
import {Switch, Route, Redirect} from 'react-router-dom'

const SignIn = loadable(()=>import('@pages/SignIn')) 
const SignUp = loadable(()=>import('@pages/SignUp')) 

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
