import messageService from "../Service/Message.Service.js";

const service = new messageService();

export default async function getAllMessagesFromOneUser(req, res) {
  const { userTarget, userFrom, content } = req.body;
  try {
    const mesaggeCreated = await service.createMessage(
      userTarget,
      userFrom,
      content
    );
    res.status(202).json(mesaggeCreated);
  } catch (error) {
    res.json("error");
  }
}
