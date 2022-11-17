const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");
const serverConfig = require("./config/server.config");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(dbConfig.DB_URL).then(
    (data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`);

   });


require("./Routes/userRoutes") (app);

app.listen(serverConfig.PORT, ()=>{
    console.log(`server is listening on http://localhost:${serverConfig.PORT}`);
});