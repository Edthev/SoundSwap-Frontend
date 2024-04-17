import "./Header.scss";
import { Link } from "react-router-dom";
function Header({ Logo }) {
   const GoogleToken = sessionStorage.getItem("Google_User_Token");
   const SpotifyToken = sessionStorage.getItem("Spotify_User_Token");

   return (
      <div className="header">
         {/* <Logo /> */}
         <div>
            <Link to="/" className="header__logo">
               <img src={Logo} />
               Sound Swap
            </Link>
         </div>
         {/* <Link to="/login">Login</Link> */}
         <div className="header__right">
            <Link to="/merge">Merge</Link>
            <a
               onClick={location.reload}
               href={
                  document.cookie.includes("spotify_session_token") &&
                  document.cookie.includes("google_session_token")
                     ? "/logout"
                     : "/login"
               }
            >
               {document.cookie.includes("spotify_session_token") &&
               document.cookie.includes("google_session_token")
                  ? "Sign Out"
                  : "Sign In"}
            </a>
         </div>
      </div>
   );
}

export default Header;
