const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const{validateReview, isLoggedIn,isReviewAuthor}=require("../middleware.js");  
const ListingControllers=require("../controllers/review.js");


//reviews
// post review-route 

router.post("/",isLoggedIn,validateReview,wrapAsync (ListingControllers.newReview) );


//delete review-route
router.delete(
  "/:reviewId",
    isLoggedIn,isReviewAuthor,
  wrapAsync(ListingControllers.destroy)
);

module.exports = router;