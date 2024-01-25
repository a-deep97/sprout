import '../../css/sprouts.css';
import React, { useState, useEffect } from 'react';
import getCookie from '../lib/authentication';
import { useNavigate } from 'react-router-dom';
import SproutCard from './sprout_card';
import config from '../../../config.js';

function Sprouts({author_id,saved = false}){
    const APIdomain = config.APIdomain;
    const [posts, setPosts] = useState([]);
    const [somePostDeleted,setSomePostDeleted] = useState([false]);
    const navigate = useNavigate();
    const domain = 
    useEffect(() => {
        const fetchPosts = () => {
            let url=null
            if(saved){
                url = `${APIdomain}/dashboard/saved`
            }
            else if(author_id){
                url=`${APIdomain}/profile/posts?author_id=${author_id}`
            }
            else{
                url=`${APIdomain}/home/sprouts`;
            }
            const csrfToken = getCookie('csrftoken');
            fetch(url, {
                method: 'GET',
                headers: {
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
                    setPosts(data)  
                })
                .catch((error) => {
                    console.error('There was a problem with the fetch operation:', error);
                    navigate('/')
            });
        }
        fetchPosts()
    },[navigate]);

    const handleDelete = (deletedPostId) => {
        setSomePostDeleted(true);
        // TODO : re render not working properly. reloading window for now
        //setPosts(prevPosts => prevPosts.filter(post => post.sprout_id !== deletedPostId));
        window.location.reload()
      };
    const createSproutCards = (postList) => {
        return postList.map((post) => (
          <SproutCard
            sprout_id={post.sprout_id}
            author_name={post.author_name}
            title={post.title}
            content={post.content}
            create_date={post.create_date}
            create_time={post.create_time}
            likes={post.likes}
            dislikes={post.dislikes}
            is_saved = {post.is_saved}
            handleDelete = {handleDelete}
          />
        ));
      };
    
    return (
        <div className='sprout-list'>
            {createSproutCards(posts)}
        </div>
    );
};

export default Sprouts;
