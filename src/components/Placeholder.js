import bread from '../assets/images/UnderConstruction.svg'
import '../styles/placeholder.css'

const Placeholder = () =>
{
    return (
        <div id='container'>
            <img src={bread} alt='under construction'/>
            <h1>Sorry, I'm just a slice of bread.</h1>
        </div>
    )
}
export default Placeholder