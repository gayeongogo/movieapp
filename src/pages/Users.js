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
        <>{/* 형제를 묶어줘야 오류 안생김, 별 의미 없으므로 빈 태그 */}
            <h1>Users</h1>
            <UserList users={users}/>
        </>
    );
};

export default Users;