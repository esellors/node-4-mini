require('dotenv').config();
const express = require('express');
const app = express();
const messagesCtrl = require('./messagesCtrl');
const session = require('express-session');
const {SERVER_PORT, SECRET_KEY} = process.env;

app.use(express.json());

app.use(session({
   secret: SECRET_KEY,
   resave: false,
   saveUninitialized: false,
   cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
   }
}))

app.get('/api/messages', messagesCtrl.getAllMessages);
app.post('/api/message', messagesCtrl.createMessage);


app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))