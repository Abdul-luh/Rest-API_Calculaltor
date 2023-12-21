"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
function logger(req, res, next) {
    console.log(`
	request-timestamp : ${req.timeStamp}
	request-method : ${req.method}, \n
	request-ip : ${req.ip}, \n
	request-original-url : ${req.url}, \n
	 `);
    next();
}
exports.logger = logger;
