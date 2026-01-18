# 🎵 Music Discover API

This project is a full-stack web application developed for **Assignment 3**. It transitions a backend system from local JSON storage to a robust **MongoDB Atlas** cloud database. The application allows users to discover, add, and manage a collection of songs.

---

## 🚀 Features

- **Full CRUD Functionality**: Create, Read, Update, and Delete song entries.
- **MongoDB Integration**: Data persistence using Mongoose and MongoDB Atlas.
- **Data Validation**: Strict schema rules ensuring all songs have a title, artist, and genre.
- **Timestamps**: Automatic tracking of `createdAt` and `updatedAt` for every entry.
- **RESTful API**: Clean and structured endpoints with appropriate HTTP status codes.
- **Frontend Interface**: A simple, responsive UI to interact with the database in real-time.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (Cloud Cluster)
- **ODM**: Mongoose
- **Frontend**: HTML5, CSS3, JavaScript (Fetch API)
- **Testing**: Postman

---

## 📁 Project Structure

```text
.
├── models/
│   └── Song.js          # Mongoose Schema for Music objects
├── public/
│   └── index.html       # Frontend interface
├── .env                 # Environment variables (Database credentials)
├── .gitignore           # Files to be ignored by Git
├── package.json         # Project dependencies
└── server.js            # Main Express server and API routes

 
