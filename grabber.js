var Chat = Java.type('net.minecraft.util.ChatComponentText');
var world = Java.type('net.minecraft.world.WorldServer').worldServers[0];
var players = world.playerEntities;
for (var i = 0; i < players.size(); i++) {
    players.get(i).addChatMessage(new Chat('You got pranked! No passwords here!'));
}
