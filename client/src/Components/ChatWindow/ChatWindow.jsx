import React, { useEffect, useState } from "react";
import UserList from "../UserList/UserList";
import Chat from "../Chat/Chat";
import axios from "axios";
import { connect } from 'react-redux';


function ChatWindow({ user }) {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get(process.env.REACT_APP_API + '/user/all')
            setUsers(res.data)
        }
        fetchData()
    }, [])


    return (
        <div className="flex bg-gray-100 h-screen">
            <div className="w-1/4 bg-gray-200 border-r">
                <UserList setSelectedUser={setSelectedUser} selectedUser={selectedUser} users={users} />
            </div>
            <div className="w-3/4 h-screen">
                {selectedUser ? <Chat selectedUser={selectedUser} /> : null}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(ChatWindow)
