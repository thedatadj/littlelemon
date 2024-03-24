import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

// Components
import Homepage from './components/Homepage'
import BookingPage from './components/BookingPage'

function App() {
  return (
    <main>
      <Link to='/' className='nav-bar'>Homepage</Link>
      <Link to='booking' className='nav-bar'>Booking Page</Link>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='booking' element={<BookingPage/>} />
      </Routes>
    </main>
  );
}

export default App;
