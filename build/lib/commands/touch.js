'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
var commands = {},
    extensions = {};

commands.doPerformMultiAction = function callee$0$0(elementId, states) {
  var opts;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        opts = undefined;

        if (!elementId) {
          context$1$0.next = 8;
          break;
        }

        opts = {
          elementId: elementId,
          actions: states
        };

        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/touch/multi/perform', 'POST', opts));

      case 5:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 8:
        opts = {
          actions: states
        };
        context$1$0.next = 11;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/touch/multi/perform', 'POST', opts));

      case 11:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

_Object$assign(extensions, commands);
exports['default'] = extensions;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy90b3VjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFJLFFBQVEsR0FBRyxFQUFFO0lBQUUsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFbkMsUUFBUSxDQUFDLG9CQUFvQixHQUFHLG9CQUFnQixTQUFTLEVBQUUsTUFBTTtNQUMzRCxJQUFJOzs7O0FBQUosWUFBSTs7YUFDSixTQUFTOzs7OztBQUNYLFlBQUksR0FBRztBQUNMLG1CQUFTLEVBQVQsU0FBUztBQUNULGlCQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDOzs7eUNBRVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7Ozs7OztBQUVwRixZQUFJLEdBQUc7QUFDTCxpQkFBTyxFQUFFLE1BQU07U0FDaEIsQ0FBQzs7eUNBQ1csSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Q0FFdkYsQ0FBQzs7QUFFRixlQUFjLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDckIsVUFBVSIsImZpbGUiOiJsaWIvY29tbWFuZHMvdG91Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY29tbWFuZHMgPSB7fSwgZXh0ZW5zaW9ucyA9IHt9O1xyXG5cclxuY29tbWFuZHMuZG9QZXJmb3JtTXVsdGlBY3Rpb24gPSBhc3luYyBmdW5jdGlvbiAoZWxlbWVudElkLCBzdGF0ZXMpIHtcclxuICBsZXQgb3B0cztcclxuICBpZiAoZWxlbWVudElkKSB7XHJcbiAgICBvcHRzID0ge1xyXG4gICAgICBlbGVtZW50SWQsXHJcbiAgICAgIGFjdGlvbnM6IHN0YXRlc1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKCcvdG91Y2gvbXVsdGkvcGVyZm9ybScsICdQT1NUJywgb3B0cyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9wdHMgPSB7XHJcbiAgICAgIGFjdGlvbnM6IHN0YXRlc1xyXG4gICAgfTtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLnVpYXV0b21hdG9yMi5qd3Byb3h5LmNvbW1hbmQoJy90b3VjaC9tdWx0aS9wZXJmb3JtJywgJ1BPU1QnLCBvcHRzKTtcclxuICB9XHJcbn07XHJcblxyXG5PYmplY3QuYXNzaWduKGV4dGVuc2lvbnMsIGNvbW1hbmRzKTtcclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5zaW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uIn0=
