'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _appiumBaseDriver = require('appium-base-driver');

var _driver = require('./driver');

var _driver2 = _interopRequireDefault(_driver);

function startServer() {
  var port = arguments.length <= 0 || arguments[0] === undefined ? 4884 : arguments[0];
  var host = arguments.length <= 1 || arguments[1] === undefined ? 'localhost' : arguments[1];
  var d, router, server;
  return _regeneratorRuntime.async(function startServer$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        d = new _driver2['default']({ port: port, host: host });
        router = (0, _appiumBaseDriver.routeConfiguringFunction)(d);
        server = (0, _appiumBaseDriver.server)(router, port, host);

        _logger2['default'].info('Android Uiautomator2 server listening on http://' + host + ':' + port);
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(server);

      case 6:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 7:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

exports['default'] = startServer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zZXJ2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFBZ0IsVUFBVTs7OztnQ0FDcUMsb0JBQW9COztzQkFDN0MsVUFBVTs7OztBQUdoRCxTQUFlLFdBQVc7TUFBRSxJQUFJLHlEQUFDLElBQUk7TUFBRSxJQUFJLHlEQUFDLFdBQVc7TUFDakQsQ0FBQyxFQUNELE1BQU0sRUFDTixNQUFNOzs7O0FBRk4sU0FBQyxHQUFHLHdCQUE4QixFQUFDLElBQUksRUFBSixJQUFJLEVBQUUsSUFBSSxFQUFKLElBQUksRUFBQyxDQUFDO0FBQy9DLGNBQU0sR0FBRyxnREFBeUIsQ0FBQyxDQUFDO0FBQ3BDLGNBQU0sR0FBRyw4QkFBVyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7QUFDM0MsNEJBQUksSUFBSSxzREFBb0QsSUFBSSxTQUFJLElBQUksQ0FBRyxDQUFDOzt5Q0FDL0QsTUFBTTs7Ozs7Ozs7OztDQUNwQjs7cUJBRWMsV0FBVyIsImZpbGUiOiJsaWIvc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZyBmcm9tICcuL2xvZ2dlcic7XHJcbmltcG9ydCB7IHNlcnZlciBhcyBiYXNlU2VydmVyLCByb3V0ZUNvbmZpZ3VyaW5nRnVuY3Rpb24gfSBmcm9tICdhcHBpdW0tYmFzZS1kcml2ZXInO1xyXG5pbXBvcnQgQW5kcm9pZFVpYXV0b21hdG9yMkRyaXZlciBmcm9tICcuL2RyaXZlcic7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc3RhcnRTZXJ2ZXIgKHBvcnQ9NDg4NCwgaG9zdD0nbG9jYWxob3N0Jykge1xyXG4gIGxldCBkID0gbmV3IEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXIoe3BvcnQsIGhvc3R9KTtcclxuICBsZXQgcm91dGVyID0gcm91dGVDb25maWd1cmluZ0Z1bmN0aW9uKGQpO1xyXG4gIGxldCBzZXJ2ZXIgPSBiYXNlU2VydmVyKHJvdXRlciwgcG9ydCwgaG9zdCk7XHJcbiAgbG9nLmluZm8oYEFuZHJvaWQgVWlhdXRvbWF0b3IyIHNlcnZlciBsaXN0ZW5pbmcgb24gaHR0cDovLyR7aG9zdH06JHtwb3J0fWApO1xyXG4gIHJldHVybiBhd2FpdCBzZXJ2ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0U2VydmVyOyJdLCJzb3VyY2VSb290IjoiLi5cXC4uIn0=
