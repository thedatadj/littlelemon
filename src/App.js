import './App.css'
import logo from './logo.svg'
import { Routes, Route, Link } from 'react-router-dom'

// Components
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import BookingPage from './components/BookingPage'

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
          <img className='logo' src={logo} alt="logo"/>
          <div className='links'>
            <Link to='/' className='link'>Home</Link>
            <a href='/#about' className='link' onClick={handleClick}>About</a>
            <Link to='/' className='link'>Menu</Link>
            <Link to='/booking' className='link'>Reservation</Link>
            <Link to='/' className='link'>Order Online</Link>
            <Link to='/' className='link'>Login</Link>
          </div>
        </nav>
      </div>
      <header className='content'>
          <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/booking' element={<BookingPage/>} />
          </Routes>
      </header>
      <Footer/>
    </>
  );
}

export default App;
