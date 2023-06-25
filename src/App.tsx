import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./views/About";
import Adventure from "./views/Adventure";
import Casino from "./views/Casino";
import Gameplay from "./views/Gameplay";
import Guess from "./views/Guess";
import Hero from "./views/Hero";
import Roadmap from "./views/Roadmap";
import Token from "./views/Token";

const App = () => {
    return (
        <section className="w-full h-auto relative text-white font-opensans">
            <Nav />
            <Hero />
            <About />
            <Gameplay />
            <Guess />
            <Adventure />
            <Casino />
            <Token />
            <Roadmap />
            <Footer />
        </section>
    );
}

export default App;