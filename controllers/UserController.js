const UserService = require("../services/UserService");

const UserController = {
  login: async (req, res) => {
    await UserService.login(req.body);
    res.json({
      code: 200,
    });
  },
};

module.exports = UserController;
