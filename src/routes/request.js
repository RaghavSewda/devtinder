const express = require("express");
const { userAuth } = require("../middlewares/auth");

const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  // Sending a connectino request
  const user = req.user;
  // Sending a connection Request

  res.send(user.firstName + " sent the connection request");
});

module.exports = requestRouter;
