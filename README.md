# Quick Blog Platform

A modern, full-stack blogging platform built with the MERN stack (MongoDB, Express, React, Node.js). This project features a clean UI, rich text editing, user authentication, and an administrative dashboard for managing content.

## 🚀 Features

- **Full-Stack Content Management**: Create, read, and delete blog posts with ease.
- **User Authentication**: Secure registration and login flow for authors.
- **Rich Text Editor**: Integrated [Quill.js](https://quilljs.com/) for beautiful blog formatting.
- **Image Support**: Image uploads managed via [ImageKit](https://imagekit.io/) for optimized delivery.
- **Comments System**: Interactive comments section on every blog post.
- **Admin Dashboard**: Specialized view for monitoring blogs, comments, and drafts.
- **Premium Design**: Responsive, modern UI built with Vanilla CSS and Tailwind.

## 🛠️ Tech Stack

### Frontend
- **React / Vite**: For a fast and reactive user interface.
- **Tailwind CSS**: Utility-first CSS for premium styling.
- **Axios**: Promised-based HTTP client for API communication.
- **React Router**: Seamless page transitions and routing.
- **React Hot Toast**: Beautiful notification system.

### Backend
- **Node.js / Express**: Robust server-side logic and API routing.
- **MongoDB / Mongoose**: Scalable NoSQL database and object modeling.
- **JWT (JSON Web Token)**: Secure, stateless authentication.
- **Bcryptjs**: Industrial-grade password hashing.
- **Multer**: Middleware for handling `multipart/form-data` (file uploads).

## 📦 Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB URI (Atlas or local)
- ImageKit account for image storage

### Server Setup
1. Navigate to the `server` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file based on the provided keys (MONGO_URI, SECRET_KEY, IMAGEKIT_keys, etc.).
4. Start the server: `npm run server` or `node server.js`

### Client Setup
1. Navigate to the `client` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file and set `VITE_BASE_URL` to your server's URL (e.g., `http://localhost:3000`).
4. Start the development server: `npm run dev`

## 📄 License

This project is open-source and available under the [ISC License](LICENSE).
