const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  // creating new instance of User model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("user added successfully");
  } catch (err) {
    res.status(400).send("Error sending to the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established..");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
