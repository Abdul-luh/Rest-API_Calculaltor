"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.health = exports.calculation = void 0;
var calculator_1 = require("./calculator");
Object.defineProperty(exports, "calculation", { enumerable: true, get: function () { return calculator_1.router; } });
var health_1 = require("./health");
Object.defineProperty(exports, "health", { enumerable: true, get: function () { return health_1.router; } });
var profile_1 = require("./profile");
Object.defineProperty(exports, "profile", { enumerable: true, get: function () { return profile_1.router; } });
