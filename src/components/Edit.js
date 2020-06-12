import React, { Component } from 'react';
import  {firebase}  from "../firebase/firebase";

import { Link } from 'react-router-dom';
import FileUploader from 'react-firebase-file-uploader'


class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      description: '',
      author: '',
      avatarURL:''
    };
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





  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          title: board.title,
          description: board.description,
          author: board.author,
          avatarURL:board.avatarURL
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author, avatarURL } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    var user = firebase.auth().currentUser;

    updateRef.set({
      title,
      description,
      author,
      avatarURL,
      userid:user.uid
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        description: '',
        author: '',
        avatarURL:''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT BOARD
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Board List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" class="form-control" name="author" value={this.state.author} onChange={this.onChange} placeholder="Author" />
              </div>

              <div>
        <form>
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
        </form>
        <p>Process: {this.state.progress}%</p>
        <img src={this.state.avatarURL} alt='' style={{width:'40%', height:'20%'}}/>
      </div>  



              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;