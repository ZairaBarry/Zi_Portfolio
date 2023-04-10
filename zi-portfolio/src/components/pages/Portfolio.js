import React from "react";
import boozflix from './assets/boozflix.jpeg';
import '../pages/styles/Portfolio.css';

export default function Portfolio() {
    return (
        
           <section class ="portfolio"  id = "portfolio">
                <h2 class ="heading">My projects</h2>

            <div class ="projects-container">
                <div class = "project-box">
                <img className="boozflix" src={boozflix} width={700} height={400}></img>
                
                 </div>  

                 
             </div>

            </section>
//     )
          )
        }
        
        


// }