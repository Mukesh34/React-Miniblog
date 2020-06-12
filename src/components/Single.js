import React from 'react'; 
import {Form} from 'reactstrap'; 
import Img1 from '../images/img_1.jpg';
import { Link } from 'react-router-dom';
import {firebase} from "../firebase/firebase";


class Single extends React.Component{ 
    constructor() {
        super();
        this.ref = firebase.firestore().collection('comments');
        

        this.unsubscribe = null;

        this.state = {
          
          name: '',
          msg:'',
          comments: [],
          key:''
        }
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

      onCollectionUpdate = (querySnapshot) => {
        const comments = [];
        querySnapshot.forEach((doc) => {
          const { name, msg } = doc.data();
    
          comments.push({
            key: doc.id,
           name,
           msg,
            
          });
        });
        this.setState({
          comments
       });
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
        
      }
    
  onSubmit = (e) => {
    e.preventDefault();

    const { name, msg } = this.state;
    var user = firebase.auth().currentUser;   
    this.ref.add({
     
     name,
     msg,
    userid:user.uid,
    
    }).then((docRef) => {
      this.setState({
       
        name:'',
        msg:''
      });
      this.props.history.push("/Single")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
    render(){
    const {name, msg } = this.state;

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
                          <input type="text" id="s" className="form-control" placeholder="Search..." />
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
                                            <li><Link to="/signin" className="btn btn-primary btn-sm">Write Post</Link></li>
                             <li className="d-none d-lg-inline-block"><a href="//#" className="js-search-toggle"><span className="icon-search"></span></a></li>
                          </ul>
                      </nav>
                      <a href="/#" className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span className="icon-menu h3"></span></a>
                  </div>
              </div>
          </div>
      </header>
     
  
      <section className="site-section py-lg">
          <div className="container">
              <div className="row blog-entries element-animate">
                  <div className="col-md-12 col-lg-8 main-content">
                  <div class="row mb-5 mt-5">
              <div class="col-md-12 mb-4">
                <img src={Img1} alt="" class="img-fluid rounded"/>
              </div>
            </div>
            <p>Quibusdam autem, quas molestias recusandae aperiam molestiae modi qui ipsam vel. Placeat tenetur veritatis tempore quos impedit dicta, error autem, quae sint inventore ipsa quidem. Quo voluptate quisquam reiciendis, minus, animi minima eum officia doloremque repellat eos, odio doloribus cum.</p>
                  
                      <div className="pt-5">
                          <ul className="comment-list">
                              <li className="comment">
                                  
                {this.state.comments.map(comments =>

                                  <div className="comment-body">

                                    <h3>{comments.name}</h3>
                                      {/* <div className="meta">January 9, 2018 at 2:21pm</div> */}
                                      <li>
                                          <ul>
                                        <p className="bg-light">{comments.msg}</p>

                                          </ul>
                                      </li>
                                      {/* <p><a href="/#" className="reply rounded">Reply</a></p> */}
              
                                  </div>)}
                              </li>
                              
  
                            
                          </ul>
  
                          <div className="comment-form-wrap pt-5">
                              <h3 className="mb-5">Leave a comment</h3>
                              <form onSubmit={this.onSubmit} className="p-5 bg-light">
                                  <div className="form-group">
                                      <label htmlFor="name">Name *</label>
                                      <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.onChange}/>
                                  </div>
                                 
                                  <div className="form-group">
                                      <label htmlFor="message">Message</label>
                                      <textarea  id="message" cols="30" rows="10" className="form-control" name="msg" value={msg} onChange={this.onChange}></textarea>
                                  </div>
                                  <div className="form-group">
              <button type="submit" className="btn btn-success">Submit</button>

                                  </div>
  
                              </form>
                          </div>
                      </div>
  
                  </div>
  
              </div>
          </div>
      </section>
      
     
  
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
                          Copyright &copy;
                          <script>
                              document.write(new Date().getFullYear());
                          </script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  
  </div>
  
  ); } } export default Single;