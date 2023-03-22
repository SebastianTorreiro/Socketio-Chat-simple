import './App.css';
import io from 'socket.io-client'
import { useState, useEffect } from 'react';

const socket = io('http://localhost:4000')

function App() {

  useEffect(() => {

    const receiveMessage = message => {
      console.log(message)
    }
    socket.on('message', receiveMessage)

    return () => {
      socket.off('message', receiveMessage)
    }
  }, [])

  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', message)
    setMessage('')
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={message} type="text" onChange={e => setMessage(e.target.value)} />
        <button>send</button>
      </form>

    </div>
  );
}

export default App;
