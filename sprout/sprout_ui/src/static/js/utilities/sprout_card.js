import '../../css/sprout-card.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

const SproutCard = ({ title, content, author, date, time, likeCount, dislikeCount }) => {
  return (
    <div className="card-body">
        <div className="content-container">
            <h5 className="card-title">this is a dummy post</h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <div className="interaction-container d-flex align-items-center justify-content-between">
            <div className="thumb-icons-container d-flex">
                <button type="button" className="btn btn-outline-primary btn-sm">
                    <i className="bi-hand-thumbs-up"></i>
                </button>
                <span className="text-muted ml-2">0</span>
                <button type="button" className="btn btn-outline-danger btn-sm ml-2">
                    <i className="bi-hand-thumbs-down"></i>
                </button>
                <span className="text-muted ml-2">0</span>
            </div>
        </div>
        <div className="author-info mt-3 d-flex align-items-center">
            <img src="profile.jpg" className="rounded author-img" alt="Author Profile" />
            <p className="text-muted ml-2 mb-0">author</p>
        </div>
        <div className="date-time-container mt-2 d-flex justify-content-end">
            <small className="text-muted">date</small>
            <small className="text-muted ml-1">time</small>
        </div>
    </div>
  );
};

export default SproutCard;
