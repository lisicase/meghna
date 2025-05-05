import './Shows.css'
// Assets
import showsPhoto from '/img/guitar_landscape-crop.png'

function ShowsPage() {
    return (
        <div>
            <h1>Upcoming Shows</h1>
            <img src={showsPhoto} alt="Meghna sitting on the floor, playing guitar." />
            <div style={{padding: '2rem'}} />
            <UpcomingShowsList />
            <h1>Shows Archive</h1>
            <ShowArchiveList />
            <svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter'>
                    <feTurbulence 
                    type='fractalNoise' 
                    baseFrequency='0.65' 
                    numOctaves='5' 
                    stitchTiles='stitch'/>
                </filter>
                <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
            </svg>
        </div>
    )
}

function UpcomingShowsList() {
    return (
        <div className="show-item">
            <table>
                <ShowItem date="June 3, 2025" worldLocation="Seattle, WA, USA" locationName="The Paramount" />
                <ShowItem date="date" worldLocation="world" locationName="long long long long long" />
                <ShowItem date="date" worldLocation="world" locationName="location" />
            </table>
        </div>
    )
}

type ShowItemProps = {
    date: string,
    worldLocation: string,
    locationName: string
    // ticketsLink?: URL
  };

function ShowItem({date, worldLocation, locationName} : ShowItemProps) {
    // let ticketsButton = <span/>;
    // if 
    
    return (
        <tr>
            <td scope="col">
                <div>
                    <p style={{fontWeight: 'bold'}}>{date}</p>
                    <p>{locationName}</p>
                </div>
            </td>
            <td scope="col">
                <div>
                    <p><br/>{worldLocation}</p>
                </div>
            </td>
            <td scope="col">
                <button style={{marginLeft: '10rem'}}>Tickets</button>
            </td>
        </tr>
    )
}

function ShowArchiveList() {
    return (
        <div className="showarchive-list">
            <InstagramReelEmbed />
            <InstagramReelEmbed />
            <InstagramReelEmbed />
            <InstagramReelEmbed />
            <InstagramReelEmbed />
            <InstagramReelEmbed />
            <InstagramReelEmbed />
        </div>
    );
}

// type YoutubeEmbedProps = {
//     embedId: string,
//     title: string
//   };

const InstagramReelEmbed = () => (
    <div>
      <iframe
        width="320"
        height="440"
        src="https://www.instagram.com/reel/DG2GWeHxUYQ/embed/"
        />
    </div>
  );

export default ShowsPage;