'use strict';

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _helpersSession = require('../helpers/session');

var _desired = require('../desired');

var _appiumAndroidDriver = require('appium-android-driver');

var _helpersHelpers = require('../helpers/helpers');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

// Skip ci since the command restart emulator when the test device's API is 22-.
describe('Localization - locale @skip-ci @skip-real-device', function () {
  var _this = this;

  var initialLocale = undefined;
  var adb = undefined;

  before(function callee$1$0() {
    var adb;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          if (process.env.TESTOBJECT_E2E_TESTS) {
            this.skip();
          }

          // restarting doesn't work on Android 7+
          adb = new _appiumAdb2['default']();
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(adb.getApiLevel());

        case 4:
          context$2$0.t0 = context$2$0.sent;

          if (!(context$2$0.t0 > 23)) {
            context$2$0.next = 7;
            break;
          }

          return context$2$0.abrupt('return', this.skip());

        case 7:
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap((0, _helpersHelpers.getLocale)(adb));

        case 9:
          initialLocale = context$2$0.sent;

        case 10:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  var driver = undefined;
  after(function callee$1$0() {
    var _initialLocale$split, _initialLocale$split2, language, country;

    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          if (!driver) {
            context$2$0.next = 17;
            break;
          }

          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(adb.getApiLevel());

        case 3:
          context$2$0.t0 = context$2$0.sent;

          if (!(context$2$0.t0 > 23)) {
            context$2$0.next = 13;
            break;
          }

          _initialLocale$split = initialLocale.split("-");
          _initialLocale$split2 = _slicedToArray(_initialLocale$split, 2);
          language = _initialLocale$split2[0];
          country = _initialLocale$split2[1];
          context$2$0.next = 11;
          return _regeneratorRuntime.awrap(_appiumAndroidDriver.androidHelpers.ensureDeviceLocale(driver.adb, language, country));

        case 11:
          context$2$0.next = 15;
          break;

        case 13:
          context$2$0.next = 15;
          return _regeneratorRuntime.awrap(_appiumAndroidDriver.androidHelpers.ensureDeviceLocale(driver.adb, null, initialLocale));

        case 15:
          context$2$0.next = 17;
          return _regeneratorRuntime.awrap(driver.quit());

        case 17:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  it('should start as FR', function callee$1$0() {
    var frCaps;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          frCaps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
            language: 'fr',
            locale: 'FR'
          });
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(frCaps));

        case 3:
          driver = context$2$0.sent;
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap((0, _helpersHelpers.getLocale)(driver.adb).should.eventually.equal('fr-FR'));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should start as US', function callee$1$0() {
    var usCaps;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          usCaps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
            language: 'en',
            locale: 'US'
          });
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(usCaps));

        case 3:
          driver = context$2$0.sent;
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap((0, _helpersHelpers.getLocale)(driver.adb).should.eventually.equal('en-US'));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//eslint-disable-line curly
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9sYW5ndWFnZS1lMmUtc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7eUJBQzdCLFlBQVk7Ozs7OEJBQ0Qsb0JBQW9COzt1QkFDakIsWUFBWTs7bUNBQ1gsdUJBQXVCOzs4QkFDNUIsb0JBQW9COztBQUc5QyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7OztBQUd6QixRQUFRLENBQUMsa0RBQWtELEVBQUUsWUFBWTs7O0FBQ3ZFLE1BQUksYUFBYSxZQUFBLENBQUM7QUFDbEIsTUFBSSxHQUFHLFlBQUEsQ0FBQzs7QUFFUixRQUFNLENBQUM7UUFNRCxHQUFHOzs7O0FBTFAsY0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFO0FBQ3BDLGdCQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7V0FDYjs7O0FBR0csYUFBRyxHQUFHLDRCQUFTOzsyQ0FDVCxHQUFHLENBQUMsV0FBVyxFQUFFOzs7OztpQ0FBRyxFQUFFOzs7Ozs4Q0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFOzs7OzJDQUU5QiwrQkFBVSxHQUFHLENBQUM7OztBQUFwQyx1QkFBYTs7Ozs7OztHQUNkLENBQUMsQ0FBQzs7QUFFSCxNQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsT0FBSyxDQUFDO3FEQUdLLFFBQVEsRUFBRSxPQUFPOzs7OztlQUZ0QixNQUFNOzs7Ozs7MkNBQ0UsR0FBRyxDQUFDLFdBQVcsRUFBRTs7Ozs7aUNBQUcsRUFBRTs7Ozs7aUNBQ0osYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O0FBQTdDLGtCQUFRO0FBQUUsaUJBQU87OzJDQUNoQixvQ0FBZSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7Ozs7Ozs7OzJDQUVoRSxvQ0FBZSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxhQUFhLENBQUM7Ozs7MkNBRXBFLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Ozs7Ozs7R0FFdEIsQ0FBQyxDQUFDOztBQUVILElBQUUsQ0FBQyxvQkFBb0IsRUFBRTtRQUNuQixNQUFNOzs7O0FBQU4sZ0JBQU0sR0FBRyxlQUFjLEVBQUUsMEJBQWlCO0FBQzVDLG9CQUFRLEVBQUUsSUFBSTtBQUNkLGtCQUFNLEVBQUUsSUFBSTtXQUNiLENBQUM7OzJDQUNhLGdDQUFXLE1BQU0sQ0FBQzs7O0FBQWpDLGdCQUFNOzsyQ0FDQSwrQkFBVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7Ozs7O0dBQzdELENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxvQkFBb0IsRUFBRTtRQUNuQixNQUFNOzs7O0FBQU4sZ0JBQU0sR0FBRyxlQUFjLEVBQUUsMEJBQWlCO0FBQzVDLG9CQUFRLEVBQUUsSUFBSTtBQUNkLGtCQUFNLEVBQUUsSUFBSTtXQUNiLENBQUM7OzJDQUNhLGdDQUFXLE1BQU0sQ0FBQzs7O0FBQWpDLGdCQUFNOzsyQ0FDQSwrQkFBVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7Ozs7O0dBQzdELENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvY29tbWFuZHMvbGFuZ3VhZ2UtZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XHJcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcclxuaW1wb3J0IEFEQiBmcm9tICdhcHBpdW0tYWRiJztcclxuaW1wb3J0IHsgaW5pdERyaXZlciB9IGZyb20gJy4uL2hlbHBlcnMvc2Vzc2lvbic7XHJcbmltcG9ydCB7IEFQSURFTU9TX0NBUFMgfSBmcm9tICcuLi9kZXNpcmVkJztcclxuaW1wb3J0IHsgYW5kcm9pZEhlbHBlcnMgfSBmcm9tICdhcHBpdW0tYW5kcm9pZC1kcml2ZXInO1xyXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuXHJcbmNoYWkuc2hvdWxkKCk7XHJcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcclxuXHJcbi8vIFNraXAgY2kgc2luY2UgdGhlIGNvbW1hbmQgcmVzdGFydCBlbXVsYXRvciB3aGVuIHRoZSB0ZXN0IGRldmljZSdzIEFQSSBpcyAyMi0uXHJcbmRlc2NyaWJlKCdMb2NhbGl6YXRpb24gLSBsb2NhbGUgQHNraXAtY2kgQHNraXAtcmVhbC1kZXZpY2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGluaXRpYWxMb2NhbGU7XHJcbiAgbGV0IGFkYjtcclxuXHJcbiAgYmVmb3JlKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5URVNUT0JKRUNUX0UyRV9URVNUUykge1xyXG4gICAgICB0aGlzLnNraXAoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXN0YXJ0aW5nIGRvZXNuJ3Qgd29yayBvbiBBbmRyb2lkIDcrXHJcbiAgICBsZXQgYWRiID0gbmV3IEFEQigpO1xyXG4gICAgaWYgKGF3YWl0IGFkYi5nZXRBcGlMZXZlbCgpID4gMjMpIHJldHVybiB0aGlzLnNraXAoKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIGN1cmx5XHJcblxyXG4gICAgaW5pdGlhbExvY2FsZSA9IGF3YWl0IGdldExvY2FsZShhZGIpO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgZHJpdmVyO1xyXG4gIGFmdGVyKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChkcml2ZXIpIHtcclxuICAgICAgaWYgKGF3YWl0IGFkYi5nZXRBcGlMZXZlbCgpID4gMjMpIHtcclxuICAgICAgICBsZXQgW2xhbmd1YWdlLCBjb3VudHJ5XSA9IGluaXRpYWxMb2NhbGUuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgIGF3YWl0IGFuZHJvaWRIZWxwZXJzLmVuc3VyZURldmljZUxvY2FsZShkcml2ZXIuYWRiLCBsYW5ndWFnZSwgY291bnRyeSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgYW5kcm9pZEhlbHBlcnMuZW5zdXJlRGV2aWNlTG9jYWxlKGRyaXZlci5hZGIsIG51bGwsIGluaXRpYWxMb2NhbGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IGRyaXZlci5xdWl0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGl0KCdzaG91bGQgc3RhcnQgYXMgRlInLCBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgZnJDYXBzID0gT2JqZWN0LmFzc2lnbih7fSwgQVBJREVNT1NfQ0FQUywge1xyXG4gICAgICBsYW5ndWFnZTogJ2ZyJyxcclxuICAgICAgbG9jYWxlOiAnRlInLFxyXG4gICAgfSk7XHJcbiAgICBkcml2ZXIgPSBhd2FpdCBpbml0RHJpdmVyKGZyQ2Fwcyk7XHJcbiAgICBhd2FpdCBnZXRMb2NhbGUoZHJpdmVyLmFkYikuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ2ZyLUZSJyk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBzdGFydCBhcyBVUycsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCB1c0NhcHMgPSBPYmplY3QuYXNzaWduKHt9LCBBUElERU1PU19DQVBTLCB7XHJcbiAgICAgIGxhbmd1YWdlOiAnZW4nLFxyXG4gICAgICBsb2NhbGU6ICdVUycsXHJcbiAgICB9KTtcclxuICAgIGRyaXZlciA9IGF3YWl0IGluaXREcml2ZXIodXNDYXBzKTtcclxuICAgIGF3YWl0IGdldExvY2FsZShkcml2ZXIuYWRiKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCgnZW4tVVMnKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi4ifQ==
