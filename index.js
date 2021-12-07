const express = require("express");

const app = express();
const db = require("./models");

app.use(express.urlencoded({extended:true}))
app.use(express.json());

const userRoutes = require("./routes/user-routes");
app.use("/api/users", userRoutes);

const postRoutes = require("./routes/post-routes");
app.use("/api/post", postRoutes );

const ProfileRoutes = require("./routes/profile-routes");
app.use("/api/profile", ProfileRoutes);

db.sequelize.sync().then(()=>{
app.listen("3000", ()=> {
    console.log("server is running on port 3000");
});
});