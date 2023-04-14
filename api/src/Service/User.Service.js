import User from "../Models/User.js";

class UserService {
  async createUser(email, password) {
    try {
      const userCreated = new User({ password, email });
      userCreated.save();
      return userCreated;
    } catch (error) {
      return error;
    }
  }
}

export default UserService;
