import '../styles/order.css'
import { useLocation } from 'react-router-dom';

const Order = () => 
    {
        let location = useLocation()

    return (
            <div className='order align'>
                <h1>Order</h1>
                <div className='image-mask'>
                    <img src={location.state.dish.imag} alt={location.state.dish.name}/>
                </div>
            </div>
        )
    }
export default Order