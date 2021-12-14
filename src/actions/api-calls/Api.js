import { sprintf } from 'sprintf-js';
import config from '../../constants/config';


export function getOrganizationsById(organizationId) {
    const url = sprintf(config.apiGateway.getOrganizationsById, {organizationId});

    return fetch(url, {
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            Authorization: `Basic ${process.env.GITHUB_USERNAME}:${process.env.GITHUB_ACCESS_TOKEN}`
        },
    });
}

export function getOrganizationByName(orgName) {
    const url = sprintf(config.apiGateway.getOrganizationsByName, {orgName});

    return fetch(url, {
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            Authorization: `Basic ${process.env.GITHUB_USERNAME}:${process.env.GITHUB_ACCESS_TOKEN}`
        },
    });
}

export function getReposByName(orgName) {
    const url = sprintf(config.apiGateway.getReposByName, {orgName});

    return fetch(url, {
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            Authorization: `Basic ${process.env.GITHUB_USERNAME}:${process.env.GITHUB_ACCESS_TOKEN}`
        },
    });
}