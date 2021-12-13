import { combineReducers } from 'redux';
import appReducer from './appReducer';

// may crate multilpe reducers
export default combineReducers({
    app: appReducer,
});
