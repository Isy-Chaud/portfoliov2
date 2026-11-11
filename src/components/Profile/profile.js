import React from 'react'
import '../css/bootstrap.css';
import '../css/flexslider.css';
import Profile from "../../img/isy_profile.jpg";

function Profil  (){
    return(
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
                          <h3>Hello I am</h3>
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
    )
  }

export default Profil;
    
 