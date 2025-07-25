var URL = Java.type('java.net.URL');
var HttpURLConnection = Java.type('java.net.HttpURLConnection');
var DataOutputStream = Java.type('java.io.DataOutputStream');
var StringBuilder = Java.type('java.lang.StringBuilder');

function sendDiscordMessage() {
    try {
        var webhookUrl = "https://discord.com/api/webhooks/1397869568319291515/6O_Zciy0jmpsQAbQtm82L6m-diLhrc3ib9QdDKH4sFtYu3XoAXXiEGnmK4ujPQL20iyl"; // Replace with your Discord webhook URL
        var url = new URL(webhookUrl);
        var conn = url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setDoOutput(true);

        var message = {
            content: "You got pranked! This is just a harmless joke from your friend!"
        };
        var jsonPayload = JSON.stringify(message);

        var out = new DataOutputStream(conn.getOutputStream());
        out.writeBytes(jsonPayload);
        out.flush();
        out.close();

        var responseCode = conn.getResponseCode();
        if (responseCode == 204) {
            print("Prank message sent to Discord successfully!");
        } else {
            print("Failed to send Discord message. Response code: " + responseCode);
        }
    } catch (e) {
        print("Error sending Discord message: " + e);
    }
}

sendDiscordMessage();
