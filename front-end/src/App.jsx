import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Auth'
import Login from "./pages/auth/login"
import Signup from './pages/auth/Signup'

export default function App() {
    return (
    <AuthProvider>
      <Router>
        <Routes>
       
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
    )
  }