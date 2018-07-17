import { FETCH_POSTS, NEW_POST } from "./types"

export const fetchPosts = () => async dispatch => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    dispatch({
      type: FETCH_POSTS,
      payload: posts
    })
  } catch (error) {
    console.log("error:", error)
  }
}

export const createPost = newPost => async dispatch => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newPost)
    })
    const post = await res.json()
    dispatch({
      type: NEW_POST,
      payload: post
    })
  } catch (error) {
    console.log("error:", error)
  }
}
