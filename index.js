const  Server  = require("./models/server");
require('dotenv').config();



const server = new Server


server.execute()

// servidor de exress





// const io = require('socket.io')(server);
// const port = process.env.PORT || 8080;




// // 
// //   console.log(`client conectado ${socket.id}`)
// // socket.emit('mensaje-bienvenido', 'bienbenido al server')
// // });

// io.on('connection', (socket) =>{
//   console.log(`client conectado ${socket.id}`)


// // socket.emit('mensaje-bienvenida', {

// //   msg: 'bienbenido al server',
// //   fecha: new Date()
// // })

// // socket.on('mensaje-clente', (data) =>{
// // console.log('se recibe mensaje ...................')
// //   console.log(data)
// // })






// });





// server.listen(port, () => {
//   console.log(`server corrientod en el pueto: ${port}`);
// });
