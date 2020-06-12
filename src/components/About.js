import React from 'react';
import {Form} from 'reactstrap'; 
import Img1 from '../images/img_1.jpg';
import Img4 from '../images/person_1.jpg';
import Img5 from '../images/person_2.jpg'; 
import Img6 from '../images/person_3.jpg';
import { Link } from 'react-router-dom';



class About extends React.Component{
    render(){
        return(
            <div className="site-wrap">
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                             <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                     <div className="site-mobile-menu-body"></div>
                </div>
                    <header className="site-navbar" role="banner">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-12 search-form-wrap js-search-form d-none">
                                    <Form method="get" action="/#">
                                        <input type="text" id="s" className="form-control" placeholder="Search..."/>
                                        <button className="search-btn" type="submit"><span className="icon-search"></span></button>
                                    </Form>
                                </div>
                               <div className="col-4 site-logo">
                               <a href="/#" className="text-black text-decoration-none">Mini Blog</a> 
                         
                               </div>
                               <div className="col-8 text-right">
                                   <nav className="site-navigation" role="navigation">
                                       <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
                                       <li><a href="/">Home</a></li>
                                            <li><a href="/About">About</a></li>
                                            <li><a href="/Contact">Contact</a></li>
                                            <li><Link to="/signin" className="btn btn-primary ">Write Post</Link></li>
                                            
                                            <li className="d-none d-lg-inline-block"><a href="/#" className="js-search-toggle"><span className="icon-search"></span></a></li>
                                       </ul>
                                    </nav>
                                     <a href="/#" className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span className="icon-menu h3"></span></a>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="site-cover site-cover-sm same-height overlay single-page" style={{ backgroundImage: `url(${require("../images/img_4.jpg")})` }}>
      <div className="container">
        <div className="row same-height justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="post-entry text-center">
              <h1 className="">About Us</h1>
              <p className="lead mb-4 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, adipisci?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <img src={Img1} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-5 mr-auto order-md-1">
            <h2>We Love To Explore</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate odit corrupti vitae cupiditate explicabo, soluta quibusdam necessitatibus, provident reprehenderit, dolorem saepe non eligendi possimus autem repellendus nesciunt, est deleniti libero recusandae officiis. Voluptatibus quisquam voluptatum expedita recusandae architecto quibusdam.</p>
            <ul className="ul-check list-unstyled success">
              <li>Onsectetur adipisicing elit</li>
              <li>Dolorem saepe non eligendi possimus</li>
              <li>Voluptate odit corrupti vitae</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-5 text-center">
            <h2>Meet The Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus commodi blanditiis, soluta magnam atque laborum ex qui recusandae</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5 text-center">
            <img src={Img4} alt="" className="img-fluid w-50 rounded-circle mb-4"/>
            <h2 className="mb-3 h5">Kate Hampton</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum neque nobis eos quam necessitatibus rerum aliquid est tempore, cupiditate iure at voluptatum dolore, voluptates. Debitis accusamus, beatae ipsam excepturi mollitia.</p>

            <p className="mt-5">
              <a href="/#" className="p-3"><span className="icon-facebook"></span></a>
              <a href="/#" className="p-3"><span className="icon-instagram"></span></a>
              <a href="/#" className="p-3"><span className="icon-twitter"></span></a>
            </p>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 text-center">
            <img src={Img5} alt="" className="img-fluid w-50 rounded-circle mb-4"/>
            <h2 className="mb-3 h5">Richard Cook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum neque nobis eos quam necessitatibus rerum aliquid est tempore, cupiditate iure at voluptatum dolore, voluptates. Debitis accusamus, beatae ipsam excepturi mollitia.</p>

            <p className="mt-5">
              <a href="/#" className="p-3"><span className="icon-facebook"></span></a>
              <a href="/#" className="p-3"><span className="icon-instagram"></span></a>
              <a href="/#" className="p-3"><span className="icon-twitter"></span></a>
            </p>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 text-center">
            <img src={Img6} alt="" className="img-fluid w-50 rounded-circle mb-4"/>
            <h2 className="mb-3 h5">Kevin Peters</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum neque nobis eos quam necessitatibus rerum aliquid est tempore, cupiditate iure at voluptatum dolore, voluptates. Debitis accusamus, beatae ipsam excepturi mollitia.</p>

            <p className="mt-5">
              <a href="/#" className="p-3"><span className="icon-facebook"></span></a>
              <a href="/#" className="p-3"><span className="icon-instagram"></span></a>
              <a href="/#" className="p-3"><span className="icon-twitter"></span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={Img1} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-5 ml-auto">
            <h2>Learn From Us</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate odit corrupti vitae cupiditate explicabo, soluta quibusdam necessitatibus, provident reprehenderit, dolorem saepe non eligendi possimus autem repellendus nesciunt, est deleniti libero recusandae officiis. Voluptatibus quisquam voluptatum expedita recusandae architecto quibusdam.</p>
            
            <ul className="ul-check list-unstyled success">
              <li>Onsectetur adipisicing elit</li>
              <li>Dolorem saepe non eligendi possimus</li>
              <li>Voluptate odit corrupti vitae</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section bg-white">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-5">
            <div className="subscribe-1 ">
              <h2>Subscribe to our newsletter</h2>
              <p className="mb-5 par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nesciunt error illum a explicabo, ipsam nostrum.</p>
              <Form action="#" className="d-flex">
                <input type="text" className="form-control" placeholder="Enter your email address"/>
                <input type="submit" className="btn btn-primary" value="Subscribe"/>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="site-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <h3 className="footer-heading mb-4">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis, voluptatem in. Soluta, eligendi, architecto.</p>
          </div>
          <div className="col-md-3 ml-auto">
            <ul className="list-unstyled float-left mr-5">
              <li><a href="/#">About Us</a></li>
              <li><a href="/#">Advertise</a></li>
              <li><a href="/#">Careers</a></li>
              <li><a href="/#">Subscribes</a></li>
            </ul>
            <ul className="list-unstyled float-left">
              <li><a href="/#">Travel</a></li>
              <li><a href="/#">Lifestyle</a></li>
              <li><a href="/#">Sports</a></li>
              <li><a href="/#">Nature</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            

            <div>
              <h3 className="footer-heading mb-4">Connect With Us</h3>
              <p>
                <a href="/#"><span className="icon-facebook pt-2 pr-2 pb-2 pl-0"></span></a>
                <a href="/#"><span className="icon-twitter p-2"></span></a>
                <a href="/#"><span className="icon-instagram p-2"></span></a>
                <a href="/#"><span className="icon-rss p-2"></span></a>
                <a href="/#"><span className="icon-envelope p-2"></span></a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>
              Copyright &copy; <script>document.write(new Date().getFullYear());</script>2020 All rights reserved | This Blog is made  <i className="icon-heart text-danger" aria-hidden="true"></i> by Mukesh
              </p>
          </div>
        </div>
      </div>
    </div>
    
    
    
    
            </div>
        );
    }
}
export default About;