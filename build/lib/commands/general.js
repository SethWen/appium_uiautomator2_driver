'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _androidHelpers = require('../android-helpers');

var _androidHelpers2 = _interopRequireDefault(_androidHelpers);

var extensions = {},
    commands = {},
    helpers = {};

commands.getPageSource = function callee$0$0() {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/source', 'GET', {}));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// Need to override this for correct unicode support
commands.doSendKeys = function callee$0$0(params) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/keys', 'POST', params));

      case 2:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// uiautomator2 doesn't support metastate for keyevents
commands.keyevent = function callee$0$0(keycode, metastate) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].debug('Ignoring metastate ' + metastate);
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.adb.keyevent(keycode));

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// Use ADB since we don't have UiAutomator
commands.back = function callee$0$0() {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.adb.keyevent(4));

      case 2:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getStrings = function callee$0$0(language) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (language) {
          context$1$0.next = 5;
          break;
        }

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.adb.getDeviceLanguage());

      case 3:
        language = context$1$0.sent;

        _logger2['default'].info('No language specified, returning strings for: ' + language);

      case 5:
        if (!this.apkStrings[language]) {
          context$1$0.next = 7;
          break;
        }

        return context$1$0.abrupt('return', this.apkStrings[language]);

      case 7:
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(_androidHelpers2['default'].pushStrings(language, this.adb, this.opts));

      case 9:
        this.apkStrings[language] = context$1$0.sent;
        context$1$0.next = 12;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/appium/app/strings', 'POST', {}));

      case 12:
        return context$1$0.abrupt('return', this.apkStrings[language]);

      case 13:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getWindowSize = function callee$0$0() {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/window/current/size', 'GET', {}));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.setUrl = function callee$0$0(url) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.adb.startUri(url, this.opts.appPackage));

      case 2:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

/**
 * Overriding appium-android-driver's wrapBootstrapDisconnect,
 * unlike in appium-android-driver avoiding adb restarting as it intern
 * kills UiAutomator2 server running in the device.
 **/
helpers.wrapBootstrapDisconnect = function callee$0$0(wrapped) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(wrapped());

      case 2:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// Stop proxying to any Chromedriver and redirect to uiautomator2
helpers.suspendChromedriverProxy = function () {
  this.chromedriver = null;
  this.proxyReqRes = this.uiautomator2.proxyReqRes.bind(this.uiautomator2);
  this.jwpProxyActive = true;
};

_Object$assign(extensions, commands, helpers);

exports['default'] = extensions;
module.exports = exports['default'];

// Return cached strings

// TODO: This is mutating the current language, but it's how appium currently works
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9nZW5lcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztzQkFBZ0IsV0FBVzs7Ozs4QkFDQSxvQkFBb0I7Ozs7QUFFL0MsSUFBSSxVQUFVLEdBQUcsRUFBRTtJQUNmLFFBQVEsR0FBRyxFQUFFO0lBQ2IsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7QUFFakIsUUFBUSxDQUFDLGFBQWEsR0FBRzs7Ozs7eUNBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDOzs7Ozs7Ozs7O0NBQ3JFLENBQUM7OztBQUdGLFFBQVEsQ0FBQyxVQUFVLEdBQUcsb0JBQWdCLE1BQU07Ozs7O3lDQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7Ozs7Ozs7Q0FDakUsQ0FBQzs7O0FBR0YsUUFBUSxDQUFDLFFBQVEsR0FBRyxvQkFBZ0IsT0FBTyxFQUFFLFNBQVM7Ozs7QUFDcEQsNEJBQUksS0FBSyx5QkFBdUIsU0FBUyxDQUFHLENBQUM7O3lDQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7Q0FDakMsQ0FBQzs7O0FBR0YsUUFBUSxDQUFDLElBQUksR0FBRzs7Ozs7eUNBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0NBQzNCLENBQUM7O0FBRUYsUUFBUSxDQUFDLFVBQVUsR0FBRyxvQkFBZ0IsUUFBUTs7OztZQUN2QyxRQUFROzs7Ozs7eUNBQ00sSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRTs7O0FBQTdDLGdCQUFROztBQUNSLDRCQUFJLElBQUksb0RBQWtELFFBQVEsQ0FBRyxDQUFDOzs7YUFHcEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7Ozs7OzRDQUVwQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQzs7Ozt5Q0FJQSw0QkFBZSxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQzs7O0FBQTNGLFlBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDOzt5Q0FDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyx3QkFBd0IsTUFBTSxFQUFFLEVBQUUsQ0FBQzs7OzRDQUVuRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztDQUNqQyxDQUFDOztBQUVGLFFBQVEsQ0FBQyxhQUFhLEdBQUc7Ozs7O3lDQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDOzs7Ozs7Ozs7O0NBQ2xGLENBQUM7O0FBRUYsUUFBUSxDQUFDLE1BQU0sR0FBRyxvQkFBZ0IsR0FBRzs7Ozs7eUNBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7OztDQUNuRCxDQUFDOzs7Ozs7O0FBT0YsT0FBTyxDQUFDLHVCQUF1QixHQUFHLG9CQUFnQixPQUFPOzs7Ozt5Q0FDakQsT0FBTyxFQUFFOzs7Ozs7O0NBQ2hCLENBQUM7OztBQUdGLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxZQUFZO0FBQzdDLE1BQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLE1BQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN6RSxNQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztDQUM1QixDQUFDOztBQUVGLGVBQWMsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7cUJBRTlCLFVBQVUiLCJmaWxlIjoibGliL2NvbW1hbmRzL2dlbmVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nIGZyb20gJy4uL2xvZ2dlcic7XHJcbmltcG9ydCBhbmRyb2lkSGVscGVycyBmcm9tICcuLi9hbmRyb2lkLWhlbHBlcnMnO1xyXG5cclxubGV0IGV4dGVuc2lvbnMgPSB7fSxcclxuICAgIGNvbW1hbmRzID0ge30sXHJcbiAgICBoZWxwZXJzID0ge307XHJcblxyXG5jb21tYW5kcy5nZXRQYWdlU291cmNlID0gYXN5bmMgZnVuY3Rpb24gICgpIHtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKCcvc291cmNlJywgJ0dFVCcsIHt9KTtcclxufTtcclxuXHJcbi8vIE5lZWQgdG8gb3ZlcnJpZGUgdGhpcyBmb3IgY29ycmVjdCB1bmljb2RlIHN1cHBvcnRcclxuY29tbWFuZHMuZG9TZW5kS2V5cyA9IGFzeW5jIGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICBhd2FpdCB0aGlzLnVpYXV0b21hdG9yMi5qd3Byb3h5LmNvbW1hbmQoJy9rZXlzJywgJ1BPU1QnLCBwYXJhbXMpO1xyXG59O1xyXG5cclxuLy8gdWlhdXRvbWF0b3IyIGRvZXNuJ3Qgc3VwcG9ydCBtZXRhc3RhdGUgZm9yIGtleWV2ZW50c1xyXG5jb21tYW5kcy5rZXlldmVudCA9IGFzeW5jIGZ1bmN0aW9uIChrZXljb2RlLCBtZXRhc3RhdGUpIHtcclxuICBsb2cuZGVidWcoYElnbm9yaW5nIG1ldGFzdGF0ZSAke21ldGFzdGF0ZX1gKTtcclxuICBhd2FpdCB0aGlzLmFkYi5rZXlldmVudChrZXljb2RlKTtcclxufTtcclxuXHJcbi8vIFVzZSBBREIgc2luY2Ugd2UgZG9uJ3QgaGF2ZSBVaUF1dG9tYXRvclxyXG5jb21tYW5kcy5iYWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGF3YWl0IHRoaXMuYWRiLmtleWV2ZW50KDQpO1xyXG59O1xyXG5cclxuY29tbWFuZHMuZ2V0U3RyaW5ncyA9IGFzeW5jIGZ1bmN0aW9uIChsYW5ndWFnZSkge1xyXG4gIGlmICghbGFuZ3VhZ2UpIHtcclxuICAgIGxhbmd1YWdlID0gYXdhaXQgdGhpcy5hZGIuZ2V0RGV2aWNlTGFuZ3VhZ2UoKTtcclxuICAgIGxvZy5pbmZvKGBObyBsYW5ndWFnZSBzcGVjaWZpZWQsIHJldHVybmluZyBzdHJpbmdzIGZvcjogJHtsYW5ndWFnZX1gKTtcclxuICB9XHJcblxyXG4gIGlmICh0aGlzLmFwa1N0cmluZ3NbbGFuZ3VhZ2VdKSB7XHJcbiAgICAvLyBSZXR1cm4gY2FjaGVkIHN0cmluZ3NcclxuICAgIHJldHVybiB0aGlzLmFwa1N0cmluZ3NbbGFuZ3VhZ2VdO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogVGhpcyBpcyBtdXRhdGluZyB0aGUgY3VycmVudCBsYW5ndWFnZSwgYnV0IGl0J3MgaG93IGFwcGl1bSBjdXJyZW50bHkgd29ya3NcclxuICB0aGlzLmFwa1N0cmluZ3NbbGFuZ3VhZ2VdID0gYXdhaXQgYW5kcm9pZEhlbHBlcnMucHVzaFN0cmluZ3MobGFuZ3VhZ2UsIHRoaXMuYWRiLCB0aGlzLm9wdHMpO1xyXG4gIGF3YWl0IHRoaXMudWlhdXRvbWF0b3IyLmp3cHJveHkuY29tbWFuZChgL2FwcGl1bS9hcHAvc3RyaW5nc2AsICdQT1NUJywge30pO1xyXG5cclxuICByZXR1cm4gdGhpcy5hcGtTdHJpbmdzW2xhbmd1YWdlXTtcclxufTtcclxuXHJcbmNvbW1hbmRzLmdldFdpbmRvd1NpemUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIGF3YWl0IHRoaXMudWlhdXRvbWF0b3IyLmp3cHJveHkuY29tbWFuZCgnL3dpbmRvdy9jdXJyZW50L3NpemUnLCAnR0VUJywge30pO1xyXG59O1xyXG5cclxuY29tbWFuZHMuc2V0VXJsID0gYXN5bmMgZnVuY3Rpb24gKHVybCkge1xyXG4gIGF3YWl0IHRoaXMuYWRiLnN0YXJ0VXJpKHVybCwgdGhpcy5vcHRzLmFwcFBhY2thZ2UpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE92ZXJyaWRpbmcgYXBwaXVtLWFuZHJvaWQtZHJpdmVyJ3Mgd3JhcEJvb3RzdHJhcERpc2Nvbm5lY3QsXHJcbiAqIHVubGlrZSBpbiBhcHBpdW0tYW5kcm9pZC1kcml2ZXIgYXZvaWRpbmcgYWRiIHJlc3RhcnRpbmcgYXMgaXQgaW50ZXJuXHJcbiAqIGtpbGxzIFVpQXV0b21hdG9yMiBzZXJ2ZXIgcnVubmluZyBpbiB0aGUgZGV2aWNlLlxyXG4gKiovXHJcbmhlbHBlcnMud3JhcEJvb3RzdHJhcERpc2Nvbm5lY3QgPSBhc3luYyBmdW5jdGlvbiAod3JhcHBlZCkgIHtcclxuICBhd2FpdCB3cmFwcGVkKCk7XHJcbn07XHJcblxyXG4vLyBTdG9wIHByb3h5aW5nIHRvIGFueSBDaHJvbWVkcml2ZXIgYW5kIHJlZGlyZWN0IHRvIHVpYXV0b21hdG9yMlxyXG5oZWxwZXJzLnN1c3BlbmRDaHJvbWVkcml2ZXJQcm94eSA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLmNocm9tZWRyaXZlciA9IG51bGw7XHJcbiAgdGhpcy5wcm94eVJlcVJlcyA9IHRoaXMudWlhdXRvbWF0b3IyLnByb3h5UmVxUmVzLmJpbmQodGhpcy51aWF1dG9tYXRvcjIpO1xyXG4gIHRoaXMuandwUHJveHlBY3RpdmUgPSB0cnVlO1xyXG59O1xyXG5cclxuT2JqZWN0LmFzc2lnbihleHRlbnNpb25zLCBjb21tYW5kcywgaGVscGVycyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHRlbnNpb25zO1xyXG4iXSwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi4ifQ==
