const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
const User = require("./model");
app.use(cors());

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connected"))
  .catch(() => console.log("Err in db connection"));

// FAKE DATA GENERATION
// function createRandomUser() {
//     return {
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       birthdate: faker.date.birthdate(),
//       address: faker.location.streetAddress(),
//     };
//   }

// const users = faker.helpers.multiple(createRandomUser, {
//     count: 1000,
// })

// users.map(async (user) => {
//     const newUser = new User(user)
//     await newUser.save()
// })

app.get("/", (req, res) => {
  res.send("WORKING !!!!!!!!");
});

app.get("/users", async (req, res) => {
  const users = await User.find();

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = users.slice(startIndex, endIndex);

  res.json({
    total: users.length,
    page: page,
    limit: limit,
    results: results,
  })
});

app.listen(process.env.PORT, () => {
  console.log(`app is listening at http://localhost:${process.env.PORT}`);
});
