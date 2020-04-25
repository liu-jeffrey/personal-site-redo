import React from 'react';
import './home.scss';

function HomePage() {
    return(
        <div id="home-page-view">
            <div id="home-page-text">
                <h1 id="home-page-intro">
                    Hi, my name is Jeffrey.<br /> 
                    I’m an aspiring software<br />
                    developer.
                </h1>
                <p id="home-page-description">
                    Computer Science and Business Double Degree<br />
                    student at the University of Waterloo and Wilfrid<br />
                    Laurier University.
                </p>
                <div id="home-page-links">
                    <a href="google.com" target="_blank" rel="noopener noreferrer">CSV</a>
                    <a href="https://www.linkedin.com/in/liu-jeffrey/" target="_blank" rel="noopener noreferrer">IN</a>
                    <a href="https://github.com/liu-jeffrey/" target="_blank" rel="noopener noreferrer">GIT</a>
                    <a href="mailto: jeffrey.liu@uwaterloo.com" target="_blank" rel="noopener noreferrer">EMAIL</a>
                </div>
            </div>
            <img id="home-page-dp" src="home-page-dp.jpeg" alt="home-page-dp.jpeg"></img> 
        </div>
    ) 
}

export default HomePage;