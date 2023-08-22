import './styles/App.css';

import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;