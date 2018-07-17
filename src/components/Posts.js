import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { fetchPosts } from "../actions/postActions"

const mapStateToProps = state => {
  return {
    posts: state.posts.items
  }
}

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <PostItem {...this.props} />
      </div>
    )
  }
}

const PostItem = props => (
  <div>
    {props.posts.map((post, i) => (
      <div key={i}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
)

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts)
