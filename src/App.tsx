// import { useState } from 'react'
import './App.css'
import { VideoCard, NewReleases } from './NewReleases'
import ShowsPage from './Shows'
import ReleasePartyPage from './Release Party/ReleasePartyPage'
import { Routes, Route, Link } from 'react-router-dom'
// Assets
import profilePhoto from '/img/guitar_vertical.png'
import blackDressPose from '/img/blackDress_pose.png'
import { FaInstagram, FaSpotify } from 'react-icons/fa';
import { SiApplemusic } from "react-icons/si";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/*<NavBar />*/}
      <Routes>
        <Route index element={<BlackDressReleasePage />} />
        <Route path="/blackdressreleaseparty2025" element={<ReleasePartyPage />} />
      </Routes>
    </>
  )
}

function BlackDressReleasePage() {
  return (
    <>
      <Name />
      <VideoCard />
      <Listen />
      <BlackDressBioPhoto />
      <Footer />
    </>
  )
}

function Name() {
  return (
    <>
      <style>@import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap');</style>
      <div className="landing" style={{fontFamily:"Beth Ellen"}}>
        <h1>Meghna</h1>
      </div>
    </>
  )
}

function BlackDressBioPhoto() {
  return (
    <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap" }}>
      <div style={{ flexGrow:"1" }}>
        <img style={{ maxWidth:"20vw"}} src={profilePhoto} alt="Meghna leaning on guitar." />
      </div>
      <div style={{ flexGrow:"1", padding:"4em", maxWidth:"40vw" }}>
        <p>Meghna is a folk rockstar born and raised in beautiful Vancouver, Canada.
          She's on a mission to use her voice to ignite critical thinking and empathy globally 
          and would love for you to join her. Meghna is inspired by storytellers like Bob Dyla and Joni Mitchell, 
          modern icons like Lana Del Rey and Taylor Swift, and the classic genius of The Rolling Stones, 
          The Beatles, and Fleetwood Mac. Her music is honest, enigmatic, and human, and her goal is to 
          build a world that reflects those ideals. From learning to play the guitar to learning to code, 
          Meghna has been gearing up her whole life to have a great impact on the world—now, she needs your help.</p>
      </div>
    </div>
  )
}

////////////

function ReleasePartyInvite() {
  return (
    <div style={{display:"flex", flexWrap:"wrap", fontFamily:"Georgia", backgroundColor:"black", color:"white"}}>
      <style>@import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap');</style>
      <div style={{display:"flex", alignItems:"top"}}>
        <h1>Black Dress Release Party</h1>
        <div>
          <div style={{textAlign:"left"}}>
            <p>Dear Guests,</p>
            <p>You’re invited to celebrate the release of Black Dress, my first song and music video. 
              Join us at <b>Blue Light Studios</b> on <b>June 28th</b> at <b>6pm to 10pm</b> for snacks and good tunes, 
              all sponsored by the newly divorceés. Dress code is <b>Red, White, and <s>Blue</s>Black</b>, 
              and there will be drinks for purchase provided by Blue Light Studios.</p>
            <p>We wouldn’t have been able to do this without your support, 
              so this evening is as much about Black Dress as it is about celebrating you.</p>
            <p>See you there! Reach out to the below contacts if you have questions.</p>
            <p>Cheers,</p>
            <p style={{fontFamily:"Beth Ellen"}}>Meghna</p>
          </div>
          <div style={{display:"flex", alignItems:"top", paddingTop:"4rem"}}>
            <div style={{ textAlign:"left", paddingRight:"4rem" }}>
              <p><b>Date: </b>June 28, 2025</p>
              <p><b>Time: </b> 6pm - 10pm</p>
              <p><b>Location: </b>Blue Light Studios</p>
              <p><b>Dress Code: </b>Red, White, and <s>Blue</s>Black</p>
            </div>
            <img style={{ maxWidth:"20vw"}} src={blackDressPose} alt="Meghna wearing black wedding dress and holding flowers." />
          </div>
        </div>
      </div>
    </div>
  )
}

/*********************************************************/

function OriginalApp() {
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

