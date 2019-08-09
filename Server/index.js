var clientID = '609134054947946507'
//Websocket Setup
var server = require("http").createServer();
var io = require("socket.io")(server);

io.on("connection", function(socket){
    socket.on("precenseChange", function(data){
        pendingPresence = data;
    })
})

//Discord setup
var DiscordRPC = require("discord-rpc");
var loadedPresence = {};
var pendingPresence = {
    state: "Waiting for user to go to website...",
    largeImageKey: "logo",
    largeImageText: "What? You never used Netscape? You know its fun right?",
    startTimestamp: new Date().getTime(),
};

var rpc = new DiscordRPC.Client(
    {
        transport: "ipc"}
)

function setPresence(data){
    loadedPresence = data
    loadedPresence.startTimestamp = new Date().getTime()
    rpc.setActivity(loadedPresence);
    
}

rpc.on("ready",function(){
    setPresence(pendingPresence);
    setInterval(function(){

        
        if(loadedPresence.details != pendingPresence.details){
            setPresence(pendingPresence);
        }
        
        
    },15000)
    
    
})



rpc.login({ clientId: clientID }).catch(console.error);
server.listen(80,function(){
    console.log("Server Online")
});
