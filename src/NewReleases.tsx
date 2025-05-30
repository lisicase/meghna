// React
// import { Redirect } from 'react-router-dom';
// Style
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style.css';

export function NewReleases() {
    return (
        <div className="flex-container">
            <h2>New Releases</h2>
            {/* <AllPortfolioCards projects={props.projects} /> */}
            <AllCards />
        </div>
    );
}

function AllCards() {
    /*let allProjects = projects.map((project) => {
      return <span key={project.id}>
        <PortfolioCard id={project.id} title={project.title} context={project.context} description={project.description} 
        project={project.project} tools={project.tools} img={project.img_src} alt={project.alt} />
        </span>
    })

    return (
      <div className="col content-column" style={{alignItems:"center"}}>
        {allProjects}
      </div>
    );*/
    return (
        <div>
            <VideoCard title="Black Dress"/>
        </div>
    );
}

type VideoCardProps = {
    title?: string,
  }

export const VideoCard = ({title}: VideoCardProps) => {
    return (
        <div>
            <YoutubeEmbed embedId="UMdSUKvRw9o" title="Black Dress music video" />
            <h3>{title}</h3>
        </div>
    );
}

type YoutubeEmbedProps = {
    embedId: string,
    title: string
  };

const YoutubeEmbed = ({ embedId, title }: YoutubeEmbedProps) => (
    <div className="embedded-video">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}?rel=0`}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );

/*class PortfolioCard() {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.setState({ redirectTo: this.props.id });
  }

  render() {
    // Redirect to project page
    if (this.state.redirectTo) {
      return <Redirect push to={"/portfolio/" + this.state.redirectTo} />
    }

    // Render project card
    let project = <span></span>;
    if (this.props.project !== "") {
      project = <p className="card-text"><strong>Project: </strong>{this.props.project}</p>;
    }
    let tools = <span></span>;
    if (this.props.tools !== "") {
      tools = <p className="card-text"><strong>Tools: </strong>{this.props.tools}</p>;
    }
    return (
      <div className="shadow card">
        <div id="flex-left-right">
          <div id="flex-left">
            <img src={this.props.img} alt={this.props.alt} />
          </div>
          <div id="flex-right">
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <h6 className="subtitle">{this.props.context}</h6>
              <p className="card-text">{this.props.description}</p>
              {project}
              {tools}
              <button onClick={this.handleClick} className="btn btn-light">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}*/

export default NewReleases;