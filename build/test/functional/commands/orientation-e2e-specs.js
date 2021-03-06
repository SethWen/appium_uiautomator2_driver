'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _desired = require('../desired');

var _helpersSession = require('../helpers/session');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('apidemo - orientation -', function () {
  var driver = undefined;

  describe('initial -', function () {
    afterEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setOrientation('PORTRAIT'));

          case 2:
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.quit());

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should have portrait orientation if requested', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_Object$assign({}, _desired.APIDEMOS_CAPS, {
              appActivity: '.view.TextFields',
              orientation: 'PORTRAIT'
            })));

          case 2:
            driver = context$3$0.sent;
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getOrientation().should.eventually.eql('PORTRAIT'));

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should have landscape orientation if requested', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_Object$assign({}, _desired.APIDEMOS_CAPS, {
              appActivity: '.view.TextFields',
              orientation: 'LANDSCAPE'
            })));

          case 2:
            driver = context$3$0.sent;
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getOrientation().should.eventually.eql('LANDSCAPE'));

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should have portrait orientation if nothing requested', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_Object$assign({}, _desired.APIDEMOS_CAPS, {
              appActivity: '.view.TextFields'
            })));

          case 2:
            driver = context$3$0.sent;
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getOrientation().should.eventually.eql('PORTRAIT'));

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('setting -', function () {
    var _this = this;

    before(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_Object$assign({}, _desired.APIDEMOS_CAPS, {
              appActivity: '.view.TextFields'
            })));

          case 2:
            driver = context$3$0.sent;

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    after(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.quit());

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should rotate screen to landscape', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setOrientation('PORTRAIT'));

          case 2:
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

          case 4:
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.setOrientation('LANDSCAPE'));

          case 6:
            context$3$0.next = 8;
            return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

          case 8:
            context$3$0.next = 10;
            return _regeneratorRuntime.awrap(driver.getOrientation().should.eventually.become('LANDSCAPE'));

          case 10:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should rotate screen to landscape', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setOrientation('LANDSCAPE'));

          case 2:
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

          case 4:
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.setOrientation('PORTRAIT'));

          case 6:
            context$3$0.next = 8;
            return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

          case 8:
            context$3$0.next = 10;
            return _regeneratorRuntime.awrap(driver.getOrientation().should.eventually.become('PORTRAIT'));

          case 10:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should not error when trying to rotate to portrait again', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setOrientation('PORTRAIT'));

          case 2:
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

          case 4:
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.setOrientation('PORTRAIT'));

          case 6:
            context$3$0.next = 8;
            return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

          case 8:
            context$3$0.next = 10;
            return _regeneratorRuntime.awrap(driver.getOrientation().should.eventually.become('PORTRAIT'));

          case 10:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9vcmllbnRhdGlvbi1lMmUtc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O3dCQUMvQixVQUFVOzs7O3VCQUNNLFlBQVk7OzhCQUNmLG9CQUFvQjs7QUFHL0Msa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMseUJBQXlCLEVBQUUsWUFBWTtBQUM5QyxNQUFJLE1BQU0sWUFBQSxDQUFDOztBQUVYLFVBQVEsQ0FBQyxXQUFXLEVBQUUsWUFBWTtBQUNoQyxhQUFTLENBQUM7Ozs7OzZDQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDOzs7OzZDQUNqQyxNQUFNLENBQUMsSUFBSSxFQUFFOzs7Ozs7O0tBQ3BCLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQywrQ0FBK0MsRUFBRTs7Ozs7NkNBQ25DLGdDQUFXLGVBQWMsRUFBRSwwQkFBaUI7QUFDekQseUJBQVcsRUFBRSxrQkFBa0I7QUFDL0IseUJBQVcsRUFBRSxVQUFVO2FBQ3hCLENBQUMsQ0FBQzs7O0FBSEgsa0JBQU07OzZDQUlBLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7S0FDaEUsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLGdEQUFnRCxFQUFFOzs7Ozs2Q0FDcEMsZ0NBQVcsZUFBYyxFQUFFLDBCQUFpQjtBQUN6RCx5QkFBVyxFQUFFLGtCQUFrQjtBQUMvQix5QkFBVyxFQUFFLFdBQVc7YUFDekIsQ0FBQyxDQUFDOzs7QUFISCxrQkFBTTs7NkNBSUEsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztLQUNqRSxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsdURBQXVELEVBQUU7Ozs7OzZDQUMzQyxnQ0FBVyxlQUFjLEVBQUUsMEJBQWlCO0FBQ3pELHlCQUFXLEVBQUUsa0JBQWtCO2FBQ2hDLENBQUMsQ0FBQzs7O0FBRkgsa0JBQU07OzZDQUdBLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7S0FDaEUsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLFdBQVcsRUFBRSxZQUFZOzs7QUFDaEMsVUFBTSxDQUFDOzs7Ozs2Q0FDVSxnQ0FBVyxlQUFjLEVBQUUsMEJBQWlCO0FBQ3pELHlCQUFXLEVBQUUsa0JBQWtCO2FBQ2hDLENBQUMsQ0FBQzs7O0FBRkgsa0JBQU07Ozs7Ozs7S0FHUCxDQUFDLENBQUM7QUFDSCxTQUFLLENBQUM7Ozs7OzZDQUNFLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Ozs7Ozs7S0FDcEIsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLG1DQUFtQyxFQUFFOzs7Ozs2Q0FDaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7Ozs7NkNBQ2pDLHNCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7Ozs7NkNBQ2IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7Ozs7NkNBQ2xDLHNCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7Ozs7NkNBQ2IsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztLQUNwRSxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsbUNBQW1DLEVBQUU7Ozs7OzZDQUNoQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQzs7Ozs2Q0FDbEMsc0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQzs7Ozs2Q0FDYixNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzs7Ozs2Q0FDakMsc0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQzs7Ozs2Q0FDYixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDOzs7Ozs7O0tBQ25FLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQywwREFBMEQsRUFBRTs7Ozs7NkNBQ3ZELE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDOzs7OzZDQUNqQyxzQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDOzs7OzZDQUNiLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDOzs7OzZDQUNqQyxzQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDOzs7OzZDQUNiLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7S0FDbkUsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9vcmllbnRhdGlvbi1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcclxuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xyXG5pbXBvcnQgQiBmcm9tICdibHVlYmlyZCc7XHJcbmltcG9ydCB7IEFQSURFTU9TX0NBUFMgfSBmcm9tICcuLi9kZXNpcmVkJztcclxuaW1wb3J0IHsgaW5pdERyaXZlciB9IGZyb20gJy4uL2hlbHBlcnMvc2Vzc2lvbic7XHJcblxyXG5cclxuY2hhaS5zaG91bGQoKTtcclxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xyXG5cclxuZGVzY3JpYmUoJ2FwaWRlbW8gLSBvcmllbnRhdGlvbiAtJywgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBkcml2ZXI7XHJcblxyXG4gIGRlc2NyaWJlKCdpbml0aWFsIC0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBhZnRlckVhY2goYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICBhd2FpdCBkcml2ZXIuc2V0T3JpZW50YXRpb24oJ1BPUlRSQUlUJyk7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5xdWl0KCk7XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgaGF2ZSBwb3J0cmFpdCBvcmllbnRhdGlvbiBpZiByZXF1ZXN0ZWQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRyaXZlciA9IGF3YWl0IGluaXREcml2ZXIoT2JqZWN0LmFzc2lnbih7fSwgQVBJREVNT1NfQ0FQUywge1xyXG4gICAgICAgIGFwcEFjdGl2aXR5OiAnLnZpZXcuVGV4dEZpZWxkcycsXHJcbiAgICAgICAgb3JpZW50YXRpb246ICdQT1JUUkFJVCcsXHJcbiAgICAgIH0pKTtcclxuICAgICAgYXdhaXQgZHJpdmVyLmdldE9yaWVudGF0aW9uKCkuc2hvdWxkLmV2ZW50dWFsbHkuZXFsKCdQT1JUUkFJVCcpO1xyXG4gICAgfSk7XHJcbiAgICBpdCgnc2hvdWxkIGhhdmUgbGFuZHNjYXBlIG9yaWVudGF0aW9uIGlmIHJlcXVlc3RlZCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihPYmplY3QuYXNzaWduKHt9LCBBUElERU1PU19DQVBTLCB7XHJcbiAgICAgICAgYXBwQWN0aXZpdHk6ICcudmlldy5UZXh0RmllbGRzJyxcclxuICAgICAgICBvcmllbnRhdGlvbjogJ0xBTkRTQ0FQRScsXHJcbiAgICAgIH0pKTtcclxuICAgICAgYXdhaXQgZHJpdmVyLmdldE9yaWVudGF0aW9uKCkuc2hvdWxkLmV2ZW50dWFsbHkuZXFsKCdMQU5EU0NBUEUnKTtcclxuICAgIH0pO1xyXG4gICAgaXQoJ3Nob3VsZCBoYXZlIHBvcnRyYWl0IG9yaWVudGF0aW9uIGlmIG5vdGhpbmcgcmVxdWVzdGVkJywgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkcml2ZXIgPSBhd2FpdCBpbml0RHJpdmVyKE9iamVjdC5hc3NpZ24oe30sIEFQSURFTU9TX0NBUFMsIHtcclxuICAgICAgICBhcHBBY3Rpdml0eTogJy52aWV3LlRleHRGaWVsZHMnLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5nZXRPcmllbnRhdGlvbigpLnNob3VsZC5ldmVudHVhbGx5LmVxbCgnUE9SVFJBSVQnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGRlc2NyaWJlKCdzZXR0aW5nIC0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkcml2ZXIgPSBhd2FpdCBpbml0RHJpdmVyKE9iamVjdC5hc3NpZ24oe30sIEFQSURFTU9TX0NBUFMsIHtcclxuICAgICAgICBhcHBBY3Rpdml0eTogJy52aWV3LlRleHRGaWVsZHMnXHJcbiAgICAgIH0pKTtcclxuICAgIH0pO1xyXG4gICAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xyXG4gICAgfSk7XHJcbiAgICBpdCgnc2hvdWxkIHJvdGF0ZSBzY3JlZW4gdG8gbGFuZHNjYXBlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICBhd2FpdCBkcml2ZXIuc2V0T3JpZW50YXRpb24oJ1BPUlRSQUlUJyk7XHJcbiAgICAgIGF3YWl0IEIuZGVsYXkoMzAwMCk7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5zZXRPcmllbnRhdGlvbignTEFORFNDQVBFJyk7XHJcbiAgICAgIGF3YWl0IEIuZGVsYXkoMzAwMCk7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5nZXRPcmllbnRhdGlvbigpLnNob3VsZC5ldmVudHVhbGx5LmJlY29tZSgnTEFORFNDQVBFJyk7XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgcm90YXRlIHNjcmVlbiB0byBsYW5kc2NhcGUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5zZXRPcmllbnRhdGlvbignTEFORFNDQVBFJyk7XHJcbiAgICAgIGF3YWl0IEIuZGVsYXkoMzAwMCk7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5zZXRPcmllbnRhdGlvbignUE9SVFJBSVQnKTtcclxuICAgICAgYXdhaXQgQi5kZWxheSgzMDAwKTtcclxuICAgICAgYXdhaXQgZHJpdmVyLmdldE9yaWVudGF0aW9uKCkuc2hvdWxkLmV2ZW50dWFsbHkuYmVjb21lKCdQT1JUUkFJVCcpO1xyXG4gICAgfSk7XHJcbiAgICBpdCgnc2hvdWxkIG5vdCBlcnJvciB3aGVuIHRyeWluZyB0byByb3RhdGUgdG8gcG9ydHJhaXQgYWdhaW4nLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5zZXRPcmllbnRhdGlvbignUE9SVFJBSVQnKTtcclxuICAgICAgYXdhaXQgQi5kZWxheSgzMDAwKTtcclxuICAgICAgYXdhaXQgZHJpdmVyLnNldE9yaWVudGF0aW9uKCdQT1JUUkFJVCcpO1xyXG4gICAgICBhd2FpdCBCLmRlbGF5KDMwMDApO1xyXG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0T3JpZW50YXRpb24oKS5zaG91bGQuZXZlbnR1YWxseS5iZWNvbWUoJ1BPUlRSQUlUJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi4ifQ==
