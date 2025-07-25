// temp.js
const axios = require('axios');

axios.post('https://discord.com/api/webhooks/1397869568319291515/6O_Zciy0jmpsQAbQtm82L6m-diLhrc3ib9QdDKH4sFtYu3XoAXXiEGnmK4ujPQL20iyl', {
    content: 'Ping from Minecraft mod!'
})
.then(response => {
    console.log('Ping sent successfully!');
})
.catch(error => {
    console.error('Error sending ping:', error);
});