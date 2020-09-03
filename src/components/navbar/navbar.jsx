// import React, { Component } from 'react';
import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './navbar.scss';

class Navbar extends React.Component {

    componentDidMount() {
        this.homeButton = document.querySelector("#navbar-home");
        this.experienceButton = document.querySelector("#navbar-experience");
        // this.projectsButton = document.querySelector("#navbar-projects");

        smoothscroll.polyfill();
        this.addButtonListeners();
        this.handleResize();

        window.addEventListener("scroll", this.setCurrentView.bind(this));
        window.addEventListener("resize", this.handleResize.bind(this));
    }

    handleResize() {
        this.homeViewOffset = document.querySelector("#home-view").offsetTop;
        this.experienceViewOffset = document.querySelector("#experience-view").offsetTop;
        // this.projectViewOffset = document.querySelector("#project-view").offsetTop;
        this.projectViewOffset = document.querySelector("#experience-view").offsetTop + document.querySelector("#experience-view").offsetHeight;
    }

    setCurrentView() {
        const scrollOffset = window.pageYOffset;
        this.homeButton.classList.toggle("current-view", scrollOffset < this.experienceViewOffset);
        this.experienceButton.classList.toggle("current-view", scrollOffset >= this.experienceViewOffset && scrollOffset < this.projectViewOffset);
        // this.projectsButton.classList.toggle("current-view", scrollOffset >= this.projectsButton);

        console.log(scrollOffset);
        console.log(this.experienceViewOffset);
    }


    
    addButtonListeners() {
        this.homeButton.addEventListener("click", () => {
            document.querySelector("#home-view").scrollIntoView({ behavior: "smooth" });
        });
        this.experienceButton.addEventListener("click", () => {
            document.querySelector("#experience-view").scrollIntoView({ behavior: "smooth" });
        });
        // this.projectsButton.addEventListener("click", () => {
        //     document.querySelector("ProjectsPage").scrollIntoView({ behavior: "smooth" });
        // });
    }


    render() {
      return(
           <div id="navbar">
               <button id="navbar-home" class="current-view">Home</button>
               <button id="navbar-experience">Experience</button>
               <button id="navbar-projects">Projects</button>
           </div>
        )
    }
}

export default Navbar