import '../styles/menu.css'
import salad from '../assets/images/greek salad.jpg'
import bruschetta from '../assets/images/bruchetta.svg'
import fish from '../assets/images/grilled-fish.jpg'
import pie from '../assets/images/lemon dessert.jpg'
import wine from '../assets/images/redWine.jpg'
import {useNavigate} from 'react-router-dom'

const items = 
{
    salad:
    {
        name: "Greek Salad",
        desc: "The famous greek salad  of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        pric: "$12.99",
        imag: salad
    },
    bruschetta:
    {
        name: "Bruschetta",
        desc: "Our Bruschetta is made from grilled bread that has been...",
        pric: "$7.99",
        imag: bruschetta
    },
    fish:
    {
        name: "Grilled Fish",
        desc: "The succulent grilled fish, seasoned to perfection with...",
        pric: "$20.99",
        imag: fish
    },
    pie:
    {
        name: "Lemon Pie",
        desc: "The classic lemon pie, a tantalizing treat with a butt...",
        pric: "$6.99",
        imag: pie
    },
    wine:
    {
        name: "Red Wine",
        desc: "Our exquisite red wine selection features a variety....",
        pric: "$6.99",
        imag: wine
    }
}
const Card = ({dish}) =>
{
    const navigate = useNavigate()

    const handleClick = () => navigate('/littlelemon/order', { state: {dish} })
    
    return (
        <div className='one' onClick={handleClick}>
            <div className='two' id='text' >
                <h3> {dish.name} </h3>
                <p> {dish.desc} </p>
                <h4> {dish.pric} </h4>
            </div>
            <div className='two' id='image'>
                <div className='image-container'>
                    <img src={dish.imag} width='100%' alt='dish'/>
                </div>
            </div>
        </div>
    )
}
const Menu = () => {
    
    return (
        <div className='align'>
        <main className='menu floor-0'>
            <div className='floor-1 door-1'>
                <div className='menu-title'>
                    <h1>Menu</h1>
                </div>
            </div>
            <div className='floor-1 door-2'>
                <div className='floor-2 door-1'>
                    <div className='menu-section' id='starters'>
                        <h1>Starters</h1>
                        <div className='box'>
                            <Card dish={items.bruschetta}/>
                        </div>
                    </div>
                    <div className='menu-section' id='desserts'>
                        <h1>Desserts</h1>
                        <div className='box'>
                            <Card dish={items.pie}/>
                        </div>
                    </div>
                </div>
                <div className='floor-2 door-2'>
                    <div className='menu-section' id='main'>
                        <h1>Main</h1>
                        <div className='box'>
                            <Card dish={items.salad}/>
                            <Card dish={items.fish}/>
                        </div>
                    </div>
                    <div className='menu-section' id='drinks'>
                        <h1>Drinks</h1>
                        <div className='box'>
                            <Card dish={items.wine}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
    )
}
export default Menu