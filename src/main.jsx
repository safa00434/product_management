import { StrictMode } from "react";
import "./Bloomy.css";
import Header from "./composents/Header.jsx";
import Hero from "./Hero.jsx";
import Footer from "./composents/footer.jsx";

import { createRoot } from "react-dom/client";
 
createRoot(document.getElementById('root')).render(
   <StrictMode>
    <Header/>
    <Hero/>
    <Footer/>
   </StrictMode>

)
   

 