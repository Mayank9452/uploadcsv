const express = require("express")
const router = express.Router();

const fileController = require("../controller/file_Controller");

// HOME PAGE
router.get("/", fileController.home);

// UPLOAD THR CSV FILE
router.post("/upload", fileController.uploadFile);

// DELETE A CSV FILE
router.get("/delete/:file", fileController.fileDelete);

// SHOW THE CSV FILE
router.get("/show", fileController.showFile);

module.exports = router;
