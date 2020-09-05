import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardContent, Typography } from '@material-ui/core';
import './PostSetails.css';
import Coment from '../Coment/Coment';

const PostDetails = () => {
    const {id} = useParams();
    const [postDetails, setPostDetails] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data=> setPostDetails(data));
    },[])
    const {title,body} = postDetails;
    return (
        <div className="home">
            <Container>
                <Card>
                    <CardContent>
                        <Typography>
                        <h1>{title}</h1>
                        </Typography>
                        <Typography>
                        <p>{body}</p>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{ marginTop:"20px" }}>
                    <CardContent>
                        <Typography>
                        <h1>All Coments</h1>
                        </Typography>
                        <Coment postid={id}></Coment>
                    </CardContent>
                </Card>
            
            </Container>
            
        </div>
    );
};

export default PostDetails;