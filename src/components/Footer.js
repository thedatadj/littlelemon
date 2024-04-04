import logo2 from '../logo2.png'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer align'>
                <img src={logo2} alt='logo' height="200px"/>
                <div id='foot1'>
                    <h2>Doormat Navigation</h2>
                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Reservation</p>
                    <p>Order Online</p>
                    <p>Login</p>
                </div>
                <div id='foot2'>
                    <h2>Contact</h2>
                    <p>Address</p>
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div id='foot3'>
                    <h2>Social Media Links</h2>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>X</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer