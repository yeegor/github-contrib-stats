const fetch = require('node-fetch');

module.exports = async function getContributions() {
    const token = process.env.GITHUB_USER_READ_TOKEN;
    const username = process.env.GITHUB_USERNAME;

    const headers = { Authorization: `bearer ${token}` };
    const body = {
        query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`
    }

    const response = await fetch('https://api.github.com/graphql', { 
        method: 'POST', 
        body: JSON.stringify(body), 
        headers: headers 
    });

    const { data } = await response.json();
    
    return data;
}
