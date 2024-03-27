import salad from '../assets/images/greek salad.jpg'
import lemon from '../assets/images/lemon dessert.jpg'
import bruc from '../assets/images/bruchetta.svg'

const Specials = () => {
    return (
        <div className='specials align'>
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Specials