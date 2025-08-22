# Wanderlust

Wanderlust is a full-stack web application for listing, reviewing, and discovering unique travel accommodations around the world. Users can create accounts, add new listings with images, leave reviews, and manage their own properties.

## Features

- User authentication (register, login, logout)
- Add, edit, and delete property listings
- Upload listing images (Cloudinary integration)
- Leave reviews and ratings on listings
- Flash messages for user feedback
- Responsive design with EJS templates

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- Passport.js (authentication)
- Joi (validation)
- Multer & Cloudinary (image uploads)
- EJS (templating)
- Bootstrap (styling)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary account](https://cloudinary.com/) (for image uploads)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI and Cloudinary credentials:
     ```
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_KEY=your_key
     CLOUDINARY_SECRET=your_secret
     MONGO_URL=mongodb://127.0.0.1:27017/wanderlust
     ```

4. **Start MongoDB:**
   ```bash
   mongod
   ```

5. **Start the server:**
   ```bash
   node app.js
   ```
   or (for development):
   ```bash
   npx nodemon app.js
   ```

6. **Visit the app:**
   Open [http://localhost:8080/](http://localhost:8080/) in your browser.

## Project Structure

```
majorproject/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── app.js
├── schema.js
├── ...
```

## License

This project is licensed under the MIT License.

---

**Happy
