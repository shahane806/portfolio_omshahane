import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import ContactUs from './Pages/ContactUs'
import Projects from './Pages/Projects'
import Footer from './Components/Footer'

function App() {

  return (
    <>

      <Router>
        <Navbar
          logo={{ src: '/logo.png', alt: 'Site Logo', text: 'DevHub' }}
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Projects', href: '/projects' },
            { label: 'About Us', href: '/about' },
          ]}
          cta={{ label: 'Hire Me', href: '/contact' }}
        />
        <Routes>
          <Route path='/' element={
            <>
              <Home />
            </>
          }></Route>
          <Route path='/about' element={
            <>
              <AboutUs />
            </>
          }></Route>
          <Route path='/blog' element={
            <>
              <Blog />
            </>
          }></Route>
          <Route path='/contact' element={
            <>
              <ContactUs />
            </>
          }></Route>
          <Route path='/projects' element={
            <>
              <Projects />
            </>
          }></Route>
        </Routes>
        <Footer/>

      </Router>
    </>
  )
}

export default App
