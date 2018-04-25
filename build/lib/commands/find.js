'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var helpers = {},
    extensions = {};

/**
 * Overriding helpers.doFindElementOrEls functionality of appium-android-driver,
 * this.element initialized in find.js of appium-android-drive.
 */
helpers.doFindElementOrEls = function callee$0$0(params) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!params.multiple) {
          context$1$0.next = 6;
          break;
        }

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/elements', 'POST', params));

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 6:
        context$1$0.next = 8;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/element', 'POST', params));

      case 8:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 9:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

_Object$assign(extensions, helpers);
exports.helpers = helpers;
exports['default'] = extensions;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9maW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxJQUFJLE9BQU8sR0FBRyxFQUFFO0lBQUUsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0FBTWxDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxvQkFBZ0IsTUFBTTs7OzthQUM3QyxNQUFNLENBQUMsUUFBUTs7Ozs7O3lDQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sY0FBYyxNQUFNLEVBQUUsTUFBTSxDQUFDOzs7Ozs7O3lDQUU5RCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLGFBQWEsTUFBTSxFQUFFLE1BQU0sQ0FBQzs7Ozs7Ozs7OztDQUU3RSxDQUFDOztBQUVGLGVBQWMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sR0FBUCxPQUFPO3FCQUNELFVBQVUiLCJmaWxlIjoibGliL2NvbW1hbmRzL2ZpbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGV0IGhlbHBlcnMgPSB7fSwgZXh0ZW5zaW9ucyA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIE92ZXJyaWRpbmcgaGVscGVycy5kb0ZpbmRFbGVtZW50T3JFbHMgZnVuY3Rpb25hbGl0eSBvZiBhcHBpdW0tYW5kcm9pZC1kcml2ZXIsXHJcbiAqIHRoaXMuZWxlbWVudCBpbml0aWFsaXplZCBpbiBmaW5kLmpzIG9mIGFwcGl1bS1hbmRyb2lkLWRyaXZlLlxyXG4gKi9cclxuaGVscGVycy5kb0ZpbmRFbGVtZW50T3JFbHMgPSBhc3luYyBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgaWYgKHBhcmFtcy5tdWx0aXBsZSkge1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMudWlhdXRvbWF0b3IyLmp3cHJveHkuY29tbWFuZChgL2VsZW1lbnRzYCwgJ1BPU1QnLCBwYXJhbXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKGAvZWxlbWVudGAsICdQT1NUJywgcGFyYW1zKTtcclxuICB9XHJcbn07XHJcblxyXG5PYmplY3QuYXNzaWduKGV4dGVuc2lvbnMsIGhlbHBlcnMpO1xyXG5leHBvcnQgeyBoZWxwZXJzIH07XHJcbmV4cG9ydCBkZWZhdWx0IGV4dGVuc2lvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLiJ9
