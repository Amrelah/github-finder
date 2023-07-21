import {useEffect} from 'react'

function UserResults() {
    useEffect(() => {
        
    }, [])
    
    const fetchUsers = async () => {
        const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
            }
        }) 

        const data = await response.json();
    }

  return (
    <div>UserResults</div>
  )
}

export default UserResults