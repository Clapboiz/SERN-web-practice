import db from "../models/index";

let getHomePage = async (req, res) => {
  // return res.send("Hello world from controller");
  try {
    let data = await db.User.findAll();
    // console.log('----------------------------------------------------')
    // console.log(data);
    // console.log('----------------------------------------------------')
    // return res.render("homepage.ejs");

    return res.render('homepage.ejs', {
      data:JSON.stringify(data)
    })
  } catch (err) {
    console.log(err);
  }
};

let getAboutPage = (req, res) => {
  return res.render("./test/about.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
