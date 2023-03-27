import './App.css';
import io from 'socket.io-client'
import { useState, useEffect } from 'react';

const socket = io()

function App() {

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])


  useEffect(() => {

    const receiveMessage = msg => {
      console.log(msg)
      setMessages([...messages, msg])
    }
    socket.on('message', receiveMessage)

    return () => {
      socket.off('message', receiveMessage)
    }
  }, [messages])


  const handleSubmit = (e) => {
    e.preventDefault();
    if(message === '') return
    const newMessage = {
      body: message,
      from: "me"
    }
    setMessages([...messages, newMessage])
    setMessage('')
    socket.emit('message', message)
  }


  return (
    <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
      <form className='bg-zinc-900 p-10' onSubmit={handleSubmit}>
      <h1 className='text-2x1 font-bold my-2'>Chat React</h1>

        <input
          value={message}
          type="text"
          onChange={e => setMessage(e.target.value)}
          className='border-2 border-zinc-500 p-2 text-black w-full' />
        {/* <button className='bg-blue-500'>send</button> */}
        <ul className='h-80 overflow-y-auto'>
          {messages.map((m, i) => (
            <li key={i} className={` table my-2 p-2 text-sm rounded-md ${m.from === "me" ? 'bg-sky-700 ml-auto' : 'bg-black'}`}>
              <p>{m.from} : {m.body}</p>
            </li>
          ))}
        </ul>

      </form>



    </div>
  );
}

export default App;
