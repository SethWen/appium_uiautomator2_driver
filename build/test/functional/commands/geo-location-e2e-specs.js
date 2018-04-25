'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _asyncbox = require('asyncbox');

var _desired = require('../desired');

var _helpersSession = require('../helpers/session');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe("geo-location", function () {
  var _this = this;

  var driver = undefined;
  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_desired.GPS_DEMO_CAPS));

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

  it('should set geo location', function callee$1$0() {
    var getText, latitude, longitude, text;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      var _this2 = this;

      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          getText = function getText() {
            var textViews;
            return _regeneratorRuntime.async(function getText$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  context$3$0.next = 2;
                  return _regeneratorRuntime.awrap(driver.elementsByClassName('android.widget.TextView'));

                case 2:
                  textViews = context$3$0.sent;
                  context$3$0.next = 5;
                  return _regeneratorRuntime.awrap(textViews[1].text());

                case 5:
                  return context$3$0.abrupt('return', context$3$0.sent);

                case 6:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this2);
          };

          latitude = '27.17';
          longitude = '78.04';
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(getText());

        case 5:
          text = context$2$0.sent;

          text.should.not.include('Latitude: ' + latitude);
          text.should.not.include('Longitude: ' + longitude);

          context$2$0.next = 10;
          return _regeneratorRuntime.awrap(driver.setGeoLocation(latitude, longitude));

        case 10:
          context$2$0.next = 12;
          return _regeneratorRuntime.awrap((0, _asyncbox.retryInterval)(6, 1000, function callee$2$0() {
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  context$3$0.next = 2;
                  return _regeneratorRuntime.awrap(getText());

                case 2:
                  context$3$0.t0 = context$3$0.sent;

                  if (!(context$3$0.t0 === 'GPS Tutorial')) {
                    context$3$0.next = 5;
                    break;
                  }

                  throw new Error('Location not set yet. Retry.');

                case 5:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this2);
          }));

        case 12:
          context$2$0.next = 14;
          return _regeneratorRuntime.awrap(getText());

        case 14:
          text = context$2$0.sent;

          text.should.include('Latitude: ' + latitude);
          text.should.include('Longitude: ' + longitude);

        case 17:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});

