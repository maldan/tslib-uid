"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UID = void 0;
const sha1_1 = __importDefault(require("sha1"));
const Os = __importStar(require("os"));
const tslib_earray_1 = require("@maldan/tslib-earray");
const USER_STAMP = `${JSON.stringify(Os.userInfo())}_${Os.version()}_${Os.type()}_${Os.release()}_${Os.platform()}_${Os.hostname()}_${Os.arch()}_${Os.totalmem()}_${JSON.stringify(Os.cpus())}`;
function UID(size = 12) {
    let h = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 4; i++) {
        h += sha1_1.default(`${Math.random()}_${Math.random()}_sasageo_${new Date().getTime()}_${Os.freemem()}_${USER_STAMP}`);
    }
    return new tslib_earray_1.EArray(h).shuffle().join('').slice(0, size);
}
exports.UID = UID;
