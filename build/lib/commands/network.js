'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var extensions = {},
    commands = {};

commands.setWifiState = function callee$0$0(wifi) {
  var type;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        type = wifi << 1;
        context$1$0.prev = 1;
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/network_connection', 'POST', { type: type }));

      case 4:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 7:
        context$1$0.prev = 7;
        context$1$0.t0 = context$1$0['catch'](1);

        _logger2['default'].error('Unable to set Network connection to WIFI, retrying with adb command. ERROR:: ' + context$1$0.t0.message);
        context$1$0.next = 12;
        return _regeneratorRuntime.awrap(this.adb.setWifiState(wifi, this.isEmulator()));

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[1, 7]]);
};

_Object$assign(extensions, commands);
exports.commands = commands;
exports['default'] = extensions;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9uZXR3b3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztzQkFBZ0IsV0FBVzs7OztBQUUzQixJQUFJLFVBQVUsR0FBRyxFQUFFO0lBQUUsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7QUFFbkMsUUFBUSxDQUFDLFlBQVksR0FBRyxvQkFBZ0IsSUFBSTtNQUN0QyxJQUFJOzs7O0FBQUosWUFBSSxHQUFHLElBQUksSUFBSSxDQUFDOzs7eUNBRUwsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBSixJQUFJLEVBQUMsQ0FBQzs7Ozs7Ozs7O0FBRXJGLDRCQUFJLEtBQUssbUZBQWlGLGVBQU0sT0FBTyxDQUFHLENBQUM7O3lDQUNyRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7Ozs7O0NBRXZELENBQUM7O0FBRUYsZUFBYyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0IsUUFBUSxHQUFSLFFBQVE7cUJBQ0YsVUFBVSIsImZpbGUiOiJsaWIvY29tbWFuZHMvbmV0d29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2cgZnJvbSAnLi4vbG9nZ2VyJztcclxuXHJcbmxldCBleHRlbnNpb25zID0ge30sIGNvbW1hbmRzID0ge307XHJcblxyXG5jb21tYW5kcy5zZXRXaWZpU3RhdGUgPSBhc3luYyBmdW5jdGlvbiAod2lmaSkge1xyXG4gIGxldCB0eXBlID0gd2lmaSA8PCAxO1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKCcvbmV0d29ya19jb25uZWN0aW9uJywgJ1BPU1QnLCB7dHlwZX0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2cuZXJyb3IoYFVuYWJsZSB0byBzZXQgTmV0d29yayBjb25uZWN0aW9uIHRvIFdJRkksIHJldHJ5aW5nIHdpdGggYWRiIGNvbW1hbmQuIEVSUk9SOjogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgYXdhaXQgdGhpcy5hZGIuc2V0V2lmaVN0YXRlKHdpZmksIHRoaXMuaXNFbXVsYXRvcigpKTtcclxuICB9XHJcbn07XHJcblxyXG5PYmplY3QuYXNzaWduKGV4dGVuc2lvbnMsIGNvbW1hbmRzKTtcclxuZXhwb3J0IHsgY29tbWFuZHMgfTtcclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5zaW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uIn0=
