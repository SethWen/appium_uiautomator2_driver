'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var commands = {},
    helpers = {},
    extensions = {};

commands.pressKeyCode = function callee$0$0(keycode) {
  var metastate = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/appium/device/press_keycode', 'POST', { keycode: keycode, metastate: metastate }));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.longPressKeyCode = function callee$0$0(keycode) {
  var metastate = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/appium/device/long_press_keycode', 'POST', { keycode: keycode, metastate: metastate }));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.doSwipe = function callee$0$0(swipeOpts) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/touch/perform', 'POST', swipeOpts));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.doDrag = function callee$0$0(dragOpts) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/touch/drag', 'POST', dragOpts));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getOrientation = function callee$0$0() {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/orientation', 'GET', {}));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.setOrientation = function callee$0$0(orientation) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        orientation = orientation.toUpperCase();
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/orientation', 'POST', { orientation: orientation }));

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

_Object$assign(extensions, commands, helpers);
exports.commands = commands;
exports.helpers = helpers;
exports['default'] = extensions;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFFBQVEsR0FBRyxFQUFFO0lBQUUsT0FBTyxHQUFHLEVBQUU7SUFBRSxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVqRCxRQUFRLENBQUMsWUFBWSxHQUFHLG9CQUFnQixPQUFPO01BQUUsU0FBUyx5REFBRyxJQUFJOzs7Ozt5Q0FDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLDhCQUE4QixFQUFFLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBUCxPQUFPLEVBQUUsU0FBUyxFQUFULFNBQVMsRUFBQyxDQUFDOzs7Ozs7Ozs7O0NBQzdHLENBQUM7O0FBRUYsUUFBUSxDQUFDLGdCQUFnQixHQUFHLG9CQUFnQixPQUFPO01BQUUsU0FBUyx5REFBRyxJQUFJOzs7Ozt5Q0FDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBUCxPQUFPLEVBQUUsU0FBUyxFQUFULFNBQVMsRUFBQyxDQUFDOzs7Ozs7Ozs7O0NBQ2xILENBQUM7O0FBRUYsUUFBUSxDQUFDLE9BQU8sR0FBRyxvQkFBZ0IsU0FBUzs7Ozs7eUNBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sbUJBQW1CLE1BQU0sRUFBRSxTQUFTLENBQUM7Ozs7Ozs7Ozs7Q0FDcEYsQ0FBQzs7QUFFRixRQUFRLENBQUMsTUFBTSxHQUFHLG9CQUFnQixRQUFROzs7Ozt5Q0FDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxnQkFBZ0IsTUFBTSxFQUFFLFFBQVEsQ0FBQzs7Ozs7Ozs7OztDQUNoRixDQUFDOztBQUVGLFFBQVEsQ0FBQyxjQUFjLEdBQUc7Ozs7O3lDQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8saUJBQWlCLEtBQUssRUFBRSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Q0FDMUUsQ0FBQzs7QUFFRixRQUFRLENBQUMsY0FBYyxHQUFHLG9CQUFnQixXQUFXOzs7O0FBQ25ELG1CQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDOzt5Q0FDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxpQkFBaUIsTUFBTSxFQUFFLEVBQUMsV0FBVyxFQUFYLFdBQVcsRUFBQyxDQUFDOzs7Ozs7Ozs7O0NBQ3RGLENBQUM7O0FBRUYsZUFBYyxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsR0FBUixRQUFRO1FBQUUsT0FBTyxHQUFQLE9BQU87cUJBQ1gsVUFBVSIsImZpbGUiOiJsaWIvY29tbWFuZHMvYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubGV0IGNvbW1hbmRzID0ge30sIGhlbHBlcnMgPSB7fSwgZXh0ZW5zaW9ucyA9IHt9O1xyXG5cclxuY29tbWFuZHMucHJlc3NLZXlDb2RlID0gYXN5bmMgZnVuY3Rpb24gKGtleWNvZGUsIG1ldGFzdGF0ZSA9IG51bGwpIHtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKCcvYXBwaXVtL2RldmljZS9wcmVzc19rZXljb2RlJywgJ1BPU1QnLCB7a2V5Y29kZSwgbWV0YXN0YXRlfSk7XHJcbn07XHJcblxyXG5jb21tYW5kcy5sb25nUHJlc3NLZXlDb2RlID0gYXN5bmMgZnVuY3Rpb24gKGtleWNvZGUsIG1ldGFzdGF0ZSA9IG51bGwpIHtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKCcvYXBwaXVtL2RldmljZS9sb25nX3ByZXNzX2tleWNvZGUnLCAnUE9TVCcsIHtrZXljb2RlLCBtZXRhc3RhdGV9KTtcclxufTtcclxuXHJcbmNvbW1hbmRzLmRvU3dpcGUgPSBhc3luYyBmdW5jdGlvbiAoc3dpcGVPcHRzKSB7XHJcbiAgcmV0dXJuIGF3YWl0IHRoaXMudWlhdXRvbWF0b3IyLmp3cHJveHkuY29tbWFuZChgL3RvdWNoL3BlcmZvcm1gLCAnUE9TVCcsIHN3aXBlT3B0cyk7XHJcbn07XHJcblxyXG5jb21tYW5kcy5kb0RyYWcgPSBhc3luYyBmdW5jdGlvbiAoZHJhZ09wdHMpIHtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKGAvdG91Y2gvZHJhZ2AsICdQT1NUJywgZHJhZ09wdHMpO1xyXG59O1xyXG5cclxuY29tbWFuZHMuZ2V0T3JpZW50YXRpb24gPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIGF3YWl0IHRoaXMudWlhdXRvbWF0b3IyLmp3cHJveHkuY29tbWFuZChgL29yaWVudGF0aW9uYCwgJ0dFVCcsIHt9KTtcclxufTtcclxuXHJcbmNvbW1hbmRzLnNldE9yaWVudGF0aW9uID0gYXN5bmMgZnVuY3Rpb24gKG9yaWVudGF0aW9uKSB7XHJcbiAgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpO1xyXG4gIHJldHVybiBhd2FpdCB0aGlzLnVpYXV0b21hdG9yMi5qd3Byb3h5LmNvbW1hbmQoYC9vcmllbnRhdGlvbmAsICdQT1NUJywge29yaWVudGF0aW9ufSk7XHJcbn07XHJcblxyXG5PYmplY3QuYXNzaWduKGV4dGVuc2lvbnMsIGNvbW1hbmRzLCBoZWxwZXJzKTtcclxuZXhwb3J0IHsgY29tbWFuZHMsIGhlbHBlcnMgfTtcclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5zaW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uIn0=
