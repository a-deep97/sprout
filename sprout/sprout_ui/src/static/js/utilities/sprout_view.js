import '../../css/sprout-view.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation , useNavigate} from 'react-router-dom';

const SproutView = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const {sprout_id=null} = location.state || {};
  useEffect(() => {
    getSproutContent();
  }, [sprout_id]);
  const getSproutContent = () =>{
    console.log("sprout id",sprout_id)
    fetch(`http://127.0.0.1:8000/task?sprout_id=${sprout_id}`)
  }
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
