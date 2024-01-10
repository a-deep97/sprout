import React, { useState, useEffect } from 'react';
import getCookie from '../lib/authentication';
import { useNavigate } from 'react-router-dom';
import SproutCard from './sprout_card';

function Sprouts(props){
    const [posts, setPosts] = useState([]);
    const [dashboardPosts,setDashboardPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAuthorPosts = () => {
            const csrfToken = getCookie('csrftoken');
            fetch('http://127.0.0.1:8000/dashboard/sprouts', {
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
                    setDashboardPosts(data)  
                })
                .catch((error) => {
                    console.error('There was a problem with the fetch operation:', error);
                    navigate('/')
            });
        }
        fetchAuthorPosts()
    },[navigate]);
    const createSproutCards = (postList) => {
        return postList.map((post) => (
          <SproutCard
            sprout_id={post.sprout_id}
            title={post.title}
            content={post.content}
            author={post.author}
            create_date={post.create_date}
            create_time={post.create_time}
            likes={post.likes}
            dislikes={post.dislikes}
          />
        ));
      };
    return (
        <div className='sprout-list'>
            {props.user_posts ? createSproutCards(dashboardPosts) : createSproutCards([])}
        </div>
    );
};

export default Sprouts;
