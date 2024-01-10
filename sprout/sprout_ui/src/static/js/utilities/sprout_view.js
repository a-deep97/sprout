import '../../css/sprout-view.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';

const SproutView = (props) => {

  const location = useLocation();

  return (
    <div className="sprout-detail-view">
      <h2 className="sprout-props.title">{props.sproutData.title}</h2>
      <div className="props.author-info mt-3 d-flex align-items-center">
          <img src="../../media/profile.png" className="rounded props.author-img" alt="props.author Profile" />
          <p className="text-muted ml-2 mb-0">{props.sproutData.author_id}</p>
      </div>
      <p className="sprout-props.content"><div dangerouslySetInnerHTML={{ __html: props.sproutData.content }}/></p>
      <div className="thumb-icons-container d-flex">
                <button type="button" className="btn btn-outline-primary btn-sm">
                    <i className="bi-hand-thumbs-up"></i>
                </button>
                <span className="text-muted ml-2">{props.sproutData.likes}</span>
                <button type="button" className="btn btn-outline-danger btn-sm ml-2">
                    <i className="bi-hand-thumbs-down"></i>
                </button>
                <span className="text-muted ml-2">{props.sproutData.dislikes}</span>
            </div>
    </div>
  );
};

export default SproutView;
