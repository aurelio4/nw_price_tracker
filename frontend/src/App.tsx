import React, { useState } from 'react'
import LandingPage from './components/pages/LandingPage'
import Dashboard from './components/pages/Dashboard'
// import NavBar from './components/common/NavBar'
// import Graph from './components/common/Graph'

import './App.css'

const App = () => {
  const [token] = useState<boolean>(/* window.localStorage.getItem('X-Auth-Token') ? true : false*/ true)

  return (
    <div className="App">
    {token
      ? <Dashboard />
      : <LandingPage />}
    </div>
  );
}

export default App
