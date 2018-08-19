import express from "express";
import roomsRoutes from "./rooms";

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({message: "Welcome"});
});

router.use("/rooms", roomsRoutes);

export default router;