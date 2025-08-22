const Listing=require("../models/listing.js");
const Review=require("../models/review.js");

module.exports.newReview=async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
 
  newReview.author = req.user._id;// Set the author to the logged-in user
  
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save(); 
  req.flash("success", "Successfully created a new review!");
  // Redirect to the listing page after creating the review
  res.redirect(`/listings/${listing._id}`);
 
}

module.exports.destroy=async (req, res)=>{
    let{id,reviewId}=req.params;
    reviewId = reviewId.trim();

    await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findById(reviewId)
    req.flash("success", "Successfully deleted the review!");

    res.redirect(`/listings/${id}`);
  
}