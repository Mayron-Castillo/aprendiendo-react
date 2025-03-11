import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import Home from './Home';
import PostDetails from './pages/PostDetails';

function App() {
  return (
      <Routes>
        <Route path="/" element={<><HomePage /><Home /></>} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<PostDetails />} />
      </Routes>
  );
}

export default App;
