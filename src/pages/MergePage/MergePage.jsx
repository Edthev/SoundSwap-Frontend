import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MergePage() {
   const navigate = useNavigate();
   const GoogleToken = sessionStorage.getItem("Google_User_Token");
   const SpotifyToken = sessionStorage.getItem("Spotify_User_Token");
   useEffect(()=>{
      if(GoogleToken && SpotifyToken){
         return
      }
      navigate("/login")
   },[])
   return (
      <div className="">
         <h1>merge page</h1>
      </div>
   );
}

export default MergePage;
