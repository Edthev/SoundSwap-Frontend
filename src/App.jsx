import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/FooterComponents/Footer.jsx";
import Header from "./components/HeaderComponents/Header";
import IndexPage from "./pages/IndexPage/IndexPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MergePage from "./pages/MergePage/MergePage";
import CallbackPage from "./pages/CallbackPage/Callback";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import DemoPage from "./pages/DemoPage/DemoPage";
import Logo from "./assets/logo.svg";

function App() {
   return (
      <BrowserRouter>
         <Header Logo={Logo} />
         <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/callback" element={<CallbackPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/merge" element={<MergePage />} />
            <Route path="/demo" element={<DemoPage />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
