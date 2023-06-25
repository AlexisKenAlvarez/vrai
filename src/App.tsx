import Nav from "./components/Nav";
import About from "./views/About";
import Gameplay from "./views/Gameplay";
import Hero from "./views/Hero";

const App = () => {
    return (
        <section className="w-full h-auto relative text-white font-opensans">
            <Nav />
            <Hero />
            <About />
            <Gameplay />
        </section>
    );
}

export default App;