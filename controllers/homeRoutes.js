const router = require("express").Router();
const { User, Personal, Catalog } = require("../models");
const sequelize = require("../config/connection");
const countapi = require("countapi-js");

router.get("/", async (req, res) => {
  try {
    const catalogData = await Catalog.findAll({
      order: sequelize.random(),
      limit: 4,
    });

    const firearms = catalogData.map((firearm) => firearm.get({ plain: true }));
    console.log(firearms);

    countapi.visits().then((result) => {
      console.log(result.value);
      res.render("homepage", {
        firearms,
        visited: result.value,
        logged_in: req.session.logged_in,
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/mysafe");
    return;
  }
  res.render("login");
});

router.get("/newuser", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/mySafe");
    return;
  }
  res.render("newuser");
});

router.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).redirect("/");
    });
  } else {
    res.status(204).redirect("/");
  }
});

router.get("/addinventory", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("addinventory", {
    logged_in: req.session.logged_in,
  });
});

router.get("/safety", (req, res) => {
  try {
    res.render("safety");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
