const channelID = '2392793';
const apiKey = 'QXQVBJYN4JSYGR8F';
const distanceFieldNumber = 1; // Specify the field number for "distance"
const lightValueFieldNumber = 2; // Specify the field number for "lightValue"

const apiUrlDistance = `https://api.thingspeak.com/channels/${channelID}/fields/${distanceFieldNumber}.json?api_key=${apiKey}&results=10`;
const apiUrlLightValue = `https://api.thingspeak.com/channels/${channelID}/fields/${lightValueFieldNumber}.json?api_key=${apiKey}&results=10`;

// Function to fetch data from ThingSpeak and display in HTML
const fetchData = (url, fieldName) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            container.innerHTML += `<h3>${fieldName}</h3>`;
            data.feeds.forEach(feed => {
                const timestamp = new Date(feed.created_at).toLocaleString();
                const value = feed[`field${fieldNumber}`];
                container.innerHTML += `<p>${timestamp}: ${value}</p>`;
            });
        })
        .catch(error => console.error(`Error fetching ${fieldName} data:`, error));
};

// Fetch and display data for "distance" field
fetchData(apiUrlDistance, 'Distance');

// Fetch and display data for "lightValue" field
fetchData(apiUrlLightValue, 'Light Value');