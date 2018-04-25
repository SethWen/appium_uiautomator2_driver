'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _desired = require('../desired');

var _helpersSession = require('../helpers/session');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('mobile: shell', function () {
  var _this = this;

  var driver = undefined;
  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_desired.APIDEMOS_CAPS));

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
  it('should call execute command without proxy error, but require relaxed security flag', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.prev = 0;
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.execute('mobile: shell', { command: 'echo', args: ['hello'] }));

        case 3:
          context$2$0.next = 8;
          break;

        case 5:
          context$2$0.prev = 5;
          context$2$0.t0 = context$2$0['catch'](0);

          context$2$0.t0.message.should.match(/Original error: Appium server must have relaxed security flag set in order to run any shell commands/);

        case 8:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this, [[0, 5]]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9tb2JpbGUtY29tbWFuZC1lMmUtc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7Ozt1QkFDZixZQUFZOzs4QkFDZixvQkFBb0I7O0FBRS9DLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsUUFBUSxDQUFDLGVBQWUsRUFBRSxZQUFZOzs7QUFDcEMsTUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLFFBQU0sQ0FBQzs7Ozs7MkNBQ1UsdURBQXlCOzs7QUFBeEMsZ0JBQU07Ozs7Ozs7R0FDUCxDQUFDLENBQUM7QUFDSCxPQUFLLENBQUM7Ozs7OzJDQUNFLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Ozs7Ozs7R0FDcEIsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLG9GQUFvRixFQUFFOzs7Ozs7MkNBRS9FLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDOzs7Ozs7Ozs7O0FBRXpFLHlCQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHNHQUFzRyxDQUFDLENBQUM7Ozs7Ozs7R0FFbEksQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9tb2JpbGUtY29tbWFuZC1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcclxuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xyXG5pbXBvcnQgeyBBUElERU1PU19DQVBTIH0gZnJvbSAnLi4vZGVzaXJlZCc7XHJcbmltcG9ydCB7IGluaXREcml2ZXIgfSBmcm9tICcuLi9oZWxwZXJzL3Nlc3Npb24nO1xyXG5cclxuY2hhaS5zaG91bGQoKTtcclxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xyXG5cclxuZGVzY3JpYmUoJ21vYmlsZTogc2hlbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGRyaXZlcjtcclxuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xyXG4gICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihBUElERU1PU19DQVBTKTtcclxuICB9KTtcclxuICBhZnRlcihhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgY2FsbCBleGVjdXRlIGNvbW1hbmQgd2l0aG91dCBwcm94eSBlcnJvciwgYnV0IHJlcXVpcmUgcmVsYXhlZCBzZWN1cml0eSBmbGFnJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZHJpdmVyLmV4ZWN1dGUoJ21vYmlsZTogc2hlbGwnLCB7Y29tbWFuZDogJ2VjaG8nLCBhcmdzOiBbJ2hlbGxvJ119KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZS5tZXNzYWdlLnNob3VsZC5tYXRjaCgvT3JpZ2luYWwgZXJyb3I6IEFwcGl1bSBzZXJ2ZXIgbXVzdCBoYXZlIHJlbGF4ZWQgc2VjdXJpdHkgZmxhZyBzZXQgaW4gb3JkZXIgdG8gcnVuIGFueSBzaGVsbCBjb21tYW5kcy8pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLiJ9
