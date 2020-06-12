import React, { Component } from "react";
import SignOutButton from "./SignOut";

import withAuthorization from "./withAuthorization";  
import { db } from "../firebase";
import {Link} from 'react-router-dom';
class HomePage extends Component {
  state = {
    users: null,
    username: "",
    loading: true
  };

  componentDidMount() {
    // db.onceGetUsers().then(res => {
    //   this.setState({
    //     users: res.val()
    //   });
    // });

    const { loggedUser } = this.props;
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        username: res.val().username,
        loading: false
      });
    });
  }

  render() {
    const { username, loading } = this.state;
    // console.log("dasdf", this.props.loggedUser);
    return (
      <div>
        <center><h1>MyDashbord</h1></center>
        {!loading && <h3 className="centered">Hello {username}!</h3>}

        

        <Link to="/Create" className="btn btn-primary">ADD POST</Link><br/><br/>

        <Link to="/Mypost" className="btn btn-primary">MyPost</Link>
        

        <center><SignOutButton /></center>
        <p style={{ marginTop: "80px" }}>
          NOTE: This page is only accessible by signed in users.
        </p>
        {/* {!!users && <UserList users={users} />} */}
      </div>
    );
  }
}


const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage); //grants authorization to open endpoint if an user is signed in
