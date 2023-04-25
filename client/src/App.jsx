import './App.css';
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Chat from './Components/Chat/Chat';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Chat/>} />
            <Route path='/home' element={<Chat/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
