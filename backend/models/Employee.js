const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Always Hashed Password
    role: { type: String, default: "User", enum: ["User", "Admin"] }, // Default to User
    secretKey: { type: String, default: null } // Only for Admins
});

const EmployeeModel = mongoose.model("user_datas", EmployeeSchema);
module.exports = EmployeeModel;
