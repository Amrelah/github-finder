import {useReducer, createContext} from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);
    const initialState = {
        users: [],
        userProfile: {}, //selected user profile
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
//search user
    const searchUsers = async (val) => {
        setLoading()


        const response = await fetch(`${GITHUB_URL}/search/users?q=${val}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const {items} = await response.json();
        
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }
//get user repos
    const getRepos = async (val) => {
        setLoading()


        const response = await fetch(`${GITHUB_URL}/users/${val}/repos`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const data = await response.json();
        
        dispatch({
            type: 'GET_USER_REPOS',
            payload: data,
        })
    }
//get user profile
    const getUserProfile = async (login) => {
        setLoading()


        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json();
            
            dispatch({
                type: 'GET_USER_PROFILE',
                payload: data,
            })
            
        }

    }
//clear user
    const clearUser = () => {
        dispatch({
            type: 'CLEAR_USER',
        })
    }

    //set loading
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })
    
    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        userProfile: state.userProfile,
        repos: state.repos,
        searchUsers,
        getUserProfile,
        clearUser,
        getRepos
    }}>
        {children}
    </GithubContext.Provider>
};

export default GithubContext