import salad from '../assets/images/greek salad.jpg'
import lemon from '../assets/images/lemon dessert.jpg'
import bruc from '../assets/images/bruchetta.svg'
import { Link } from 'react-router-dom'
import '../styles/specials.css'

const Specials = () => {
    return (
        <div className='specials align'>
            <h1 id='desktop'>This weeks specials!</h1>
            <h2 id='mobile'>ORDER FOR DELIVERY!</h2>
            <button><Link to='/menu' className='reserve-button'>Online Menu</Link></button>
            <div className='cards'>
                <div className='card salad'>
                    <div className='card-image'>
                        <img src={salad} width="100%" alt='salad'/>
                    </div>
                    <div className='card-des'>
                        <h3>Greek Salad</h3>
                        <p>The famous greek salad of crispy
                            lettuce, peppers, olives and our
                            Chicago style feta cheese, garnished
                            with crunchy garlic and rosemary croutons.
                        </p>
                        <h4>Order a delivery</h4>
                        <h3 id='mobile' className='price'>$12.99</h3>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={bruc} width="100%" alt='bruchetta'/>
                    </div>
                    <div className='card-des'>
                        <h3>Bruchetta</h3>
                        <p>Our Bruschetta is made from
                            grilled bread that has been
                            smeared with garlic and seasoned
                            with salt and olive oil.
                        </p>
                        <h4>Order a delivery</h4>
                        <h3 id='mobile' className='price'>$7.99</h3>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={lemon} width="100%" alt='lemon'/>
                    </div>
                    <div className='card-des'>
                        <h3>Lemon Dessert</h3>
                        <p>This comes straight from
                            grandma’s recipe book, every
                            last ingredient has been sourced
                            and is as authentic as can be imagined.
                        </p>
                        <h4>Order a delivery</h4>
                        <h3 id='mobile' className='price'>$20.00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Specials