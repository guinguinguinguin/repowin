import types from '../constants/action-types';

const initialState = {
    organizationsResults: [],
    organizationSelected: {},
    organizationSelectedRepos: []
};

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.LOAD_ORGANIZATIONS_DATA_SUCCESS:
            return {
                ...state,
                organizationsResults: action.payload
            }
        case types.CLEAR_SEARCH:
            return {
                ...state,
                organizationsResults: [],
            }
        case types.LOAD_ORGANIZATION_DATA_SUCCESS:
            localStorage.setItem('SELECTED_ORG', action.payload);
            
            return {
                ...state,
                organizationSelected: action.payload
            }
        case types.LOAD_REPOS_DATA_SUCCESS:
            localStorage.setItem('SELECTED_ORG_REPOS', action.payload);

            return {
                ...state,
                organizationSelectedRepos: action.payload
            }
        default:
            return state;
    }
};

export default appReducer;
