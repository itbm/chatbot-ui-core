"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerEnvVarFix = void 0;
// In docker, env files are not parsed correctly, so we remove unintended quotes and newlines
const dockerEnvVarFix = (envVar) => {
    if (envVar) {
        let newEnvVar = envVar.replaceAll('"', '');
        newEnvVar = newEnvVar.replaceAll('\\n', '\n');
        return newEnvVar;
    }
    else {
        return undefined;
    }
};
exports.dockerEnvVarFix = dockerEnvVarFix;
