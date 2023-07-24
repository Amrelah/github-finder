import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
      <div>
      {/* <p>{import.meta.env.VITE_GITHUB_TOKEN}</p> */}
      <UserSearch />
      <UserResults />
      </div>
  )
}

export default Home