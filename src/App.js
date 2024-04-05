// Assets
import './App.css'
import logo from './logo.svg'
import burger from './assets/icons/burger.svg'
import basket from './assets/icons/basket.svg'

// React Components
import { Routes, Route, Link } from 'react-router-dom'

// Personal Components
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import BookingPage from './components/BookingPage'
import Login from './components/Login'
import Menu from './components/Menu'
import Order from './components/Order'
import ConfirmeBooking from './components/ComfirmeBooking'
import Signin from './components/Signin'
import Signup from './components/Signup'

function App() {

  const handleClick = () => () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className='navback'>
        <nav className='navbar align'>
          <img className='menu-icon' id='mobile' src={burger} alt='menu'/>
          <Link to='/littlelemon' className='logo'><img className='logo' src={logo} alt="logo"/></Link>
          <img className='basket-icon' id='mobile' src={basket} alt='shop'/>
          <div className='links'>
            <Link to='/littlelemon' className='link'>Home</Link>
            <a href='/littlelemon/#about' className='link' onClick={handleClick}>About</a>
            <Link to='/littlelemon/menu' className='link'>Menu</Link>
            <Link to='/littlelemon/booking' className='link'>Reservation</Link>
            <Link to='/littlelemon/order' className='link'>Order Online</Link>
            <Link to='/littlelemon/login' className='link'>Login</Link>
          </div>
        </nav>
      </div>
      <header className='content'>
          <Routes>
              <Route path='/littlelemon' element={<Homepage/>} />
              <Route path='/littlelemon/menu' element={<Menu/>} />
              <Route path='/littlelemon/booking' element={<BookingPage/>} />
              <Route path='/littlelemon/order' element={<Order/>} />
              <Route path='/littlelemon/login' element={<Login/>} />
              <Route path='/littlelemon/littlelemon/confirmed' element={<ConfirmeBooking/>} />
              <Route path='/littlelemon/signin' element={<Signin/>} />
              <Route path='/littlelemon/signup' element={<Signup/>} />
          </Routes>
      </header>
      <Footer/>
    </>
  );
}

export default App;
