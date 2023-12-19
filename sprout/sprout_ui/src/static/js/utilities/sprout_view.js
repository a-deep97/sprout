import '../../css/sprout-view.css';
import React from 'react';

const SproutView = ({ title, content, author, date, likes, dislikes }) => {
  return (
    <div className="sprout-detail-view">
      <h2 className="sprout-title">title</h2>
      <div className="author-info mt-3 d-flex align-items-center">
          <img src="../../media/profile.png" className="rounded author-img" alt="Author Profile" />
          <p className="text-muted ml-2 mb-0">author</p>
      </div>
      <p className="sprout-content">content</p>
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
  );
};

export default SproutView;
