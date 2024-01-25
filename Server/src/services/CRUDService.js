import db from "../models/index";
import bcrypt from "bcrypt";

const saltRounds = 10;

let createUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });
      resolve("ok. create new user succeed!");
    } catch (err) {
      reject(err);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPassword = bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createUser: createUser,
  hashUserPassword: hashUserPassword,
};
