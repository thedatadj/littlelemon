import '../styles/homepage.css'

import Specials from './Specials'
import Testimonials from './Testimonials'
import About from './About'
import Hero from './Hero'

const Homepage = () => {
    return (
        <main className='home'>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>
    )
}

export default Homepage