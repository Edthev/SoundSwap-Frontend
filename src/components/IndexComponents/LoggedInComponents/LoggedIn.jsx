function LoggedIn({ Logo, Company, PrimaryColor, Display }) {
   return (
      <div id="loggedin">
         <div id="user-profile">
            <h3>Display Name: </h3>
            <h3>{Company} ID: </h3>
            <h3>Email: </h3>
            <h3>Link: </h3>
            <h3>Pfp: </h3>
         </div>
         <div id="oauth">
            <h3>Access Token: </h3>
            <h3>Refresh Token: </h3>
         </div>
         <button className="btn btn-default" id="obtain-new-token">
            Obtain new token using the refresh token
         </button>
      </div>
   );
}
export default LoggedIn;
