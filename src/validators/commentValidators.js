import { body } from "express-validator";

export const commentValidator = [
  body("content")
    .trim()
    .isLength({ min: 1, max: 700 })
    .withMessage("Comment must be between 1 and 700 characters"),
];

