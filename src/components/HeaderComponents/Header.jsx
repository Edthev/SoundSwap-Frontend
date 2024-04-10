import "./Header.scss";
import { Link } from "react-router-dom";
function Header({ Logo }) {
   return (
      <div className="header">
         {/* <Logo /> */}
         <Link to="/">Logo</Link>
         <Link to="/login">Login</Link>
         <Link to="/login?signout">Sign Out</Link>
      </div>
   );
}

export default Header;
