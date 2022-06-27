import { Route, Routes } from 'react-router-dom'
import Index from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Profile from './views/Profile'
import Application from './views/Application'
import { routes } from './config'
import useIsLoggedIn from './hooks/useIsLoggedIn'
import AuthRedirect from './components/AuthRedirect/AuthRedirect'

export default function Navigation() {
  const isLoggedIn = useIsLoggedIn()

  return <Routes>
    <Route index={!isLoggedIn} path={routes.index} element={<Index/>}/>
    <Route path={routes.auth.login} element={
      <AuthRedirect anonymous redirect={routes.app} children={<Login/>}/>
    }/>
    <Route path={routes.auth.signup} element={
      <AuthRedirect anonymous redirect={routes.app} children={<Register/>}/>
    }/>

    <Route path={routes.profile} element={
      <AuthRedirect redirect={routes.auth.login} children={<Profile/>}/>
    }/>
    <Route index={isLoggedIn} path={routes.app} element={
      <AuthRedirect redirect={routes.auth.login} children={<Application/>}/>
    }/>
  </Routes>
}
