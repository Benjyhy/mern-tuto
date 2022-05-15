import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Create a user
// @route POST /api/users
// @access public
export const registerUser = async (req, res) => {
    res.json({ message: "User registered" });
};

// @desc Authenticate user
// @route POST /api/users/login
// @access public
export const loginUser = async (req, res) => {
    res.json({ message: "User registered" });
};

// @desc Get user data
// @route GET /api/users/me
// @access public
export const getMe = async (req, res) => {
    res.json({ message: "User data displayed" });
};
