import './App.css';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Join />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
