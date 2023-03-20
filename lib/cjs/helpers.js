"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openInNewTab = void 0;
function openInNewTab(url, target) {
    if (target === void 0) { target = '_blank'; }
    window.open(url, target);
}
exports.openInNewTab = openInNewTab;
