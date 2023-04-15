import messageService from '../Service/Message.Service.js'

const service = new messageService()

export default function getAllMessagesFromOneUser(req, res){
    const {userTarget, userFrom, content} = req.body
    try {
        
    } catch (error) {
        
    }
    res.json('funciona')
}
