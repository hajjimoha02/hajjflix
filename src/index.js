import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

// Les Pages
import Home from './page/Home'
import Movies from './page/Movies'
import Series from './page/Series'
import NotFound from './page/NotFound'

import 'bootstrap/dist/css/bootstrap.min.css'

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/movies' component={Movies} />
      <Route exact path='/series' component={Series} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
