import express from "express"
import { uploadToS3 } from "../utils/helpers/uploader";

const router = express.Router();

router.post("/save", );
router.post("/upload", uploadToS3);
router.get("/query/:id");

const videoRoutes = router;

export default videoRoutes;