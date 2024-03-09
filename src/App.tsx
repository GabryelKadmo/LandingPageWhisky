// App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./App/Components/Header/Header";
import { LandingPage } from "./App/Pages/LandingPage/LandingPage";
import { Footer } from "./App/Components/Footer/Footer";
import AboutPage from "./App/Pages/AboutPage/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/produtos" element={<ProductsPage />} /> */}
          <Route path="/sobre" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
