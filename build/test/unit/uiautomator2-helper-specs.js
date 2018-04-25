'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _this = this;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _libHelpers = require('../../lib/helpers');

var helpers = _interopRequireWildcard(_libHelpers);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _appiumTestSupport = require('appium-test-support');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('UiAutomator2 Driver  Helpers', function () {
  var adb = new _appiumAdb2['default']();

  describe('ensureInternetPermissionForApp', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    var app = '/path/to/app.apk';
    it('should do nothing if app has internet perm', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('hasInternetPermissionFromManifest').once().withExactArgs(app).returns(true);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(helpers.ensureInternetPermissionForApp(adb, app));

          case 3:
            mocks.adb.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should throw an error if app doesnt have internet perms', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('hasInternetPermissionFromManifest').once().withExactArgs(app).returns(false);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(helpers.ensureInternetPermissionForApp(adb, app).should.be.rejectedWith(/INTERNET/));

          case 3:
            mocks.adb.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC91aWF1dG9tYXRvcjItaGVscGVyLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7OzBCQUNwQixtQkFBbUI7O0lBQWhDLE9BQU87O3lCQUNILFlBQVk7Ozs7aUNBQ0YscUJBQXFCOztBQUcvQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLFFBQVEsQ0FBQyw4QkFBOEIsRUFBRSxZQUFNO0FBQzdDLE1BQUksR0FBRyxHQUFHLDRCQUFTLENBQUM7O0FBRXBCLFVBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxrQ0FBVSxFQUFDLEdBQUcsRUFBSCxHQUFHLEVBQUMsRUFBRSxVQUFDLEtBQUssRUFBSztBQUNyRSxRQUFNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztBQUMvQixNQUFFLENBQUMsNENBQTRDLEVBQUU7Ozs7QUFDL0MsaUJBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQ2pELElBQUksRUFBRSxDQUNOLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzs2Q0FDYixPQUFPLENBQUMsOEJBQThCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7O0FBQ3RELGlCQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7Ozs7O0tBQ3BCLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyx5REFBeUQsRUFBRTs7OztBQUM1RCxpQkFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FDakQsSUFBSSxFQUFFLENBQ04sYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7OzZDQUNkLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ2pELE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQzs7O0FBQ3ZDLGlCQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7Ozs7O0tBQ3BCLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQyxDQUFDO0NBQ0wsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvdW5pdC91aWF1dG9tYXRvcjItaGVscGVyLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XHJcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcclxuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuLi8uLi9saWIvaGVscGVycyc7XHJcbmltcG9ydCBBREIgZnJvbSAnYXBwaXVtLWFkYic7XHJcbmltcG9ydCB7IHdpdGhNb2NrcyB9IGZyb20gJ2FwcGl1bS10ZXN0LXN1cHBvcnQnO1xyXG5cclxuXHJcbmNoYWkuc2hvdWxkKCk7XHJcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcclxuXHJcbmRlc2NyaWJlKCdVaUF1dG9tYXRvcjIgRHJpdmVyICBIZWxwZXJzJywgKCkgPT4ge1xyXG4gIGxldCBhZGIgPSBuZXcgQURCKCk7XHJcblxyXG4gIGRlc2NyaWJlKCdlbnN1cmVJbnRlcm5ldFBlcm1pc3Npb25Gb3JBcHAnLCB3aXRoTW9ja3Moe2FkYn0sIChtb2NrcykgPT4ge1xyXG4gICAgY29uc3QgYXBwID0gJy9wYXRoL3RvL2FwcC5hcGsnO1xyXG4gICAgaXQoJ3Nob3VsZCBkbyBub3RoaW5nIGlmIGFwcCBoYXMgaW50ZXJuZXQgcGVybScsIGFzeW5jICgpID0+IHtcclxuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2hhc0ludGVybmV0UGVybWlzc2lvbkZyb21NYW5pZmVzdCcpXHJcbiAgICAgICAgICAub25jZSgpXHJcbiAgICAgICAgICAud2l0aEV4YWN0QXJncyhhcHApXHJcbiAgICAgICAgICAucmV0dXJucyh0cnVlKTtcclxuICAgICAgYXdhaXQgaGVscGVycy5lbnN1cmVJbnRlcm5ldFBlcm1pc3Npb25Gb3JBcHAoYWRiLCBhcHApO1xyXG4gICAgICBtb2Nrcy5hZGIudmVyaWZ5KCk7XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgaWYgYXBwIGRvZXNudCBoYXZlIGludGVybmV0IHBlcm1zJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnaGFzSW50ZXJuZXRQZXJtaXNzaW9uRnJvbU1hbmlmZXN0JylcclxuICAgICAgICAgIC5vbmNlKClcclxuICAgICAgICAgIC53aXRoRXhhY3RBcmdzKGFwcClcclxuICAgICAgICAgIC5yZXR1cm5zKGZhbHNlKTtcclxuICAgICAgYXdhaXQgaGVscGVycy5lbnN1cmVJbnRlcm5ldFBlcm1pc3Npb25Gb3JBcHAoYWRiLCBhcHApXHJcbiAgICAgICAgICAuc2hvdWxkLmJlLnJlamVjdGVkV2l0aCgvSU5URVJORVQvKTtcclxuICAgICAgbW9ja3MuYWRiLnZlcmlmeSgpO1xyXG4gICAgfSk7XHJcbiAgfSkpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uIn0=
