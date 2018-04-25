'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _desired = require('../desired');

var _helpersSession = require('../helpers/session');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('wifi @skip-ci', function () {
  var _this = this;

  var driver = undefined;
  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_Object$assign({}, _desired.APIDEMOS_CAPS, { appActivity: '.view.TextFields' })));

        case 2:
          driver = context$2$0.sent;

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  after(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.quit());

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it.skip('should enable WIFI', function callee$1$0() {
    var WIFI;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          WIFI = 2;
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.setNetworkConnection(WIFI));

        case 3:
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.isWifiOn().should.eventually.equal(true));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});

// TODO: This is returning Permission Denial: not allowed to send broadcast android.intent.action.AIRPLANE_MODE from pid=25928, uid=2000; also isWifiOn is not a method
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9uZXR3b3JrLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7dUJBQ2YsWUFBWTs7OEJBQ2Ysb0JBQW9COztBQUcvQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLFFBQVEsQ0FBQyxlQUFlLEVBQUUsWUFBWTs7O0FBQ3BDLE1BQUksTUFBTSxZQUFBLENBQUM7QUFDWCxRQUFNLENBQUM7Ozs7OzJDQUNVLGdDQUFXLGVBQWMsRUFBRSwwQkFBaUIsRUFBQyxXQUFXLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDOzs7QUFBOUYsZ0JBQU07Ozs7Ozs7R0FDUCxDQUFDLENBQUM7QUFDSCxPQUFLLENBQUM7Ozs7OzJDQUNFLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Ozs7Ozs7R0FDcEIsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtRQUV4QixJQUFJOzs7O0FBQUosY0FBSSxHQUFHLENBQUM7OzJDQUNOLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7Ozs7MkNBQ2pDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7R0FDdEQsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9uZXR3b3JrLWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XHJcbmltcG9ydCB7IEFQSURFTU9TX0NBUFMgfSBmcm9tICcuLi9kZXNpcmVkJztcclxuaW1wb3J0IHsgaW5pdERyaXZlciB9IGZyb20gJy4uL2hlbHBlcnMvc2Vzc2lvbic7XHJcblxyXG5cclxuY2hhaS5zaG91bGQoKTtcclxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xyXG5cclxuZGVzY3JpYmUoJ3dpZmkgQHNraXAtY2knLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGRyaXZlcjtcclxuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xyXG4gICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihPYmplY3QuYXNzaWduKHt9LCBBUElERU1PU19DQVBTLCB7YXBwQWN0aXZpdHk6ICcudmlldy5UZXh0RmllbGRzJ30pKTtcclxuICB9KTtcclxuICBhZnRlcihhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xyXG4gIH0pO1xyXG4gIGl0LnNraXAoJ3Nob3VsZCBlbmFibGUgV0lGSScsIGFzeW5jICgpID0+IHtcclxuICAgIC8vIFRPRE86IFRoaXMgaXMgcmV0dXJuaW5nIFBlcm1pc3Npb24gRGVuaWFsOiBub3QgYWxsb3dlZCB0byBzZW5kIGJyb2FkY2FzdCBhbmRyb2lkLmludGVudC5hY3Rpb24uQUlSUExBTkVfTU9ERSBmcm9tIHBpZD0yNTkyOCwgdWlkPTIwMDA7IGFsc28gaXNXaWZpT24gaXMgbm90IGEgbWV0aG9kXHJcbiAgICBsZXQgV0lGSSA9IDI7XHJcbiAgICBhd2FpdCBkcml2ZXIuc2V0TmV0d29ya0Nvbm5lY3Rpb24oV0lGSSk7XHJcbiAgICBhd2FpdCBkcml2ZXIuaXNXaWZpT24oKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCh0cnVlKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi4ifQ==
