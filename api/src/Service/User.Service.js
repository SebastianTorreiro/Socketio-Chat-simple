import User from "../Models/User.js";

class UserService {
  async createUser( email, passwordHash, age, name ) {
    try {
      // console.log(email, password, age, name )
      const userCreated = User.create({ password: passwordHash, age, name })
      // userCreated.save();
      return userCreated;
    } catch (error) {
      return error;
    }
  }
}

export default UserService;
