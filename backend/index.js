const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/USER_DATA", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

/* ==========================
    🔹 Register API (Secret Key Only for Admins, Passwords Hashed)
   ========================== */
app.post("/register", async (req, res) => {
    const { name, email, password, role, secretKey } = req.body;

    try {
        // Check if user already exists
        const existingUser = await EmployeeModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "❌ User Already Registered" });
        }

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("🔹 Hashed Password Stored:", hashedPassword);

        // Store user data
        const newUser = new EmployeeModel({
            name,
            email,
            password: hashedPassword,
            role: role || "User",
            secretKey: role === "Admin" ? secretKey : null // Only Admins have a secret key
        });

        await newUser.save();

        res.status(201).json({ message: "✅ Successfully Registered" });
    } catch (err) {
        console.error("❌ Registration Error:", err);
        res.status(500).json({ error: "❌ Error creating user", details: err.message });
    }
});

/* ==========================
    🔹 Login API (Fix: Users Cannot Enter Secret Key)
   ========================== */
app.post("/login", async (req, res) => {
    const { email, password, secretKey } = req.body;

    try {
        const user = await EmployeeModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "❌ No record found with this email" });
        }

        console.log("🔹 User Found:", user.email);

        // Compare entered password with stored hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        console.log("🔹 Password Match Result:", isPasswordMatch);

        if (!isPasswordMatch) {
            return res.status(400).json({ error: "❌ Incorrect Password" });
        }

        // If user is a normal user but entered a secret key, return an error
        if (user.role === "User" && secretKey) {
            return res.status(400).json({ error: "❌ Secret Key is not required for normal users" });
        }

        // If user is an admin, validate the secret key
        if (user.role === "Admin") {
            if (!secretKey) {
                return res.status(400).json({ error: "❌ Secret Key is required for Admins" });
            }
            if (user.secretKey !== secretKey) {
                return res.status(400).json({ error: "❌ Invalid Secret Key" });
            }
        }

        res.status(200).json({ message: "✅ Login Successful" });
    } catch (err) {
        console.error("❌ Login Error:", err);
        res.status(500).json({ error: "❌ Database query error", details: err.message });
    }
});

/* ==========================
    🔹 Start Server
   ========================== */
app.listen(3001, () => {
    console.log("🚀 Server is running on port 3001");
});
