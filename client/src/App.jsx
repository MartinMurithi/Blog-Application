import { Route, Routes } from "react-router-dom";
import "./styles/tailwind.css";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ArticlesPage from "./Pages/ArticlesPage";
import ArticlePage from "./Pages/ArticlePage";
import WritePage from "./Pages/WritePage";
import RegisterOptionsPage from "./Pages/RegisterOptionsPage";
import NavBar from "./Components/NavBar";
import SignInOptionsPage from "./Pages/SignInOptionsPage";
import AccountPage from "./Pages/AccountPage";
import SettingsPage from "./Pages/SettingsPage";
import DashboardPage from "./Pages/DashboardPage";
import ReadingListPage from "./Pages/ReadingListPage";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./Components/PrivateRoute";
import { useEffect } from "react";

function App() {

  return (
    <div>
      <ToastContainer style={{ width: "auto" }} />
      <NavBar />
      <SkeletonTheme baseColor="#e6eaf2" highlightColor="#f0f0f0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/article/:_id" element={<ArticlePage />} />
          <Route path="/signIn" element={<SignInOptionsPage />} />
          <Route path="/register" element={<RegisterOptionsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/readinglist" element={<ReadingListPage />} />
          <Route path="" element={<PrivateRoute/>}>
            <Route path="/write" element={<WritePage />} />
          </Route>
        </Routes>
      </SkeletonTheme>
    </div>
  );
}

export default App;
