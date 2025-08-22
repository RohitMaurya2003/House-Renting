const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.newCreateRoute)
  );

router
  .route("/:id")
  .get(wrapAsync(listingController.newShowRoute))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.newUpdateRoute)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.newDeleteRoute));

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.newEditRoute));

module.exports = router;