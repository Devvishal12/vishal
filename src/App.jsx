import Hero from './sections/Hero.jsx';
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/Navar.jsx";
import LogoShowcase from "./sections/LogoShowcase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Experience from "./sections/Experience.jsx";
import TechStack from "./sections/TechStack.jsx";
import Footer from "./sections/Footer.jsx";


const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoShowcase />
            <FeatureCards />
            <Experience />
            <TechStack />
            <Footer/>
        </>
    );
};

export default App;