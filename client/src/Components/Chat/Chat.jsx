import io from 'socket.io-client'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
const socket = io('http://localhost:4000')

function Chat({ selectedUser, user }) {

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  // const [messages2, setMessages2] = useState([])

  useEffect(() => {

    async function fetchData() {
      const res = await axios.get(process.env.REACT_APP_API + `/messages/user/${user._id}/${selectedUser}`,)
      // console.log(res)
      setMessages(res.data)
    }
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }

    // const receiveMessage = msg => {
    //   console.log(msg)
    //   setMessages([...messages, msg])
    // }
    // socket.on('message', receiveMessage)

    // return () => {
    //   socket.off('message', receiveMessage)
    // }
  }, [selectedUser])

  useEffect(() => {
    const receiveMessage = msg => {
      console.log('msg')
      console.log(msg)
      setMessages(prevState => [...prevState, msg])
    }
    socket.on('message', receiveMessage)

    return () => {
      socket.off('message', receiveMessage)
    }
  }, [messages])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (message === '') return;
    const newMessage = {
      content: message,
      userFrom: user._id,
      userTarget: selectedUser
    };
    // axios.post(process.env.REACT_APP_API + '/messages/create', newMessage)
    //   .then(res => {
        setMessages(messages => [...messages, newMessage]); // actualiza el estado
        setMessage('');
        socket.emit('message', newMessage); // emite el evento del mensaje después de que se actualiza el estado
      // })
      // .catch(error => {
      //   console.log(error);
      // });
  };


  return (
    <div className="flex flex-col h-full">
      <div className="overflow-y-auto flex-grow p-4">
        {messages?.map((m, i) => (
          <div key={i} className={`w-2/3 rounded-lg px-4 py-2 mb-2 ${m.userFrom._id === user._id ? 'bg-blue-600 text-white self-end ml-auto' : 'bg-gray-200 text-gray-700 self-start mr-auto'}`}>
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

