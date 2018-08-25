import express from "express";
import activitiesService from "../services/activities";

const router = express.Router();

router.post("/new", (req, res, next) => {
  activitiesService.newAction(req.body).then(() => {
    res.json({message: "OK"});
  }).catch(function(error) {
    res.json({error: error});
  });
});

export default router;