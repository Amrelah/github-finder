import {useReducer, createContext} from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

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
    
    return <GithubContext.Provider value={{
        // users: state.users,
        // loading: state.loading,
        // userProfile: state.userProfile,
        // repos: state.repos,
        // notice all the above commented lines are the same as the ...state
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
};

export default GithubContext