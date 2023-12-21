import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
	console.log(req.path);
	res.send({ message: "ok" });
});
