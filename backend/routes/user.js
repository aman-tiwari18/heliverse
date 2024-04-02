const router = require("express").Router();
const userController = require("../controllers/user");

router.post("/register", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/users/:id", userController.getUserById);
router.get("/users", userController.getAllUsers);

module.exports = router;
