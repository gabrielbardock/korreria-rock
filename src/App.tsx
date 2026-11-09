import About from "./components/About/About";
import Agenda from "./components/Agenda/Agenda";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Members from "./components/Members/Members";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Members />
        <Agenda />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
