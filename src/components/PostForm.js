import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { createPost } from "../actions/postActions"

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post)
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              style={{ width: 300 }}
              rows="5"
              name="body"
              value={this.state.body}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(
  null,
  { createPost }
)(PostForm)
