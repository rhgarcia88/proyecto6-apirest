const {getStreamers,postStreamer,updateStreamer,deleteStreamer,getAStreamer} = require('../controllers/Streamer.js');
const router = require("express").Router();

router.get("/", getStreamers);
router.get("/:id", getAStreamer);
router.post("/", postStreamer);
router.put("/:id", updateStreamer);
router.delete("/:id", deleteStreamer);



module.exports = router;