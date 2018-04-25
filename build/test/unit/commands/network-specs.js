'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _this2 = this;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _ = require('../../..');

var _2 = _interopRequireDefault(_);

var driver = undefined;
var sandbox = _sinon2['default'].sandbox.create();
_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('Network', function () {
  describe('SetNetworkConnection', function () {
    beforeEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        var _this = this;

        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _2['default']();
            driver.adb = new _appiumAdb2['default']();
            sandbox.stub(driver, 'getNetworkConnection');
            sandbox.stub(driver, 'wrapBootstrapDisconnect', function callee$3$0(fn) {
              return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
                while (1) switch (context$4$0.prev = context$4$0.next) {
                  case 0:
                    context$4$0.next = 2;
                    return _regeneratorRuntime.awrap(fn());

                  case 2:
                  case 'end':
                    return context$4$0.stop();
                }
              }, null, _this);
            });
            sandbox.stub(driver.adb, 'setAirplaneMode');
            sandbox.stub(driver.adb, 'broadcastAirplaneMode');
            sandbox.stub(driver, 'setWifiState');
            sandbox.stub(driver.adb, 'setDataState');

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
    afterEach(function () {
      sandbox.restore();
    });
    it('should turn off wifi and data', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(0));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.setWifiState.calledWithExactly(0).should.be['true'];
            driver.adb.setDataState.calledWithExactly(0, false).should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
    it('should turn on and broadcast airplane mode', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(1));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(1).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(1).should.be['true'];
            driver.setWifiState.called.should.be['false'];
            driver.adb.setDataState.called.should.be['false'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
    it('should turn on wifi', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(2));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.setWifiState.calledWithExactly(1).should.be['true'];
            driver.adb.setDataState.calledWithExactly(0, false).should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
    it('should turn on data on emulator', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.opts.avd = 'something';
            context$3$0.prev = 1;
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(4));

          case 4:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.setWifiState.calledWithExactly(0).should.be['true'];
            driver.adb.setDataState.calledWithExactly(1, true).should.be['true'];

          case 8:
            context$3$0.prev = 8;

            driver.opts.avd = undefined;
            return context$3$0.finish(8);

          case 11:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2, [[1,, 8, 11]]);
    });
    it('should turn on data and wifi', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(6));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.setWifiState.calledWithExactly(1).should.be['true'];
            driver.adb.setDataState.calledWithExactly(1, false).should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9uZXR3b3JrLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztxQkFDM0IsT0FBTzs7Ozt5QkFDVCxZQUFZOzs7O2dCQUNVLFVBQVU7Ozs7QUFFaEQsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksT0FBTyxHQUFHLG1CQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNyQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBTTtBQUN4QixVQUFRLENBQUMsc0JBQXNCLEVBQUUsWUFBTTtBQUNyQyxjQUFVLENBQUM7Ozs7OztBQUNULGtCQUFNLEdBQUcsbUJBQStCLENBQUM7QUFDekMsa0JBQU0sQ0FBQyxHQUFHLEdBQUcsNEJBQVMsQ0FBQztBQUN2QixtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUM3QyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUseUJBQXlCLEVBQUUsb0JBQU8sRUFBRTs7Ozs7cURBQ2pELEVBQUUsRUFBRTs7Ozs7OzthQUNYLENBQUMsQ0FBQztBQUNILG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUM1QyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLENBQUM7QUFDbEQsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3JDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7Ozs7Ozs7S0FDMUMsQ0FBQyxDQUFDO0FBQ0gsYUFBUyxDQUFDLFlBQU07QUFDZCxhQUFP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QyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7O0FBRWxFLGtCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7Ozs7Ozs7O0tBRS9CLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyw4QkFBOEIsRUFBRTs7Ozs7NkNBQzNCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7OztBQUNwQyxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0FBQy9ELGtCQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUNyRSxrQkFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDeEQsa0JBQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDcEUsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvdW5pdC9jb21tYW5kcy9uZXR3b3JrLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XHJcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IEFEQiBmcm9tICdhcHBpdW0tYWRiJztcclxuaW1wb3J0IEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXIgZnJvbSAnLi4vLi4vLi4nO1xyXG5cclxubGV0IGRyaXZlcjtcclxubGV0IHNhbmRib3ggPSBzaW5vbi5zYW5kYm94LmNyZWF0ZSgpO1xyXG5jaGFpLnNob3VsZCgpO1xyXG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XHJcblxyXG5kZXNjcmliZSgnTmV0d29yaycsICgpID0+IHtcclxuICBkZXNjcmliZSgnU2V0TmV0d29ya0Nvbm5lY3Rpb24nLCAoKSA9PiB7XHJcbiAgICBiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcclxuICAgICAgZHJpdmVyID0gbmV3IEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXIoKTtcclxuICAgICAgZHJpdmVyLmFkYiA9IG5ldyBBREIoKTtcclxuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2dldE5ldHdvcmtDb25uZWN0aW9uJyk7XHJcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICd3cmFwQm9vdHN0cmFwRGlzY29ubmVjdCcsIGFzeW5jIChmbikgPT4ge1xyXG4gICAgICAgIGF3YWl0IGZuKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ3NldEFpcnBsYW5lTW9kZScpO1xyXG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2Jyb2FkY2FzdEFpcnBsYW5lTW9kZScpO1xyXG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnc2V0V2lmaVN0YXRlJyk7XHJcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnc2V0RGF0YVN0YXRlJyk7XHJcbiAgICB9KTtcclxuICAgIGFmdGVyRWFjaCgoKSA9PiB7XHJcbiAgICAgIHNhbmRib3gucmVzdG9yZSgpO1xyXG4gICAgfSk7XHJcbiAgICBpdCgnc2hvdWxkIHR1cm4gb2ZmIHdpZmkgYW5kIGRhdGEnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5zZXROZXR3b3JrQ29ubmVjdGlvbigwKTtcclxuICAgICAgZHJpdmVyLmFkYi5zZXRBaXJwbGFuZU1vZGUuY2FsbGVkV2l0aEV4YWN0bHkoMCkuc2hvdWxkLmJlLnRydWU7XHJcbiAgICAgIGRyaXZlci5hZGIuYnJvYWRjYXN0QWlycGxhbmVNb2RlLmNhbGxlZFdpdGhFeGFjdGx5KDApLnNob3VsZC5iZS50cnVlO1xyXG4gICAgICBkcml2ZXIuc2V0V2lmaVN0YXRlLmNhbGxlZFdpdGhFeGFjdGx5KDApLnNob3VsZC5iZS50cnVlO1xyXG4gICAgICBkcml2ZXIuYWRiLnNldERhdGFTdGF0ZS5jYWxsZWRXaXRoRXhhY3RseSgwLCBmYWxzZSkuc2hvdWxkLmJlLnRydWU7XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgdHVybiBvbiBhbmQgYnJvYWRjYXN0IGFpcnBsYW5lIG1vZGUnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5zZXROZXR3b3JrQ29ubmVjdGlvbigxKTtcclxuICAgICAgZHJpdmVyLmFkYi5zZXRBaXJwbGFuZU1vZGUuY2FsbGVkV2l0aEV4YWN0bHkoMSkuc2hvdWxkLmJlLnRydWU7XHJcbiAgICAgIGRyaXZlci5hZGIuYnJvYWRjYXN0QWlycGxhbmVNb2RlLmNhbGxlZFdpdGhFeGFjdGx5KDEpLnNob3VsZC5iZS50cnVlO1xyXG4gICAgICBkcml2ZXIuc2V0V2lmaVN0YXRlLmNhbGxlZC5zaG91bGQuYmUuZmFsc2U7XHJcbiAgICAgIGRyaXZlci5hZGIuc2V0RGF0YVN0YXRlLmNhbGxlZC5zaG91bGQuYmUuZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgdHVybiBvbiB3aWZpJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBkcml2ZXIuc2V0TmV0d29ya0Nvbm5lY3Rpb24oMik7XHJcbiAgICAgIGRyaXZlci5hZGIuc2V0QWlycGxhbmVNb2RlLmNhbGxlZFdpdGhFeGFjdGx5KDApLnNob3VsZC5iZS50cnVlO1xyXG4gICAgICBkcml2ZXIuYWRiLmJyb2FkY2FzdEFpcnBsYW5lTW9kZS5jYWxsZWRXaXRoRXhhY3RseSgwKS5zaG91bGQuYmUudHJ1ZTtcclxuICAgICAgZHJpdmVyLnNldFdpZmlTdGF0ZS5jYWxsZWRXaXRoRXhhY3RseSgxKS5zaG91bGQuYmUudHJ1ZTtcclxuICAgICAgZHJpdmVyLmFkYi5zZXREYXRhU3RhdGUuY2FsbGVkV2l0aEV4YWN0bHkoMCwgZmFsc2UpLnNob3VsZC5iZS50cnVlO1xyXG4gICAgfSk7XHJcbiAgICBpdCgnc2hvdWxkIHR1cm4gb24gZGF0YSBvbiBlbXVsYXRvcicsIGFzeW5jICgpID0+IHtcclxuICAgICAgZHJpdmVyLm9wdHMuYXZkID0gJ3NvbWV0aGluZyc7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZHJpdmVyLnNldE5ldHdvcmtDb25uZWN0aW9uKDQpO1xyXG4gICAgICAgIGRyaXZlci5hZGIuc2V0QWlycGxhbmVNb2RlLmNhbGxlZFdpdGhFeGFjdGx5KDApLnNob3VsZC5iZS50cnVlO1xyXG4gICAgICAgIGRyaXZlci5hZGIuYnJvYWRjYXN0QWlycGxhbmVNb2RlLmNhbGxlZFdpdGhFeGFjdGx5KDApLnNob3VsZC5iZS50cnVlO1xyXG4gICAgICAgIGRyaXZlci5zZXRXaWZpU3RhdGUuY2FsbGVkV2l0aEV4YWN0bHkoMCkuc2hvdWxkLmJlLnRydWU7XHJcbiAgICAgICAgZHJpdmVyLmFkYi5zZXREYXRhU3RhdGUuY2FsbGVkV2l0aEV4YWN0bHkoMSwgdHJ1ZSkuc2hvdWxkLmJlLnRydWU7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgZHJpdmVyLm9wdHMuYXZkID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgdHVybiBvbiBkYXRhIGFuZCB3aWZpJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBkcml2ZXIuc2V0TmV0d29ya0Nvbm5lY3Rpb24oNik7XHJcbiAgICAgIGRyaXZlci5hZGIuc2V0QWlycGxhbmVNb2RlLmNhbGxlZFdpdGhFeGFjdGx5KDApLnNob3VsZC5iZS50cnVlO1xyXG4gICAgICBkcml2ZXIuYWRiLmJyb2FkY2FzdEFpcnBsYW5lTW9kZS5jYWxsZWRXaXRoRXhhY3RseSgwKS5zaG91bGQuYmUudHJ1ZTtcclxuICAgICAgZHJpdmVyLnNldFdpZmlTdGF0ZS5jYWxsZWRXaXRoRXhhY3RseSgxKS5zaG91bGQuYmUudHJ1ZTtcclxuICAgICAgZHJpdmVyLmFkYi5zZXREYXRhU3RhdGUuY2FsbGVkV2l0aEV4YWN0bHkoMSwgZmFsc2UpLnNob3VsZC5iZS50cnVlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uIn0=
