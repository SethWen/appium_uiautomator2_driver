/**
 * This script needs to be run before other e2e mocha scripts
 *
 * This script starts the server or if it's TestObject, runs the tests on TO server
 */
'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _appiumTestSupport = require('appium-test-support');

var _wd = require('wd');

var _wd2 = _interopRequireDefault(_wd);

var _ = require('../../..');

var _libLogger = require('../../../lib/logger');

var _libLogger2 = _interopRequireDefault(_libLogger);

if (process.env.TESTOBJECT_E2E_TESTS) {
  (function () {
    _libLogger2['default'].debug('Running tests on TestObject');

    var wdObject = undefined;
    before(function callee$1$0() {
      var commit;
      return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            commit = process.env.COMMIT_HASH || process.env.APPVEYOR_REPO_COMMIT || process.env.TRAVIS_COMMIT;

            if (commit) {
              context$2$0.next = 3;
              break;
            }

            throw new Error('A commit must be provided in $COMMIT_HASH');

          case 3:
            context$2$0.next = 5;
            return _regeneratorRuntime.awrap((0, _appiumTestSupport.enableTestObject)(_wd2['default'], 'appium-uiautomator2-driver', 'https://github.com/appium/appium-uiautomator2-driver.git', commit));

          case 5:
            wdObject = context$2$0.sent;

            // Don't proceed with tests on first build (AppVeyor only runs for 1 hour).
            // The first build is solely for installing, zipping and uploading Appium to S3
            if (process.env.FIRST_BUILD) {
              process.exit();
            }

          case 7:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });
    after(function callee$1$0() {
      return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap((0, _appiumTestSupport.disableTestObject)(wdObject));

          case 2:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });
  })();
} else {
  before(function callee$0$0() {
    return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.next = 2;
          return _regeneratorRuntime.awrap((0, _.startServer)(_.DEFAULT_PORT, 'localhost'));

        case 2:
        case 'end':
          return context$1$0.stop();
      }
    }, null, this);
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9oZWxwZXJzL21vY2hhLXNjcmlwdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7aUNBS29ELHFCQUFxQjs7a0JBQzFELElBQUk7Ozs7Z0JBQ3VCLFVBQVU7O3lCQUNqQyxxQkFBcUI7Ozs7QUFFeEMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFOztBQUNwQywyQkFBTyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQzs7QUFFNUMsUUFBSSxRQUFRLFlBQUEsQ0FBQztBQUNiLFVBQU0sQ0FBQztVQUNDLE1BQU07Ozs7QUFBTixrQkFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhOztnQkFDbEcsTUFBTTs7Ozs7a0JBQ0gsSUFBSSxLQUFLLDZDQUE2Qzs7Ozs2Q0FFN0MsMERBQXFCLDRCQUE0Qiw4REFBOEQsTUFBTSxDQUFDOzs7QUFBdkksb0JBQVE7Ozs7QUFJUixnQkFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtBQUMzQixxQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2hCOzs7Ozs7O0tBQ0YsQ0FBQyxDQUFDO0FBQ0gsU0FBSyxDQUFDOzs7Ozs2Q0FDRSwwQ0FBa0IsUUFBUSxDQUFDOzs7Ozs7O0tBQ2xDLENBQUMsQ0FBQzs7Q0FFSixNQUFNO0FBQ0wsUUFBTSxDQUFDOzs7OzsyQ0FDQyxtQ0FBMEIsV0FBVyxDQUFDOzs7Ozs7O0dBQzdDLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9oZWxwZXJzL21vY2hhLXNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBzY3JpcHQgbmVlZHMgdG8gYmUgcnVuIGJlZm9yZSBvdGhlciBlMmUgbW9jaGEgc2NyaXB0c1xyXG4gKlxyXG4gKiBUaGlzIHNjcmlwdCBzdGFydHMgdGhlIHNlcnZlciBvciBpZiBpdCdzIFRlc3RPYmplY3QsIHJ1bnMgdGhlIHRlc3RzIG9uIFRPIHNlcnZlclxyXG4gKi9cclxuaW1wb3J0IHsgZW5hYmxlVGVzdE9iamVjdCwgZGlzYWJsZVRlc3RPYmplY3QgfSBmcm9tICdhcHBpdW0tdGVzdC1zdXBwb3J0JztcclxuaW1wb3J0IHdkIGZyb20gJ3dkJztcclxuaW1wb3J0IHsgc3RhcnRTZXJ2ZXIsIERFRkFVTFRfUE9SVCB9IGZyb20gJy4uLy4uLy4uJztcclxuaW1wb3J0IGxvZ2dlciBmcm9tICcuLi8uLi8uLi9saWIvbG9nZ2VyJztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5URVNUT0JKRUNUX0UyRV9URVNUUykge1xyXG4gIGxvZ2dlci5kZWJ1ZygnUnVubmluZyB0ZXN0cyBvbiBUZXN0T2JqZWN0Jyk7XHJcblxyXG4gIGxldCB3ZE9iamVjdDtcclxuICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY29tbWl0ID0gcHJvY2Vzcy5lbnYuQ09NTUlUX0hBU0ggfHwgcHJvY2Vzcy5lbnYuQVBQVkVZT1JfUkVQT19DT01NSVQgfHwgcHJvY2Vzcy5lbnYuVFJBVklTX0NPTU1JVDtcclxuICAgIGlmICghY29tbWl0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQSBjb21taXQgbXVzdCBiZSBwcm92aWRlZCBpbiAkQ09NTUlUX0hBU0hgKTtcclxuICAgIH1cclxuICAgIHdkT2JqZWN0ID0gYXdhaXQgZW5hYmxlVGVzdE9iamVjdCh3ZCwgJ2FwcGl1bS11aWF1dG9tYXRvcjItZHJpdmVyJywgYGh0dHBzOi8vZ2l0aHViLmNvbS9hcHBpdW0vYXBwaXVtLXVpYXV0b21hdG9yMi1kcml2ZXIuZ2l0YCwgY29tbWl0KTtcclxuXHJcbiAgICAvLyBEb24ndCBwcm9jZWVkIHdpdGggdGVzdHMgb24gZmlyc3QgYnVpbGQgKEFwcFZleW9yIG9ubHkgcnVucyBmb3IgMSBob3VyKS5cclxuICAgIC8vIFRoZSBmaXJzdCBidWlsZCBpcyBzb2xlbHkgZm9yIGluc3RhbGxpbmcsIHppcHBpbmcgYW5kIHVwbG9hZGluZyBBcHBpdW0gdG8gUzNcclxuICAgIGlmIChwcm9jZXNzLmVudi5GSVJTVF9CVUlMRCkge1xyXG4gICAgICBwcm9jZXNzLmV4aXQoKTtcclxuICAgIH1cclxuICB9KTtcclxuICBhZnRlcihhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBhd2FpdCBkaXNhYmxlVGVzdE9iamVjdCh3ZE9iamVjdCk7XHJcbiAgfSk7XHJcblxyXG59IGVsc2Uge1xyXG4gIGJlZm9yZShhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBhd2FpdCBzdGFydFNlcnZlcihERUZBVUxUX1BPUlQsICdsb2NhbGhvc3QnKTtcclxuICB9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uIn0=
