import axios from "axios";

function App() {
   const getBackendKey = async () => {
      const res = await axios.get("http://localhost:8888/");
      return res.data.API_Key;
   };
   let KEY = getBackendKey();

   const getYoutubeVideos = async (query) => {
      const queryString = query;
      const res = await axios.get(
         `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${queryString}&type=video&key=${KEY}`
      );
      return res.data.items;
   };
   let searchResult = getYoutubeVideos("Beyonce");
   console.log(searchResult);
   return (
      <div>
         {searchResult.map((video) => {
            return <p>{video.snippet.title}</p>;
         })}
      </div>
   );
}
export default App;
