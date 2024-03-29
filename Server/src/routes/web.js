import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  // router.get('/', (req, res) => {
  //     return res.send("Welcome to backend!");
  // });

  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCrudPage);

  router.get("/get-crud", homeController.displayGetCrudPage);
  router.get("/edit-crud", homeController.getEditCrudPage);
  router.post("/put-crud", homeController.putCrudPage);
  router.get("/delete-crud", homeController.deleteCrudPage);

  router.post("/post-crud", homeController.postCrudPage);

  router.post("/api/login", userController.handleLogin);
  return app.use("/", router);
};

module.exports = initWebRoutes;
