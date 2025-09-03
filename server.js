const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Example response with up to 10 objects
app.get("/users", (req, res) => {
  const users = [
    {
      avatar: "1 Female.png",
      name: "John",
      phone: "0121234513",
      isActive: true,
      index: 1
    },
    {
      avatar: "1 Male.png",
      name: "Jane",
      phone: "0856789123",
      isActive: false,
      index: 2
    },
    {
      avatar: "2 Male.png",
      name: "Mike",
      phone: "0812345678",
      isActive: true,
      index: 3
    },
    {
      avatar: "2 Female.png",
      name: "Michelle",
      phone: "0856789123",
      isActive: true,
      index: 4
    },
    {
      avatar: "3 Male.png",
      name: "Mike",
      phone: "0812345678",
      isActive: false,
      index: 5
    },
    {
      avatar: "3 Female.png",
      name: "Michelle",
      phone: "0856789123",
      isActive: false,
      index: 6
    },
    {
      avatar: "4 Male.png",
      name: "Mike",
      phone: "0812345678",
      isActive: true,
      index: 7
    },
    {
      avatar: "4 Female.png",
      name: "Michelle",
      phone: "0856789123",
      isActive: false,
      index: 8
    },
  ];

  res.json(users);
});

app.get("/", (req, res) => res.send("OK"));

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});