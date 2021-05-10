import React from 'react';
//Pages
import Home from './pages/Home'
import GlobalStyles from './components/GlobalStyles'

import {Route} from 'react-router-dom'

const App = () => {


  return (
    <div>
      <GlobalStyles />
      <Route path={['/game/:id', '/ignite/']}>
        <Home/>
      </Route>
      
    </div>
  )
}

export default App
