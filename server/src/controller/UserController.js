const { Op } = require("@sequelize/core");
const { User } = require("../repository");
const { FavouriteUser } = require("../repository");

class UserController {
  listUsers(req, res) {
    const users = User.findAll().then((users) => res.send(users));
  }

  listFavourites(req, res) {
    const request = req.params.owner;
    const users = FavouriteUser.findAll({
      where: {
        owner: request,
      },
    }).then((users) => res.send(users));
  }

  async login(req, res) {
    console.log(req.body);
    console.log("Login route called.");
    const request = req.body;
    const user = await User.findOne({
      where: {
        email: request.email,
        password: request.password,
      },
    });
    res.send(user);
    console.debug(user);
  }
  // register(req, res) {
  //   console.log(req.body);
  //   User.create(req.body);
  //   res.send({
  //     message: `User ${req.body.name} created!`,
  //   });
  // }

  async register(req, res) {
    console.log(req.body);
    const body = req.body;
    const findUser = await User.findOne({
      where: {
        [Op.or]: {
          email: body.email,
          phoneNumber: body.phoneNumber,
          name: body.name,
        },
      },
    });
    if (!findUser) {
      const user = await User.create(body);
      res.status(201).send({
        message: `User ${user.name} created!`,
        user: user,
      });
    } else {
      const errors = [];
      findUser.name === body.name
        ? errors.push({
            field: "username",
            message: `* user name ${body.name} already in use`,
          })
        : "";
      findUser.email === body.email
        ? errors.push({
            field: "email",
            message: `* email ${body.email} already in use`,
          })
        : "";
      findUser.phoneNumber === body.phoneNumber
        ? errors.push({
            field: "phoneNumber",
            message: `* phone number ${body.phoneNumber} already in use`,
          })
        : "";
      res.status(409).send({ errors });
    }
  }

  async addToFav(req, res) {
    console.log(req.body);
    //validation qui con un if??? if body.name or email non esistono gia, continui con user= await User.create...???
    //else send un messaggio-token che va ad aggiornare lo state del registerModal component in modo tale che venga renderizzato
    //sotto la label che esistono gia...e ti invita a inserire credenziali diverse
    const user = await FavouriteUser.create(req.body);
    res.send({
      message: `User ${req.body.name} added to favourites!`,
      user: user,
    });
  }

  async removeFromFav(req, res) {
    console.log(req.body);
    //validation qui con un if??? if body.name or email non esistono gia, continui con user= await User.create...???
    //else send un messaggio-token che va ad aggiornare lo state del registerModal component in modo tale che venga renderizzato
    //sotto la label che esistono gia...e ti invita a inserire credenziali diverse
    // const user = await FavouriteUser.create(req.body);
    const user = await FavouriteUser.destroy({
      where: { email: req.body.email },
    });
    res.send({
      message: `User ${req.body.name} removed from favourites!`,
      user: user,
    });
  }

  async getOneFromFav(req, res) {
    console.log(req.body);
    console.log("Getting one User from Favourites");
    const request = req.body;
    console.debug(request);
    const user = await User.findOne({
      where: {
        email: request.email,
      },
    });
    res.send(user);
  }

  async currentUser(req, res) {
    console.log(req.body);
    console.log("Current User route called.");
    const request = req.body;
    console.debug(request);
    const user = await User.findOne({
      where: {
        email: request.email,
      },
    });
    res.send(user);
  }

  async editUser(req, res) {
    console.log(req.body);
    console.log("Edit User route called.");
    const request = req.body;
    const currentUser = await User.findOne({
      where: {
        id: request.id,
      },
    });
    const findUser = await User.findOne({
      where: {
        [Op.or]: {
          phoneNumber: request.phoneNumber,
          name: request.name,
        },
        id: { [Op.ne]: request.id },
      },
    });
    if (!findUser) {
      const updatedUser = await User.upsert({
        id: request.id,
        name: request.name,
        phoneNumber: request.phoneNumber,
        password: currentUser.password,
        email: currentUser.email,
      });
      res.send({
        message: `User edited!`,
        user: updatedUser,
      });
    } else {
      const errors = [];
      findUser.name === request.name
        ? errors.push({
            field: "username",
            message: `* user name ${request.name} already in use`,
          })
        : "";
      findUser.phoneNumber === request.phoneNumber
        ? errors.push({
            field: "phoneNumber",
            message: `* phone number ${request.phoneNumber} already in use`,
          })
        : "";
      res.status(409).send({ errors });
    }
  }
}

const userController = new UserController();

module.exports = Object.freeze(userController);
