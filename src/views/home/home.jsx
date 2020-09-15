import React from 'react';
import './home.scss';

function Home() {
    return(
        <div id="home-view" class="view">
            <div id="home-text">
                <h1 id="home-intro" class="view-title">
                    Hi, my name is Jeffrey.<br /> 
                    I’m an aspiring software<br />
                    developer.
                </h1>
                <p id="home-description" class="view-description">
                    Computer Science and Business Double Degree 
                    student at the University of Waterloo and Wilfrid 
                    Laurier University.
                </p>
                <div id="home-links">
                    <a href="google.com" target="_blank" rel="noopener noreferrer">CSV</a>
                    <a href="https://www.linkedin.com/in/liu-jeffrey/" target="_blank" rel="noopener noreferrer">IN</a>
                    <a href="https://github.com/liu-jeffrey/" target="_blank" rel="noopener noreferrer">GIT</a>
                    <a href="mailto: jeffrey.liu@uwaterloo.com" target="_blank" rel="noopener noreferrer">EMAIL</a>
                </div>
            </div>
            <img id="home-dp" src="personal-site-redo/home-dp.jpeg" alt="home-dp.jpeg"></img> 
        </div>
    ) 
}

export default Home;