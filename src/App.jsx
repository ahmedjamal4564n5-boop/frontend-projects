import { Route, Routes, useLocation } from "react-router";
import BoHeader from "./componet/header/BoHeader";
import TopHeader from "./componet/header/TopHeader";
import Home from "./page/Home/Home";
import ProductDatils from "./page/Home/ProductDatils";
import PageCart from "./page/cart/PageCart";
import { Toaster } from "react-hot-toast";
import PageHeart from "./page/Heart/PageHeart";
import SingeUp from "./page/LogeIN/SingeUp";
import Register from "./page/LogeIN/Register";
import Profile from "./page/Profile/Profile";
import CategoriePage from "./page/Home/categoriePage/CategoriePage";
import CheckOut from "./page/checkout/CheckOut";
import Contact from "./page/contact/Contact";
import About from "./page/about/About";
import SearchResult from "./page/search/SearchResult";
import Footer from "./componet/footer/Footer";

function App() {
  const location = useLocation();

  const hideHeaderRoutes = ["/register", "/login"];

  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && (
        <header>
          <TopHeader />
          <BoHeader />
        </header>
      )}

      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<CheckOut />} />
        <Route path="/category/:category" element={<CategoriePage />} />
        <Route path="/cart" element={<PageCart />} />
        <Route path="/login" element={<SingeUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element ={<Profile />} />
        <Route path="/heart" element={<PageHeart />} />
        <Route path="/products/:id" element={<ProductDatils />} />
      </Routes>
    </>
  );
}

export default App;
