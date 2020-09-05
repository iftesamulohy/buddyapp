import React, { useState, useEffect } from 'react';
import SinglePost from '../SinglePost/SinglePost';
import './Home.css';
import { Container } from '@material-ui/core';

const Home = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPosts(data));
    },[])
    console.log(posts);
    return (
        <div className="home">
            <Container>
                { 
                    posts.map(post => <SinglePost post={post}></SinglePost> )
                }
            
            </Container>
           
        </div>
    );
};

export default Home;