"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_ENABLED = void 0;
const docker_1 = require("./docker");
exports.AUTH_ENABLED = (0, docker_1.dockerEnvVarFix)(process.env.NEXT_PUBLIC_AUTH_ENABLED) == 'true' || false;
