const router = require("express").Router();

router.use("/addbook", require("./addbook"))

module.exports = router;