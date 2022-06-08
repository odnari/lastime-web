import { Route, Routes, useNavigate } from 'react-router-dom'
import Index from './views/Landing'
import Login from './views/Login'
import Register from './views/Register'
import Profile from './views/Profile'
import Home from './views/Home'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Navigation() {
  const navigate = useNavigate()
  const isAuthenticated = useSelector(state => Boolean(state.user.token))

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  return <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/auth/login" element={<Login/>}/>
    <Route path="/auth/join" element={<Register/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/times" element={<Home/>}/>
  </Routes>
}
