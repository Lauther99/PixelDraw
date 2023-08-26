import './App.css'
import BgStars from './components/BgStars';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoutes from './components/ProtectedRoutes';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <BgStars />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            {/* <Route path='/path'element={<SignUp/>}/> */}
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App