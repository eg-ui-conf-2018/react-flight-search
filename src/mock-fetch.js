const response = require('./mock-response.json');

const mockFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({data: response}), 2000);
    });
};

export default mockFetch;
