import React, { useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'
//in the context we set up all of our functionality and then distribite it trough all the components

const GithubContext = React.createContext()
//after that we have access to two components: Provider, Consumer
const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  )
  //we wrap the whole application in the provider //the value is going to be available in the whole app
}
//we need to export GithubContext (becouse the useContext hook is looking for it)
// and GithubProvider (in order to wrap the whole app in it)
export { GithubProvider, GithubContext }
