import * as api from '../api-calls/Api.js';
import types from '../../constants/action-types';

export const loadOrganizationsByIdResultsSuccess = organizations => ({
    type: types.LOAD_ORGANIZATIONS_DATA_SUCCESS,
    payload: organizations,
});

export const loadOrganizationsByIdResultsFailure = error => ({
    type: types.LOAD_ORGANIZATIONS_DATA_FAIL,
    payload: error,
});

export const loadOrganizationByNameResultsSuccess = organization => ({
    type: types.LOAD_ORGANIZATION_DATA_SUCCESS,
    payload: organization,
});

export const loadOrganizationByNameFailure = organization => ({
    type: types.LOAD_ORGANIZATION_DATA_FAIL,
    payload: organization,
});

export const loadReposByOrgNameSuccess = repos => ({
    type: types.LOAD_REPOS_DATA_SUCCESS,
    payload: repos,
});

export const loadReposByOrgNameFailure = repos => ({
    type: types.LOAD_REPOS_DATA_SUCCESS,
    payload: repos,
});

export const clearResults = () => ({
    type: types.CLEAR_SEARCH
});

export const clearSearchResults = () => dispatch => {
    dispatch(clearResults());
}

export const searchOrganizationByIdResults = (searchQuery) => dispatch => api.getOrganizationsById(searchQuery)
    .then((response) => {
        if (!response.ok) {
            return {};
        }
        return response;
    })
    .then(res => res.json())
    .then((data) => {
        dispatch(loadOrganizationsByIdResultsSuccess(data));
        return data;
    })
    .catch((err) => {
        dispatch(loadOrganizationsByIdResultsFailure(err))
        console.log('Error while retrieving search results for the organization ID entered: ', err);
    });

export const searchOrganizationByName = (searchQuery) => dispatch => api.getOrganizationByName(searchQuery)
    .then((response) => {
        if (!response.ok) {
            return {};
        }
        return response;
    })
    .then(res => res.json())
    .then((data) => {
        dispatch(loadOrganizationByNameResultsSuccess(data));
        return data;
    })
    .catch((err) => {
        dispatch(loadOrganizationByNameFailure(err))
        console.log('Error while retrieving organization by name. ', err);
    });

export const searchRepositoriesByOrgName = (searchQuery) => dispatch => api.getReposByName(searchQuery)
    .then((response) => {
        if (!response.ok) {
            return {};
        }
        return response;
    })
    .then(res => res.json())
    .then((data) => {
        dispatch(loadReposByOrgNameSuccess(data));
        return data;
    })
    .catch((err) => {
        dispatch(loadReposByOrgNameFailure(err))
        console.log('Error while retrieving organization by name. ', err);
    });