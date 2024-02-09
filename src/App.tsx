// App.tsx
// import  { useState } from "react";
import { Header } from "./App/Components/Header/Header";
import {LandingPage} from "./App/Pages/LandingPage/LandingPage";
import {Footer} from "./App/Components/Footer/Footer";
function App() {

  return (
    <>
      <Header/>
      <LandingPage />
      <Footer/>
      </>
  );
}

export default App;
