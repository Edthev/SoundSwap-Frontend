import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LogoutPage(){
    const navigate = useNavigate()
    sessionStorage.clear()
    useEffect(()=>{
        navigate("/")
    },[])
}
export default LogoutPage