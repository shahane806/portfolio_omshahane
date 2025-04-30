import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
   <>
    <Router>
    <Navbar
  logo={{ src: '/logo.png', alt: 'Site Logo', text: 'DevHub' }}
  navItems={[
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ]}
  cta={{ label: 'Hire Me', href: '/hire' }}
/>
   <Routes>
    <Route path='/' element={App}></Route>
    <Route path='/services' element={App}></Route>
    <Route path='/work' element={App}></Route>
    <Route path='/contact' element={App}></Route>
    <Route path='/hire' element={App}></Route>
   </Routes>

    </Router>
   </>
  )
}

export default App
