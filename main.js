const express = require("express");
const router = express.Router();
const fs = require("fs");
const JSONdata = require("./rawJSON4.json");

console.log(JSONdata);

router.get("/userList", async (req, res) => {
  let users = [];
  await JSONdata.members.map((member) => {
    users.push({
      id: member.id,
      name: member.real_name,
      lastActive:
        member.activity_periods[member.activity_periods.length - 1].start_time,
    });
  });

  await res.send(users);
});

router.post("/oneUserData", async (req, res) => {
  console.log(req.body.id.id);

  await JSONdata.members.map((member) => {
    if (member.id === req.body.id.id) {
      return res.send(member);
    }
  });
});

module.exports = router;
