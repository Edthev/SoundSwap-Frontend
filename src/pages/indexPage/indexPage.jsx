import "./IndexPage.scss";
import AuthenticationCard from "../../components/IndexComponents/AuthenticationCardComponent/AuthenticationCard";
import SpotifyLogo from "../../assets/Spotify_logo_with_text.svg";
import YoutubeLogo from "../../assets/YouTube_Logo_2017.svg";
import video from "../../assets/musicVideo.mp4";
import { Link } from "react-router-dom";
function IndexPage() {
   const isSignedIn = () => {
      // if()
   };
   console.log(document.cookie.includes("spotify_session_token"));
   console.log(document.cookie.includes("google_session_token"));
   return (
      <div className="indexPage__parent">
         <div className="hero">
            <video className="video" muted loop>
               <source className="hero" src={video} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <div className="main Text">
            <h1>Play, Listen, Share</h1>
            <h3>Demystify music. Share across platforms</h3>
         </div>
         <div className="buttons">
            <Link to="/login" className="start">
               Start Now
            </Link>
            <Link to="/learn" className="demo">
               Request a demo -
            </Link>
         </div>
         <div className="bottom">
            <div className="miniBox">
               <p>Pick a playlist and transfer the songs</p>
            </div>
            <div className="miniBox">
               <p>Shared playlists across platforms</p>
            </div>
            <div className="miniBox">
               <p>Make music collaborative</p>
            </div>
         </div>
      </div>
   );
}

export default IndexPage;
