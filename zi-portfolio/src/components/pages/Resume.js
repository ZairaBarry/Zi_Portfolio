import React from 'react';
import myCV from './assets/ZairaBarakaevaCV.pdf'


export default function Resume() {
    return (
        <div class="resume" id="resume">
            <h2 class="heading">My resume</h2>
            <a href={myCV} download="Zaira.Barakaeva CV"> You can download my  CV here</a>


            <h2> Front End </h2>
            <ul class="list-group">
                <li class="list-group-item disabled">HTML5</li>
                <li class="list-group-item">CSS3</li>
                <li class="list-group-item">SAAS</li>
                <li class="list-group-item">JQUERY</li>
                <li class="list-group-item">JavaScript</li>
                <li class="list-group-item">React</li>
                <li class="list-group-item">Handlebars</li>
            </ul>

            <h2> Back End </h2>
            <ul class="list-group">
                <li class="list-group-item disabled">Node.js</li>
                <li class="list-group-item">Express</li>
                <li class="list-group-item">Rest</li>
                <li class="list-group-item">Sequelize</li>
                <li class="list-group-item">Mangoose</li>
            </ul>
        </div>

        //     )

    )
}