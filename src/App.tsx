import Nav from "./components/Nav";
import About from "./views/About";
import Adventure from "./views/Adventure";
import Gameplay from "./views/Gameplay";
import Guess from "./views/Guess";
import Hero from "./views/Hero";

const App = () => {
    return (
        <section className="w-full h-auto relative text-white font-opensans">
            <Nav />
            <Hero />
            <About />
            <Gameplay />
            <Guess />
            <Adventure />
        </section>
    );
}

export default App;