import image1 from '../assets/images/restauranfood.jpg'
import { Link } from 'react-router-dom'
import '../styles/hero.css'

const Hero = () => {
    return (
        <div className='hero-parent'>
        <div className='hero align'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owened Mediterranean
                restaurant, focused on traditional
                recipes served with a modern twist.
            </p>
            <div className='crop'>
                <img className='image' src={image1} width="100%" alt='hero'/>
            </div>
            <button ><Link to='/littlelemon/booking' className='reserve-button'><span>Reserve a table</span></Link></button>
        </div>
        </div>
    )
}
export default Hero