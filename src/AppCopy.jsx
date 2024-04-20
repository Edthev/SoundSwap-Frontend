import "./App.css";
import axios from "axios";
import { useState } from "react";

const getBackendKey = async () => {
   const res = await axios.get("http://localhost:8888/");
   return res.data.API_Key;
};
let KEY = await getBackendKey();

const getYoutubeVideos = async (query) => {
   const queryString = query;
   const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${queryString}&type=video&key=${KEY}`
   );
   return res.data.items;
};
let searchResult = await getYoutubeVideos("Michael Jackson");
console.log("test", searchResult);
const functionToDisplay = () => {
   return (
      <>
         <div>
            <form>
               <input placeholder="Look Up Songs" />
               <button>Search</button>
            </form>
         </div>
         <div>
            {searchResult.map((video) => {
               return <h1>{video.snippet.title}</h1>;
            })}
         </div>
      </>
   );
};
export default functionToDisplay;
