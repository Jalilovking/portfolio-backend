const IO = require('../utils/IO/io');
const path = require('path');
const recievedMessages = new IO(path.resolve(__dirname, '../model/messages.json'));


class Messages {
    messages(req, res){
        try{

            const { name, email, contain } = req.body
            const foundMessage = JSON.parse(recievedMessages.read())

            if(!foundMessage.find(e => e.email == email)){
                
                foundMessage.push({id: foundMessage.length + 1, name, email, contain})
                
                recievedMessages.write(foundMessage)
            }

            

            res.render('index')
        }catch(err){
            console.log(err)
            res.json({
                status: 400,
                message: err.message
            })
        }
    }
}

module.exports = new Messages();