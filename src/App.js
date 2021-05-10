import React from 'react';
//Pages and components
import Home from './pages/Home'
import Nav from './components/Nav'

//Global Styles
import GlobalStyles from './components/GlobalStyles'

//Routes
import {Route} from 'react-router-dom'

const App = () => {


  return (
    <div>
      <GlobalStyles />
      <Nav/>
      <Route path={['/ignite/game/:id', '/ignite/']}>
        <Home/>
      </Route>
      
    </div>
  )
}

export default App
