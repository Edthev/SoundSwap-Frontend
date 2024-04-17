import "./DemoPage.scss";
import AuthenticationCard from "../../components/IndexComponents/AuthenticationCardComponent/AuthenticationCard";
import SpotifyLogo from "../../assets/Spotify_logo_with_text.svg";
import YoutubeLogo from "../../assets/YouTube_Logo_2017.svg";
import { Link } from "react-router-dom";
function IndexPage() {
   return (
      <div className="indexPage__parent">
         <div className="main Text">
            <h1>Request a Demo Below:</h1>
         </div>
         <div className="buttons">
            <Link to="/login" className="start">
               Start Now
            </Link>
            <button>Submit</button>
         </div>
      </div>
   );
}

export default IndexPage;
