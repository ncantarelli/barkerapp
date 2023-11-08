import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider, Outlet, } from "react-router-dom";
import Feed from "./views/Feed.tsx"
import VisitedProfile from "./views/VisitedProfile.tsx";
import UserPage from "./views/UserPage.tsx";
import Registration from "./views/Registration.tsx";
import Login from "./views/Login.tsx";
import LandingPage from "./views/LandingPage.tsx";
import Notifications from "./views/Notifications.tsx";
import Sidebar from "./components/Sidebar.tsx";
// import Footer from "./components/Footer.tsx";
import About from "./views/About.tsx";
// import Navbar from "./components/Navbar.tsx";
import ErrorPage from "./views/ErrorPage.tsx";
import "./style/app-styles.css" 
import SuggestionBox from "./components/SuggestionBox.tsx";
import { useEffect, useState } from "react";


function App() {
  // console.log("app working");


  const router = createBrowserRouter(

    createRoutesFromElements(

      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index path="/" element={<Feed />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="user/:user" element={<VisitedProfile />} />
        <Route path="profile" element={<UserPage />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="about" element={<About />} />
        {/* <Route path="*" element={<ErrorPage/> } /> */}
      </Route>

    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  );
};

const Root = () => {
  return (
    <div className="AppContainer">
      <Sidebar />
      <div className="ContentSection">
        {/* <Navbar /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
      <div>
          <SuggestionBox />
      </div>
    </div>
  );
};

export default App
