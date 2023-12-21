import express from "express";
import { health, profile, calculation } from "./routes";
import { ErrorHandler, addTimeStamp, logger } from "./middleware";
const app = express();
const port = 3333;

app.use(express.json());

app.use(addTimeStamp);
app.use(logger);

app.use("/health", health);
app.use("/profile", profile);
app.use("/calculator", calculation);

app.use(ErrorHandler);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
