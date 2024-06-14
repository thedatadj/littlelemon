// Assets
import './App.css'
import logo from './logo.svg'
import basket from './assets/icons/basket.svg'
import menuOpen from './assets/icons/burger.svg'
import menuClose from './assets/icons/Multiply.svg'

// React Components
import { Routes, Route, Link } from 'react-router-dom'

// Personal Components
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import BookingPage from './components/BookingPage'
import Login from './components/Login'
import Menu from './components/Menu'
import ConfirmeBooking from './components/ComfirmeBooking'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Order from './components/Order'

// Functions
import { useState } from 'react'

// Variables
var menuIcon = menuOpen

function App() {
  var [state, setState] = useState('100')
  const handleClick = () => () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleMenu = () =>
  {
    if (state === "100") {
      setState('0')
      menuIcon = menuClose
    } else if (state === "0") {
      setState("100")
      menuIcon = menuOpen
    }
    console.log(state)
  }

  return (
    <>
      <div className='navback'>
        
        <img className='basket-icon' id='mobile' src={basket} alt='shop'/>

        <Link id='mobile' to='/littlelemon' className='logo'><img className='logo' src={logo} alt="logo"/></Link>

        <button 
          className='mobile-nav-toggle'
          aria-controls='primary-nav'
          onClick={handleMenu}
        ><img src={menuIcon} alt='menu' width='100%'/></button>

        <nav
          id='primary-nav' 
          className='navbar align'
          visible={`${state}`}
        >
          <Link id='desktop' to='/littlelemon' className='logo'><img className='logo' src={logo} alt="logo"/></Link>
          
          <div className='links'>
            <Link id='mobile' to='/littlelemon' className='logo'><img className='logo' src={logo} alt="logo"/></Link>
            <Link to='/littlelemon' className='link'>Home</Link>
            <a href='/littlelemon/#about' className='link' onClick={handleClick}>About</a>
            <Link to='/littlelemon/menu' className='link'>Order Online</Link>
            <Link to='/littlelemon/booking' className='link'>Reservation</Link>
            <Link to='/littlelemon/login' className='link'>Login</Link>
          </div>

        </nav>
      </div>
      <main className='content'>
          <Routes>
              <Route path='/littlelemon' element={<Homepage/>} />
              <Route path='/littlelemon/menu' element={<Menu/>} />
              <Route path='/littlelemon/booking' element={<BookingPage/>} />
              <Route path='/littlelemon/login' element={<Login/>} />
              <Route path='/littlelemon/littlelemon/confirmed' element={<ConfirmeBooking/>} />
              <Route path='/littlelemon/signin' element={<Signin/>} />
              <Route path='/littlelemon/signup' element={<Signup/>} />
              <Route path='/littlelemon/order' element={<Order />} />
          </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
