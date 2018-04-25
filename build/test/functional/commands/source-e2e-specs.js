'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _this = this;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _xmldom = require('xmldom');

var _xpath = require('xpath');

var _xpath2 = _interopRequireDefault(_xpath);

var _desired = require('../desired');

var _helpersSession = require('../helpers/session');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var assertSource = function assertSource(source) {
  var dom, nodes;
  return _regeneratorRuntime.async(function assertSource$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        source.should.exist;
        dom = new _xmldom.DOMParser().parseFromString(source);
        nodes = _xpath2['default'].select('//hierarchy', dom);

        nodes.length.should.equal(1);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this);
};

describe('apidemo - source', function () {
  var _this2 = this;

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
    }, null, _this2);
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
    }, null, _this2);
  });
  it('should return the page source', function callee$1$0() {
    var source;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.source());

        case 2:
          source = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(assertSource(source));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this2);
  });
  it('should get less source when compression is enabled', function callee$1$0() {
    var getSourceWithoutCompression, getSourceWithCompression, sourceWithoutCompression, sourceWithCompression;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      var _this3 = this;

      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          getSourceWithoutCompression = function getSourceWithoutCompression() {
            return _regeneratorRuntime.async(function getSourceWithoutCompression$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  context$3$0.next = 2;
                  return _regeneratorRuntime.awrap(driver.updateSettings({ 'ignoreUnimportantViews': false }));

                case 2:
                  context$3$0.next = 4;
                  return _regeneratorRuntime.awrap(driver.source());

                case 4:
                  return context$3$0.abrupt('return', context$3$0.sent);

                case 5:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this3);
          };

          getSourceWithCompression = function getSourceWithCompression() {
            return _regeneratorRuntime.async(function getSourceWithCompression$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  context$3$0.next = 2;
                  return _regeneratorRuntime.awrap(driver.updateSettings({ "ignoreUnimportantViews": true }));

                case 2:
                  context$3$0.next = 4;
                  return _regeneratorRuntime.awrap(driver.source());

                case 4:
                  return context$3$0.abrupt('return', context$3$0.sent);

                case 5:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this3);
          };

          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(getSourceWithoutCompression());

        case 4:
          sourceWithoutCompression = context$2$0.sent;
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(getSourceWithCompression());

        case 7:
          sourceWithCompression = context$2$0.sent;

          sourceWithoutCompression.length.should.be.greaterThan(sourceWithCompression.length);
          context$2$0.next = 11;
          return _regeneratorRuntime.awrap(getSourceWithoutCompression().should.eventually.eql(sourceWithoutCompression));

        case 11:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this2);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9zb3VyY2UtZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztzQkFDbkIsUUFBUTs7cUJBQ2hCLE9BQU87Ozs7dUJBQ0ssWUFBWTs7OEJBQ2Ysb0JBQW9COztBQUcvQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLElBQUksWUFBWSxHQUFHLFNBQWYsWUFBWSxDQUFVLE1BQU07TUFFMUIsR0FBRyxFQUNILEtBQUs7Ozs7QUFGVCxjQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNoQixXQUFHLEdBQUcsdUJBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO0FBQzdDLGFBQUssR0FBRyxtQkFBTSxNQUFNLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQzs7QUFDNUMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0NBQzlCLENBQUM7O0FBRUYsUUFBUSxDQUFDLGtCQUFrQixFQUFFLFlBQVk7OztBQUN2QyxNQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsUUFBTSxDQUFDOzs7OzsyQ0FDVSx1REFBeUI7OztBQUF4QyxnQkFBTTs7Ozs7OztHQUNQLENBQUMsQ0FBQztBQUNILE9BQUssQ0FBQzs7Ozs7MkNBQ0UsTUFBTSxDQUFDLElBQUksRUFBRTs7Ozs7OztHQUNwQixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsK0JBQStCLEVBQUU7UUFDOUIsTUFBTTs7Ozs7MkNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRTs7O0FBQTlCLGdCQUFNOzsyQ0FDSixZQUFZLENBQUMsTUFBTSxDQUFDOzs7Ozs7O0dBQzNCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxvREFBb0QsRUFBRTtRQUNuRCwyQkFBMkIsRUFJM0Isd0JBQXdCLEVBSXhCLHdCQUF3QixFQUN4QixxQkFBcUI7Ozs7OztBQVRyQixxQ0FBMkIsR0FBRyxTQUE5QiwyQkFBMkI7Ozs7O21EQUN2QixNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUMsd0JBQXdCLEVBQUUsS0FBSyxFQUFDLENBQUM7Ozs7bURBQ2pELE1BQU0sQ0FBQyxNQUFNLEVBQUU7Ozs7Ozs7Ozs7V0FDN0I7O0FBQ0csa0NBQXdCLEdBQUcsU0FBM0Isd0JBQXdCOzs7OzttREFDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFDLHdCQUF3QixFQUFFLElBQUksRUFBQyxDQUFDOzs7O21EQUNoRCxNQUFNLENBQUMsTUFBTSxFQUFFOzs7Ozs7Ozs7O1dBQzdCOzs7MkNBQ29DLDJCQUEyQixFQUFFOzs7QUFBOUQsa0NBQXdCOzsyQ0FDTSx3QkFBd0IsRUFBRTs7O0FBQXhELCtCQUFxQjs7QUFDekIsa0NBQXdCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDOzsyQ0FDOUUsMkJBQTJCLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQzs7Ozs7OztHQUNwRixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC9mdW5jdGlvbmFsL2NvbW1hbmRzL3NvdXJjZS1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcclxuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xyXG5pbXBvcnQgeyBET01QYXJzZXIgfSBmcm9tICd4bWxkb20nO1xyXG5pbXBvcnQgeHBhdGggZnJvbSAneHBhdGgnO1xyXG5pbXBvcnQgeyBBUElERU1PU19DQVBTIH0gZnJvbSAnLi4vZGVzaXJlZCc7XHJcbmltcG9ydCB7IGluaXREcml2ZXIgfSBmcm9tICcuLi9oZWxwZXJzL3Nlc3Npb24nO1xyXG5cclxuXHJcbmNoYWkuc2hvdWxkKCk7XHJcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcclxuXHJcbmxldCBhc3NlcnRTb3VyY2UgPSBhc3luYyAoc291cmNlKSA9PiB7XHJcbiAgc291cmNlLnNob3VsZC5leGlzdDtcclxuICBsZXQgZG9tID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzb3VyY2UpO1xyXG4gIGxldCBub2RlcyA9IHhwYXRoLnNlbGVjdCgnLy9oaWVyYXJjaHknLCBkb20pO1xyXG4gIG5vZGVzLmxlbmd0aC5zaG91bGQuZXF1YWwoMSk7XHJcbn07XHJcblxyXG5kZXNjcmliZSgnYXBpZGVtbyAtIHNvdXJjZScsIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgZHJpdmVyO1xyXG4gIGJlZm9yZShhc3luYyAoKSA9PiB7XHJcbiAgICBkcml2ZXIgPSBhd2FpdCBpbml0RHJpdmVyKEFQSURFTU9TX0NBUFMpO1xyXG4gIH0pO1xyXG4gIGFmdGVyKGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRyaXZlci5xdWl0KCk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCByZXR1cm4gdGhlIHBhZ2Ugc291cmNlJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHNvdXJjZSA9IGF3YWl0IGRyaXZlci5zb3VyY2UoKTtcclxuICAgIGF3YWl0IGFzc2VydFNvdXJjZShzb3VyY2UpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZ2V0IGxlc3Mgc291cmNlIHdoZW4gY29tcHJlc3Npb24gaXMgZW5hYmxlZCcsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBnZXRTb3VyY2VXaXRob3V0Q29tcHJlc3Npb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGRyaXZlci51cGRhdGVTZXR0aW5ncyh7J2lnbm9yZVVuaW1wb3J0YW50Vmlld3MnOiBmYWxzZX0pO1xyXG4gICAgICByZXR1cm4gYXdhaXQgZHJpdmVyLnNvdXJjZSgpO1xyXG4gICAgfTtcclxuICAgIGxldCBnZXRTb3VyY2VXaXRoQ29tcHJlc3Npb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGRyaXZlci51cGRhdGVTZXR0aW5ncyh7XCJpZ25vcmVVbmltcG9ydGFudFZpZXdzXCI6IHRydWV9KTtcclxuICAgICAgcmV0dXJuIGF3YWl0IGRyaXZlci5zb3VyY2UoKTtcclxuICAgIH07XHJcbiAgICBsZXQgc291cmNlV2l0aG91dENvbXByZXNzaW9uID0gYXdhaXQgZ2V0U291cmNlV2l0aG91dENvbXByZXNzaW9uKCk7XHJcbiAgICBsZXQgc291cmNlV2l0aENvbXByZXNzaW9uID0gYXdhaXQgZ2V0U291cmNlV2l0aENvbXByZXNzaW9uKCk7XHJcbiAgICBzb3VyY2VXaXRob3V0Q29tcHJlc3Npb24ubGVuZ3RoLnNob3VsZC5iZS5ncmVhdGVyVGhhbihzb3VyY2VXaXRoQ29tcHJlc3Npb24ubGVuZ3RoKTtcclxuICAgIGF3YWl0IGdldFNvdXJjZVdpdGhvdXRDb21wcmVzc2lvbigpLnNob3VsZC5ldmVudHVhbGx5LmVxbChzb3VyY2VXaXRob3V0Q29tcHJlc3Npb24pO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLiJ9
