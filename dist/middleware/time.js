"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTimeStamp = void 0;
function addTimeStamp(req, res, next) {
    req.timeStamp = Date.now();
    next();
}
exports.addTimeStamp = addTimeStamp;
