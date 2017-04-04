import React from 'react'

import NavigationContainer from './../containers/navigation-container'
import Footer from './footer.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/app.css'

const App = ({children}) => {
  return (
    <div className="app full-height">
      <NavigationContainer />
      <div className="wrap">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default App;
