
const express = require("express");
const cookieParser = require("cookie-parser");
const knex = require("../db/client");
const moment = require('moment')



const router = express.Router();


router.use(cookieParser());


function setCookies(req, res, next) {

  const username = req.cookies.username;
  res.locals.inputUserName = username || '';

  console.log('respond: ', res.locals.inputUserName);
  next();
}

router.use(setCookies);


router.get("/new", (req, res) => {
  const username = req.cookies.username;
  console.log(username)
  res.render("clucks/new",{
    username: username
  });
});

//Insert data into the databae

router.post("/", (req, res) => {
  const image_url = req.body.image_url;
  const content = req.body.content;
  const username = req.cookies.username;

  console.log(image_url)
  console.log(username)

  knex("clucks")
    .insert({
      image_url: image_url,
      content: content,
      username: username
    })
    .returning("*")
  
    .then(data => {
      res.redirect('clucks/list');
    });
})


router.get("/list", (req, res) => {

  knex
    .select('*')
    .from('clucks')
    .orderBy("created_at", "DESC")
    .then(clucks => {
 
      res.render("clucks/list", {
        clucks: clucks,
        moment: moment,
        
      });
    })
});

router.get("/", (req, res) => {

  knex
    .select('*')
    .from('clucks')
    .orderBy("created_at", "DESC")
    .then(clucks => {
      res.render("clucks/list", {
        clucks: clucks,
      });
    })
});

module.exports = router;

    