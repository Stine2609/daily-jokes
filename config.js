const config = {
    production: {
        apiUrl: 'https://dailyjokes.app/api/v1',
    },
    development: {
        apiUrl: 'http://10.0.2.2:3000/api/v1',
    },
};

export const getApiUrl = (environment) => {
    return config[environment].apiUrl;
};
