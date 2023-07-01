import { BrowserRouter as Router, Routes,
  Route } from "react-router-dom";
import React from "react";
import "./assets/css/style.css"
// import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PopularKitchen from "./components/PopularKitchen";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Kitchens from "./components/Kitchens";
import SudhasKitchen from "./components/kitchens/SudhasKitchen";
import KalpnaKitchen from "./components/kitchens/KalpnaKitchen";
import ShriSaiKitchen from "./components/kitchens/ShriSaiKitchen";
import JamaiDaKitchen from "./components/kitchens/JamaiDaKitchen";
import SiddheswariKitchen from "./components/kitchens/SiddheswariKitchen";
import NewDeshapranKitchen from "./components/kitchens/NewDeshapranKitchen";
import ListMenu from './components/ListMenu'

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
        
          <Route path="/" element={<> <Home />
          <About />
          <PopularKitchen />
          <Review />
          <Contact /></>} />
          <Route path="/kitchen" element={<Kitchens />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/sudhaskitchen" element={<SudhasKitchen />} />
          <Route path="/kalpnakitchen" element={<KalpnaKitchen />} />
          <Route path="/shrisaikitchen" element={<ShriSaiKitchen />} />
          <Route path="/jamaidakitchen" element={<JamaiDaKitchen />} />
          <Route path="/siddheswarikitchen" element={<SiddheswariKitchen />} />
          <Route path="/newdeshaprankitchen" element={<NewDeshapranKitchen />} />   
          <Route path="/listmenu" element={<ListMenu />} />     
        </Routes>
      </Router>
      <Footer />

    </>
  );
};

export default App;
