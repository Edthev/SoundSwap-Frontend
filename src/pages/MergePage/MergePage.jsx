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
         console.log("clearing cookies");
         document.cookie = "google_auth_state=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
         navigate("/login");
      }
   });

   const [playlist, setPlaylist] = useState([null]);
   const [selectedPlaylist, setSelectedPlaylist] = useState(null);
   const [songs, setSongs] = useState(null);
   console.log("songs", songs);
   console.log("playlist", playlist);
   console.log("selectedPlaylist", selectedPlaylist);
   console.log("selectedPlaylist is empty:", selectedPlaylist == null);
   console.log("cookies", document.cookie);
   const fetchWebApi = async (endpoint, method, body) => {
      console.log("fetching backend");
      const res = await axios.get(`http://localhost:8888/${endpoint}`);
      return res;
   };
   const cookies = document.cookie.split(";");
   console.log(cookies[0]);
   const getAllPlaylists = async () => {
      console.log("fetching backend for playlists...");
      try {
         const dataRes = await fetchWebApi(`playlists/spotify?${cookies[0]}`, "GET");
         console.log("...done getting playlists");
         const playlistArray = dataRes.data.playlists;
         console.log("playlists", playlistArray);
         setPlaylist(playlistArray);
         console.log(playlist);
         console.log("data", dataRes.data.playlists);
      } catch (error) {
         console.log(error);
      }
      return;
   };

   const handlePlaylistClick = async (clickedPlaylist) => {
      setSelectedPlaylist(clickedPlaylist);
      console.log("Selected", clickedPlaylist.name);
      try {
         await axios
            .get(
               `http://localhost:8888/songs/spotify?playlistID=${clickedPlaylist.id}&${cookies[0]}`
            )
            .then((song) => {
               console.log("song.length", song.data.Songs.length);
               setSongs(song.data.Songs);
            });
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      // getPlaylistSongs();
   }, [selectedPlaylist]);

   useEffect(() => {
      console.log("Get playlists...");
      getAllPlaylists();
      console.log("...done");
   }, []);

   // TODO button to get playlists(each can be selected)
   // TODO button to get selected playlist songs
   // TODO input for name,image,description,privacy of new playlist
   // TODO button to submit playlist in json format to backend

   // TODO when selectedPlaylist do api call to get song list to display

   return (
      <div className="">
         <section id="profile">
            <span id="avatar"></span>
            <div>
               {selectedPlaylist == null ? (
                  <p>Please Select Playlist</p>
               ) : (
                  <div className="selectedPlaylist" key={selectedPlaylist.id}>
                     <div className="selectedPlaylistAndSongs">
                        <div>
                           <img
                              className="selectedPlaylistImage"
                              src={selectedPlaylist.images[0].url}
                           />
                           <h2>{selectedPlaylist.name}</h2>
                        </div>
                        <div className="songList">
                           {!songs
                              ? "no songs found"
                              : songs.map((song) => {
                                   console.log(song);
                                   return <p>{song}</p>;
                                })}
                        </div>
                     </div>
                     <Link
                        className="transferButton"
                        to={`http://localhost:8888/songs/youtube?playlistID=${selectedPlaylist.id}&${cookies[0]}&playlistName=${selectedPlaylist.name}`}
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
                     // console.log("singlePlaylist", singlePlaylist);
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
