import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Contact from "../components/Contact";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";


function Home() {
  return (
    <>

      <Navbar />
      <Hero />

      <div className="w-full h-[1px] bg-gray-400"></div>

      <Features/>

      <div className="w-full h-[1px] bg-gray-400"></div>

      <About/>

      <div className="w-full h-[1px] bg-gray-400"></div>

      <Reviews/>

      <div className="w-full h-[1px] bg-gray-400"></div>

      <Contact/>
    
      <div className="w-full h-[1px] bg-gray-400"></div>

      <Footer/>

    </>
  );
}

export default Home;