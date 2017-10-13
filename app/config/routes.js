import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer, LogoutContainer } from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <HashRouter>
      <Switch>
        <MainContainer>
          <Route exact path='/' render={() => {
            return checkAuth() ? <Redirect to="/feed" /> : <HomeContainer />
          }}/>
          <Route path='/auth' render={() => {
            return checkAuth() ? <Redirect to="/feed" /> : <AuthenticateContainer />
          }}/>
          <Route path='/feed' render={() => {
            return checkAuth() ? <FeedContainer /> : <Redirect to='/auth' />
          }} />
          <Route path='/logout' component={LogoutContainer}/>
        </MainContainer>
      </Switch>
    </HashRouter>
  )
}
