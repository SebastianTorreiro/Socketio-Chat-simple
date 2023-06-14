import User from "../Models/User.js";
import UserService from "../Service/User.Service.js";

const service = new UserService();



export async function getAllUsers(req, res) {
  try {
    const allUsers = await User.find({});
    res.status(202).json(allUsers);
  } catch (error) {
    res.status(404).json(error);
  }
}

export async function deleteAllUsers(req, res){
  try {
    const deletedUsers = await User.deleteMany({})
    res.json('Todos los usuarios han sido eliminados')
  } catch (error) {
    res.json('No se pudieron eliminar los usuarios')
  }
}
