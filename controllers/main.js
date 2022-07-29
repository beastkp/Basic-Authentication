const {badAPIError}= require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const user = ({ username, password } = req.body);

  console.log(username, password);
  if (!username || !password) {
    throw new badAPIError ("Please provide email and password", 400);
  }
  const id = new Date().getDate(); //normally comes from database bt=ut we are adding here

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  }); //requires payload, a jwt secret and then options
  res.status(200).json({ msg: "user Created", token });
};

const dashboard = async (req, res) => {
  console.log(req.user)
  // const authHeader = req.headers.authorization;

  // if (!authHeader || !authHeader.startsWith("Bearer ")) {
  //   throw new CustomAPIError("No Token Provided", 401);
  // }

  // console.log(req.headers);
  // const token  = authHeader.split(' ')[1]
  // console.log(token); //here we have got back the token now we need to verify it below

  // try {
  //   const decoded = jwt.verify(token,process.env.JWT_SECRET)
  //   console.log(decoded)
  //   const luckyNumber = Math.floor(Math.random() * 100);

  //   res.status(200).json({
  //     msg: `Hello ${decoded.username}`,
  //     secret: `hers is your secret password ${luckyNumber}`,
  //   });
  // } catch (error) {
  //   throw new CustomAPIError("No authoirsed to access this route", 401);

  // } 
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `hers is your secret password ${luckyNumber}`,
  });

  // const luckyNumber = Math.floor(Math.random() * 100);

  // res.status(200).json({
  //   msg: "Hello JohnBoy",
  //   secret: `hers is your secret password ${luckyNumber}`,
  // });
};

module.exports = { login, dashboard };
