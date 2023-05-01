import { compare, encrypt } from "../Helpers/handleBcrypt.js";
import User from "../Models/User.js";
import UserService from "../Service/User.Service.js";

const service = new UserService();

export async function createUser(req, res) {
  try {
    const { email, password, age, name } = req.body;
    if (!email || !password || !age || !name) {
      return res.json({
        message: "Error, no se enviaron los datos correspondientes",
      });
    }
    console.log(email, password, age, name);
    console.log("alo");
    const passwordHash = await encrypt(password);
    const createdUser = await User.create({
      email,
      password: passwordHash,
      age,
      name,
    });
    createdUser.save()
    res.json({ data: createdUser, status: "OK" });
  } catch (error) {
    console.log("hubo un rerro");
    res.json({ data: error });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const userFind = await User.findOne({ email });
    if (!userFind)
      return res
        .status(404)
        .json({ error: "No se a encontrado un usuario con ese email" });
    const passwordCompare = await compare(password, userFind.password);
    console.log(passwordCompare);
    if (!passwordCompare)
      return res.status(404).json({ error: "La constraseña es incorrecta" });
    res.json(userFind);
  } catch (error) {
    res.json({ message: "Error, no se pudo crear el usuario" });
  }
}

export async function getAllUsers(req, res) {
  try {
    const allUsers = await User.find({});
    res.json(allUsers);
  } catch (error) {
    res.json(error);
  }
}
