import '../../css/sprout-card.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getCookie from '../lib/authentication';
import ProfileIcon from '../utilities/profile_icon';
import PostDeleteButton from '../buttons/delete_post_button'; 
import SavePostButton from '../buttons/save_post_button';

import {Snackbar, Alert} from '@mui/material'

import config from '../../../config.js';

const SproutCard = (props) => {

    const APIdomain = config.APIdomain;
    const navigate = useNavigate();
    const [likeSnack,setLikeSnack] = useState(false);
    const [dislikeSnack,setDislikeSnack] = useState(false);

    const [sproutID,setSproutID] = useState(null);
    const [likes,setLike] = useState(null);
    const [dislikes,setDislike] = useState(null);
    const [title,setTitle] = useState(null);
    const [content,setContent] = useState(null);
    const [authorName,setAuthorName] = useState(null);
    const [createDate,setCreateDate] = useState(null);
    const [createTime,setCreateTime] = useState(null);
    const [userIsAuthor,setUserIsAuthor] = useState(null);
    useEffect(() => {
        setSproutID(props.sprout_id);
        setTitle(props.title);
        setAuthorName(props.author_name);
        setContent(props.content);
        setCreateDate(props.create_date);
        setCreateTime(props.create_time);
        setLike(props.likes);
        setDislike(props.dislikes);
        setUserIsAuthor(props.is_user_author)
    },[])
    const fetchLikeDislike = (url,isLike) =>{
        const csrfToken = getCookie('csrftoken');
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            credentials : 'include',
            })
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Response from server:', data);
                setLike(likes+data['likes_changed']);
                setDislike(dislikes+data['dislikes_changed']);
            })
            .catch((error) => {
                console.error('There was a problem with the create operation:', error);
                window.alert("Sprout could not be created :( \n\n "+ error.message)
        });
    }
    const handleLike = (e) => {
        e.stopPropagation();
        fetchLikeDislike(`${APIdomain}/sprout/like?sprout_id=${sproutID}`);
        setLikeSnack(true);
    }
    const handleDislike = (e) => {
        e.stopPropagation();
        fetchLikeDislike(`${APIdomain}/sprout/dislike?sprout_id=${sproutID}`);
        setDislikeSnack(true);
    }
    const handleCardClick = (sprout_id) => {
        const sprout_id_key={
            'sprout_id': sprout_id
        }
        navigate(`/sprout/${sprout_id}`);
    }
    console.log(props)
    return (
        <div className="card-body" onClick={() => handleCardClick(sproutID)} >
            <div className="content-container">
                <div className='action-container'>
                    { userIsAuthor == true ? 
                        <PostDeleteButton className='action-items' postId = {sproutID}  handleDelete = {props.handleDelete}/>
                        : null
                    }
                    <SavePostButton className='action-items' postId = {sproutID} isSaved ={props.is_saved} />
                </div>
                <div className="props.author-info mt-3 d-flex align-items-center">
                    <ProfileIcon/>
                    <p className="text-muted ml-2 mb-0">{authorName}</p>
                </div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><div dangerouslySetInnerHTML={{ __html: content }}/></p>
            </div>
            <div className="interaction-container d-flex align-items-center justify-content-between">
                <div className="thumb-icons-container d-flex">
                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={handleLike}>
                        <i className="bi-hand-thumbs-up"></i>
                    </button>
                    <Snackbar open = {likeSnack} autoHideDuration={5000} onClose={() => {setLikeSnack(false)}} >
                        <Alert
                        onClose={() => {setLikeSnack(false)}}
                        severty = "success"
                        sx= {{width: '100%'}}
                        >
                            You liked this post
                        </Alert>
                    </Snackbar>
                    <span className="text-muted ml-2">{likes}</span>
                    <button type="button" className="btn btn-outline-danger btn-sm ml-2" onClick={handleDislike}>
                        <i className="bi-hand-thumbs-down"></i>
                    </button>
                    <Snackbar open = {dislikeSnack} autoHideDuration={5000} onClose={() => {setDislikeSnack(false)}} >
                        <Alert
                        onClose={() => {setLikeSnack(false)}}
                        severty = "success"
                        sx= {{width: '100%'}}
                        >
                            You disliked this post
                        </Alert>
                    </Snackbar>
                    <span className="text-muted ml-2">{dislikes}</span>
                </div>
            </div>
            <div className="date-time-container mt-2 d-flex justify-content-end">
                <small className="text-muted">{createDate}</small>
                <small className="text-muted ml-1">{createTime}</small>
            </div>
        </div>
    );
};

export default SproutCard;
