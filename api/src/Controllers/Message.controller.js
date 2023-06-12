import messageService from "../Service/Message.Service.js";
import Message from "../Models/Message.js";
import User from "../Models/User.js";
const service = new messageService();

export async function createMessage(req, res) {
  console.log(req.body);
  const {
    userTarget,
    userFrom,
    content,
  } = req.body;
  // console.log( userTarget, userFrom, content )
  // try {
  const mesaggeCreated = await Message.create({
    userTarget,
    userFrom,
    content,
  });

  // Buscar al usuario que envía el mensaje
  const userFromResponse = await User.findById(userFrom);

  // Buscar al usuario que recibe el mensaje
  const userTo = await User.findById(userTarget);

  // Actualizar la propiedad messageWith del usuario que envía el mensaje
  let userFromUpdate = {
    user: userTarget,
    lastMessage: content,
  };
  const indexFrom = userFromResponse.messageWith.findIndex(
    (u) => u.user.toString() === userTarget
  );
  if (indexFrom === -1) {
    // Si no existe el usuario en el arreglo, agregarlo
    userFromUpdate = {
      $push: { messageWith: userFromUpdate },
    };
  } else {
    // Si ya existe el usuario en el arreglo, actualizar el último mensaje
    userFromUpdate = {
      $set: {
        [`messageWith.${indexFrom}.lastMessage`]: content,
      },
    };
  }
  await User.findOneAndUpdate({ _id: userFrom }, userFromUpdate);

  // Actualizar la propiedad messageWith del usuario que recibe el mensaje
  let userToUpdate = {
    user: userFrom,
    lastMessage: content,
  };
  const indexTo = userTo.messageWith.findIndex(
    (u) => u.user.toString() === userFrom
  );
  if (indexTo === -1) {
    // Si no existe el usuario en el arreglo, agregarlo
    userToUpdate = {
      $push: { messageWith: userToUpdate },
    };
  } else {
    // Si ya existe el usuario en el arreglo, actualizar el último mensaje
    userToUpdate = {
      $set: {
        [`messageWith.${indexTo}.lastMessage`]: content,
      },
    };
  }
  await User.findOneAndUpdate({ _id: userTarget }, userToUpdate);
  res.status(202).json(mesaggeCreated);
  // } catch (error) {
  //   console.log(error)
  //   res.json("error");
  // }
}

export async function getAllMessagesFromOneUser(req, res) {
  const { userFrom, userTarget } = req.params;

  try {
    const messages = await Message.find({
      $or: [
        { userFrom: userFrom, userTarget: userTarget },
        { userFrom: userTarget, userTarget: userFrom },
      ],
    })
      .sort({ createdAt: "asc" })
      .populate("userFrom", "name")
      .populate("userTarget", "name")
      .exec();

    res.json(messages);
  } catch (error) {
    res.json(error);
  }
}

export async function getAllMessages(req, res) {
  try {
    const messages = await Message.find()
      .populate("userFrom")
      .populate("userTarget");
    res.json(messages);
  } catch (error) {
    res.json(error);
  }
}
