import '../../css/sprout-view.css';
import React from 'react';

const SproutView = (props) => {
  return (
    <div className="sprout-detail-view">
      <h2 className="sprout-props.title">props.title</h2>
      <div className="props.author-info mt-3 d-flex align-items-center">
          <img src="../../media/profile.png" className="rounded props.author-img" alt="props.author Profile" />
          <p className="text-muted ml-2 mb-0">props.author</p>
      </div>
      <p className="sprout-props.content">props.content</p>
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
