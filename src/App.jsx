import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ReadingList from './pages/ReadingList';
import Cursor from './Cursor';

function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reading-list" element={<ReadingList />} />
      </Routes>
    </Router>
  );
}

export default App;
