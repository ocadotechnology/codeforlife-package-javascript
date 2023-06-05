"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Banner_1 = __importDefault(require("./Banner"));
var Container_1 = __importDefault(require("./Container"));
var Notification_1 = __importDefault(require("./Notification"));
var Section_1 = __importDefault(require("./Section"));
var TabBar_1 = __importDefault(require("./TabBar"));
var Page = {
    Banner: Banner_1.default,
    Container: Container_1.default,
    Notification: Notification_1.default,
    Section: Section_1.default,
    TabBar: TabBar_1.default
};
exports.default = Page;
