const fetch = require('node-fetch');
const db = require("./db");


async function getServerList() {
    const fetch = require('node-fetch');

    fetch(`${panelUrl}/api/client`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Authorization": "Bearer apikey",
        "cookie": "pterodactyl_session=eyJpdiI6InhIVXp5ZE43WlMxUU1NQ1pyNWRFa1E9PSIsInZhbHVlIjoiQTNpcE9JV3FlcmZ6Ym9vS0dBTmxXMGtST2xyTFJvVEM5NWVWbVFJSnV6S1dwcTVGWHBhZzdjMHpkN0RNdDVkQiIsIm1hYyI6IjAxYTI5NDY1OWMzNDJlZWU2OTc3ZDYxYzIyMzlhZTFiYWY1ZjgwMjAwZjY3MDU4ZDYwMzhjOTRmYjMzNDliN2YifQ%253D%253D"
      }
    })
      .then(response => console.log(response))
      .catch(err => console.error(err));
}

async function checkServer(panelUrl, apiKey, serverId) {
    try {
        const response = await fetch(`${panelUrl}/api/servers/${serverId}`, {
            method: 'GET',
            headers: {
                'X-API-Key': apiKey
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

module.exports = { getServerList }