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

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCrudPage: getCrudPage,
  postCrudPage: postCrudPage,
};
