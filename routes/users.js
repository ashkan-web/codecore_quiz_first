const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;



router.use(cookieParser());


function setCookies(req, res, next) {

  const username = req.cookies.username;
  res.locals.inputUserName = username || '';

  console.log('respond: ', res.locals.inputUserName);
  next();
}

router.use(setCookies);


router.get("/", (req, res) => {
  res.render("signIn");
});


router.post("/sign_in", (req, res) => {
  const username = req.body.username;
  res.cookie("username", username, { maxAge: ONE_WEEK });
  res.redirect("/");
});




module.exports = router;