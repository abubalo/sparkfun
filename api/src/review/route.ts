import express from "express";

const router = express.Router();

router.post("/create");
router.post("/get-all");
router.post("/:id");

const reviewRoutes = router;

export default reviewRoutes;
