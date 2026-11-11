import React from 'react';
import Pic1 from '../../img/About.jpeg';



function Aboutme(){
    return(
            <section className="image-bg bg-dark parallax overlay pt120 pb120" id="about">
                            <div className="background-image-holder">
                                <img alt="Background Image" className="background-image" src={Pic1} />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 text-left">
                                        <h2 className="uppercase mb8">ABOUT ME</h2>
                                        <h4 className="lead mb40">Technology professional with experience in 
                                            web development and cybersecurity fundamentals. 
                                            Skilled in problem solving, system analysis, and digital tools. 
                                            Passionate about building secure systems and developing innovative technology solutions. Seeking opportunities 
                                            to grow in cybersecurity and IT security operations</h4>
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
    );
}

export default Aboutme;