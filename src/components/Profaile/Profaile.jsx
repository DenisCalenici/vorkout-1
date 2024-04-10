import React from 'react'
import classes from './Profaile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProgailInfo'

const Profile = () => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}
export default Profile
