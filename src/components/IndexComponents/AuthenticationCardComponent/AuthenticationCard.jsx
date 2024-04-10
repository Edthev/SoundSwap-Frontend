import "./AuthenticationCard.scss";
import { Link } from "react-router-dom";
function AuthenticationCard({ Logo, Company, PrimaryColor, SecondaryColor }) {
   return (
      <div className="container">
         <img src={Logo} className="logo" />
         <div id="login">
            <h1 className="mainText">Authenticate With {Company}:</h1>
            <Link
               to={"/login?" + Company}
               className="btn btn-primary"
               style={{ backgroundColor: PrimaryColor }}
            >
               Log in with {Company}
            </Link>
         </div>
         <div id="loggedin">
            <div id="user-profile"> </div>
            <div id="oauth"> </div>
            <button className="btn btn-default" id="obtain-new-token">
               Obtain new token using the refresh token
            </button>
         </div>
      </div>
   );
}

export default AuthenticationCard;
