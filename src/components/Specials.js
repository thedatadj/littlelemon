import salad from '../assets/images/greek salad.jpg'
import lemon from '../assets/images/lemon dessert.jpg'
import bruc from '../assets/images/bruchetta.svg'
import { Link } from 'react-router-dom'
import '../styles/specials.css'
import { useNavigate } from 'react-router-dom'

const data = 
{
    salad:
    {
        name: "Greek Salad",
        desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "£12.99"
    },
    bruchetta:
    {
        name: "Bruchetta",
        desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "£7.99"
    },
    lemon:
    {
        name: "Lemon Dessert",
        desc: 
            `This comes straight from
            grandma’s recipe book, every
            last ingredient has been sourced
            and is as authentic as can be imagined.`,
        price: "£20.00"
    }
}

const Specials = () => {
    const navigate = useNavigate()
    const handleClick = (name) =>
    {
        if (name === "Greek Salad") {
            navigate('/littlelemon/order')
        } else if (name === "Bruchetta") {
            navigate('/littlelemon/order')
        }
    }
    return (
        <div className='specials align'>
            <h1 id='desktop'>This weeks specials!</h1>
            <h2 id='mobile'>ORDER FOR DELIVERY!</h2>
            <button><Link to='/menu' className='reserve-button'>Online Menu</Link></button>
            <div className='cards'>
                <div className='card salad' onClick={() => handleClick(data.salad.name)}>
                    <div className='card-image'>
                        <img src={salad} width="100%" alt='salad'/>
                    </div>
                    <div className='card-des'>
                        <h3>{data.salad.name}</h3>
                        <p>{data.salad.desc}</p>
                        <h4>Order a delivery</h4>
                        <h3 id='mobile' className='price'>{data.salad.price}</h3>
                    </div>
                </div>
                <div className='card' onClick={() => handleClick(data.bruchetta.name)}>
                    <div className='card-image'>
                        <img src={bruc} width="100%" alt='bruchetta'/>
                    </div>
                    <div className='card-des'>
                        <h3>{data.bruchetta.name}</h3>
                        <p>{data.bruchetta.desc}</p>
                        <h4>Order a delivery</h4>
                        <h3 id='mobile' className='price'>{data.bruchetta.price}</h3>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={lemon} width="100%" alt='lemon'/>
                    </div>
                    <div className='card-des'>
                        <h3>{data.lemon.name}</h3>
                        <p>{data.lemon.desc}</p>
                        <h4>Order a delivery</h4>
                        <h3 id='mobile' className='price'>
                            {data.lemon.price}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Specials