import React, { useState, useEffect } from 'react';
import getCookie from '../lib/authentication';
import { useNavigate } from 'react-router-dom';
import SproutCard from './sprout_card';

function UserPosts(props){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
                console.log('Response from server:', data);
                return data;
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
                navigate('/')
        });
    }
    const createSproutCards = (postList) => {
        return postList.map((post) => (
          <SproutCard
            key={post.sprout_id} // Make sure each card has a unique key
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.create_date}
            time={post.create_time}
            likeCount={post.likes}
            dislikeCount={post.dislikes}
          />
        ));
      };
    return (
        <div className='sprout-list'>
            {createSproutCards}
        </div>
    );
};

export default UserPosts;
