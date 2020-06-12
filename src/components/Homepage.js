import React, { Component } from 'react';
import  {firebase}  from "../firebase/firebase";
import { Link } from 'react-router-dom';


import '../css/style.css';
import '../css/aos.css';
import '../fonts/flaticon/font/flaticon.css';
import '../css/bootstrap-datepicker.css';
import '../css/owl.theme.default.min.css';

import '../css/magnific-popup.css';
import '../css/bootstrap.min.css';
import '../fonts/icomoon/style.css';




  
  

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: [],
      key:''
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author, avatarURL} = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
        avatarURL,
        
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    
  }

  delete(id){
    firebase.firestore().collection('boards').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }


  render(){
    return(
      <div>
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
      
      <div className="col-12 search-Form-wrap js-search-Form">
        
      </div>

      <div className="col-4 site-logo">
        <a href="index.html" className="text-black h2 mb-0">Mini Blog</a>
      </div>

      <div className="col-8 text-right">
        <nav className="site-navigation" role="navigation">
          <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
                                           <li><a href="/">Home</a></li>
                                            <li><a href="/About">About</a></li>
                                            <li><a href="/Contact">Contact</a></li>
                                            <li><Link to="/signin" className="btn btn-primary btn-sm">Write Post</Link></li>

            <li className="d-none d-lg-inline-block"><a href="/#" className="js-search-toggle"><span className="icon-search"></span></a></li>
          </ul>
        </nav>
        <a href="/#" className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span className="icon-menu h3"></span></a></div>
      </div>

  </div>
</header>


<div className="site-section bg-light">

  <div className="container">
 

    <div className="row align-items-stretch retro-layout-2">
    {this.state.boards.map(board =>
      <div className="col-md-4">
        <a href="/Single" className="h-entry mb-30 v-height gradient" style={{ backgroundImage: `url(${board.avatarURL})` }}>
          
          <div className="text">
            <h2>{board.title}</h2>
            <span className="date">July 19, 2019</span>
          </div>
        </a>
     
      </div>
    )}

    </div>
  </div>
</div>

<div className="site-section">
  <div className="container">
    <div className="row mb-5">
      <div className="col-12">
        <h2>Recent Posts</h2>
      </div>
    </div>
    <div className="row">
    {this.state.boards.map(board =>

      <div className="col-lg-4 mb-4">

        <div className="entry2">
          <a href="single.html"><img src={board.avatarURL} alt="" className="img-fluid rounded"/></a>
          <div className="excerpt">
          
          <span className="post-category text-white bg-secondary mb-3">{board.title}</span>
         
          <div className="post-meta align-items-center text-left clearfix">
            <span className="d-inline-block mt-1">By <a href="/#">{board.author}</a></span>
          </div>
            <p>{board.description}</p>          
            <p><a href="/Single">Read More</a></p>
          
          </div>
        </div>
      </div>)}
     
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
      </div>
    );
  }
}
export default Home;