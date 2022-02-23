import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/login" element={<Login />}/>
        <Route path="/auth/join" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
