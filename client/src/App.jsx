import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat/Chat';
import LoginForm from './Components/LoginForm/LoginForm';
import SignupForm from './Components/SingInForm/SingInForm';
import Welcome from './Components/Welcome/Welcome';


function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path='/login' element={<LoginForm/>} />
            <Route path='/signup' element={<SignupForm/>} />
            <Route path='/chat' element={<Chat/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
