const router = require("express").Router();

const userRouter = require("./user");
const adminRouter = require("./admin");
const emailRouter = require("./email");
const rewardRouter = require("./reward");
// const emailConnectionRouter = require("./email_link");
// const emailConnectionAddRouter = require("./email_linkAdd");
// const emailCountRouter = require("./email_count");
// const emailPredictRouter = require("./email_predict");
// const emailDeleteRouter = require("./email_delete");

router.use("/users", userRouter);
router.use("/admin", adminRouter);
router.use("/email", emailRouter);
router.use("/reward", rewardRouter);
// router.use("/email_link", emailConnectionRouter);
// router.use("/email_linkAdd", emailConnectionAddRouter);
// router.use("/email_count", emailCountRouter);
// router.use("/email_predict", emailPredictRouter);
// router.use("/email_delete", emailDeleteRouter);

module.exports = router;
