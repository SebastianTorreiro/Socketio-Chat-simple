import messageService from "../Service/Message.Service.js";
import Message from "../Models/Message.js";
const service = new messageService();

export async function createMessage(req, res) {
  const { userTarget, userFrom, content } = req.body;
  console.log( userTarget, userFrom, content )
  try {
    const mesaggeCreated = await Message.create({
      userTarget,
      userFrom,
      content
    });
    mesaggeCreated.save()
    res.status(202).json(mesaggeCreated);
  } catch (error) {
    console.log(error)
    res.json("error");
  }
}

export async function getAllMessagesFromOneUser(req, res){
  const { userFrom, userTarget } = req.params;

 try {
  const messages = await Message
  .find({
    $or: [
      { userFrom: userFrom, userTarget: userTarget },
      { userFrom: userTarget, userTarget: userFrom }
    ]
  })
  .sort({ createdAt: 'asc' })
  .populate('userFrom', 'name')
  .populate('userTarget', 'name')
  .exec();

  res.json(messages);
 } catch (error) {
  res.json(error)  
 }

}


export async function getAllMessages(req, res){
  try {
    const messages = await Message.find().populate('userFrom').populate('userTarget')
    res.json(messages)
  } catch (error) {
    res.json(error)
    
  }
}