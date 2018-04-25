'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _desired = require('../../desired');

var _helpersSession = require('../../helpers/session');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('Find - accessibility ID', function () {
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
  it('should find an element by name', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByAccessibilityId('Animation').should.eventually.exist);

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should return an array of one element if the `multi` param is true', function callee$1$0() {
    var els;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementsByAccessibilityId('Animation'));

        case 2:
          els = context$2$0.sent;

          els.should.be.an['instanceof'](Array);
          els.should.have.length(1);

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find an element with a content-desc property containing an apostrophe', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByAccessibilityId("Access'ibility").should.eventually.exist);

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9maW5kL2J5LWFjY2Vzc2liaWxpdHktaWQtZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7dUJBQ2YsZUFBZTs7OEJBQ2xCLHVCQUF1Qjs7QUFHbEQsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMseUJBQXlCLEVBQUUsWUFBWTs7O0FBQzlDLE1BQUksTUFBTSxZQUFBLENBQUM7QUFDWCxRQUFNLENBQUM7Ozs7OzJDQUNVLHVEQUF5Qjs7O0FBQXhDLGdCQUFNOzs7Ozs7O0dBQ1AsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsSUFBSSxFQUFFOzs7Ozs7O0dBQ3BCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxnQ0FBZ0MsRUFBRTs7Ozs7MkNBQzdCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUs7Ozs7Ozs7R0FDM0UsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLG9FQUFvRSxFQUFFO1FBQ25FLEdBQUc7Ozs7OzJDQUFTLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUM7OztBQUF6RCxhQUFHOztBQUNQLGFBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsY0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLGFBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztHQUMzQixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsOEVBQThFLEVBQUU7Ozs7OzJDQUMzRSxNQUFNLENBQUMsd0JBQXdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUs7Ozs7Ozs7R0FDaEYsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9maW5kL2J5LWFjY2Vzc2liaWxpdHktaWQtZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XHJcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcclxuaW1wb3J0IHsgQVBJREVNT1NfQ0FQUyB9IGZyb20gJy4uLy4uL2Rlc2lyZWQnO1xyXG5pbXBvcnQgeyBpbml0RHJpdmVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zZXNzaW9uJztcclxuXHJcblxyXG5jaGFpLnNob3VsZCgpO1xyXG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XHJcblxyXG5kZXNjcmliZSgnRmluZCAtIGFjY2Vzc2liaWxpdHkgSUQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGRyaXZlcjtcclxuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xyXG4gICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihBUElERU1PU19DQVBTKTtcclxuICB9KTtcclxuICBhZnRlcihhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZmluZCBhbiBlbGVtZW50IGJ5IG5hbWUnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIuZWxlbWVudEJ5QWNjZXNzaWJpbGl0eUlkKCdBbmltYXRpb24nKS5zaG91bGQuZXZlbnR1YWxseS5leGlzdDtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIHJldHVybiBhbiBhcnJheSBvZiBvbmUgZWxlbWVudCBpZiB0aGUgYG11bHRpYCBwYXJhbSBpcyB0cnVlJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGVscyA9IGF3YWl0IGRyaXZlci5lbGVtZW50c0J5QWNjZXNzaWJpbGl0eUlkKCdBbmltYXRpb24nKTtcclxuICAgIGVscy5zaG91bGQuYmUuYW4uaW5zdGFuY2VvZihBcnJheSk7XHJcbiAgICBlbHMuc2hvdWxkLmhhdmUubGVuZ3RoKDEpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZmluZCBhbiBlbGVtZW50IHdpdGggYSBjb250ZW50LWRlc2MgcHJvcGVydHkgY29udGFpbmluZyBhbiBhcG9zdHJvcGhlJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZHJpdmVyLmVsZW1lbnRCeUFjY2Vzc2liaWxpdHlJZChcIkFjY2VzcydpYmlsaXR5XCIpLnNob3VsZC5ldmVudHVhbGx5LmV4aXN0O1xyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi4ifQ==
