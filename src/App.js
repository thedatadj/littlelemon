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
import Order from './components/Order'
import ConfirmeBooking from './components/ComfirmeBooking'
import Signin from './components/Signin'
import Signup from './components/Signup'

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
  }

  // element styles
  const navStyle = 
  {
    position: "fixed",
    inset: "0 0 0 16%",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
    transform: `translateX(${state}%)`,
    transition: "transform 350ms ease-out",
    backgroundColor: "hsl(0 0% 100% / 0.1)",
    backdropFilter: "blur(2rem)",
  }
  const buttonStyle = 
  {
    display: "block",
    zIndex: 9999,
    position: "absolute",
    background: "none",
    backgroundRepeat: "no-repeat",
    width:"5svh",
    aspectRatio: 1,
    top: "2.5svh",
    right: "4vw",
    borderRadius: 0,
  }

  return (
    <>
      <div className='navback'>
        
        <img className='basket-icon' id='mobile' src={basket} alt='shop'/>

        <Link to='/littlelemon' className='logo'><img className='logo' src={logo} alt="logo"/></Link>

        <button 
          className='mobile-nav-toggle'
          aria-controls='primary-nav' 
          aria-expanded="false"
          onClick={handleMenu}
          style={buttonStyle}
        ><img src={menuIcon} alt='menu' width='100%'/></button>

        <nav
          id='primary-nav' 
          className='navbar align' 
          style={navStyle}
        >
          <div className='links'>
          <Link to='/littlelemon' className='logo'><img className='logo' src={logo} alt="logo"/></Link>
            <Link to='/littlelemon' className='link'>Home</Link>
            <a href='/littlelemon/#about' className='link' onClick={handleClick}>About</a>
            <Link to='/littlelemon/menu' className='link'>Menu</Link>
            <Link to='/littlelemon/booking' className='link'>Reservation</Link>
            <Link to='/littlelemon/order' className='link'>Order Online</Link>
            <Link to='/littlelemon/login' className='link'>Login</Link>
          </div>

        </nav>
      </div>
      <main className='content'>
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
      </main>
      <Footer/>
    </>
  );
}

export default App;
