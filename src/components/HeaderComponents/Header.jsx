import "./Header.scss";
import { Link } from "react-router-dom";
function Header({ Logo }) {
   return (
      <div className="header">
         {/* <Logo /> */}
         <Link to="/">
            <img className="mylogo" src={Logo} />
         </Link>
         {/* <Link to="/login">Login</Link> */}
         <Link to="/logout">Sign Out</Link>
         <Link to="/merge">Merge</Link>
      </div>
   );
}

export default Header;
