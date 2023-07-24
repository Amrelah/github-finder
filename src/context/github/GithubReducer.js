const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_USER':
            return {
                ...state,
                users: [],
            }
        case 'GET_USER_PROFILE':
            return {
                ...state,
                userProfile: action.payload,
                loading: false
            }
        case 'GET_USER_REPOS':
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        
        default:
            return state;
    }
}

export default githubReducer