import React from 'react';
// import '../css/bootstrap.css';
// import '../css/flexslider.css';

const Navbar = () =>{
  return(
    <div className="nav-container bg-dark">
        <a id="top"></a>
        <nav className="bg-dark">
            <div className="nav-bar bg-dark" >
                <div className="module left bg-dark">
                    <h3 style={{"marginTop": 10}}>ISYCHAUD</h3>
                </div>

                  <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
                      <i className="ti-menu"></i>
                  </div>


                <div className="module-group right">
                    <div className="module left">
                        <ul className="menu">
                            <li className="#">
                                <a href="#home" className="bg-light" color="white">
                                    Home
                                </a>

                             </li>

                            <li className="#">
                                <a href="#about">
                                    About
                                </a>

                            </li>
                            <li className="#">
                                <a href="#skills">
                                    Skills
                                </a>

                            </li>
                            <li className="#">
                                <a href="#educ">
                                    Education
                                </a>

                            </li>
                            <li className="#">
                                <a href="#project">
                                    Project
                                </a>

                            </li>
                        </ul>
                    </div>
                    {
                    // end of menu module
                  }
                    <div className="module widget-handle search-widget-handle left">
                        <div className="search">
                            <i className="ti-search"></i>
                            <span className="title">Search Site</span>
                        </div>
                        <div className="function">
                            <form className="search-form">
                                <input type="text" placeholder="Type Here" />
                            </form>
                        </div>
                    </div>

                    <div className="module widget-handle language left">
                        <ul className="menu">
                            <li className="has-dropdown">
                                <a href="#">ENG</a>
                                <ul>
                                    <li>
                                        <a href="#">French</a>
                                    </li>
                                    <li>
                                        <a href="#">Deutsch</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                // end of module group
            </div>
        </nav>
    </div>
  )
}
export default Navbar;
