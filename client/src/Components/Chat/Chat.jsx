import io from 'socket.io-client'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
const socket = io()

function Chat({ selectedUser, user }) {

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])


  useEffect(() => {

    async function fetchData(){
      const res = await axios.get(process.env.REACT_APP_API + `/messages/user/${user._id}/${selectedUser}`, )
      console.log(res)
      setMessages(res.data)
    }
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }

    const receiveMessage = msg => {
      console.log(msg)
      setMessages([...messages, msg])
    }
    socket.on('message', receiveMessage)

    return () => {
      socket.off('message', receiveMessage)
    }
  }, [selectedUser])


  const handleSubmit = (e) => {
    console.log(user)
    e.preventDefault();
    if (message === '') return
    const newMessage = {
      content: message,
      userFrom: user._id,
      userTarget: selectedUser
    }
    axios.post(process.env.REACT_APP_API + '/messages/create', newMessage )
    setMessages([...messages, newMessage])
    setMessage('')
    socket.emit('message', message)
  }
 

  // return (
  //   <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
  //     <form className='bg-zinc-900 p-10' onSubmit={handleSubmit}>
  //     <h1 className='text-2x1 font-bold my-2'>Chat React</h1>

  //       <input
  //         value={message}
  //         type="text"
  //         onChange={e => setMessage(e.target.value)}
  //         className='border-2 border-zinc-500 p-2 text-black w-full' />
  //       {/* <button className='bg-blue-500'>send</button> */}
  //       <ul className='h-80 overflow-y-auto'>
  //         {messages.map((m, i) => (
  //           <li key={i} className={` table my-2 p-2 text-sm rounded-md ${m.from === "me" ? 'bg-sky-700 ml-auto' : 'bg-black'}`}>
  //             <p>{m.from} : {m.body}</p>
  //           </li>
  //         ))}
  //       </ul>

  //     </form>



  //   </div>
  // );

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-y-auto flex-grow p-4">
        {messages?.map((m, i) => (
          <div key={i} className={`w-2/3 rounded-lg px-4 py-2 mb-2 ${m.userFrom === user._id ? 'bg-blue-600 text-white self-end' : 'bg-gray-200 text-gray-700 self-start'}`}>
            <p>{m.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex-shrink-0">
        <div className="flex">
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full ml-2"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(Chat)

