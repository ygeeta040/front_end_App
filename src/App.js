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
import ImageApi from "./Hooks/ImageApi";

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
<Route element={<ImageApi/>} path="/ImageApi"/>
</Routes>

</BrowserRouter>


    {/* <Home/>Q  `
    <About/> */}
    </div>
  );
}

export default App;
