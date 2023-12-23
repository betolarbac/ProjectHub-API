const router = require("express").Router();

const projectRouter = require("./projectRoutes");

router.use("/", projectRouter);

module.exports = router;
