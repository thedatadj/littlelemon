import './App.css';
import { ChakraProvider } from "@chakra-ui/react"

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import Specials from './components/Specials'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <Hero />
        <Specials />
        <Testimonials />
        <About />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
