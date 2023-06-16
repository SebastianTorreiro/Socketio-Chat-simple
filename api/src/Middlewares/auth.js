import { verifyToken } from "../Helpers/generateToken";

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);
    console.log(tokenData);
    if (tokenData._id) {
      next();
    } else {
      res.status(401).send({ error: "Usuario no autorizado" });
    }
  } catch (error) {
    console.log(error);
  }
};
