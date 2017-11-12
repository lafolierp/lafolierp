const discord = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new discord.Client();
const token = "MzU5MDE5NDMxNDgyODg0MDk2.DOpTUw.jZH_b7_biEPMQK6zII3UZ0IfSqo";

//Lancement du bot
client.on('ready', () => {
    var servers = client.guilds.array().map(g => g.name).join('.');
    console.log("========================\n[!]ANTARES DISPO");
    client.user.setGame(client.guilds.size.toString());
    });



client.login(token);
