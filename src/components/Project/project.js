import React from 'react';
import Project from '../../img/project.jpeg';


function Mywork (){
    return(
        <section className="image-bg bg-dark parallax overlay pt120 pb120" id="project">
                        <div className="background-image-holder">
                            <img alt="Background Image" className="background-image" src={Project} />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-left">
                                    <h2 className="uppercase mb8">My Projects</h2>
        
                                      <span className="fade-half inline-block mb24">
                                      <a href="#">
                                          STOPWATCH
                                      </a>
                                      </span>
                                      <hr/>
        
                                      <span className="fade-half inline-block mb24">
                                      <a href="#" >
                                          GUESSING GAME
                                      </a>
                                      </span>
                                      <hr/>
        
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
        
    )
}
export default Mywork;