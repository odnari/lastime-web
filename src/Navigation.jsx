import { Route, Routes } from 'react-router-dom'
import Index from './views/Landing'
import Login from './views/Login'
import Register from './views/Register'
import Profile from './views/Profile'
import Home from './views/Home'
import { routes } from './config'

export default function Navigation() {
  return <Routes>
    <Route path={routes.index} element={<Index/>}/>
    <Route path={routes.auth.login} element={<Login/>}/>
    <Route path={routes.auth.signup} element={<Register/>}/>
    <Route path={routes.profile} element={<Profile/>}/>
    <Route path={routes.home} element={<Home/>}/>
  </Routes>
}
