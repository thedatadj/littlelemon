import '../styles/menu.css'
import salad from '../assets/images/greek salad.jpg'
import bruschetta from '../assets/images/bruchetta.svg'
import fish from '../assets/images/grilled-fish.jpg'
import pie from '../assets/images/lemon dessert.jpg'

const items = 
{
    salad:
    {
        name: "Greek Salad",
        desc: "The famous greek salad of crispy lettuce, peppers, olives and our...",
        pric: "$12.99",
        imag: salad
    },
    bruschetta:
    {
        name: "Bruschetta",
        desc: "Our Bruschetta is made from grilled bread that has been smea...",
        pric: "$7.99",
        imag: bruschetta
    },
    fish:
    {
        name: "Grilled Fish",
        desc: "The succulent grilled fish, seasoned to perfection with a ble...",
        pric: "$20.99",
        imag: fish
    },
    pie:
    {
        name: "Lemon Pie",
        desc: "The classic lemon pie, a tantalizing treat with a buttery grah...",
        pric: "$6.99",
        imag: pie
    }
}
const Card = ({dish}) =>
{
    return (
        <div className='one' >
            <div className='two' >
                <h3> {dish.name} </h3>
                <p> {dish.desc} </p>
                <h3> {dish.pric} </h3>
            </div>
            <div className='two' id='image'>
                <img src={dish.imag} width="100%" alt='dish'/>
            </div>
        </div>
    )
}
const Menu = () => {
    return (
        <main className='menu align'>
            <div className='menu-title'>
                <h1>Menu</h1>
            </div>
            <div className='menu-section' id='starters'>
                <h1>Starters</h1>
                <div className='box'>
                    <Card dish={items.bruschetta}/>
                </div>
            </div>
            <div className='menu-section' id='main'>
                <h1>Main</h1>
                <div className='box'>
                    <Card dish={items.salad}/>
                    <Card dish={items.fish}/>
                </div>
            </div>
            <div className='menu-section' id='desserts'>
                <h1>Desserts</h1>
                <div className='box'>
                    <Card dish={items.pie}/>
                </div>
            </div>
            <div className='menu-section' id='drinks'>
                <h1>Drinks</h1>
                <div className='box'></div>
            </div>
        </main>
    )
}
export default Menu