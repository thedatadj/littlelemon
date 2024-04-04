import image1 from '../assets/images/restaurant chef B.jpg'
import image2 from '../assets/images/restaurant.jpg'
import '../styles/about.css'

const About = () => {
    return (
        <div className='about align' id='about'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned
                Mediterranean restaurant,
                focused on traditional
                recipes served with a modern
                twist. </p>
            <div className='about-image'>
                <div className='n1'><img src={image2} height="220px" alt='restaurant'/></div>
                <div className='n2'><img src={image1} height="220px" alt='chef'/></div>
            </div>
        </div>
    )
}
export default About