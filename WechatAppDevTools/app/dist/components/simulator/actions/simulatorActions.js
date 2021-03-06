"use strict";

function init() {
    function e(e, i, n) {
        var t = n.currentWebviewID;
        e === t && f.changeUrl(i.url, e), I.upWebviewStatus(e, i)
    }

    function i(e, i, n) { I.execWebviewJSSDK(e, i) }

    function n(e, i) { f.openWebviewDevtools(e, i.webview, i.webviewOffset) }

    function t(e) { f.closeWebviewDevtools(e) }

    function o(e, i) { I.setWebviewSnapshot(e, i.dataURI) }

    function S(e, i, n) { I.getA8keyWebview(e, i) }

    function _(e, i, n) { I.postMessageToAS(i) }

    function E(e, i, n) { I.cleanWebview(e) }

    function c(e, i, n) { I.setWebviewAction(e, i) }

    function u(e, i) { I.changeWebviewID(i.webviewID), f.changeWebviewID(i.webviewID) }

    function s(e, i) { I.deleteWebviewID(i.webviewID) }

    function w(e, i, n) { I.setWebviewInfo(i), f.setWebviewInfo(i) }

    function r(e, i, n) { I.authorizeSdk(e, i.authorizeSdkId, i.url, i.appname, i.scope_list) }

    function W(e, i, n) { I.authorizeSdkReturn(i.authorizeSdkId, i.scope_list, i.isAllowed) }

    function v(e, i, n) { I.setInterfaceFromPageFrame(e, i) }

    function a(e, i, n) { f.startDebuggee(e, i) }
    var I = require("../../../actions/webviewActions.js"),
        f = require("../../../actions/windowActions.js"),
        b = (require("../../../common/log/log.js"), { S_UP_WEBVIEW_STATUS: e, S_EXEC_JSSDK: i, S_OPEN_DEVTOOLS: n, S_CLOSE_DEVTOOLS: t, S_GET_SNAPSHOT: o, S_GET_A8KEY: S, S_POSTMSG_TO_AS: _, S_CLEAN_WEBVIEW: E, S_SET_ACTION: c, S_CHANGE_CURRENT_WEBVIEW: u, S_DELETE_WEBVIEW: s, S_SET_WEBVIEW_INFO: w, S_AUTHORIZE_SDK: r, S_AUTHORIZE_SDK_RETURN: W, S_SET_WEBVIEW_MARGIN: v, S_START_DEBUGGEE: a });
    _exports = function(e, i, n, t) { b[e] && b[e](i, n, t) }
}
var _exports;
init(), module.exports = _exports;
