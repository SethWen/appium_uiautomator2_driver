'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
var helpers = {};

helpers.ensureInternetPermissionForApp = function callee$0$0(adb, app) {
  var has, msg;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(adb.hasInternetPermissionFromManifest(app));

      case 2:
        has = context$1$0.sent;

        if (!has) {
          context$1$0.next = 5;
          break;
        }

        return context$1$0.abrupt('return');

      case 5:
        msg = 'Your apk does not have INTERNET permissions. Uiautomator2 needs ' + 'the internet permission to proceed. Please check if you have ' + '<uses-permission android:name="android.**permission.INTERNET"/>' + 'in your AndroidManifest.xml';
        throw new Error(msg);

      case 7:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

exports['default'] = helpers;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7O0FBRWpCLE9BQU8sQ0FBQyw4QkFBOEIsR0FBRyxvQkFBZ0IsR0FBRyxFQUFFLEdBQUc7TUFDM0QsR0FBRyxFQUlILEdBQUc7Ozs7O3lDQUpTLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLENBQUM7OztBQUF0RCxXQUFHOzthQUNILEdBQUc7Ozs7Ozs7O0FBR0gsV0FBRyxHQUFHLGtFQUFrRSxHQUNsRSwrREFBK0QsR0FDL0QsaUVBQWlFLEdBQ2pFLDZCQUE2QjtjQUNqQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Q0FDckIsQ0FBQzs7cUJBRWEsT0FBTyIsImZpbGUiOiJsaWIvaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBoZWxwZXJzID0ge307XHJcblxyXG5oZWxwZXJzLmVuc3VyZUludGVybmV0UGVybWlzc2lvbkZvckFwcCA9IGFzeW5jIGZ1bmN0aW9uIChhZGIsIGFwcCkge1xyXG4gIGxldCBoYXMgPSBhd2FpdCBhZGIuaGFzSW50ZXJuZXRQZXJtaXNzaW9uRnJvbU1hbmlmZXN0KGFwcCk7XHJcbiAgaWYgKGhhcykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBsZXQgbXNnID0gJ1lvdXIgYXBrIGRvZXMgbm90IGhhdmUgSU5URVJORVQgcGVybWlzc2lvbnMuIFVpYXV0b21hdG9yMiBuZWVkcyAnICtcclxuICAgICAgICAgICAgJ3RoZSBpbnRlcm5ldCBwZXJtaXNzaW9uIHRvIHByb2NlZWQuIFBsZWFzZSBjaGVjayBpZiB5b3UgaGF2ZSAnICtcclxuICAgICAgICAgICAgJzx1c2VzLXBlcm1pc3Npb24gYW5kcm9pZDpuYW1lPVwiYW5kcm9pZC4qKnBlcm1pc3Npb24uSU5URVJORVRcIi8+JyArXHJcbiAgICAgICAgICAgICdpbiB5b3VyIEFuZHJvaWRNYW5pZmVzdC54bWwnO1xyXG4gIHRocm93IG5ldyBFcnJvcihtc2cpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVscGVycztcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi4ifQ==
