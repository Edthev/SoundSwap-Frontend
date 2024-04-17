import "./LoginPage.scss";
import AuthenticationCard from "../../components/IndexComponents/AuthenticationCardComponent/AuthenticationCard";
import SpotifyLogo from "../../assets/Spotify_logo_with_text.svg";
import YoutubeLogo from "../../assets/YouTube_Logo_2017.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
   const navigate = useNavigate();
   const googleScopes = "https://www.googleapis.com/auth/youtube";
   const googleResponse_type = "code";
   const redirect_uri = "http://localhost:3000/login";
   const googleClientId =
      "212792732291-rdqpl8phec3dq4sjs1ia0e3vb16r7gau.apps.googleusercontent.com";
   const spotifyClientId = "3cef3dbad747490d91a765962b8a7b40";
   const spotifyScope =
      "user-read-private user-read-email playlist-read-private playlist-read-collaborative playlist-modify-private user-read-playback-state playlist-modify-public";

   const link = window.location.href.slice();
   const storeUserAuthorizationCode = () => {
      const AuthorizationCode = link.slice(
         link.indexOf("code=") + 5,
         link.indexOf("&", link.indexOf("code="))
      );
      return AuthorizationCode;
   };
   if (link.includes("code=")) {
      sessionStorage.setItem(
         link.includes("google")
            ? "Google_User_AuthorizationCode"
            : "Spotify_User_AuthorizationCode",
         storeUserAuthorizationCode()
      );
   }
   let storedAuthorizationCode = "";
   const GoogleAuthorizationCode = document.cookie.includes("google_session_token");
   const SpotifyAuthorizationCode = document.cookie.includes("spotify_session_token");
   if (GoogleAuthorizationCode || SpotifyAuthorizationCode) {
      storedAuthorizationCode = GoogleAuthorizationCode ? "Youtube" : "Spotify";
      if (GoogleAuthorizationCode && SpotifyAuthorizationCode) {
         storedAuthorizationCode = "YoutubeSpotify";
      }
   }

   useEffect(() => {
      if (GoogleAuthorizationCode && SpotifyAuthorizationCode) {
         navigate("/merge");
      }
   }, []);

   return (
      <div className="loginPage">
         <div id="parent">
            <AuthenticationCard
               Company="Youtube"
               Logo={YoutubeLogo}
               PrimaryColor={"#FF0000"}
               Display={storedAuthorizationCode}
               URL={`http://localhost:8888/login_google`}
            />
            <AuthenticationCard
               Company="Spotify"
               Logo={SpotifyLogo}
               PrimaryColor={"#1DB954"}
               Display={storedAuthorizationCode}
               URL={`http://localhost:8888/login?Youtube`}
            />
         </div>
         <div className="popUp">
            <p>
               {GoogleAuthorizationCode
                  ? `Signed into Youtube \n ${storeUserAuthorizationCode()}`
                  : SpotifyAuthorizationCode
                  ? `Signed into Spotify \n ${storeUserAuthorizationCode()}`
                  : ""}
            </p>
         </div>
      </div>
   );
}

export default App;
