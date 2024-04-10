function LoggedIn() {
   return (
      <div id="loggedin">
         <div id="user-profile"> </div>
         <div id="oauth"> </div>
         <button className="btn btn-default" id="obtain-new-token">
            Obtain new token using the refresh token
         </button>
      </div>
   );
}
export default LoggedIn;
