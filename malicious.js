// temp.js
const axios = require('axios');

axios.post('YOUR_DISCORD_WEBHOOK_URL', {
    content: 'Ping from Minecraft mod!'
})
.then(response => {
    console.log('Ping sent successfully!');
})
.catch(error => {
    console.error('Error sending ping:', error);
});