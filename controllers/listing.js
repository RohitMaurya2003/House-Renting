const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
  console.log("Listings accessed");
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.newShowRoute = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews"); // Populate reviews
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  res.render("listings/show", { listing });
};

module.exports.newCreateRoute = async (req, res) => {
  try {
    const listing = new Listing(req.body.listing);

    // Handle image upload if applicable
    if (req.file) {
      listing.image = {
        url: req.file.path, // Cloudinary URL
        filename: req.file.filename, // Cloudinary filename
      };
    }

    listing.owner = req.user._id; // Assuming the logged-in user is the owner
    await listing.save(); // Save the listing to MongoDB
    req.flash("success", "Successfully created a new listing!");
    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Failed to create a new listing.");
    res.redirect("/listings/new");
  }
};

module.exports.newEditRoute = async (req , res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found");
    res.redirect("/listings");
    throw new ExpressError(404, "Listing not found");
  }

 
  req.flash("success", "Successfully edited the listing!");
  res.render("listings/edit.ejs", { listing });
};

module.exports.newUpdateRoute = async (req, res) => {
  let { id } = req.params;

  let listing=await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if(typeof req.file !== "undefined"){
  let url=req.file.path;
  let filename=req.file.filename;
  listing.image={url,filename};
  await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.newDeleteRoute = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing deleted");
  res.redirect("/listings");
};