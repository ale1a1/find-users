const express = require("express");
const router = express.Router();

const { userController } = require("../controller");

router.get("/", userController.listUsers);
router.get("/favourites", userController.listFavourites);
router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/addToFavourites", userController.addToFav);
router.post("/getOneFavourite", userController.getOneFromFav);
router.post("/removeFavourite", userController.removeFromFav);
router.post("/currentUser", userController.currentUser);
router.post("/editUser", userController.editUser);

module.exports = router;
