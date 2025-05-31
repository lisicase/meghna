import './ReleaseParty.css'
// Assets
import blackDressPose from '/img/blackDress_pose.png'

function ReleasePartyPage() {
    return (
      <body style={{backgroundColor:"black", color:"white", fontFamily:"Georgia"}}>
        <style>@import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap');</style>
        <div className="releasePartyBox">
          <h1>Black<br/>Dress<br/>Release<br/>Party</h1>
          <div>
            <InvitationLetter />
            <div className="eventOverview">
              <EventImage />
              <EventDetails />
            </div>
          </div>
        </div>
      </body>
    )
  }

  function InvitationLetter() {
    return (
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
    )
  }

  function EventDetails() {
    return (
      <div className="eventDetails">
        <p><b>Date: </b>June 28, 2025</p>
        <p><b>Time: </b> 6pm - 10pm</p>
        <p><b>Location: </b>Blue Light Studios, 1839 Franklin St, Vancouver</p>
        <p><b>Dress Code: </b>Red, White, and <s>Blue</s>Black</p>
      </div>
    )
  }

  function EventImage() {
    return (
      <img className="eventImage" src={blackDressPose} alt="Meghna wearing black wedding dress and holding flowers." />
    )
  }

  export default ReleasePartyPage;