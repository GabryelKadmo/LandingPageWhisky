// App.tsx
// import  { useState } from "react";
import { Header } from "./App/Components/Header/Header";
import {LandingPage} from "./App/Pages/LandingPage/LandingPage";
import {Footer} from "./App/Components/Footer/Footer";
import {Brands} from "./App/Components/BrandSection/Brands";
function App() {

  return (
    <>
      <Header/>
      <LandingPage />
      <Brands/>
      <Footer/>
      </>
  );
}

export default App;
