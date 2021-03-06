import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts } from '../actions/postActions';


class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }
  //CONSTRUCTOR AND COMPONENTWILLMOUN COME FROM REDUX  
  /*constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }*/


    /*componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>  this.setState({posts: data}));
    }*/
  render() {
    


      const postItems = this.props.posts.map(post =>(
          <div key={post.id}>
            <h3> {post.title} </h3>
            <p>{post.body}</p>
          </div>
      ))
    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    )
  }
}



Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}



const mapStateToProps = state =>({
  posts: state.posts.items
})


export default connect(mapStateToProps , {fetchPosts})(Posts);