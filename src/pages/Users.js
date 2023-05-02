import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserList from '../component/UserList';

const Users = () => {
    const [users, setUsers]=useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(Response => {
            setUsers(Response.data)
        })//then: 가져오는데 성공하면
    },[]);

    return (
        <div className='users-area'>
            <h1 className='users'>Users</h1>
            <UserList users={users}/>
        </div>
    );
};

export default Users;