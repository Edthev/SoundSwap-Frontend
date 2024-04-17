import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import cors from "cors";
import "./MergePage.scss";
function MergePage() {
   const navigate = useNavigate();
   useEffect(() => {
      if (
         document.cookie.includes("spotify_session_token") &&
         document.cookie.includes("google_session_token")
      ) {
      } else {
         navigate("/login");
      }
   }, []);

   const [playlist, setPlaylist] = useState([null]);
   const [selectedPlaylist, setSelectedPlaylist] = useState(null);
   const [songs, setSongs] = useState(null);
   console.log("songs", songs);
   console.log("playlist", playlist);
   console.log("selectedPlaylist", selectedPlaylist);
   console.log("selectedPlaylist is empty:", selectedPlaylist == null);

   const fetchWebApi = async (endpoint, method, body) => {
      const res = await axios.get(`http://localhost:8888/${endpoint}`);
      return res;
   };
   const getPlaylistSongs = async () => {
      const dataRes = await fetchWebApi(
         `playlist/spotify/songs/${selectedPlaylist.id}`,
         "GET"
      );
      console.log("dataRes", dataRes);
      console.log("dataRes.data", dataRes.data);
      setSongs(dataRes.data.Songs);
      return;
   };
   const getAllPlaylists = async () => {
      const dataRes = await fetchWebApi(`playlists/spotify`, "GET");
      setPlaylist(dataRes.data.Playlists);
      return;
   };

   const handlePlaylistClick = (clickedPlaylist) => {
      setSelectedPlaylist(clickedPlaylist);
   };

   useEffect(() => {
      getPlaylistSongs();
   }, [selectedPlaylist]);

   useEffect(() => {
      getAllPlaylists();
   }, []);

   // TODO button to get playlists(each can be selected)
   // TODO button to get selected playlist songs
   // TODO input for name,image,description,privacy of new playlist
   // TODO button to submit playlist in json format to backend

   // TODO when selectedPlaylist do api call to get song list to display

   return (
      <div className="">
         <h1>Your Spotify Profile Data:</h1>

         <section id="profile">
            <span id="avatar"></span>
            <div>
               {selectedPlaylist == null ? (
                  <p>Please Select Playlist</p>
               ) : (
                  <div className="selectedPlaylist">
                     <div>
                        <img
                           className="selectedPlaylistImage"
                           src={selectedPlaylist.images[0].url}
                        />
                        <h2>{selectedPlaylist.name}</h2>
                     </div>
                     <div className="songList">{}</div>
                     <Link
                        to={`http://localhost:8888/playlist/spotify/songs/${selectedPlaylist.id}`}
                     >
                        Transfer to Youtube
                     </Link>
                  </div>
               )}
            </div>
            <div>
               {playlist == null || playlist[0] == null ? (
                  <p>Loading...</p>
               ) : (
                  playlist.map((singlePlaylist, i) => {
                     return selectedPlaylist == singlePlaylist ? (
                        <div></div>
                     ) : (
                        <div
                           key={singlePlaylist.id}
                           className="row"
                           onClick={() => {
                              handlePlaylistClick(singlePlaylist);
                           }}
                        >
                           <img src={singlePlaylist.images[0].url} />

                           <div>
                              <h3>Title:</h3>
                              <p>{singlePlaylist.name}</p>
                              <h3>Desc: </h3>
                              <p>{`${singlePlaylist.description}`}</p>
                              <Link to={singlePlaylist.href}>Link</Link>
                              <p>ID:{singlePlaylist.id}</p>
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
