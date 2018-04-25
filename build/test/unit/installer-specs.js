'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _this = this;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _appiumSupport = require('appium-support');

var _appiumTestSupport = require('appium-test-support');

var _libInstaller = require('../../lib/installer');

var _libLogger = require('../../lib/logger');

var _libLogger2 = _interopRequireDefault(_libLogger);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('appium-uiautomator2-installer', function () {
  describe.skip('setupUiAutomator2', (0, _appiumTestSupport.withMocks)({ log: _libLogger2['default'] }, function (mocks) {
    // TODO: this is NOT a UNIT TEST. Figure out if we need it, and if so,
    // how to fix it so it doesn't actually download the apks
    it('should download the server APKs', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.log.expects("error").never();
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _libInstaller.setupUiAutomator2)());

          case 3:
            mocks.log.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));

  describe('serverExists', (0, _appiumTestSupport.withMocks)({ fs: _appiumSupport.fs }, function (mocks) {
    it('should return true if both server apk and test apk exist', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.fs.expects("exists").once().withExactArgs(_libInstaller.UI2_SERVER_APK_PATH).returns(_bluebird2['default'].resolve(true));
            mocks.fs.expects("exists").once().withExactArgs(_libInstaller.UI2_TEST_APK_PATH).returns(_bluebird2['default'].resolve(true));
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap((0, _libInstaller.serverExists)());

          case 4:
            context$3$0.sent.should.be['true'];

            mocks.fs.verify();

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should return false if apk does not exist', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.fs.expects("exists").once().withExactArgs(_libInstaller.UI2_SERVER_APK_PATH).returns(_bluebird2['default'].resolve(false));
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _libInstaller.serverExists)());

          case 3:
            context$3$0.sent.should.be['false'];

            mocks.fs.verify();

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should return false if fs.exists throws a ENOENT error', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.fs.expects("exists").once().withExactArgs(_libInstaller.UI2_SERVER_APK_PATH).throws({ code: 'ENOENT' });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _libInstaller.serverExists)());

          case 3:
            context$3$0.sent.should.be['false'];

            mocks.fs.verify();

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should throw an error if fs.exists throws a non-ENOENT error', function callee$2$0() {
      var error;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            error = new Error();

            error.code = 'EACCES';
            mocks.fs.expects("exists").once().withExactArgs(_libInstaller.UI2_SERVER_APK_PATH).throws(error);
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap((0, _libInstaller.serverExists)().should.eventually.be.rejectedWith(error));

          case 5:
            mocks.fs.verify();

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9pbnN0YWxsZXItc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7OzZCQUMxQixnQkFBZ0I7O2lDQUNULHFCQUFxQjs7NEJBQ3lDLHFCQUFxQjs7eUJBQzdGLGtCQUFrQjs7Ozt3QkFDcEIsVUFBVTs7OztBQUd4QixrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLFFBQVEsQ0FBQywrQkFBK0IsRUFBRSxZQUFNO0FBQzlDLFVBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsa0NBQVUsRUFBQyxHQUFHLHdCQUFBLEVBQUMsRUFBRSxVQUFDLEtBQUssRUFBSzs7O0FBRzdELE1BQUUsQ0FBQyxpQ0FBaUMsRUFBRTs7OztBQUNwQyxpQkFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7OzZDQUM3QixzQ0FBbUI7OztBQUN6QixpQkFBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7OztLQUNwQixDQUFDLENBQUM7R0FDSixDQUFDLENBQUMsQ0FBQzs7QUFFSixVQUFRLENBQUMsY0FBYyxFQUFFLGtDQUFVLEVBQUMsRUFBRSxtQkFBQSxFQUFDLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDbEQsTUFBRSxDQUFDLDBEQUEwRCxFQUFFOzs7O0FBQzdELGlCQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDOUIsYUFBYSxtQ0FBcUIsQ0FDbEMsT0FBTyxDQUFDLHNCQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzVCLGlCQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDOUIsYUFBYSxpQ0FBbUIsQ0FDaEMsT0FBTyxDQUFDLHNCQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs2Q0FDckIsaUNBQWM7Ozs2QkFBRSxNQUFNLENBQUMsRUFBRTs7QUFDaEMsaUJBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7S0FDbkIsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLDJDQUEyQyxFQUFFOzs7O0FBQzlDLGlCQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDOUIsYUFBYSxtQ0FBcUIsQ0FDbEMsT0FBTyxDQUFDLHNCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs2Q0FDdEIsaUNBQWM7Ozs2QkFBRSxNQUFNLENBQUMsRUFBRTs7QUFDaEMsaUJBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7S0FDbkIsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLHdEQUF3RCxFQUFFOzs7O0FBQzNELGlCQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDOUIsYUFBYSxtQ0FBcUIsQ0FDbEMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7OzZDQUNwQixpQ0FBYzs7OzZCQUFFLE1BQU0sQ0FBQyxFQUFFOztBQUNoQyxpQkFBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7OztLQUNuQixDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsOERBQThELEVBQUU7VUFDN0QsS0FBSzs7OztBQUFMLGlCQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUU7O0FBQ3ZCLGlCQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUN0QixpQkFBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQzlCLGFBQWEsbUNBQXFCLENBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7NkNBQ1gsaUNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDOzs7QUFDN0QsaUJBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7S0FDbkIsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDLENBQUM7Q0FDTCxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC91bml0L2luc3RhbGxlci1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XHJcbmltcG9ydCB7IGZzIH0gZnJvbSAnYXBwaXVtLXN1cHBvcnQnO1xyXG5pbXBvcnQgeyB3aXRoTW9ja3MgfSBmcm9tICdhcHBpdW0tdGVzdC1zdXBwb3J0JztcclxuaW1wb3J0IHsgc2VydmVyRXhpc3RzLCBVSTJfU0VSVkVSX0FQS19QQVRILCBVSTJfVEVTVF9BUEtfUEFUSCwgc2V0dXBVaUF1dG9tYXRvcjIgfSBmcm9tICcuLi8uLi9saWIvaW5zdGFsbGVyJztcclxuaW1wb3J0IGxvZyBmcm9tICcuLi8uLi9saWIvbG9nZ2VyJztcclxuaW1wb3J0IEIgZnJvbSAnYmx1ZWJpcmQnO1xyXG5cclxuXHJcbmNoYWkuc2hvdWxkKCk7XHJcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcclxuXHJcbmRlc2NyaWJlKCdhcHBpdW0tdWlhdXRvbWF0b3IyLWluc3RhbGxlcicsICgpID0+IHtcclxuICBkZXNjcmliZS5za2lwKCdzZXR1cFVpQXV0b21hdG9yMicsIHdpdGhNb2Nrcyh7bG9nfSwgKG1vY2tzKSA9PiB7XHJcbiAgICAvLyBUT0RPOiB0aGlzIGlzIE5PVCBhIFVOSVQgVEVTVC4gRmlndXJlIG91dCBpZiB3ZSBuZWVkIGl0LCBhbmQgaWYgc28sXHJcbiAgICAvLyBob3cgdG8gZml4IGl0IHNvIGl0IGRvZXNuJ3QgYWN0dWFsbHkgZG93bmxvYWQgdGhlIGFwa3NcclxuICAgIGl0KCdzaG91bGQgZG93bmxvYWQgdGhlIHNlcnZlciBBUEtzJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBtb2Nrcy5sb2cuZXhwZWN0cyhcImVycm9yXCIpLm5ldmVyKCk7XHJcbiAgICAgIGF3YWl0IHNldHVwVWlBdXRvbWF0b3IyKCk7XHJcbiAgICAgIG1vY2tzLmxvZy52ZXJpZnkoKTtcclxuICAgIH0pO1xyXG4gIH0pKTtcclxuXHJcbiAgZGVzY3JpYmUoJ3NlcnZlckV4aXN0cycsIHdpdGhNb2Nrcyh7ZnN9LCAobW9ja3MpID0+IHtcclxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaWYgYm90aCBzZXJ2ZXIgYXBrIGFuZCB0ZXN0IGFwayBleGlzdCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgbW9ja3MuZnMuZXhwZWN0cyhcImV4aXN0c1wiKS5vbmNlKClcclxuICAgICAgICAud2l0aEV4YWN0QXJncyhVSTJfU0VSVkVSX0FQS19QQVRIKVxyXG4gICAgICAgIC5yZXR1cm5zKEIucmVzb2x2ZSh0cnVlKSk7XHJcbiAgICAgIG1vY2tzLmZzLmV4cGVjdHMoXCJleGlzdHNcIikub25jZSgpXHJcbiAgICAgICAgLndpdGhFeGFjdEFyZ3MoVUkyX1RFU1RfQVBLX1BBVEgpXHJcbiAgICAgICAgLnJldHVybnMoQi5yZXNvbHZlKHRydWUpKTtcclxuICAgICAgKGF3YWl0IHNlcnZlckV4aXN0cygpKS5zaG91bGQuYmUudHJ1ZTtcclxuICAgICAgbW9ja3MuZnMudmVyaWZ5KCk7XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIGlmIGFwayBkb2VzIG5vdCBleGlzdCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgbW9ja3MuZnMuZXhwZWN0cyhcImV4aXN0c1wiKS5vbmNlKClcclxuICAgICAgICAud2l0aEV4YWN0QXJncyhVSTJfU0VSVkVSX0FQS19QQVRIKVxyXG4gICAgICAgIC5yZXR1cm5zKEIucmVzb2x2ZShmYWxzZSkpO1xyXG4gICAgICAoYXdhaXQgc2VydmVyRXhpc3RzKCkpLnNob3VsZC5iZS5mYWxzZTtcclxuICAgICAgbW9ja3MuZnMudmVyaWZ5KCk7XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIGlmIGZzLmV4aXN0cyB0aHJvd3MgYSBFTk9FTlQgZXJyb3InLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIG1vY2tzLmZzLmV4cGVjdHMoXCJleGlzdHNcIikub25jZSgpXHJcbiAgICAgICAgLndpdGhFeGFjdEFyZ3MoVUkyX1NFUlZFUl9BUEtfUEFUSClcclxuICAgICAgICAudGhyb3dzKHtjb2RlOidFTk9FTlQnfSk7XHJcbiAgICAgIChhd2FpdCBzZXJ2ZXJFeGlzdHMoKSkuc2hvdWxkLmJlLmZhbHNlO1xyXG4gICAgICBtb2Nrcy5mcy52ZXJpZnkoKTtcclxuICAgIH0pO1xyXG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBhbiBlcnJvciBpZiBmcy5leGlzdHMgdGhyb3dzIGEgbm9uLUVOT0VOVCBlcnJvcicsIGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKCk7XHJcbiAgICAgIGVycm9yLmNvZGUgPSAnRUFDQ0VTJztcclxuICAgICAgbW9ja3MuZnMuZXhwZWN0cyhcImV4aXN0c1wiKS5vbmNlKClcclxuICAgICAgICAud2l0aEV4YWN0QXJncyhVSTJfU0VSVkVSX0FQS19QQVRIKVxyXG4gICAgICAgIC50aHJvd3MoZXJyb3IpO1xyXG4gICAgICBhd2FpdCBzZXJ2ZXJFeGlzdHMoKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZFdpdGgoZXJyb3IpO1xyXG4gICAgICBtb2Nrcy5mcy52ZXJpZnkoKTtcclxuICAgIH0pO1xyXG4gIH0pKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLiJ9
