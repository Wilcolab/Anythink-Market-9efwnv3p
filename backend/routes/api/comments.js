/**
 * @module routes/api/comments
 * @description API routes for managing comments.
 * @requires express
 * @requires mongoose
 * @requires models/Comment
 */

/**
 * @name GET /
 * @function
 * @memberof module:routes/api/comments
 * @description Route to get all comments.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 * @async
 */

/**
 * @name DELETE /:id
 * @function
 * @memberof module:routes/api/comments
 * @description Route to delete a comment by its ID.
 * @param {object} req - Express request object.
 * @param {string} req.params.id - The ID of the comment to delete.
 * @param {object} res - Express response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 * @async
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// GET all comments
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (err) {
        console.error("Error fetching comments:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// DELETE a comment by ID
router.delete("/:id", async (req, res) => {
    const commentId = req.params.id;
    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
        console.error("Error deleting comment:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
