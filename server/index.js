require('dotenv').config();
const express = require('express');
const app = express();
const messagesCtrl = require('./messagesCtrl');
const {SERVER_PORT, SECRET_KEY} = process.env;


app.use(express.json());

app.get('/api/messages', messagesCtrl.getAllMessages);
app.post('/api/message', messagesCtrl.createMessage);


app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))