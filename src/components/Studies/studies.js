 import React from 'react'
 import Education from '../../img/education.jpeg';

 function Educ (){
    return (
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
        
    )
 }


 export default Educ;
