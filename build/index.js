require('source-map-support').install();

'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _asyncbox = require('asyncbox');

var _libDriver = require('./lib/driver');

var _libDriver2 = _interopRequireDefault(_libDriver);

var _libServer = require('./lib/server');

var _libServer2 = _interopRequireDefault(_libServer);

var DEFAULT_HOST = "localhost";
exports.DEFAULT_HOST = DEFAULT_HOST;
var DEFAULT_PORT = process.env.TESTOBJECT_E2E_TESTS ? 4723 : 4884;

exports.DEFAULT_PORT = DEFAULT_PORT;
function main() {
  var port, host;
  return _regeneratorRuntime.async(function main$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        port = _yargs2['default'].argv.port || DEFAULT_PORT;
        host = _yargs2['default'].argv.host || _yargs2['default'].argv.address || DEFAULT_HOST;
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap((0, _libServer2['default'])(port, host));

      case 4:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 5:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

if (require.main === module) {
  (0, _asyncbox.asyncify)(main);
}

exports.AndroidUiautomator2Driver = _libDriver2['default'];
exports.startServer = _libServer2['default'];
exports['default'] = _libDriver2['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztxQkFFa0IsT0FBTzs7Ozt3QkFDQSxVQUFVOzt5QkFDRyxjQUFjOzs7O3lCQUM1QixjQUFjOzs7O0FBRy9CLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQzs7QUFDakMsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOzs7QUFFM0UsU0FBZSxJQUFJO01BQ2IsSUFBSSxFQUNKLElBQUk7Ozs7QUFESixZQUFJLEdBQUcsbUJBQU0sSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZO0FBQ3RDLFlBQUksR0FBRyxtQkFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLG1CQUFNLElBQUksQ0FBQyxPQUFPLElBQUksWUFBWTs7eUNBQ25ELDRCQUFZLElBQUksRUFBRSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Q0FDckM7O0FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtBQUMzQiwwQkFBUyxJQUFJLENBQUMsQ0FBQztDQUNoQjs7UUFFUSx5QkFBeUI7UUFBRSxXQUFXIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHJhbnNwaWxlOm1haW5cclxuXHJcbmltcG9ydCB5YXJncyBmcm9tICd5YXJncyc7XHJcbmltcG9ydCB7IGFzeW5jaWZ5IH0gZnJvbSAnYXN5bmNib3gnO1xyXG5pbXBvcnQgQW5kcm9pZFVpYXV0b21hdG9yMkRyaXZlciBmcm9tICcuL2xpYi9kcml2ZXInO1xyXG5pbXBvcnQgc3RhcnRTZXJ2ZXIgZnJvbSAnLi9saWIvc2VydmVyJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9IT1NUID0gXCJsb2NhbGhvc3RcIjtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9SVCA9IHByb2Nlc3MuZW52LlRFU1RPQkpFQ1RfRTJFX1RFU1RTID8gNDcyMyA6IDQ4ODQ7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWluICgpIHtcclxuICBsZXQgcG9ydCA9IHlhcmdzLmFyZ3YucG9ydCB8fCBERUZBVUxUX1BPUlQ7XHJcbiAgbGV0IGhvc3QgPSB5YXJncy5hcmd2Lmhvc3QgfHwgeWFyZ3MuYXJndi5hZGRyZXNzIHx8IERFRkFVTFRfSE9TVDtcclxuICByZXR1cm4gYXdhaXQgc3RhcnRTZXJ2ZXIocG9ydCwgaG9zdCk7XHJcbn1cclxuXHJcbmlmIChyZXF1aXJlLm1haW4gPT09IG1vZHVsZSkge1xyXG4gIGFzeW5jaWZ5KG1haW4pO1xyXG59XHJcblxyXG5leHBvcnQgeyBBbmRyb2lkVWlhdXRvbWF0b3IyRHJpdmVyLCBzdGFydFNlcnZlciB9O1xyXG5leHBvcnQgZGVmYXVsdCBBbmRyb2lkVWlhdXRvbWF0b3IyRHJpdmVyO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIuLiJ9
