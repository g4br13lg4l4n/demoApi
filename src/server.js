const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const itemRoutes = require('./routes/item')

// config io
const http = require('http').Server(app);
const io = require('socket.io')(http);


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/node-vue')
  .then(()=> console.log('conectado'))
  .catch( err => console.log(err))

//settings
app.set('port', process.env.PORT || 3101)

//middleware 
app.use(cors())
app.use(bodyParser.json())

//routes
app.use('/api', itemRoutes)


//static files
app.use(express.static(path.join(__dirname, 'public')))
/*
app.listen(app.get('port'), () => {
  console.log('Serve on ', app.get('port'))
})
*/
io.on('connection', function(socket){
  console.log('Usuario conectado');
  socket.on('disconnect', function(){
    console.log('Usuario desconectado :(');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('RESPONSER', msg);
  });

});


   
http.listen(app.get('port'), function(){
  console.log('listening on ', app.get('port'));
});
