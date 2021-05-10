import React from 'react';
//Pages and components
import Home from './pages/Home'

//Global Styles
import GlobalStyles from './components/GlobalStyles'

//Routes
import {Route} from 'react-router-dom'

const App = () => {


  return (
    <div>
      <GlobalStyles />
      <Route path={['/ignite/game/:id', '/ignite/']}>
        <Home/>
      </Route>
      
    </div>
  )
}

export default App
