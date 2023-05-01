import './App.css';
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Chat from './Components/Chat/Chat';
import LoginForm from './Components/LoginForm/LoginForm';
import SignupForm from './Components/SingInForm/SingInForm';


function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm/>} />
            <Route path='/login' element={<LoginForm/>} />
            <Route path='/singin' element={<SignupForm/>} />
            <Route path='/chat' element={<Chat/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
