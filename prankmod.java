const webhookUrl = 'https://discord.com/api/webhooks/your-webhook-id/your-webhook-token';

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