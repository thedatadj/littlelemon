import '../styles/order.css'
import { useLocation } from 'react-router-dom';


const Order = () => 
    {
        let location = useLocation()

    return (
            <div className='order align'>
                <h1>Order</h1>
                <div className='crop2'>
                    <img 
                        src={location.state.dish.imag}
                        alt={location.state.dish.name} /> </div>
                <Details props={location.state}/>
                <Amount />
                <Button props={location.state}/>
            </div>
        )
    }

const Details = ({props}) =>
    {
        return (
            <div className='order-details'>
                <div id='left'>
                    <h2 id='food-title'>{props.dish.name.toUpperCase()}</h2>
                    <h2 id='food-price'>{props.dish.pric}</h2>
                    <p id='food-desc'>{props.dish.desc}</p>
                    <h4 id='delivery'>Delivery 20 mins</h4>
                </div>
                <div id='right'>
                    <h3>Add+</h3>
                    <p>Avocado £1.00</p>
                    <p>Seeds £1.00</p>
                    <p>Dressings £1.00</p>
                </div>
            </div>
        )
    }

const Amount = () =>
    {
        return (
            <div className='toggle'> 
                <button>-</button>
                <span>{1}</span>
                <button>+</button>
            </div>
        )
    }

const Button = ({props}) =>
    {
        return (
            <button className='order-button'>Add for {props.dish.pric}</button>
        )
    }

export default Order