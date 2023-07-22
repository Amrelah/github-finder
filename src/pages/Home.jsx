import React from 'react'
import UserResults from '../components/users/UserResults'

function Home() {
  return (
      <div>
          <h1>Welcome Amr</h1>
      {/* <p>{import.meta.env.VITE_GITHUB_TOKEN}</p> */}
      <UserResults />
      </div>
  )
}

export default Home