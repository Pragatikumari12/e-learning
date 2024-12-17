import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import cors from 'cors'
import videoRoutes from './routes/video.js';
import bodyParser from "body-parser";
dotenv.config();

const app = express(); 
app.use(bodyParser.json({ limit: '5gb' }));
app.use(bodyParser.urlencoded({ limit: '5gb', extended: true }));
// using middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

const port = process.env.PORT;

app.get("/" , (req,res) =>{
    res.send("server is working");  //message show on web pages...
});

app.use("/uploads", express.static("uploads"))

//importing routes
import userRoutes from './routes/user.js';
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js"; 

//using routes
app.use("/api", userRoutes); 
app.use("/api", courseRoutes); 
app.use("/api", adminRoutes); 
app.use('/api/videos', videoRoutes);

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
    connectDb();
});







