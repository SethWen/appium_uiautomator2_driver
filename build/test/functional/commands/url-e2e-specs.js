'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

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

var driver = undefined;
var caps = _Object$assign({}, _desired.BROWSER_CAPS);

describe('setUrl @skip-ci', function () {
  var _this = this;

  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          if (process.env.TESTOBJECT_E2E_TESTS) {
            this.skip();
          }
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps));

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

  it('should be able to start a data uri via setUrl', function callee$1$0() {
    var btn, el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          if (!(caps.browserName === 'Chrome')) {
            context$2$0.next = 16;
            break;
          }

          context$2$0.prev = 1;
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.elementById('com.android.chrome:id/terms_accept'));

        case 4:
          btn = context$2$0.sent;
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(btn.click());

        case 7:
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap(driver.elementById('com.android.chrome:id/negative_button'));

        case 9:
          btn = context$2$0.sent;
          context$2$0.next = 12;
          return _regeneratorRuntime.awrap(btn.click());

        case 12:
          context$2$0.next = 16;
          break;

        case 14:
          context$2$0.prev = 14;
          context$2$0.t0 = context$2$0['catch'](1);

        case 16:
          context$2$0.next = 18;
          return _regeneratorRuntime.awrap(driver.get('http://saucelabs.com'));

        case 18:
          context$2$0.next = 20;
          return _regeneratorRuntime.awrap(driver.waitForElementByTagName("title"));

        case 20:
          context$2$0.next = 22;
          return _regeneratorRuntime.awrap(driver.elementByTagName("title"));

        case 22:
          el = context$2$0.sent;
          context$2$0.next = 25;
          return _regeneratorRuntime.awrap(el.getAttribute("innerHTML").should.eventually.include('Sauce Labs'));

        case 25:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this, [[1, 14]]);
  });
});

// on some chrome systems, we always get the terms and conditions page
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy91cmwtZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7Ozt1QkFDaEIsWUFBWTs7OEJBQ2Qsb0JBQW9COztBQUUvQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLElBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxJQUFJLElBQUksR0FBRyxlQUFjLEVBQUUsd0JBQWUsQ0FBQzs7QUFFM0MsUUFBUSxDQUFDLGlCQUFpQixFQUFFLFlBQVk7OztBQUN0QyxRQUFNLENBQUM7Ozs7QUFDTCxjQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUU7QUFDcEMsZ0JBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztXQUNiOzsyQ0FDYyxnQ0FBVyxJQUFJLENBQUM7OztBQUEvQixnQkFBTTs7Ozs7OztHQUNQLENBQUMsQ0FBQztBQUNILE9BQUssQ0FBQzs7OztlQUNBLE1BQU07Ozs7OzsyQ0FDRixNQUFNLENBQUMsSUFBSSxFQUFFOzs7Ozs7O0dBRXRCLENBQUMsQ0FBQzs7QUFFSCxJQUFFLENBQUMsK0NBQStDLEVBQUU7UUFJMUMsR0FBRyxFQVdQLEVBQUU7Ozs7Z0JBZEYsSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUE7Ozs7Ozs7MkNBR2IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxvQ0FBb0MsQ0FBQzs7O0FBQXBFLGFBQUc7OzJDQUNELEdBQUcsQ0FBQyxLQUFLLEVBQUU7Ozs7MkNBRUwsTUFBTSxDQUFDLFdBQVcsQ0FBQyx1Q0FBdUMsQ0FBQzs7O0FBQXZFLGFBQUc7OzJDQUNHLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Ozs7Ozs7Ozs7OzsyQ0FJZixNQUFNLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDOzs7OzJDQUVsQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDOzs7OzJDQUM5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDOzs7QUFBM0MsWUFBRTs7MkNBQ0EsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7R0FDM0UsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy91cmwtZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XHJcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcclxuaW1wb3J0IHsgQlJPV1NFUl9DQVBTIH0gZnJvbSAnLi4vZGVzaXJlZCc7XHJcbmltcG9ydCB7IGluaXREcml2ZXIgfSBmcm9tICcuLi9oZWxwZXJzL3Nlc3Npb24nO1xyXG5cclxuY2hhaS5zaG91bGQoKTtcclxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xyXG5cclxubGV0IGRyaXZlcjtcclxubGV0IGNhcHMgPSBPYmplY3QuYXNzaWduKHt9LCBCUk9XU0VSX0NBUFMpO1xyXG5cclxuZGVzY3JpYmUoJ3NldFVybCBAc2tpcC1jaScsIGZ1bmN0aW9uICgpIHtcclxuICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52LlRFU1RPQkpFQ1RfRTJFX1RFU1RTKSB7XHJcbiAgICAgIHRoaXMuc2tpcCgpO1xyXG4gICAgfVxyXG4gICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihjYXBzKTtcclxuICB9KTtcclxuICBhZnRlcihhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoZHJpdmVyKSB7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5xdWl0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBzdGFydCBhIGRhdGEgdXJpIHZpYSBzZXRVcmwnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoY2Fwcy5icm93c2VyTmFtZSA9PT0gJ0Nocm9tZScpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBvbiBzb21lIGNocm9tZSBzeXN0ZW1zLCB3ZSBhbHdheXMgZ2V0IHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBwYWdlXHJcbiAgICAgICAgbGV0IGJ0biA9IGF3YWl0IGRyaXZlci5lbGVtZW50QnlJZCgnY29tLmFuZHJvaWQuY2hyb21lOmlkL3Rlcm1zX2FjY2VwdCcpO1xyXG4gICAgICAgIGF3YWl0IGJ0bi5jbGljaygpO1xyXG5cclxuICAgICAgICBidG4gPSBhd2FpdCBkcml2ZXIuZWxlbWVudEJ5SWQoJ2NvbS5hbmRyb2lkLmNocm9tZTppZC9uZWdhdGl2ZV9idXR0b24nKTtcclxuICAgICAgICBhd2FpdCBidG4uY2xpY2soKTtcclxuICAgICAgfSBjYXRjaCAoaWduKSB7fVxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGRyaXZlci5nZXQoJ2h0dHA6Ly9zYXVjZWxhYnMuY29tJyk7XHJcblxyXG4gICAgYXdhaXQgZHJpdmVyLndhaXRGb3JFbGVtZW50QnlUYWdOYW1lKFwidGl0bGVcIik7XHJcbiAgICBsZXQgZWwgPSBhd2FpdCBkcml2ZXIuZWxlbWVudEJ5VGFnTmFtZShcInRpdGxlXCIpO1xyXG4gICAgYXdhaXQgZWwuZ2V0QXR0cmlidXRlKFwiaW5uZXJIVE1MXCIpLnNob3VsZC5ldmVudHVhbGx5LmluY2x1ZGUoJ1NhdWNlIExhYnMnKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi4ifQ==
