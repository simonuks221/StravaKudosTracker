import './App.css'
import './Animation.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PreLoginPage from './components/PreLoginPage'
import AuthorizationPage from './components/AuthorizationPage'
import LoggedInPage from './components/LoggedInPage.js'
import React, { useState } from 'react'
export const AuthContext = React.createContext(undefined)

function App() {
  const [auth, changeAuth] = useState({clientId: 68084, clientSecret: 'c16851e68bce7147d63916970b9f3ab9b8c2330d'})
  const [state, changeState] = useState('preLogin') //preLogin, authorization, loggedIn

  const ChangePageOnState = () => {
    switch(state){
      case 'preLogin':
        return <PreLoginPage/>
      case 'authorization':
        return <AuthorizationPage/>
      case 'loggedIn':
        return <LoggedInPage/>
        default:
          console.log('Error, state not true')
          return <p>State faulty</p>
    }
  }

  return (
    <div>
      <AuthContext.Provider value = {{auth, changeAuth, changeState}}>
        {ChangePageOnState()}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
