import express from "express";
import roomsRoutes from "./rooms";
import activitiesRoutes from "./activities";

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({message: "Welcome"});
});

router.use("/rooms", roomsRoutes);

router.use("/activities", activitiesRoutes);

export default router;