import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  // return res.send("Hello world from controller");
  try {
    let data = await db.User.findAll();
    // console.log('----------------------------------------------------')
    // console.log(data);
    // console.log('----------------------------------------------------')
    // return res.render("homepage.ejs");

    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
};

let getAboutPage = (req, res) => {
  return res.render("./test/about.ejs");
};

let getCrudPage = (req, res) => {
  return res.render("./crud.ejs");
};

let postCrudPage = async (req, res) => {
  let message = await CRUDService.createUser(req.body);
  console.log(message);
  return res.send("post crud from server");
};

let displayGetCrudPage = async (req, res) => {
  let data = await CRUDService.getAllUsers();
  console.log("--------------------------------");
  console.log(data);
  console.log("--------------------------------");

  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCrudPage = async (req, res) => {
  let userID = req.query.id;
  if (userID) {
    let userData = await CRUDService.getUserInfoById(userID);

    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("user not found");
  }
};

let putCrudPage = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCrudPage: getCrudPage,
  postCrudPage: postCrudPage,
  displayGetCrudPage: displayGetCrudPage,
  getEditCrudPage: getEditCrudPage,
  putCrudPage: putCrudPage,
};
