import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Navigation from "./components/Navigation";
import './CSS/App.css';


const AppLayout = ()=>(
  <>
    <Navigation/>
    <Outlet/>
      <footer>
        <a href='https://www.instagram.com/michael______n_/'><img className={'FooterLogo'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png" alt="michael's Instegram" title="michael's Instegram"/></a>
        <a href='https://www.facebook.com/profile.php?id=100025581309926'><img className={'FooterLogo'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/640px-Facebook_icon.svg.png" alt="michael's Facbook" title="michael's Facbook"/></a>
        <a href='https://wa.me/587825063'><img className={'FooterLogo'} src="https://www.herzog.ac.il/wp-content/uploads/2017/11/whatsapp-icon-logo-vector.png" alt="michael's WhatsApp" title="michael's WhatsApp"/></a>
      </footer>
  </>
);

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Route>
))


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);