// wait for the text to change
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9nZW8tbG9jYXRpb24tZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7d0JBQ2YsVUFBVTs7dUJBQ1YsWUFBWTs7OEJBQ2Ysb0JBQW9COztBQUcvQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLFFBQVEsQ0FBQyxjQUFjLEVBQUUsWUFBWTs7O0FBQ25DLE1BQUksTUFBTSxZQUFBLENBQUM7QUFDWCxRQUFNLENBQUM7Ozs7OzJDQUNVLHVEQUF5Qjs7O0FBQXhDLGdCQUFNOzs7Ozs7O0dBQ1AsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsSUFBSSxFQUFFOzs7Ozs7O0dBQ3BCLENBQUMsQ0FBQzs7QUFFSCxJQUFFLENBQUMseUJBQXlCLEVBQUU7UUFDeEIsT0FBTyxFQUtQLFFBQVEsRUFDUixTQUFTLEVBRVQsSUFBSTs7Ozs7O0FBUkosaUJBQU8sR0FBRyxTQUFWLE9BQU87Z0JBQ0gsU0FBUzs7Ozs7bURBQVMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLHlCQUF5QixDQUFDOzs7QUFBdkUsMkJBQVM7O21EQUNGLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7Ozs7Ozs7Ozs7V0FDakM7O0FBRUcsa0JBQVEsR0FBRyxPQUFPO0FBQ2xCLG1CQUFTLEdBQUcsT0FBTzs7MkNBRU4sT0FBTyxFQUFFOzs7QUFBdEIsY0FBSTs7QUFDUixjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLGdCQUFjLFFBQVEsQ0FBRyxDQUFDO0FBQ2pELGNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8saUJBQWUsU0FBUyxDQUFHLENBQUM7OzsyQ0FFN0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDOzs7OzJDQUcxQyw2QkFBYyxDQUFDLEVBQUUsSUFBSSxFQUFFOzs7OzttREFDakIsT0FBTyxFQUFFOzs7OzsyQ0FBSyxjQUFjOzs7Ozt3QkFDOUIsSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUM7Ozs7Ozs7V0FFbEQsQ0FBQzs7OzsyQ0FFVyxPQUFPLEVBQUU7OztBQUF0QixjQUFJOztBQUNKLGNBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxnQkFBYyxRQUFRLENBQUcsQ0FBQztBQUM3QyxjQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8saUJBQWUsU0FBUyxDQUFHLENBQUM7Ozs7Ozs7R0FDaEQsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9nZW8tbG9jYXRpb24tZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XHJcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcclxuaW1wb3J0IHsgcmV0cnlJbnRlcnZhbCB9IGZyb20gJ2FzeW5jYm94JztcclxuaW1wb3J0IHsgR1BTX0RFTU9fQ0FQUyB9IGZyb20gJy4uL2Rlc2lyZWQnO1xyXG5pbXBvcnQgeyBpbml0RHJpdmVyIH0gZnJvbSAnLi4vaGVscGVycy9zZXNzaW9uJztcclxuXHJcblxyXG5jaGFpLnNob3VsZCgpO1xyXG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XHJcblxyXG5kZXNjcmliZShcImdlby1sb2NhdGlvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGRyaXZlcjtcclxuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xyXG4gICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihHUFNfREVNT19DQVBTKTtcclxuICB9KTtcclxuICBhZnRlcihhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xyXG4gIH0pO1xyXG5cclxuICBpdCgnc2hvdWxkIHNldCBnZW8gbG9jYXRpb24nLCBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgZ2V0VGV4dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdGV4dFZpZXdzID0gYXdhaXQgZHJpdmVyLmVsZW1lbnRzQnlDbGFzc05hbWUoJ2FuZHJvaWQud2lkZ2V0LlRleHRWaWV3Jyk7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0ZXh0Vmlld3NbMV0udGV4dCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgbGF0aXR1ZGUgPSAnMjcuMTcnO1xyXG4gICAgbGV0IGxvbmdpdHVkZSA9ICc3OC4wNCc7XHJcblxyXG4gICAgbGV0IHRleHQgPSBhd2FpdCBnZXRUZXh0KCk7XHJcbiAgICB0ZXh0LnNob3VsZC5ub3QuaW5jbHVkZShgTGF0aXR1ZGU6ICR7bGF0aXR1ZGV9YCk7XHJcbiAgICB0ZXh0LnNob3VsZC5ub3QuaW5jbHVkZShgTG9uZ2l0dWRlOiAke2xvbmdpdHVkZX1gKTtcclxuXHJcbiAgICBhd2FpdCBkcml2ZXIuc2V0R2VvTG9jYXRpb24obGF0aXR1ZGUsIGxvbmdpdHVkZSk7XHJcblxyXG4gICAgLy8gd2FpdCBmb3IgdGhlIHRleHQgdG8gY2hhbmdlXHJcbiAgICBhd2FpdCByZXRyeUludGVydmFsKDYsIDEwMDAsIGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKGF3YWl0IGdldFRleHQoKSA9PT0gJ0dQUyBUdXRvcmlhbCcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvY2F0aW9uIG5vdCBzZXQgeWV0LiBSZXRyeS4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGV4dCA9IGF3YWl0IGdldFRleHQoKTtcclxuICAgIHRleHQuc2hvdWxkLmluY2x1ZGUoYExhdGl0dWRlOiAke2xhdGl0dWRlfWApO1xyXG4gICAgdGV4dC5zaG91bGQuaW5jbHVkZShgTG9uZ2l0dWRlOiAke2xvbmdpdHVkZX1gKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi4ifQ==
