import React from 'react';
import './home.scss';

function Home() {
    return(
        <div id="home-view">
            <div id="home-text">
                <h1 id="home-intro">
                    Hi, my name is Jeffrey.<br /> 
                    I’m an aspiring software<br />
                    developer.
                </h1>
                <p id="home-description">
                    Computer Science and Business Double Degree<br />
                    student at the University of Waterloo and Wilfrid<br />
                    Laurier University.
                </p>
                <div id="home-links">
                    <a href="google.com" target="_blank" rel="noopener noreferrer">CSV</a>
                    <a href="https://www.linkedin.com/in/liu-jeffrey/" target="_blank" rel="noopener noreferrer">IN</a>
                    <a href="https://github.com/liu-jeffrey/" target="_blank" rel="noopener noreferrer">GIT</a>
                    <a href="mailto: jeffrey.liu@uwaterloo.com" target="_blank" rel="noopener noreferrer">EMAIL</a>
                </div>
            </div>
            <img id="home-dp" src="home-dp.jpeg" alt="home-dp.jpeg"></img> 
        </div>
    ) 
}

export default Home;