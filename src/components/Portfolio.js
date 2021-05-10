import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div>
            
                    <div class="list-group" id="list-tab" role="tablist">
                       <a class="list-group-item list-group-item-action active" id="list-readme-list" data-toggle="list" href="#list-readme" role="tab" aria-controls="readme">Password Generator</a>
                       <a class="list-group-item list-group-item-action" id="list-portfolio-list" data-toggle="list" href="#list-portfolio" role="tab" aria-controls="portfolio">----Coding Quiz SIte----</a>
                         <a class="list-group-item list-group-item-action" id="list-Plan-list" data-toggle="list" href="#list-Plan" role="tab" aria-controls="Plan"> Daily Schedule Planner</a>
                        <a class="list-group-item list-group-item-action" id="list-pw-list" data-toggle="list" href="#list-pw" role="tab" aria-controls="pw">----- Weather Dashboard-----</a>
                        <a class="list-group-item list-group-item-action" id="list-btProject-list" data-toggle="list" href="#list-btProject" role="tab" aria-controls="btProject">Budget Tracker</a>
                        <a class="list-group-item list-group-item-action" id="list-run-list" data-toggle="list" href="#list-run" role="tab" aria-controls="run">---- Run Buddy</a>
                    </div>
               
                    <div class="tab-content" id="nav-tabContent">
                    <div className="portfolio-item-meta">
                        <div class="tab-pane fade show active" id="list-readme" role="tabpanel" aria-labelledby="list-readme-list">
                            <img id="img" src= "images/password gen screenshot.jpg" className="item-img" alt="GIF of README app use" width="100%" />
                            <p><b>Passoword Generator</b></p>
                            <p>Deployed at: <a href="https://jojoford.github.io/password-generator/"> https://jojoford.github.io/password-generator/ </a> </p>
                            <p>GitHub repository: <a href="https://github.com/jojoford/password-generator" target="_blank">https://github.com/jojoford/password-generator</a></p>
                        </div>
                        </div>
                        <div class="tab-pane fade" id="list-portfolio" role="tabpanel" aria-labelledby="list-portfolio-list">
                            <img id="img" src="images/screenshot Code Quiz.png" className="item-img" alt="Contact UI Screenshot" width="100%" />
                            <p><b>Coding Quiz Site</b></p>
                            <p>Deployed at: <a href="https://jojoford.github.io/CodeQuiz/" target="_blank">https://jojoford.github.io/CodeQuiz/</a></p>
                            <p>GitHub repository: <a href="https://github.com/jojoford/CodeQuiz" target="_blank">https://github.com/jojoford/CodeQuiz</a></p>
                        </div>
                        <div class="tab-pane fade" id="list-Plan" role="tabpanel" aria-labelledby="list-Plan-list">
                            <img id="img" src="images/sample-image.jpg" className="item-img" alt="Cardio Screenshot" width="100%" />
                            <p><b>Daily Schedule Planner</b></p>
                            <p>Deployed at: <a href="https://jojoford.github.io/daily-scheduler/" target="_blank">https://jojoford.github.io/daily-scheduler/</a></p>
                            <p>GitHub repository: <a href="https://github.com/jojoford/daily-scheduler" target="_blank">https://github.com/jojoford/daily-scheduler</a></p>
                        </div>
                        <div class="tab-pane fade" id="list-pw" role="tabpanel" aria-labelledby="list-pw-list">
                            <img id="img" src="images/weather dashboard screenshot.jpg" className="item-img" alt="Contact UI Screenshot" width="100%" />
                            <p><b>Weather Dashboard</b></p>
                            <p>Deployed at: <a href="https://jojoford.github.io/weather-dashboard/" target="_blank">Weather Dashboard</a></p>
                            <p>GitHub repository: <a href="https://github.com/jojoford/weather-dashboard" target="_blank">https://github.com/jojoford/weather-dashboard</a></p>
                        </div>
                        <div class="tab-pane fade" id="list-btProject" role="tabpanel" aria-labelledby="list-btProject-list">
                            <img id="img" src="images/Screenshot2 BudgetTracker.png" className="item-img" alt="Budget Tracker GIF" width="100%" />
                            <p><b>Budget Tracker Project</b></p>
                            <p>Deployed at: <a href="https://desolate-shelf-07158.herokuapp.com/" target="_blank">Budget Tracker</a></p>
                            <p>GitHub repository: <a href="https://github.com/jojoford/BudgetTracker" target="_blank">https://github.com/jojoford/BudgetTracker</a></p>
                        </div>
                        <div class="tab-pane fade" id="list-run" role="tabpanel" aria-labelledby="list-run-list">
                            <img id="img" src="images/runbuddy.png" className="item-img" alt="run buddy Screenshot" width="100%" />
                            <p><b>NovelFilms Application Project</b></p>
                            <p>Deployed at: <a href="https://jojoford.github.io/run-buddy/" target="_blank">RUN BUDDY!</a></p>
                            <p>GitHub repository: <a href="https://github.com/jojoford/run-buddy" target="_blank">https://github.com/jojoford/run-buddy</a></p>
                        </div>
                    </div>
                   
                  </div>
                
     
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
