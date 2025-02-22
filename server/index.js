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

app.use((req, res, next) => {
   let badWords = ['knucklehead', 'jerk', 'internet explorer'];
   if (req.body.message) {
     for (let i = 0; i < badWords.length; i++) {
       let regex = new RegExp(badWords[i], 'g');
       req.body.message = req.body.message.replace(regex, '****');
     }
     next();
   } else {
     next();
   }
 });

app.get('/api/messages', messagesCtrl.getAllMessages);
app.get('/api/messages/history', messagesCtrl.history);
app.post('/api/message', messagesCtrl.createMessage);


app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))