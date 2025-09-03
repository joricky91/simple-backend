const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Example response with up to 10 objects
app.get("/users", (req, res) => {
  const users = [
    {
      avatar: "1 Female",
      name: "Jane",
      phone: "0121234513",
      isActive: true,
      index: 8
    },
    {
      avatar: "1 Male",
      name: "John",
      phone: "0856789123",
      isActive: false,
      index: 2
    },
    {
      avatar: "2 Male",
      name: "Mike",
      phone: "0812345678",
      isActive: true,
      index: 7
    },
    {
      avatar: "2 Female",
      name: "Michelle",
      phone: "0856712389",
      isActive: true,
      index: 4
    },
    {
      avatar: "3 Male",
      name: "Andy",
      phone: "0897654321",
      isActive: false,
      index: 5
    },
    {
      avatar: "3 Female",
      name: "Laura",
      phone: "0834125678",
      isActive: false,
      index: 6
    },
    {
      avatar: "4 Male",
      name: "Nicholas",
      phone: "0891827364",
      isActive: false,
      index: 3
    },
    {
      avatar: "4 Female",
      name: "Nadya",
      phone: "0818273645",
      isActive: true,
      index: 1
    },
  ];

  res.json(users);
});

app.get("/", (req, res) => res.send("OK"));

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});