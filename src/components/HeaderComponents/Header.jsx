import "./Header.scss";
import { Link } from "react-router-dom";
function Header({ Logo }) {
   const GoogleToken = sessionStorage.getItem("Google_User_Token");
   const SpotifyToken = sessionStorage.getItem("Spotify_User_Token");
   return (
      <div className="header">
         {/* <Logo /> */}
         <Link to="/">
               <img className="mylogo" src={Logo} />
         </Link>
         {/* <Link to="/login">Login</Link> */}
         <Link to="/logout">Sign Out</Link>
         <Link to="/merge">Merge</Link>
      </div>
   );
}

export default Header;
