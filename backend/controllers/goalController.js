import asyncHandler from "express-async-handler";

// @desc GET goals
// @route GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get Goals" });
});

// @desc POST goal
// @route POST /api/goals
// @access Private
export const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.try) {
        res.status(400);
        throw new Error("Please add a try field.");
    }
    res.status(200).json({ message: "Set Goals" });
});

// @desc PUT goals
// @route PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` });
});

// @desc DELETE goals
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` });
});
