import Hero from "./sections/Hero.jsx";
import ShowcaseSections from "./sections/ShowcaseSections.jsx";
import NavBar from "./components/Navbar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Experience from "./sections/Experience.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import AboutMe from "./sections/AboutMe.jsx";

const App = () => {
  return (
    <>
      <NavBar/>      
      <Hero/>
      <AboutMe/>
      <ShowcaseSections/>
      <FeatureCards/>
      <Experience/>
      <TechStack/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App