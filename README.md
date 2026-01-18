# 🎵 Music Discover API

This project is a **full-stack web application** developed for **Assignment 3 (Web Technologies 2)**.  
The goal of this assignment is to migrate a backend system from **local JSON storage to MongoDB Atlas** and implement a fully functional **CRUD REST API** with a simple frontend interface.

---

## 📌 Assignment Objectives

- Migrate data storage from `data.json` to MongoDB Atlas
- Design a validated MongoDB schema
- Implement full CRUD operations
- Use proper HTTP status codes
- Build a basic frontend interface
- Prepare the project for defense

---

## 🚀 Features

- **Full CRUD Functionality**
  - Create, read, update, and delete songs
- **MongoDB Integration**
  - Cloud database using MongoDB Atlas
- **Schema Validation**
  - Required fields: `title`, `artist`, `genre`
  - Automatic timestamps (`createdAt`, `updatedAt`)
- **RESTful API**
  - Clean endpoints with correct HTTP status codes
- **Simple Frontend Interface**
  - HTML and JavaScript (Fetch API)

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **ODM**: Mongoose
- **Frontend**: HTML5, CSS3, JavaScript
- **Testing**: Postman

---

## 📁 Project Structure

```
.
├── models/
│   └── Song.js          # Mongoose schema
├── public/
│   └── index.html       # Frontend interface
├── .env                 # Environment variables
├── .gitignore           # Git ignored files
├── package.json         # Dependencies
└── server.js            # Express server
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Talantt0906/Back_end_Assign_3.git
cd Back_end_Assign_3
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```env
MONGO_URI=mongodb+srv://talante0906_db_user:ECdqW7S4ttuJWZuU@assign3.h7ahw0s.mongodb.net/musicDB
PORT=3000
```

### 4. Run the Server

```bash
node server.js
```

Server will run at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

| Method | Endpoint      | Description        | Status Codes      |
|--------|---------------|--------------------|-------------------|
| POST   | `/songs`      | Create a new song  | 201 / 400         |
| GET    | `/songs`      | Get all songs      | 200               |
| GET    | `/songs/:id`  | Get song by ID     | 200 / 404         |
| PUT    | `/songs/:id`  | Update song by ID  | 200 / 400 / 404   |
| DELETE | `/songs/:id`  | Delete song by ID  | 200 / 404         |

---

## 🧪 Testing with Postman

<img width="467" height="731" alt="屏幕截图 2026-01-18 124019" src="https://github.com/user-attachments/assets/cfb73569-e7cb-4380-ae8a-860111702ea9" />

<img width="538" height="406" alt="屏幕截图 2026-01-18 124104" src="https://github.com/user-attachments/assets/097bf032-1667-4908-9595-b9f83faf46d1" />

<img width="458" height="756" alt="屏幕截图 2026-01-18 124150" src="https://github.com/user-attachments/assets/463b3974-9353-43dc-8429-6089a12be6b4" />

<img width="533" height="776" alt="屏幕截图 2026-01-18 124310" src="https://github.com/user-attachments/assets/abe31d6b-0fbe-4112-8839-0d9ab46d6449" />

<img width="629" height="695" alt="屏幕截图 2026-01-18 124335" src="https://github.com/user-attachments/assets/b2f1d564-dcf5-45e8-9821-87ce50a9f0cc" />


<img width="1178" height="580" alt="屏幕截图 2026-01-18 124403" src="https://github.com/user-attachments/assets/5ede23aa-ea27-4e58-994c-242e69c9028c" />





---

## 📝 Defense Notes

### Schema Design

The Song schema enforces required fields and uses timestamps for tracking creation and updates.

### Error Handling

All routes use try-catch blocks and return meaningful HTTP status codes.

### Full-Stack Integration

The frontend communicates with the backend using Fetch API, demonstrating a complete request-response cycle.

---

## ✅ Assignment Checklist

- [x] MongoDB migration completed
- [x] CRUD operations implemented
- [x] Validation and error handling added
- [x] Frontend connected to backend
- [x] Ready for defense

---

## 👨‍💻 Author

**Talant Talemis**  
Web Technologies 2 - Assignment 3

---

## 📄 License

This project is for educational purposes only.
