import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: 'Hi', likeCount: 17 },
    { id: 2, message: 'How is your word?', likeCount: 18 },
    { id: 3, message: 'Hi', likeCount: 19 },
    { id: 4, message: 'Oo yes', likeCount: 10 },
    { id: 5, message: 'Love', likeCount: 11 },
    { id: 6, message: 'She', likeCount: 12 },
    { id: 7, message: 'Hi', likeCount: 14 },
    { id: 8, message: 'Yo', likeCount: 13 },
  ]
  let postsElements = posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ))
  return (
    <>
      <div className={classes.postsBlocke}>
        <h3>My posts</h3>
      </div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </>
  )
}
export default MyPosts
