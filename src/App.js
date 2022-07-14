import React from "react";
import { BrowserRouter,  Link,  Route, Routes } from "react-router-dom";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Navigation from './components/Navigation';
// import Hook1 from "./Hooks/Hook1";
// import Arrayhooks from "./Hooks/Arrayhooks";
// import SpreadOperator from './Hooks/SpreadOperator';
import Foms from "./Hooks/FORM/Foms";
import UseEffects from './Hooks/UseEffects';
import Chats from './Hooks/Chats';
import CleanUp from './Hooks/CleanUp';
import FetchApi from './Hooks/FetchApi';
import CoronaCase from './Hooks/apii/CoronaCase';
// import ImageApi from "./Hooks/ImageApi";
import Home from './bootstrap5/Home';
import About from './bootstrap5/About'
import Services from './bootstrap5/Services';
import Gallery from './bootstrap5/Gallery';
import Contact from './bootstrap5/Contact';
import Carasoul from './bootstrap5/Carasoul';
import LastSec from './bootstrap5/LastSec';
import Footer from './bootstrap5/Footer';
// import Contact from './Contact';
// import IncDec from './Hooks/IncDec';
// import UseReducer from './Hooks/UseReducer';
// import ConA from './Hooks/context/ConA';
// import FormOne from './components/FORM/FormOne';
// import FormTwo from "./components/FORM/FormTwo";
// import FormTree from "./components/FORM/FomTree";
// import Dumi from "./components/FORM/Dumi";
// import FirstWork from "./components/Complete_WEB_Responsive/my_work/FirstWork";
//  import Homes from "./components/Pages/Homes";
//  import Abouts from "./components/Pages/Abouts";
//  import Contacts from "./components/Pages/Contacts";
//  import Navigations from "./components/Layout/Navigations";
//  import AddUsers from "./components/USERS/AddUsers";
//  import EditUsers from "./components/USERS/EditUsers";
const App=()=> {
  return (
    <div>
   <BrowserRouter>
   
   {/* <Navigation/> */}
<Routes>
{/* <Route element={<Home/>} path="/"/>
<Route element={<About/>} path="/about"/>
<Route element={<Product/>} path="/Product"/>
<Route element={<Cart/>} path="/Cart"/>
<Route element={<Hook1/>} path="/Hook1"/>
<Route element={<Arrayhooks/>} path="/Arrayhooks"/>
<Route element={<SpreadOperator/>} path="/SpreadOperator"/> */}
<Route element={<Foms/>} path="/Foms" /> 
<Route element={<UseEffects/>} path="/UseEffects" /> 
<Route element={<Chats/>} path="/Chats" /> 
<Route element={<CleanUp/>} path="/CleanUp" /> 
<Route element={<FetchApi/>} path="/FetchApi" /> 
<Route element={<CoronaCase/>} path="/CoronaCase" /> 
{/* <Route element={<ImageApi/>} path="/ImageApi"/> */}
<Route element={<Home/>} path="/Home" /> 
<Route element={<About/>} path="/About" /> 
<Route element={<Contact/>} path="/Contact" /> 
<Route element={<Gallery/>} path="/Gallery" /> 
<Route element={<Services/>} path="/Services" /> 
<Route element={<Carasoul/>} path="/Carasoul" /> 
<Route element={<LastSec/>} path="/LastSec" /> 
<Route element={<Footer/>} path="/Footer" /> 
{/* <Route element={<IncDec/>} path="/IncDec" /> 
<Route element={<UseReducer/>} path="/UseReducer" /> 
<Route element={<ConA/>} path="/ConA" /> 
<Route element={<FormOne/>} path="/FormOne"/>
<Route element={<FormTwo/>} path="/FormTwo"/>
<Route element={<FormTree/>} path="FormTree"/>
<Route element={<Dumi/>} path="Dumi"/>
<Route element={<FirstWork/>} path="FirstWork"/>*/}
{/* <Route element={<Homes/>} path="Homes"/> 
<Route element={<Abouts/>} path="/Abouts" /> 
<Route element={<Contacts/>} path="/Contacts" /> 
<Route element={<Navigations/>} path="/Navigations" />
<Route element={<AddUsers/>} path="/AddUsers" />
<Route element={<EditUsers/>} path="/EditUsers/:id" /> */}
</Routes>

</BrowserRouter>


    {/* <Home/>Q  `
    <About/> */}
    </div>
  );
}

export default App;
