import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PreLoginPage from './components/PreLoginPage';
import LoggedInPage from './components/LoggedInPage';
import React, { useState } from 'react';
export const AuthContext = React.createContext(undefined);

function App() {
  const [auth, changeAuth] = useState({})
  const [state, changeState] = useState('preLogin') //preLogin, loggedIn

  const ChangePageOnState = () => {
    switch(state){
      case 'preLogin':
        return <PreLoginPage/>
      case 'loggedIn':
        return <LoggedInPage/>
    }
  }

  return (
    <div>
      <AuthContext.Provider value = {{auth, changeAuth, changeState}}>
        {ChangePageOnState}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
