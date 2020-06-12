import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FileUploader from 'react-firebase-file-uploader'
import  {firebase}  from "../firebase/firebase";


class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
     
      title: '',
      description: '',
      author: '',
      avatar: '',
      isUploading: false,
      progress: 0,
      avatarURL: ""
    }
  }
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase.storage().ref("lintang_foto") // nama folder di firebase
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };


  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {  title, description, author, avatarURL} = this.state;
    var user = firebase.auth().currentUser;

    this.ref.add({
     
      title,
      description,
      author,
      avatarURL,
      userid:user.uid
      
    }).then((docRef) => {
      this.setState({
       
        title: '',
        description: '',
        author: '',
        avatarURL:''
      });
      this.props.history.push("/Display")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const {title, description, author } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Add Post
            </h3>
          </div>
          <div className="panel-body">

            <h4><Link to="/Display" className="btn btn-primary">Post List</Link></h4>
            <form onSubmit={this.onSubmit}>
            
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label htmlFor="description">Description:</label>
                <textArea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>

              <div>
     
          <FileUploader
            accept='*' name='avatar'
            randomizeFilename
            storageRef={
              firebase.storage().ref('lintang_foto')
            }
            onUploadStart = {this.handleUploadStart}
            onUploadError = {this.handleUploadError}
            onUploadSuccess = {this.handleUploadSuccess}
            onProgress = {this.handleProgress}
          />
       
        <p>Process: {this.state.progress}%</p>
        <img src={this.state.avatarURL} alt='' style={{width:'40%', height:'20%'}}/>
      </div>  

              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
       
      </div>
    );
  }
}

export default Create;