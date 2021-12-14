// eslint-disable-next-line 
const appPrefix = 'https://api.github.com';
const maxResults = 10;

const config= {
    apiGateway: {
        getOrganizationsById: `${appPrefix}/organizations?per_page=${maxResults}&since=%(organizationId)s`,
        getOrganizationsByName: `${appPrefix}/organizations?since=%(orgName)s`,
    },
    maxResults: maxResults
};

export default config;