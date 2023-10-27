import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider, Outlet, } from "react-router-dom";
import Feed from "./views/Feed.tsx"
import UserProfile from "./views/UserProfile.tsx";
import OwnProfile from "./views/OwnProfile.tsx";
import Registration from "./views/Registration.tsx";
import Login from "./views/Login.tsx";
import LandingPage from "./views/LandingPage.tsx";
import Notifications from "./views/Notifications.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";


function App() {

  const router = createBrowserRouter(

    createRoutesFromElements(

      <Route path="/" element={<Root/>}>
        <Route path="/" element={<LandingPage />} />
        <Route path="feed" element={<Feed />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<UserProfile/>} />
        <Route path="profile" element={<OwnProfile/>}/>
        <Route path="Notifications" element={<Notifications/> } />
      </Route>

    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Outlet/>
    </>
  );
};

const Root = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
