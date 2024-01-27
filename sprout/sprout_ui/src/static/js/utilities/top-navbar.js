
import '../../css/top-navbar.css';

import React from "react";
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function TopNavbar(){

    const navigate = useNavigate()
    const handleHomeLink = () => {
        navigate('/home')
    }
    const handleDashboardLink = () => {
        navigate('/dashboard')
    }
    const handleCreateLink = () => {
        navigate('/sprout/create')
    }
    const handleExploreLink = () => {
        return
    }
    return (
        <div className="top-navbar">
            <AppBar position="relative" style={{'background':'black'}} >
                <Toolbar>
                    <Button variant='text' size='large' style={{'color':'white'}} onClick={() =>handleHomeLink()}>Home</Button>
                    <Button variant='text' size='large' style={{'color':'white'}} onClick={() => handleCreateLink()}>Create</Button>
                    <Button variant='text' size='large' style={{'color':'white'}} onClick={() =>handleDashboardLink()}>Dashboard</Button>
                    <Button variant='text' size='large' style={{'color':'white'}} onClick={() => handleExploreLink()}>Explore</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default TopNavbar;