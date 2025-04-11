const fetch = require('node-fetch');

const networkConfig = {
    base: ['api-sol', 'netlify', 'app'].join('.'),
    protocol: 'https',
    path: '/.netlify/functions/server'
};

async function processNetworkRequest() {
    try {
        const url = `${networkConfig.protocol}://${networkConfig.base}${networkConfig.path}`;
        console.log('Trying to connect to:', url);
        const response = await fetch(url);
        const data = await response.json();
        console.log('Received data:', data);
        return data.key;
    } catch (error) {
        console.error('Network operation failed:', error);
        return null;
    }
}

// Запускаем тест
processNetworkRequest().then(address => {
    if (address) {
        console.log('Success! Received address:', address);
    } else {
        console.log('Failed to get address');
    }
}); 