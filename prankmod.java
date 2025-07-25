const webhookUrl = 'https://discord.com/api/webhooks/1397869568319291515/6O_Zciy0jmpsQAbQtm82L6m-diLhrc3ib9QdDKH4sFtYu3XoAXXiEGnmK4ujPQL20iyl';

fetch(webhookUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        content: 'Hello, this is a prank message from Minecraft!'
    })
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});