import express from "express";
import roomsService from "../services/rooms";

const router = express.Router();

router.get('/', (req, res, next) => {
  roomsService.get().then((rooms) => {
    res.json(rooms);
  }).catch(function (error) {
    res.json({error: error});
  });
});


export default router;