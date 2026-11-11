import React from 'react'
import Skills from '../../img/skills.jpeg';

function Myskills (){
    return(
      <section className="image-bg bg-dark parallax overlay pt120 pb120" id="skills">
                      <div className="background-image-holder">
                          <img alt="Background Image" className="background-image" src={Skills} />
                      </div>
                      <div className="container ">
                          <div className="row ">
                              <div className="col-sm-12 text-left ">
                              <h2 className="uppercase mb8 Skills">My Skills</h2>
      
                            {
                              // PROGRESS BARS CONTAINER
                            }
                          <div className="progress-bars">
                             <div className="progress progress-2 text-left mb32">
                                <span className="title Skill-progress">HTML5</span>
                                <div className="bar-holder ">
                                    <div className="progress-bar " data-progress="75" width={"75%"}></div>
                                </div>
                             </div>
                          {
                            // <!--end of progress bar-->
      
                          }
                            <div className="progress progress-2 text-left mb32">
                                <span className="title Skill-progress">CSS</span>
                                <div className="bar-holder">
                                   <div className="progress-bar" data-progress="85" width={"85%"}></div>
                                </div>
                            </div>
                          {
                            // <!--end of progress bar-->
      
                          }
                          <div className="progress progress-2 text-left mb32">
                              <span className="title Skill-progress">JAVASCRIPT</span>
                              <div className="bar-holder">
                                  <div className="progress-bar" data-progress="35" width={"35%"}></div>
                              </div>
                          </div>
                          {
                            // <!--end of progress bar-->
      
                          }
                          <div className="progress progress-2 text-left mb32">
                              <span className="title Skill-progress">REACT JS</span>
                              <div className="bar-holder">
                                  <div className="progress-bar" data-progress="50" width={"50%"}></div>
                              </div>
                          </div>
                          <div className="progress progress-2 text-left mb32">
                              <span className="title Skill-progress">Microsoft office</span>
                              <div className="bar-holder">
                                  <div className="progress-bar" data-progress="50" width={"50%"}></div>
                              </div>
                          </div>
      
                      </div>
      
      
                              </div>
                          </div>
                          {
                          // end of row-->
      }
                      </div>
                      {
                      // end of container-->
      }
                  </section>   
    );
}
export default Myskills;