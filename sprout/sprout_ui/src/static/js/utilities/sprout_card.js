import '../../css/sprout-card.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

const SproutCard = (props) => {
  return (
    <div className="card-body">
        <div className="content-container">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
        </div>
        <div className="interaction-container d-flex align-items-center justify-content-between">
            <div className="thumb-icons-container d-flex">
                <button type="button" className="btn btn-outline-primary btn-sm">
                    <i className="bi-hand-thumbs-up"></i>
                </button>
                <span className="text-muted ml-2">{props.likes}</span>
                <button type="button" className="btn btn-outline-danger btn-sm ml-2">
                    <i className="bi-hand-thumbs-down"></i>
                </button>
                <span className="text-muted ml-2">{props.dislikes}</span>
            </div>
        </div>
        <div className="author-info mt-3 d-flex align-items-center">
            <img src="profile.jpg" className="rounded author-img" alt="Author Profile" />
            <p className="text-muted ml-2 mb-0">{props.author}</p>
        </div>
        <div className="date-time-container mt-2 d-flex justify-content-end">
            <small className="text-muted">{props.create_date}</small>
            <small className="text-muted ml-1">{props.create_time}</small>
        </div>
    </div>
  );
};

export default SproutCard;
