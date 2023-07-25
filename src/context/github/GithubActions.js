import axios from "axios"

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
})

//search user
export const searchUsers = async (val) => {
    
    const response = await github.get(`/search/users?q=${val}`)
    return response.data.items
        // const responses = await fetch(`${GITHUB_URL}/search/users?q=${val}`, {
        //     headers: {
        //         Authorization: `token ${GITHUB_TOKEN}`
        //     }
        // })
        // const {items} = await response.json();
        //return items
}
    
//get user profile
export const getUserProfileAndRepos = async (login) => {

    const params = new URLSearchParams({
            sort: 'created',
            per_page: 10,
    })

    const [userProfile, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`)
    ])

    return {userProfile: userProfile.data, repos: repos.data}

    // const response  = await github.get(`/users/${login}`)

    //     if (response.status === 404) {
    //         window.location = '/notfound'
    //     } else {
    //         const data = response.data;
            
    //    return data
            
    //     }

}
    

// //get user repos
// export const getRepos = async (val) => {

//         const params = new URLSearchParams({
//             sort: 'created',
//             per_page: 10,
//         })
//         const response = await fetch(`${GITHUB_URL}/users/${val}/repos?${params}`, {
//             headers: {
//                 Authorization: `token ${GITHUB_TOKEN}`
//             }
//         })

//         const data = await response.json();
        
//         return data
//     }