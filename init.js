// Initialization script
// Game cross chat version v0.1.0
// Copyright (c) 2020 ShipMasterCaine (Kian Caine)


console.warn("Initializing central server...");

// Loading inital modules
console.log("Loading inital modules...");

const config = require("./Utillities/config.js");
const symbols = require("./Utillities/symbols.js");
const chalk = require("chalk");

console.log(chalk.green("[" + symbols.check + "] Inital modules loaded!"));

// Loading other modules and dependencies
console.log(chalk.yellow("[" + symbols.wait + "] Loading dependencies and modules..."));

const webSocket = require("ws");
const http = require("http");
const discord = require("discord.js");
var discordEnabled = true;
if (!config.discordBotToken) {
    console.log(chalk.red("[" + symbols.warn + "] No discord bot token detected, starting in server only mode."));
    discordEnabled = false;
}

console.log(chalk.green("[" + symbols.check + "] Dependencies and modules loaded!"));

// Spinning up a local network HTTP server
console.log(chalk.yellow("[" + symbols.wait + "] Starting local HTTP server..."));

var server = http.createServer()
console.log(chalk.yellow("[" + symbols.wait + "] Binding websocket to server..."));
const wss = new webSocket.Server({ server })

// Functions used 

const charCodeToString = function(data) {

};

//
wss.on('connection', function connection(client){
    console.log(chalk.yellow("[" + symbols.wait + "] Connection incoming..."));
    clientData = [];
    client.on('ping', function(data) {
        var decodedData = JSON.parse()
        clientData[client] = {
            webSocket : client,
            pingInterval : null,
            data : decodedData,
        }
    });
    client.ping();

    var ping = setInterval(function() {
        client.ping();
    }, 1000);
    
    client.on('message', function incoming(message) {
        console.log(message);
    });
});

server.listen(config.connectionSettings.port, config.connectionSettings.ip, () => {
    console.log(chalk.green("[" + symbols.check + `] Successfully started local HTTP server, server running on ${config.connectionSettings.ip}:${config.connectionSettings.port}`));
});

console.log(chalk.green("[" + symbols.check + "] Game Cross Chat version v" + config.version + " loaded!"));