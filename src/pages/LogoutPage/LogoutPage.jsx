import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LogoutPage() {
   const navigate = useNavigate();
   function clearAllCookies() {
      const cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
         var cookie = cookies[i];
         var eqPos = cookie.indexOf("=");
         var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
         document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
   }

   // Call the function to clear all cookies
   clearAllCookies();

   //    document.cookie.clear();
   useEffect(() => {
      navigate("/");
   }, []);
}
export default LogoutPage;
