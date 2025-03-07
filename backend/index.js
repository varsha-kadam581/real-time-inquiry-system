import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import userModel from "./models/user.model.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB before starting the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App is running at ${PORT}`);
    });
});

app.get("/", (req, res) => {
    res.send("Yes, working");
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }

        const newUser = new userModel({ email, password });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.get("/random", (req, res) => {
    res.json("Random text");
});
