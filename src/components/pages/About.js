import React from 'react';
import Footer from '../Footer'

import avatar from './assets/avatar.jpg'

export default function About() {
  return (
    <div>
      <div class="card text mb-3" width={50} height={50}>
        <div class="card-header ">About me</div>
        <div class="card-body">
          <h5 class="card-title">Hi. Welcome to my page. My name is Zaira and I am newly graduated from UNB Coding Bootcamp Full Stack Developer. I love coding and I love the magic behind it. It my page you can view my projects and if you like them you can contact me by clicking Contact form. </h5>
         
        </div>
      </div>
      <img className="avatar" src={avatar} width={500} height={500}></img>


      <section class ="footer">{Footer}</section>

      

    </div>
  );


}

