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

var unicodeImeId = 'io.appium.android.ime/.UnicodeIME';

describe('apidemo - IME', function () {
  var _this = this;

  var driver = undefined;
  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_Object$assign({}, _desired.APIDEMOS_CAPS, { unicodeKeyboard: true, resetKeyboard: true })));

        case 2:
          driver = context$2$0.sent;

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  beforeEach(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.startActivity({ appPackage: 'io.appium.android.apis', appActivity: 'io.appium.android.apis.ApiDemos' }));

        case 2:
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
  it('should get the default (enabled) input method', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.activeIMEEngine().should.eventually.equal(unicodeImeId));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should activate an installed input method', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.activateIMEEngine(unicodeImeId).should.not.be.rejected);

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should fail to activate an uninstalled input method', function callee$1$0() {
    var invalidImeId;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          invalidImeId = 'sdf.wer.gdasdfsf/.OsdfEfgd';
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.activateIMEEngine(invalidImeId).should.eventually.be.rejectedWith(/not available/));

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should deactivate the current input method', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.activateIMEEngine(unicodeImeId));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.activeIMEEngine().should.eventually.equal(unicodeImeId));

        case 4:
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.deactivateIMEEngine());

        case 6:
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(driver.activeIMEEngine().should.eventually.not.equal(unicodeImeId));

        case 8:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9pbWUtZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7Ozt1QkFDZixZQUFZOzs4QkFDZixvQkFBb0I7O0FBRy9DLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsSUFBTSxZQUFZLEdBQUcsbUNBQW1DLENBQUM7O0FBRXpELFFBQVEsQ0FBQyxlQUFlLEVBQUUsWUFBWTs7O0FBQ3BDLE1BQUksTUFBTSxZQUFBLENBQUM7QUFDWCxRQUFNLENBQUM7Ozs7OzJDQUNVLGdDQUFXLGVBQWMsRUFBRSwwQkFBaUIsRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDOzs7QUFBekcsZ0JBQU07Ozs7Ozs7R0FDUCxDQUFDLENBQUM7QUFDSCxZQUFVLENBQUM7Ozs7OzJDQUNILE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxVQUFVLEVBQUUsd0JBQXdCLEVBQUUsV0FBVyxFQUFFLGlDQUFpQyxFQUFDLENBQUM7Ozs7Ozs7R0FDbkgsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsSUFBSSxFQUFFOzs7Ozs7O0dBQ3BCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQywrQ0FBK0MsRUFBRTs7Ozs7MkNBQzVDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7R0FDckUsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLDJDQUEyQyxFQUFFOzs7OzsyQ0FDeEMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7Ozs7R0FDcEUsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLHFEQUFxRCxFQUFFO1FBQ3BELFlBQVk7Ozs7QUFBWixzQkFBWSxHQUFHLDRCQUE0Qjs7MkNBQ3pDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDOzs7Ozs7O0dBQ2hHLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyw0Q0FBNEMsRUFBRTs7Ozs7MkNBQ3pDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUM7Ozs7MkNBQ3RDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Ozs7MkNBQzlELE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTs7OzsyQ0FDNUIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7R0FDekUsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9pbWUtZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XHJcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcclxuaW1wb3J0IHsgQVBJREVNT1NfQ0FQUyB9IGZyb20gJy4uL2Rlc2lyZWQnO1xyXG5pbXBvcnQgeyBpbml0RHJpdmVyIH0gZnJvbSAnLi4vaGVscGVycy9zZXNzaW9uJztcclxuXHJcblxyXG5jaGFpLnNob3VsZCgpO1xyXG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XHJcblxyXG5jb25zdCB1bmljb2RlSW1lSWQgPSAnaW8uYXBwaXVtLmFuZHJvaWQuaW1lLy5Vbmljb2RlSU1FJztcclxuXHJcbmRlc2NyaWJlKCdhcGlkZW1vIC0gSU1FJywgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBkcml2ZXI7XHJcbiAgYmVmb3JlKGFzeW5jICgpID0+IHtcclxuICAgIGRyaXZlciA9IGF3YWl0IGluaXREcml2ZXIoT2JqZWN0LmFzc2lnbih7fSwgQVBJREVNT1NfQ0FQUywge3VuaWNvZGVLZXlib2FyZDogdHJ1ZSwgcmVzZXRLZXlib2FyZDogdHJ1ZX0pKTtcclxuICB9KTtcclxuICBiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRyaXZlci5zdGFydEFjdGl2aXR5KHthcHBQYWNrYWdlOiAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycsIGFwcEFjdGl2aXR5OiAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcy5BcGlEZW1vcyd9KTtcclxuICB9KTtcclxuICBhZnRlcihhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZ2V0IHRoZSBkZWZhdWx0IChlbmFibGVkKSBpbnB1dCBtZXRob2QnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIuYWN0aXZlSU1FRW5naW5lKCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwodW5pY29kZUltZUlkKTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGFjdGl2YXRlIGFuIGluc3RhbGxlZCBpbnB1dCBtZXRob2QnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIuYWN0aXZhdGVJTUVFbmdpbmUodW5pY29kZUltZUlkKS5zaG91bGQubm90LmJlLnJlamVjdGVkO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZmFpbCB0byBhY3RpdmF0ZSBhbiB1bmluc3RhbGxlZCBpbnB1dCBtZXRob2QnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgaW52YWxpZEltZUlkID0gJ3NkZi53ZXIuZ2Rhc2Rmc2YvLk9zZGZFZmdkJztcclxuICAgIGF3YWl0IGRyaXZlci5hY3RpdmF0ZUlNRUVuZ2luZShpbnZhbGlkSW1lSWQpLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkV2l0aCgvbm90IGF2YWlsYWJsZS8pO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZGVhY3RpdmF0ZSB0aGUgY3VycmVudCBpbnB1dCBtZXRob2QnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIuYWN0aXZhdGVJTUVFbmdpbmUodW5pY29kZUltZUlkKTtcclxuICAgIGF3YWl0IGRyaXZlci5hY3RpdmVJTUVFbmdpbmUoKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCh1bmljb2RlSW1lSWQpO1xyXG4gICAgYXdhaXQgZHJpdmVyLmRlYWN0aXZhdGVJTUVFbmdpbmUoKTtcclxuICAgIGF3YWl0IGRyaXZlci5hY3RpdmVJTUVFbmdpbmUoKS5zaG91bGQuZXZlbnR1YWxseS5ub3QuZXF1YWwodW5pY29kZUltZUlkKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi4ifQ==
