import "./AuthenticationCard.scss";
import { Link } from "react-router-dom";
import LoggedIn from "../LoggedInComponents/LoggedIn";
function AuthenticationCard({ Logo, Company, PrimaryColor, Display, URL }) {
   return (
      <>
         <div
            className="container"
            style={Display.includes(Company) ? { display: "none" } : { color: "white" }}
         >
            <img src={Logo} className="logo" />
            <div id="login">
               <h1 className="mainText">Authenticate With {Company}:</h1>
               <Link
                  to={URL}
                  className="btn btn-primary"
                  style={{ backgroundColor: PrimaryColor }}
               >
                  Log in with {Company}
               </Link>
               <p>
                  Tokens:{Display} {Display == Company}
               </p>
            </div>
         </div>
         <LoggedIn />
      </>
   );
}

export default AuthenticationCard;
