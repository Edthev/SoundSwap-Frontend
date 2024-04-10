import "./AuthenticationCard.scss";
import { Link } from "react-router-dom";
function AuthenticationCard({ Logo, Company, PrimaryColor }) {
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
      </div>
   );
}

export default AuthenticationCard;
