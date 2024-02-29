// App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./App/Components/Header/Header";
import { LandingPage } from "./App/Pages/LandingPage/LandingPage";
import { Footer } from "./App/Components/Footer/Footer";
import ProductsPage from "./App/Pages/ProductsPage/ProductsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/produtos" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
