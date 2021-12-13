// eslint-disable-next-line 
const appPrefix = 'https://api.github.com';

const config= {
    apiGateway: {
        getOrganizationsById: `${appPrefix}/organizations?since=%(organizationId)s`,
        getOrganizationsByName: `${appPrefix}/organizations?since=%(orgName)s`,
    },
};

export default config;