'use strict';

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _desired = require('../desired');

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _helpersSession = require('../helpers/session');

var _helpersHelpers = require('../helpers/helpers');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _appiumAndroidDriver = require('appium-android-driver');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('strings', function () {
  var driver = undefined;

  describe('specific language', function () {
    before(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            // Don't run these tests on TestObject. On TO, we don't have access to the .apk
            // which is necessary for extracting the app strings
            if (process.env.TESTOBJECT_E2E_TESTS) {
              this.skip();
            }
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_desired.APIDEMOS_CAPS));

          case 3:
            driver = context$3$0.sent;

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    after(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (process.env.TESTOBJECT_E2E_TESTS) {
              context$3$0.next = 3;
              break;
            }

            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.quit());

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should return app strings', function callee$2$0() {
      var strings;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.getAppStrings('en'));

          case 2:
            strings = context$3$0.sent;

            strings.hello_world.should.equal('<b>Hello, <i>World!</i></b>');

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should return app strings for different language', function callee$2$0() {
      var strings;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.getAppStrings('fr'));

          case 2:
            strings = context$3$0.sent;

            strings.hello_world.should.equal('<b>Bonjour, <i>Monde!</i></b>');

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });

  describe('device language', function () {
    var initialLocale = undefined;
    var adb = undefined;
    before(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            // Don't test ADB on test object
            if (process.env.TESTOBJECT_E2E_TESTS) {
              this.skip();
            }
            // restarting doesn't work on Android 7+
            adb = new _appiumAdb2['default']();
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap((0, _helpersHelpers.getLocale)(adb));

          case 4:
            initialLocale = context$3$0.sent;

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    afterEach(function callee$2$0() {
      var _initialLocale$split, _initialLocale$split2, language, country;

      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!driver) {
              context$3$0.next = 17;
              break;
            }

            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(adb.getApiLevel());

          case 3:
            context$3$0.t0 = context$3$0.sent;

            if (!(context$3$0.t0 > 23)) {
              context$3$0.next = 13;
              break;
            }

            _initialLocale$split = initialLocale.split("-");
            _initialLocale$split2 = _slicedToArray(_initialLocale$split, 2);
            language = _initialLocale$split2[0];
            country = _initialLocale$split2[1];
            context$3$0.next = 11;
            return _regeneratorRuntime.awrap(_appiumAndroidDriver.androidHelpers.ensureDeviceLocale(adb, language, country));

          case 11:
            context$3$0.next = 15;
            break;

          case 13:
            context$3$0.next = 15;
            return _regeneratorRuntime.awrap(_appiumAndroidDriver.androidHelpers.ensureDeviceLocale(adb, null, initialLocale));

          case 15:
            context$3$0.next = 17;
            return _regeneratorRuntime.awrap(driver.quit());

          case 17:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should return app strings with default locale/language', function callee$2$0() {
      var strings;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_desired.APIDEMOS_CAPS));

          case 2:
            driver = context$3$0.sent;
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getAppStrings());

          case 5:
            strings = context$3$0.sent;

            strings.hello_world.should.equal('<b>Hello, <i>World!</i></b>');

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should return app strings when language/locale set @skip-ci', function callee$2$0() {
      var strings;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (process.env.TESTOBJECT_E2E_TESTS) {
              this.skip();
            }
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_lodash2['default'].defaults({
              language: 'fr',
              locale: 'CA'
            }, _desired.APIDEMOS_CAPS)));

          case 3:
            driver = context$3$0.sent;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.getAppStrings());

          case 6:
            strings = context$3$0.sent;

            strings.hello_world.should.equal('<b>Bonjour, <i>Monde!</i></b>');

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9zdHJpbmdzLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7dUJBQ2YsWUFBWTs7eUJBQzFCLFlBQVk7Ozs7OEJBQ0Qsb0JBQW9COzs4QkFDckIsb0JBQW9COztzQkFDaEMsUUFBUTs7OzttQ0FDUyx1QkFBdUI7O0FBR3RELGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsUUFBUSxDQUFDLFNBQVMsRUFBRSxZQUFZO0FBQzlCLE1BQUksTUFBTSxZQUFBLENBQUM7O0FBRVgsVUFBUSxDQUFDLG1CQUFtQixFQUFFLFlBQVk7QUFDeEMsVUFBTSxDQUFDOzs7Ozs7QUFHTCxnQkFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFO0FBQ3BDLGtCQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjs7NkNBQ2MsdURBQXlCOzs7QUFBeEMsa0JBQU07Ozs7Ozs7S0FDUCxDQUFDLENBQUM7QUFDSCxTQUFLLENBQUM7Ozs7Z0JBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0I7Ozs7Ozs2Q0FDN0IsTUFBTSxDQUFDLElBQUksRUFBRTs7Ozs7OztLQUV0QixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLDJCQUEyQixFQUFFO1VBQzFCLE9BQU87Ozs7OzZDQUFTLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDOzs7QUFBMUMsbUJBQU87O0FBQ1gsbUJBQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDOzs7Ozs7O0tBQ2pFLENBQUMsQ0FBQzs7QUFFSCxNQUFFLENBQUMsa0RBQWtELEVBQUU7VUFDakQsT0FBTzs7Ozs7NkNBQVMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7OztBQUExQyxtQkFBTzs7QUFDWCxtQkFBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7Ozs7Ozs7S0FDbkUsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZO0FBQ3RDLFFBQUksYUFBYSxZQUFBLENBQUM7QUFDbEIsUUFBSSxHQUFHLFlBQUEsQ0FBQztBQUNSLFVBQU0sQ0FBQzs7Ozs7QUFFTCxnQkFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFO0FBQ3BDLGtCQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjs7QUFFRCxlQUFHLEdBQUcsNEJBQVMsQ0FBQzs7NkNBQ00sK0JBQVUsR0FBRyxDQUFDOzs7QUFBcEMseUJBQWE7Ozs7Ozs7S0FDZCxDQUFDLENBQUM7QUFDSCxhQUFTLENBQUM7dURBR0MsUUFBUSxFQUFFLE9BQU87Ozs7O2lCQUZ0QixNQUFNOzs7Ozs7NkNBQ0UsR0FBRyxDQUFDLFdBQVcsRUFBRTs7Ozs7bUNBQUcsRUFBRTs7Ozs7bUNBQ0osYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O0FBQTdDLG9CQUFRO0FBQUUsbUJBQU87OzZDQUNoQixvQ0FBZSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQzs7Ozs7Ozs7NkNBRXpELG9DQUFlLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDOzs7OzZDQUc3RCxNQUFNLENBQUMsSUFBSSxFQUFFOzs7Ozs7O0tBRXRCLENBQUMsQ0FBQzs7QUFFSCxNQUFFLENBQUMsd0RBQXdELEVBQUU7VUFHdkQsT0FBTzs7Ozs7NkNBRkksdURBQXlCOzs7QUFBeEMsa0JBQU07OzZDQUVjLE1BQU0sQ0FBQyxhQUFhLEVBQUU7OztBQUF0QyxtQkFBTzs7QUFDWCxtQkFBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Ozs7Ozs7S0FDakUsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLDZEQUE2RCxFQUFFO1VBUzVELE9BQU87Ozs7QUFSWCxnQkFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFO0FBQ3BDLGtCQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjs7NkNBQ2MsZ0NBQVcsb0JBQUUsUUFBUSxDQUFDO0FBQ25DLHNCQUFRLEVBQUUsSUFBSTtBQUNkLG9CQUFNLEVBQUUsSUFBSTthQUNiLHlCQUFnQixDQUFDOzs7QUFIbEIsa0JBQU07OzZDQUtjLE1BQU0sQ0FBQyxhQUFhLEVBQUU7OztBQUF0QyxtQkFBTzs7QUFDWCxtQkFBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7Ozs7Ozs7S0FDbkUsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9zdHJpbmdzLWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XHJcbmltcG9ydCB7IEFQSURFTU9TX0NBUFMgfSBmcm9tICcuLi9kZXNpcmVkJztcclxuaW1wb3J0IEFEQiBmcm9tICdhcHBpdW0tYWRiJztcclxuaW1wb3J0IHsgaW5pdERyaXZlciB9IGZyb20gJy4uL2hlbHBlcnMvc2Vzc2lvbic7XHJcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGFuZHJvaWRIZWxwZXJzIH0gZnJvbSAnYXBwaXVtLWFuZHJvaWQtZHJpdmVyJztcclxuXHJcblxyXG5jaGFpLnNob3VsZCgpO1xyXG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XHJcblxyXG5kZXNjcmliZSgnc3RyaW5ncycsIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgZHJpdmVyO1xyXG5cclxuICBkZXNjcmliZSgnc3BlY2lmaWMgbGFuZ3VhZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBEb24ndCBydW4gdGhlc2UgdGVzdHMgb24gVGVzdE9iamVjdC4gT24gVE8sIHdlIGRvbid0IGhhdmUgYWNjZXNzIHRvIHRoZSAuYXBrXHJcbiAgICAgIC8vIHdoaWNoIGlzIG5lY2Vzc2FyeSBmb3IgZXh0cmFjdGluZyB0aGUgYXBwIHN0cmluZ3NcclxuICAgICAgaWYgKHByb2Nlc3MuZW52LlRFU1RPQkpFQ1RfRTJFX1RFU1RTKSB7XHJcbiAgICAgICAgdGhpcy5za2lwKCk7XHJcbiAgICAgIH1cclxuICAgICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihBUElERU1PU19DQVBTKTtcclxuICAgIH0pO1xyXG4gICAgYWZ0ZXIoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoIXByb2Nlc3MuZW52LlRFU1RPQkpFQ1RfRTJFX1RFU1RTKSB7XHJcbiAgICAgICAgYXdhaXQgZHJpdmVyLnF1aXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYXBwIHN0cmluZ3MnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBzdHJpbmdzID0gYXdhaXQgZHJpdmVyLmdldEFwcFN0cmluZ3MoJ2VuJyk7XHJcbiAgICAgIHN0cmluZ3MuaGVsbG9fd29ybGQuc2hvdWxkLmVxdWFsKCc8Yj5IZWxsbywgPGk+V29ybGQhPC9pPjwvYj4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGFwcCBzdHJpbmdzIGZvciBkaWZmZXJlbnQgbGFuZ3VhZ2UnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBzdHJpbmdzID0gYXdhaXQgZHJpdmVyLmdldEFwcFN0cmluZ3MoJ2ZyJyk7XHJcbiAgICAgIHN0cmluZ3MuaGVsbG9fd29ybGQuc2hvdWxkLmVxdWFsKCc8Yj5Cb25qb3VyLCA8aT5Nb25kZSE8L2k+PC9iPicpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRlc2NyaWJlKCdkZXZpY2UgbGFuZ3VhZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaW5pdGlhbExvY2FsZTtcclxuICAgIGxldCBhZGI7XHJcbiAgICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBEb24ndCB0ZXN0IEFEQiBvbiB0ZXN0IG9iamVjdFxyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVEVTVE9CSkVDVF9FMkVfVEVTVFMpIHtcclxuICAgICAgICB0aGlzLnNraXAoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXN0YXJ0aW5nIGRvZXNuJ3Qgd29yayBvbiBBbmRyb2lkIDcrXHJcbiAgICAgIGFkYiA9IG5ldyBBREIoKTtcclxuICAgICAgaW5pdGlhbExvY2FsZSA9IGF3YWl0IGdldExvY2FsZShhZGIpO1xyXG4gICAgfSk7XHJcbiAgICBhZnRlckVhY2goYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoZHJpdmVyKSB7XHJcbiAgICAgICAgaWYgKGF3YWl0IGFkYi5nZXRBcGlMZXZlbCgpID4gMjMpIHtcclxuICAgICAgICAgIGxldCBbbGFuZ3VhZ2UsIGNvdW50cnldID0gaW5pdGlhbExvY2FsZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgICBhd2FpdCBhbmRyb2lkSGVscGVycy5lbnN1cmVEZXZpY2VMb2NhbGUoYWRiLCBsYW5ndWFnZSwgY291bnRyeSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGF3YWl0IGFuZHJvaWRIZWxwZXJzLmVuc3VyZURldmljZUxvY2FsZShhZGIsIG51bGwsIGluaXRpYWxMb2NhbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgZHJpdmVyLnF1aXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYXBwIHN0cmluZ3Mgd2l0aCBkZWZhdWx0IGxvY2FsZS9sYW5ndWFnZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihBUElERU1PU19DQVBTKTtcclxuXHJcbiAgICAgIGxldCBzdHJpbmdzID0gYXdhaXQgZHJpdmVyLmdldEFwcFN0cmluZ3MoKTtcclxuICAgICAgc3RyaW5ncy5oZWxsb193b3JsZC5zaG91bGQuZXF1YWwoJzxiPkhlbGxvLCA8aT5Xb3JsZCE8L2k+PC9iPicpO1xyXG4gICAgfSk7XHJcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhcHAgc3RyaW5ncyB3aGVuIGxhbmd1YWdlL2xvY2FsZSBzZXQgQHNraXAtY2knLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5URVNUT0JKRUNUX0UyRV9URVNUUykge1xyXG4gICAgICAgIHRoaXMuc2tpcCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGRyaXZlciA9IGF3YWl0IGluaXREcml2ZXIoXy5kZWZhdWx0cyh7XHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdmcicsXHJcbiAgICAgICAgbG9jYWxlOiAnQ0EnLFxyXG4gICAgICB9LCBBUElERU1PU19DQVBTKSk7XHJcblxyXG4gICAgICBsZXQgc3RyaW5ncyA9IGF3YWl0IGRyaXZlci5nZXRBcHBTdHJpbmdzKCk7XHJcbiAgICAgIHN0cmluZ3MuaGVsbG9fd29ybGQuc2hvdWxkLmVxdWFsKCc8Yj5Cb25qb3VyLCA8aT5Nb25kZSE8L2k+PC9iPicpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uIn0=
