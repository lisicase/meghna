// import { useState } from 'react'
import './App.css'
import NewReleases from './NewReleases'
import ShowsPage from './Shows'
import { Routes, Route, Link } from 'react-router-dom'
// Assets
import profilePhoto from '/img/guitar_vertical.png'
import { FaInstagram, FaSpotify } from 'react-icons/fa';
import { SiApplemusic } from "react-icons/si";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/listen" element={<Listen />} />
      </Routes>
    </>
  )
}

function NavBar() {
  return (
    <>
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">Meghna</Link>
      </div>
      <div className="navbar-right">
        <Link to="/listen">Listen</Link>
        <p className="separator">/</p>
        <Link to="/shows">Shows</Link>
      </div>
    </div>
    </>
  )
}

function Home() {
  return (
    <>
      <Landing />
      <PersonalStatement />
      <NewReleases />
      <Footer />
    </>
  )
}

function Shows() {
  return (
    <ShowsPage />
  )
}

function Landing() {
  return (
    <div className="landing">
      <h1>Meghna</h1>
      <img src={profilePhoto} alt="Meghna leaning on guitar." />
      <Listen />
    </div>
  )
}

function Listen() {
  return (
    <div className="listen">
      <p>
        <a href="TODO"><FaSpotify className="contact-icon" size="50" /></a>
        <a href="TODO"><SiApplemusic className="contact-icon" size="50" /></a>
      </p>
    </div>
  )
}

function PersonalStatement() {
  return (
    <div className="personal-statement">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
  )
}

function Footer() {
  let currentYear: number = new Date().getFullYear()  

  return (
    <footer>
      <div>
        <p>
          <a href="https://www.instagram.com/meghna4now/"><FaInstagram className="contact-icon" size="24" /></a>
        </p>
        <p>&copy; {currentYear} Meghna Lohia</p>
      </div>
  </footer>
  )
}

export default App

