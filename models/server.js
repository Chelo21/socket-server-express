const express = require('express');
const http = require('http');
const socketio = require('socket.io')
const path = require('path')
const Sockets = require('./sockets')
const cors = require('cors')

class Server {

constructor() {


this.app = express();
this.port = process.env.PORT;

//http server
this.server = http.createServer(this.app);

//configuraciones del socket
this.io = socketio(this.server, {/*   configuraciones */ });

}

middlwares(){
//desplegar el directorio publico
this.app.use(express.static(path.resolve(__dirname,'../public' )           ))

//cors
this.app.use(cors())

}

configurarSockets(){

new Sockets(this.io);

}

execute(){

  //inicializar middlewares paguinas
  this.middlwares();

this.configurarSockets();

this.server.listen(this.port, () => {
  console.log(`server corrientod en el pueto: ${this.port}`);
});

}


}
module.exports = Server