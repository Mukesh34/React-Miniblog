import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
//import  {firebase}  from "../firebase";
import  {firebase}  from "../firebase/firebase";
import SignOutButton from "./SignOut";
import withAuthorization from "./withAuthorization";  


  
  

class Display extends Component {
  constructor(props) {
    super(props);
    var user = firebase.auth().currentUser;
    this.ref = firebase.firestore().collection('boards').where('userid', '==', user.uid);

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


  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
            Post LIST
            </h3>
          </div>
          <div className="panel-body">
          <h4><Link to="/Homepage" className="btn btn-primary">Dashboard</Link></h4>
      <h4><SignOutButton /></h4>

            {/* <h4><Link to="/Create">Add Post</Link></h4> */}     
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th style={{width:'5%'}}>Title</th>
                  <th style={{width:'20%'}}>Description</th>
                  <th style={{width:'5%'}}>Author</th>
                  <th style={{width:'40%'}}>avatarURL</th>
                  <th style={{width:'5%'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                  
                    <td>{board.title}</td>
                    <td>{board.description}</td>
                    <td>{board.author}</td>
                    <td><img src={board.avatarURL} style={{width:'40%', margin:'10%'}} alt="" /></td>
                    <td><Link to={`/Show/${board.key}`} className="btn btn-success">Show</Link></td>
                    
                
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}
const authCondition = authUser => !!authUser;
export default withAuthorization(authCondition)(Display); //grants authorization to open endpoint if an user is signed in
