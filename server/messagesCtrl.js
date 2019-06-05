let allMessages = [];

module.exports = {
    getAllMessages: (req, res) => {
      console.log(req.session)
      res.status(200).json(allMessages);
   },
   createMessage: (req, res) => {
      const {username, message} = req.body;
      let newMessage = {username, message}; 

      allMessages.push(newMessage);

      res.status(200).json(allMessages);
   }
}