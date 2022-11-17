const userController = require("../controllers/userController");

module.exports = (app)=>{
    app.post("/ReferalSystem_app/api/v1/user", userController.signUpUser);
    
    app.get("/ReferalSystem_app/api/v1/user/:id", userController.getOneUser);
    app.get("/ReferalSystem_app/api/v1/users", userController.getAllUsers);
};