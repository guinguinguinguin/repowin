// eslint-disable-next-line 
const appPrefix = 'https://api.github.com';
const maxResults = 10;

const config= {
    apiGateway: {
        getOrganizationsById: `${appPrefix}/organizations?per_page=${maxResults}&since=%(organizationId)s`,
        getOrganizationsByName: `${appPrefix}/orgs/%(orgName)s`,
        getReposByName: `${appPrefix}/orgs/%(orgName)s/repos`,
    },
    maxResults: maxResults,
    repoTableHeaders: ['Name', 'Language', 'Open Issues', 'Updated', 'Clone']
};

export default config;