import "./Header.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Header({ Logo }) {
   const [signIn, setSignIn] = useState([null]);
   const [signInLink, setSignInLink] = useState([null]);
   const spotify_session = document.cookie.includes("spotify_session_token");
   const google_session = document.cookie.includes("google_session_token");
   const isSignedInFunctionLink = () => {
      if (spotify_session && google_session) {
         return setSignInLink("/logout");
      } else {
         return setSignInLink("/login");
      }
   };
   const isSignedInFunction = () => {
      if (spotify_session && google_session) {
         return setSignIn("Sign Out");
      } else {
         return setSignIn("Sign In");
      }
   };
   const handleButtonClick = (placeholder) => {
      console.log(placeholder);
   };
   useEffect(() => {
      isSignedInFunction();
      isSignedInFunctionLink();
   }, []);

   // useEffect(() => {

   // }, [signIn]);

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
               onClick={handleButtonClick(signIn)}
               href={
                  /*
                  document.cookie.includes("spotify_session_token") &&
                  document.cookie.includes("google_session_token")
                     ? "/logout"
                     : "/login"
                  */
                  signInLink
               }
            >
               {
                  /*
               document.cookie.includes("spotify_session_token") &&
               document.cookie.includes("google_session_token")
                  ? "Sign Out"
                  : "Sign In"
                  */
                  signIn
               }
            </a>
         </div>
      </div>
   );
}

export default Header;
