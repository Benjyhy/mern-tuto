import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.js";

// @desc GET goals
// @route GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});

// @desc POST goal
// @route POST /api/goals
// @access Private
export const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field.");
    }
    const goal = await Goal.create({
        text: req.body.text,
    });
    res.status(200).json(goal);
});

// @desc PUT goals
// @route PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedGoal);
});

// @desc DELETE goals
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }

    goal.remove(req.params.id);
    res.status(200).json({ id: req.params.id });
});