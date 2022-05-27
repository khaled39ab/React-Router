import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
    const [friend, setFriend] = useState({});
    const { friendId } = useParams();
    const {name, username, phone, address, website} = friend;
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    });
    
    return (
        <div>
            <h2 className='friend'>This is details of <span id='name'>{name}</span></h2>
            <h3>Surname: {username}</h3>
            <h3>Contact Number: {phone}</h3>
            <h4>City: {address?.city}</h4>
            <h4>Website: {website}</h4>
        </div>
    );
};

export default FriendDetail;