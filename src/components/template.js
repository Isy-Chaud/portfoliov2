import React from 'react';
import './css/bootstrap.css';
import './css/flexslider.css';
import Profile from '../img/isy_profile.jpg';
import Pic1 from '../img/About.jpeg';
import Skills from '../img/skills.jpeg';
import Education from '../img/education.jpeg';
import Project from '../img/project.jpeg';
import './template.css'

const Template = () =>{
  return(
        <div className="main-container">
            <section className="page-title page-title-4 bg-dark section1" id="home" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                            src={Profile}
                            alt="" width={100} height={100}
                            style={{
                              "borderRadius": 50,
                            "marginTop": 35}} />
                        </div>
                        <div className="col-md-6 text-left">

                        <div className="details">
                          <h3>Hello I'm</h3>
                          <h2>ISAAC NKOY</h2>
                          <h3>Web developer</h3>
                        </div>


                        </div>
                    </div>
                    {
// end of row
}
                </div>
                {
                // end of container
}
            </section>
            <section className="image-bg bg-dark parallax overlay pt120 pb120" id="about">
                <div className="background-image-holder">
                    <img alt="Background Image" className="background-image" src={Pic1} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-left">
                            <h2 className="uppercase mb8">ABOUT ME</h2>
                            <h4 className="lead mb40">I am an hardworker full of dedication and driven by the idea of making dreams become real, able to handle multiple task on a dayly basis,
                            always use a critical approach to solve different problems, energetic and eager to learn new skills</h4>
                        </div>
                    </div>
                    {
                    // end of row
}
                </div>
                {
                // end of container
}
            </section>
            <section className="image-bg bg-dark parallax overlay pt120 pb120" id="skills">
                <div className="background-image-holder">
                    <img alt="Background Image" className="background-image" src={Skills} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-left">
                        <h2 className="uppercase mb8">My Skills</h2>

                      {
                        // PROGRESS BARS CONTAINER
                      }
                    <div className="progress-bars">
                       <div className="progress progress-2 text-left mb32">
                          <span className="title">HTML5</span>
                          <div className="bar-holder">
                              <div className="progress-bar" data-progress="75" width={"75%"}></div>
                          </div>
                       </div>
                    {
                      // <!--end of progress bar-->

                    }
                      <div className="progress progress-2 text-left mb32">
                          <span className="title">CSS</span>
                          <div className="bar-holder">
                             <div className="progress-bar" data-progress="85" width={"85%"}></div>
                          </div>
                      </div>
                    {
                      // <!--end of progress bar-->

                    }
                    <div className="progress progress-2 text-left mb32">
                        <span className="title">JAVASCRIPT</span>
                        <div className="bar-holder">
                            <div className="progress-bar" data-progress="35" width={"35%"}></div>
                        </div>
                    </div>
                    {
                      // <!--end of progress bar-->

                    }
                    <div className="progress progress-2 text-left mb32">
                        <span className="title">REACT JS</span>
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
            <section className="image-bg bg-dark parallax overlay pt120 pb120" id="educ">
                <div className="background-image-holder">
                    <img alt="Background Image" className="background-image" src={Education} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-left ">
                            <h2 className="uppercase mb8">My Studies</h2>

                            <span className="pull-right fade-1-4">2019</span>
                            <h3 className="lead mb40 uppercase ">Web development Intensive</h3>
                            <span className="fade-half inline-block mb24">Codespace Academy</span>
                            <hr/>

                            <span className="pull-right fade-1-4">2017</span>
                            <h3 className="lead mb40 uppercase ">Barista Level 1</h3>
                            <span className="fade-half inline-block mb24">Truth Coffee Roasting</span>
                            <hr/>

                            <span className="pull-right fade-1-4">2017</span>
                            <h3 className="lead mb40 uppercase ">TVC training</h3>
                            <span className="fade-half inline-block mb24">Light Camera Action</span>
                            <hr/>

                            <span className="pull-right fade-1-4">2013</span>
                            <h3 className="lead mb40 uppercase ">High School Graduation</h3>
                            <span className="fade-half inline-block mb24">College Bukasa Nsenda</span>
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
            <footer className="footer-1 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h3>ISYCHAUD</h3>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="widget">
                                <h6 className="title">Recent Posts</h6>
                                <hr/>
                            </div>



                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="widget">
                                <h6 className="title">Latest Updates</h6>
                                <hr/>
                                <div className="twitter-feed">
                                {
                                  // <div className="tweets-feed" data-feed-name="mrareweb">
                                  // </div>
                                  
                                }
                                </div>
                            </div>
                            {
                              // end of widget-->

                            }
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="widget">
                                <h6 className="title">Instagram</h6>
                                <hr/>
                                {
                                  // <div className="instafeed" data-user-name="mrareweb">
                                  // </div>

                                }

                            </div>
                            {
                              // end of widget-->

                            }
                        </div>
                    </div>
                    {
                      // end of row-->

                    }
                    <div className="row">
                        <div className="col-sm-6">
                            <span className="sub">&copy; Copyright 2016 - ISYCHAUD</span>
                        </div>
                        <div className="col-sm-6 text-right">
                            <ul className="list-inline social-list">
                                <li>
                                    <a href="#">
                                        <i className="ti-twitter-alt"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ti-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ti-dribbble"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ti-vimeo-alt"></i>
                                    </a>
                                </li>
                             </ul>
                          </div>
                      </div>
                </div>
                {
                  // end of container-->

                }
                <a className="btn btn-sm fade-half back-to-top inner-link" href="#top">Top</a>
            </footer>
            </div>

  )
}
export default Template;
