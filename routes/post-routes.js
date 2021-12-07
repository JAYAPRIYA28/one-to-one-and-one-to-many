const express = require("express");
const router = express.Router();
const db = require("../models");


router.post("/new", (req,res)=> {
    db.Post.create({
        text: req.body.text,
        UserId: req.body.UserId
      }).then(newPost => {
        res.send(newPost);
      });
})

router.get("/:id", (req, res)=>{
    db.Post.findAll({
     where: {id: req.params.id},
     include:[db.User]
    }).then((getPost) => {
        res.send(getPost);
    });
});

module.exports = router;