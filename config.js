const config = {
    production: {
        apiUrl: 'https://dailyjokes.app/api/v1',
    },
    development: {
        apiUrl: 'http://localhost:3000/api/v1',
    },
};

export const getApiUrl = (environment) => {
    return config[environment].apiUrl;
};
