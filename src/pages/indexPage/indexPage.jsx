import "./IndexPage.scss";
import AuthenticationCard from "../../components/IndexComponents/AuthenticationCardComponent/AuthenticationCard";
import SpotifyLogo from "../../assets/Spotify_logo_with_text.svg";
import YoutubeLogo from "../../assets/YouTube_Logo_2017.svg";
import { Link } from "react-router-dom";
function IndexPage() {
   return (
      <div className="indexPage__parent">
         <Link to="/login">Begin</Link>
      </div>
   );
}

export default IndexPage;
