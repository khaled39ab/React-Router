import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;

    const navigate = useNavigate()

    const friendDetails = () =>{
        const path = `/friends/${id}`;
        navigate(path);

    }
    return (
        <div>
            <h4>Name: {name}</h4>
            <button onClick={friendDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;