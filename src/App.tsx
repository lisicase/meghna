// import { useState } from 'react'
import './App.css'
import profilePhoto from '/profile.jpg'
import NewReleases from './NewReleases'
// Assets
import { FaInstagram, FaSpotify } from 'react-icons/fa';
import { SiApplemusic } from "react-icons/si";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Landing />
      <PersonalStatement />
      <NewReleases />
      <Footer />
      <>
      {/* <Navigator />
      <Switch>
        <Route exact path="/portfolio" render={renderPortfolio} />
        <Route path="/experience" component={Experience} />
        <Route path="/about" component={About} />
        <Route path="/portfolio/:projectId" render={renderProject} />
        <Redirect to="/portfolio" />
      </Switch> */}
      </>
    </>
  )
}

function Landing() {
  return (
    <div className="landing">
      <h1>Meghna</h1>
      <img src={profilePhoto} alt="TODO" />
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
        {/* <a href="https://www.instagram.com/meghna4now/"><FaInstagram className="contact-icon" size="24" /></a> */}
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
          {/* <a href="TODO"><FaSpotify className="contact-icon" size="24" /></a> */}
          <a href="https://www.instagram.com/meghna4now/"><FaInstagram className="contact-icon" size="24" /></a>
        </p>
        <p>&copy; {currentYear} Meghna Lohia</p>
      </div>
  </footer>
  )
}

export default App

