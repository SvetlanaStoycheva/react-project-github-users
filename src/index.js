import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GithubProvider, GithubContext } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'
//dev-b9mizq5f.eu.auth0.com
//EZOy0UU7LIU6pcRF5rbjRvZZ7jXbY7Ui

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-b9mizq5f.eu.auth0.com'
      clientId='EZOy0UU7LIU6pcRF5rbjRvZZ7jXbY7Ui'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
