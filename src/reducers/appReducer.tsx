import types from '../constants/action-types';
import { Organization } from '../interfaces/interfaces';

const initialState = {
    organizationsResults: []
};

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.LOAD_ORGANIZATIONS_DATA_SUCCESS:
            return {
                ...state,
                organizationsResults: action.payload
            }
        // case types.LOAD_ORGANIZATION_DATA_SUCCESS:
        //     return {
        //         ...state,
        //         organizations
        //     }
        default:
            return state;
    }
};

export default appReducer;
