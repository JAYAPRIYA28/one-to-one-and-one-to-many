const express = require("express");
const router = express.Router();
const db = require("../models");


router.post("/new", (req,res)=> {
    db.Profile.create({
        name: req.body.name,
        UserId: req.body.UserId
    }).then(newProfile => res.send(newProfile));
})

router.get("/:id", (req, res)=>{
    db.Profile.findAll({
     where: {id: req.params.id},
     include:[db.User]
    }).then((getProfile) => {
        res.send(getProfile);
    });
});

module.exports = router;