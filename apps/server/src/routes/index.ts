import { Router } from "express";
import userRouter from "~/routes/user";
import articleRouter from "~/routes/article";
import commentRouter from "~/routes/comment";

const router = Router();

router.use("/api/users", userRouter);
router.use("/api/articles", articleRouter);
router.use("/api/comments", commentRouter);

export default router;
