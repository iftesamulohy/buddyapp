import React from 'react';
import { Card, CardContent,Typography, CardActions, Button } from '@material-ui/core';
import './SinglePost.css'
import { Link } from 'react-router-dom';

const SinglePost = (props) => {
    const {title,body,id} = props.post;
    console.log(title);
    return (
        <div className="single-post">
            <Card>
                <CardContent>
                    <Typography variant="h5">
                    {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/postdetails/${id}`}>
                    <Button>More</Button>
                    </Link>
                    
                </CardActions>
            </Card>
        </div>
    );
};

export default SinglePost;