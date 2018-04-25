'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _helpersSession = require('../../helpers/session');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var driver = undefined;
var defaultCaps = {
  appPackage: 'com.android.settings',
  appActivity: '.Settings',
  deviceName: 'Android',
  platformName: 'Android'
};

describe('Find - android ui elements @skip-ci', function () {
  var _this = this;

  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          if (process.env.TESTOBJECT_E2E_TESTS) {
            this.skip();
          }
          // TODO: why does travis fail on this?

          context$2$0.next = 3;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(defaultCaps));

        case 3:
          driver = context$2$0.sent;

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });
  after(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          if (!driver) {
            context$2$0.next = 3;
            break;
          }

          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.quit());

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should not find statusBarBackground element via xpath', function callee$1$0() {
    var statusBar, statusBarWithInvisibleEl;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementsByXPath('//*[@resource-id=\'android:id/statusBarBackground\']'));

        case 2:
          statusBar = context$2$0.sent;
          //check server (NPE) if allowInvisibleElements is unset on server side
          statusBar.length.should.be.equal(0);
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.updateSettings({ "allowInvisibleElements": false }));

        case 6:
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(driver.elementsByXPath('//*[@resource-id=\'android:id/statusBarBackground\']'));

        case 8:
          statusBarWithInvisibleEl = context$2$0.sent;

          statusBarWithInvisibleEl.length.should.be.equal(0);

        case 10:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find statusBarBackground element via xpath', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.updateSettings({ "allowInvisibleElements": true }));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.elementByXPath('//*[@resource-id=\'android:id/statusBarBackground\']').should.eventually.exist);

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9maW5kL2ZpbmQtc3lzdGVtLXVpLWVsLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7OzhCQUNsQix1QkFBdUI7O0FBR2xELGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksV0FBVyxHQUFHO0FBQ2hCLFlBQVUsRUFBRSxzQkFBc0I7QUFDbEMsYUFBVyxFQUFFLFdBQVc7QUFDeEIsWUFBVSxFQUFFLFNBQVM7QUFDckIsY0FBWSxFQUFFLFNBQVM7Q0FDeEIsQ0FBQzs7QUFFRixRQUFRLENBQUMscUNBQXFDLEVBQUUsWUFBWTs7O0FBQzFELFFBQU0sQ0FBQzs7OztBQUNMLGNBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRTtBQUNwQyxnQkFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1dBQ2I7Ozs7MkNBR2MsZ0NBQVcsV0FBVyxDQUFDOzs7QUFBdEMsZ0JBQU07Ozs7Ozs7R0FDUCxDQUFDLENBQUM7QUFDSCxPQUFLLENBQUM7Ozs7ZUFDQSxNQUFNOzs7Ozs7MkNBQ0YsTUFBTSxDQUFDLElBQUksRUFBRTs7Ozs7OztHQUV0QixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsdURBQXVELEVBQUU7UUFDdEQsU0FBUyxFQUdULHdCQUF3Qjs7Ozs7MkNBSE4sTUFBTSxDQUFDLGVBQWUsd0RBQXNEOzs7QUFBOUYsbUJBQVM7O0FBQ2IsbUJBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7OzJDQUM5QixNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUMsd0JBQXdCLEVBQUUsS0FBSyxFQUFDLENBQUM7Ozs7MkNBQ3pCLE1BQU0sQ0FBQyxlQUFlLHdEQUFzRDs7O0FBQTdHLGtDQUF3Qjs7QUFDNUIsa0NBQXdCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0dBQ3BELENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxtREFBbUQsRUFBRTs7Ozs7MkNBQ2hELE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUMsQ0FBQzs7OzsyQ0FDdkQsTUFBTSxDQUFDLGNBQWMsd0RBQXNELENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLOzs7Ozs7O0dBQzFHLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvY29tbWFuZHMvZmluZC9maW5kLXN5c3RlbS11aS1lbC1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcclxuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xyXG5pbXBvcnQgeyBpbml0RHJpdmVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zZXNzaW9uJztcclxuXHJcblxyXG5jaGFpLnNob3VsZCgpO1xyXG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XHJcblxyXG5sZXQgZHJpdmVyO1xyXG5sZXQgZGVmYXVsdENhcHMgPSB7XHJcbiAgYXBwUGFja2FnZTogJ2NvbS5hbmRyb2lkLnNldHRpbmdzJyxcclxuICBhcHBBY3Rpdml0eTogJy5TZXR0aW5ncycsXHJcbiAgZGV2aWNlTmFtZTogJ0FuZHJvaWQnLFxyXG4gIHBsYXRmb3JtTmFtZTogJ0FuZHJvaWQnXHJcbn07XHJcblxyXG5kZXNjcmliZSgnRmluZCAtIGFuZHJvaWQgdWkgZWxlbWVudHMgQHNraXAtY2knLCBmdW5jdGlvbiAoKSB7XHJcbiAgYmVmb3JlKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5URVNUT0JKRUNUX0UyRV9URVNUUykge1xyXG4gICAgICB0aGlzLnNraXAoKTtcclxuICAgIH1cclxuICAgIC8vIFRPRE86IHdoeSBkb2VzIHRyYXZpcyBmYWlsIG9uIHRoaXM/XHJcblxyXG4gICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihkZWZhdWx0Q2Fwcyk7XHJcbiAgfSk7XHJcbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGRyaXZlcikge1xyXG4gICAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgbm90IGZpbmQgc3RhdHVzQmFyQmFja2dyb3VuZCBlbGVtZW50IHZpYSB4cGF0aCcsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBzdGF0dXNCYXIgPSBhd2FpdCBkcml2ZXIuZWxlbWVudHNCeVhQYXRoKGAvLypbQHJlc291cmNlLWlkPSdhbmRyb2lkOmlkL3N0YXR1c0JhckJhY2tncm91bmQnXWApOyAvL2NoZWNrIHNlcnZlciAoTlBFKSBpZiBhbGxvd0ludmlzaWJsZUVsZW1lbnRzIGlzIHVuc2V0IG9uIHNlcnZlciBzaWRlXHJcbiAgICBzdGF0dXNCYXIubGVuZ3RoLnNob3VsZC5iZS5lcXVhbCgwKTtcclxuICAgIGF3YWl0IGRyaXZlci51cGRhdGVTZXR0aW5ncyh7XCJhbGxvd0ludmlzaWJsZUVsZW1lbnRzXCI6IGZhbHNlfSk7XHJcbiAgICBsZXQgc3RhdHVzQmFyV2l0aEludmlzaWJsZUVsID0gYXdhaXQgZHJpdmVyLmVsZW1lbnRzQnlYUGF0aChgLy8qW0ByZXNvdXJjZS1pZD0nYW5kcm9pZDppZC9zdGF0dXNCYXJCYWNrZ3JvdW5kJ11gKTtcclxuICAgIHN0YXR1c0JhcldpdGhJbnZpc2libGVFbC5sZW5ndGguc2hvdWxkLmJlLmVxdWFsKDApO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZmluZCBzdGF0dXNCYXJCYWNrZ3JvdW5kIGVsZW1lbnQgdmlhIHhwYXRoJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZHJpdmVyLnVwZGF0ZVNldHRpbmdzKHtcImFsbG93SW52aXNpYmxlRWxlbWVudHNcIjogdHJ1ZX0pO1xyXG4gICAgYXdhaXQgZHJpdmVyLmVsZW1lbnRCeVhQYXRoKGAvLypbQHJlc291cmNlLWlkPSdhbmRyb2lkOmlkL3N0YXR1c0JhckJhY2tncm91bmQnXWApLnNob3VsZC5ldmVudHVhbGx5LmV4aXN0O1xyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi4ifQ==
