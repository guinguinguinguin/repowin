import { sprintf } from 'sprintf-js';
import config from '../../constants/config';


export function getOrganizationsById(organizationId) {
    const url = sprintf(config.apiGateway.getOrganizationsById, {organizationId});

    return fetch(url, {
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
        },
    });
}

export function getOrganizationByName(orgName) {
    const url = sprintf(config.apiGateway.getOrganizationsByName, {orgName});

    return fetch(url, {
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
        },
    });
}