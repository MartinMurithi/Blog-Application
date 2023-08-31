import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import "./styles/tailwind.css";
import AboutUs from "./Pages/AboutUs";
import Articles from "./Pages/Articles";
import ArticlePage from "./Pages/ArticlePage";
import Write from "./Pages/Write";
import RegisterOptions from "./Pages/RegisterOptions";
import NavBar from "./Components/NavBar";
import SignInOptions from "./Pages/SignInOptions";
import { SkeletonTheme } from "react-loading-skeleton";
import {ToastContainer} from "react-toastify";
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer style={{width : 'auto'}}/>
      <NavBar />
      <SkeletonTheme baseColor="#e6eaf2" highlightColor="#f0f0f0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:_id" element={<ArticlePage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/signIn" element={<SignInOptions />} />
          <Route path="/register" element={<RegisterOptions />} />
        </Routes>
      </SkeletonTheme>
      
    </div>
  );
}

export default App;
