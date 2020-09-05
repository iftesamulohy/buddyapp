import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@material-ui/core';
import './SingleComent.css'

const SingleComent = (props) => {
    const {name,email,body} = props.coment;
    return (
        <div>
            <Card className="single-coments">
                <CardContent>
                    <Avatar><img height="50" width="50" src="https://www.nicepng.com/png/detail/96-966180_confused-in-software-selection-corporate-man-png.png" alt=""/></Avatar>
                    <Typography>
                        <h3>{name}</h3>
                    </Typography>
                    <Typography>
                        <p>{email}</p>
                    </Typography>
                    <Typography>
                        <p>{body}</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default SingleComent;