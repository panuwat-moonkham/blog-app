import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import withHelmet from './utils/withHelmet'
import routes from './config/routes'
import GlobalStyle from './components/GlobalStyle'
import NavBar from './components/Navbar'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback="...loading">
          <NavBar />
          <Switch>
            {Object.keys(routes).map(reuteKey => (
              <Route
                key={reuteKey}
                {...routes[reuteKey]}
                // path={reutes[reuteKey].path}
                // exact={routes[reuteKey].exact}
                // component={reutes[reuteKey].component}
              />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default withHelmet('Panuwat | Blog App')(App)
