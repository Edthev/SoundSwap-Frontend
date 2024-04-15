import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import cors from "cors";
import "./MergePage.scss";
function MergePage() {
   const [playlist, setPlaylist] = useState(null);
   const [selectedPlaylist, setSelectedPlaylist] = useState(null);
   const navigate = useNavigate();
   const cookies = document.cookie;
   function getCookie(cookieName) {
      const name = cookieName + "=";
      const decodedCookies = decodeURIComponent(cookies);
      const cookieArray = decodedCookies.split(";");
      for (let i = 0; i < cookieArray.length; i++) {
         let cookie = cookieArray[i];
         while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
         }
         if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
         }
      }
      return "";
   }

   let token = window.location.href.split("=")[1];
   async function fetchWebApi(endpoint, method, body) {
      const res = await fetch(`https://api.spotify.com/${endpoint}`, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
         method,
         body: JSON.stringify(body),
      });
      return await res.json();
   }
   async function getAllPlaylists() {
      // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
      return (await fetchWebApi("v1/me/playlists", "GET")).items;
   }
   const selectMainPlaylist = (id) => {
      setSelectedPlaylist(id);
   };

   useEffect(() => {
      const getPlaylists = async () => {
         const res = await getAllPlaylists();
         console.log("res:", res);
         setPlaylist(res);
      };
      getPlaylists();
   }, []);

   // TODO button to get playlists(each can be selected)
   // TODO button to get selected playlist songs
   // TODO input for name,image,description,privacy of new playlist
   // TODO button to submit playlist in json format to backend

   return (
      <div className="">
         <h1>Your Spotify Profile Data:</h1>

         <section id="profile">
            <h2>
               Logged in as <span id="displayName">{getCookie("display_name")}</span>
            </h2>
            <span id="avatar"></span>
            <div>
               {selectedPlaylist === null ? (
                  <p></p>
               ) : (
                  <p>Selected Playlist:{selectedPlaylist}</p>
               )}
            </div>
            <div>
               User ID: <span id="id">{getCookie("id")}</span>
            </div>
            <p>Spotify Link:</p>
            <a id="uri" href={"https://open.spotify.com/user/" + getCookie("id")}>
               link
            </a>
            <div>
               {playlist == null ? (
                  <p>Loading...</p>
               ) : (
                  playlist.map((single, i) => {
                     return (
                        <div key={i} className="row">
                           <img src={single.images[0].url} />
                           <div>
                              <h3>Title:</h3>
                              <p>{single.name}</p>
                              <h3>Desc: </h3>
                              <p>{`${single.description}`}</p>
                              <Link to={single.href}>Link</Link>
                           </div>
                        </div>
                     );
                  })
               )}
            </div>
         </section>
      </div>
   );
}

export default MergePage;
