"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
const port = 3333;
app.use(express_1.default.json());
app.use(middleware_1.addTimeStamp);
app.use(middleware_1.logger);
app.use("/health", routes_1.health);
app.use("/profile", routes_1.profile);
app.use("/calculator", routes_1.calculation);
app.use(middleware_1.ErrorHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
