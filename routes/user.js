const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user")
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { renderSignUpform } = require("../controllers/user.js");
const ListingControllers = require("../controllers/user.js")

router.get("/logout", ListingControllers.Logout);

router.
route("/signup")
.get( renderSignUpform)
.post(wrapAsync(ListingControllers.signup));


router.
route("/login")
.get( ListingControllers.renderLoginForm)
.post(saveRedirectUrl,
    passport.authenticate("local", {
        failureFlash: true, failureRedirect: "/login"
    }),
    ListingControllers.login

);
   





module.exports = router;
