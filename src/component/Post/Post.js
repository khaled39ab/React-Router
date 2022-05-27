import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({})
    useEffect( () =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[postId])

    const {id, title, body} = post;
    return (
        <div>
            <h3>Post from id:{id}</h3>
            <h4>Title: {title}</h4>
            <p>{body}</p>

        </div>
    );
};

export default Post;