import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import './styles/tailwind.css'
import AboutUs from './Pages/AboutUs'
import Articles from './Pages/Articles'
import Write from './Pages/Write'
import RegisterOptions from './Pages/RegisterOptions'
import NavBar from './Components/NavBar'
import SignInOptions from './Pages/SignInOptions'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/articles' element={<Articles />}/>
        <Route path='/write' element={<Write />} />
        <Route path='/signIn' element={<SignInOptions />} />
        <Route path='/register' element={<RegisterOptions />} />
      </Routes>
    </>
  )
}

export default App
