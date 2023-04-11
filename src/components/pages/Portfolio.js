import React from "react";
import boozflix from './assets/boozflix.jpeg';
import notetaker from './assets/notetaker.jpg';
import startquiz from './assets/start.quiz.png';
import dailyplanner from './assets/daily.planner.png';
import employeerecorder from './assets/employee_recorder.jpg';
import eventtime from './assets/project_2.jpg'
import '../pages/styles/Portfolio.css';

export default function Portfolio() {
    return (

        <section class="portfolio" id="portfolio">
            <h2 class="heading">My projects</h2>

            <div class="projects-container">
            <div class="project-box">
                    <img className="eventtime" src={eventtime} width={500} height={300}></img>
                </div>

                <div class="project-box">
                    <img className="boozflix" src={boozflix} width={500} height={300}></img>
                </div>

                <div class="project-box">
                    <img className="startquiz" src={startquiz} width={500} height={300}></img>
                </div>

                <div class="project-box">
                    <img className="dailyplanner" src={dailyplanner} width={500} height={300}></img>
                </div>

                <div class="project-box">
                    <img className="employeerecorder" src={employeerecorder} width={500} height={300}></img>
                </div>
            </div>

        </section>
        //     )
    )
}




// }