const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

const multer = require("multer")

let storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, "./uploads");
    },
    filename: function(req,file,cb) {
        cb(null, file.fieldname + "_" + Date.now() +"_" + file.originalname);
    },
});

let upload = multer ({
    storage: storage,
}).single("image");




// get methods
router.get("/", API.fetchAllPost)
router.get("/:id", API.fetchPostById)

// Post methods
router.post("/", upload, API.createPost)

// patch methods
router.patch("/:id", upload, API.updatePost)

// delete methods
router.delete("/:id", API.deletePost)


module.exports = router;