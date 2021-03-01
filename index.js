require('dotenv').config()

const getContributions = require('./api/get-contributions');

(async function() {
    const data = await getContributions()
    console.log(data)
})();


