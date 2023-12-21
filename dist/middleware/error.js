"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
function ErrorHandler(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send(err.message);
    next();
}
exports.ErrorHandler = ErrorHandler;
