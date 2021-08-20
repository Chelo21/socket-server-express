

class Socket {
constructor(io){

this.io= io;

this.socketEvents();

//clientes


}


socketEvents(){



  //on coneccion
this.io.on('connection', (socket) =>{

  //escuchar eventos mensaje to server
  socket.on('mensaje-to-server', (data) =>{
  console.log('se recibe mensaje ...................')
  console.log(data)
    this.io.emit('mensaje-from-server', data)
    })


})





}



}

module.exports = Socket;