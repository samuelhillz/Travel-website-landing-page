import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Destinations from "./components/destinations/Destinations";
import Search from "./components/search/Search";
import Select from "./components/select/Select";
import Imgcarousel from "./components/carousel/Imgcarousel";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Destinations/>
      <Search/>
      <Select/>
      <Imgcarousel/>
      <Footer />
      
    </div>
  );
}

export default App;
