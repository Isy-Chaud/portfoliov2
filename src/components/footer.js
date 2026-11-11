import React from 'react';
import './css/bootstrap.css';
import './css/flexslider.css';
import Profile from '../img/isy_profile.jpg';
import Skills from '../img/skills.jpeg';
import Education from '../img/education.jpeg';
import Project from '../img/project.jpeg';
import './template.css'
import Log from '../../src/img/logo.png';



const Template = () =>{
  return(
        <div className="main-container">           
            
                <footer className="footer-1 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h3>Isy_Nkoy</h3>
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
                                  <div className="tweets-feed" data-feed-name="mrareweb">
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
                                   <div className="instafeed" data-user-name="mrareweb">
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
                            <span className="sub">&copy; Copyright 2026 - Isy_Nkoy</span>
                            <img src={Log} className='Log col-sm-2'/>
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
