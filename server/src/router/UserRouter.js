const express = require("express");
const router = express.Router();

const { userController } = require("../controller");

router.get("/", userController.listUsers);
// router.get("/favourites/:owner", userController.listFavourites);
// router.get("/favourites/:idList", userController.listFavourites);
router.post("/favourites", userController.listFavourites);
router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/addToFavourites", userController.addToFav);
router.post("/addToFavouritesJunction", userController.addToFavJunction);
router.get("/favouritesJunction/:id", userController.getFavouritesJunction);
router.post("/getOneFavourite", userController.getOneFromFav);
router.post("/removeFavourite", userController.removeFromFav);
router.post("/currentUser", userController.currentUser);
router.post("/editUser", userController.editUser);

module.exports = router;
