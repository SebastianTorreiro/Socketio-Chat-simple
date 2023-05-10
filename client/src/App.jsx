import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat/Chat';
import LoginForm from './Components/LoginForm/LoginForm';
import SignupForm from './Components/SingInForm/SingInForm';
import Welcome from './Components/Welcome/Welcome';
// import { ProtectedRoute } from "./components/ProtectedRoute";
import { connect } from 'react-redux';
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ChatWindow from './Components/ChatWindow/ChatWindow';

function App({ user }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path='/chat' element={<ChatWindow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(App)
