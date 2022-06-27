import { Route, Routes } from 'react-router-dom'
import Index from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Profile from './views/Profile'
import Application from './views/Application'
import { routes } from './config'

export default function Navigation() {
  return <Routes>
    <Route path={routes.index} element={<Index/>}/>
    <Route path={routes.auth.login} element={<Login/>}/>
    <Route path={routes.auth.signup} element={<Register/>}/>
    <Route path={routes.profile} element={<Profile/>}/>
    <Route path={routes.app} element={<Application/>}/>
  </Routes>
}
