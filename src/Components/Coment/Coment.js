import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import SingleComent from '../SingleComent/SingleComent';


const Coment = (props) => {
    const [coments,setComents]= useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postid}`)
        .then(res => res.json())
        .then(data =>setComents(data));
    },[])
    console.log(coments);
    return (
        <div>
           {
               coments.map(coment =><SingleComent coment={coment}></SingleComent>)
           }
        </div>
    );
};

export default Coment;