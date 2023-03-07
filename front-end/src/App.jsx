import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/auth/login"
import Signup from './pages/auth/Signup'



export default function App() {
    return (

      <Router>
        <Routes>
      
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </Router>
      )
  }