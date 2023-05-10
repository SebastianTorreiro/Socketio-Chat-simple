import React from 'react';
import messi from '../../Assets/messirve.jpg'
function UserList({ users, selectedUser, setSelectedUser, user }) {
  const userFiltered = users?.filter(m => m._id !== user._id)
  return (
    <div className="flex flex-col bg-gray-100 p-4">
      <h2 className="text-lg font-medium mb-4">Usuarios</h2>
      <div className="flex-grow overflow-y-auto">
        {userFiltered?.map((user) => (
          <div
            key={user._id}
            className={`flex items-center px-4 py-2 cursor-pointer ${selectedUser && selectedUser._id === user._id ? 'bg-red-300' : ''
              }`}
            onClick={() => setSelectedUser(user._id)}
          >
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={messi}
              alt={`${user.name} profile`}
            />
            <div className="flex-grow">
              <h3 className="text-lg font-medium">{user.name}</h3>
              <p className="text-sm text-gray-600">
                {user.lastMessage
                  ? user.lastMessage.substring(0, 10) + '...'
                  : 'No hay mensajes'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;