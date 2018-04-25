'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _ = require('../..');

var _desired = require('./desired');

var _helpersSession = require('./helpers/session');

var should = _chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var APIDEMOS_PACKAGE = 'io.appium.android.apis';

function killServer(adbPort) {
  var adb;
  return _regeneratorRuntime.async(function killServer$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (process.env.TESTOBJECT_E2E_TESTS) {
          context$1$0.next = 6;
          break;
        }

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(_appiumAdb2['default'].createADB({ adbPort: adbPort }));

      case 3:
        adb = context$1$0.sent;
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(adb.killServer());

      case 6:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

describe('createSession', function () {
  var driver = undefined;
  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(killServer(5037));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  describe('default adb port', function () {
    var _this = this;

    afterEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!driver) {
              context$3$0.next = 3;
              break;
            }

            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.quit());

          case 3:
            driver = null;

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should start android session focusing on default pkg and act', function callee$2$0() {
      var appPackage, appActivity;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_desired.APIDEMOS_CAPS));

          case 2:
            driver = context$3$0.sent;
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getCurrentPackage());

          case 5:
            appPackage = context$3$0.sent;
            context$3$0.next = 8;
            return _regeneratorRuntime.awrap(driver.getCurrentDeviceActivity());

          case 8:
            appActivity = context$3$0.sent;

            appPackage.should.equal('io.appium.android.apis');
            appActivity.should.equal('.ApiDemos');

          case 11:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should start android session focusing on custom pkg and act', function callee$2$0() {
      var caps, appPackage, appActivity;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            caps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
              appPackage: 'io.appium.android.apis',
              appActivity: '.view.SplitTouchView'
            });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps));

          case 3:
            driver = context$3$0.sent;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.getCurrentPackage());

          case 6:
            appPackage = context$3$0.sent;
            context$3$0.next = 9;
            return _regeneratorRuntime.awrap(driver.getCurrentDeviceActivity());

          case 9:
            appActivity = context$3$0.sent;

            appPackage.should.equal(caps.appPackage);
            appActivity.should.equal(caps.appActivity);

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should error out for not apk extension', function callee$2$0() {
      var caps;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!process.env.TESTOBJECT_E2E_TESTS) {
              context$3$0.next = 2;
              break;
            }

            return context$3$0.abrupt('return');

          case 2:
            caps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
              app: 'foo',
              appPackage: 'io.appium.android.apis',
              appActivity: '.view.SplitTouchView'
            });
            context$3$0.prev = 3;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps));

          case 6:
            throw new Error('Call to \'initDriver\' should not have succeeded');

          case 9:
            context$3$0.prev = 9;
            context$3$0.t0 = context$3$0['catch'](3);

            context$3$0.t0.data.should.match(/New app path foo did not have extension \.apk/);

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this, [[3, 9]]);
    });
    it('should error out for invalid app path', function callee$2$0() {
      var caps;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!process.env.TESTOBJECT_E2E_TESTS) {
              context$3$0.next = 2;
              break;
            }

            return context$3$0.abrupt('return');

          case 2:
            caps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
              app: 'foo.apk',
              appPackage: 'io.appium.android.apis',
              appActivity: '.view.SplitTouchView'
            });
            context$3$0.prev = 3;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps));

          case 6:
            throw new Error('Call to \'initDriver\' should not have succeeded');

          case 9:
            context$3$0.prev = 9;
            context$3$0.t0 = context$3$0['catch'](3);

            context$3$0.t0.data.should.match(/Could not find/);

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this, [[3, 9]]);
    });
    it('should get device model, manufacturer and screen size in session details', function callee$2$0() {
      var caps, serverCaps;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            caps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
              appPackage: 'io.appium.android.apis',
              appActivity: '.view.SplitTouchView'
            });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps));

          case 3:
            driver = context$3$0.sent;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.sessionCapabilities());

          case 6:
            serverCaps = context$3$0.sent;

            serverCaps.deviceScreenSize.should.exist;
            serverCaps.deviceScreenDensity.should.exist;
            serverCaps.deviceModel.should.exist;
            serverCaps.deviceManufacturer.should.exist;

          case 11:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });

  describe('custom adb port', function () {
    var _this2 = this;

    // Don't do these tests on TestObject. Cannot use TestObject's ADB.
    if (process.env.TESTOBJECT_E2E_TESTS) {
      return;
    }

    var adbPort = 5042;
    var driver = undefined;

    before(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(killServer(5037));

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    afterEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.quit());

          case 2:
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(killServer(adbPort));

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should start android session with a custom adb port', function callee$2$0() {
      var caps, appPackage, appActivity;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            caps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
              adbPort: adbPort
            });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps, adbPort));

          case 3:
            driver = context$3$0.sent;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.getCurrentPackage());

          case 6:
            appPackage = context$3$0.sent;
            context$3$0.next = 9;
            return _regeneratorRuntime.awrap(driver.getCurrentDeviceActivity());

          case 9:
            appActivity = context$3$0.sent;

            appPackage.should.equal('io.appium.android.apis');
            appActivity.should.equal('.ApiDemos');

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
  });

  describe('w3c compliance', function () {
    it('should start a session with W3C caps', function callee$2$0() {
      var _ref, value, sessionId, status;

      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(_requestPromise2['default'].post({ url: 'http://' + _.DEFAULT_HOST + ':' + _.DEFAULT_PORT + '/wd/hub/session', json: {
                capabilities: {
                  alwaysMatch: _desired.APIDEMOS_CAPS,
                  firstMatch: [{}]
                }
              } }));

          case 2:
            _ref = context$3$0.sent;
            value = _ref.value;
            sessionId = _ref.sessionId;
            status = _ref.status;

            value.should.exist;
            value.capabilities.should.exist;
            value.sessionId.should.exist;
            should.not.exist(sessionId);
            should.not.exist(status);
            context$3$0.next = 13;
            return _regeneratorRuntime.awrap(_requestPromise2['default']['delete']({ url: 'http://' + _.DEFAULT_HOST + ':' + _.DEFAULT_PORT + '/wd/hub/session/' + value.sessionId }));

          case 13:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
});

describe('close', function () {
  var _this3 = this;

  it('should close application', function callee$1$0() {
    var driver, appPackage;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_desired.APIDEMOS_CAPS));

        case 2:
          driver = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.closeApp());

        case 5:
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(driver.getCurrentPackage());

        case 7:
          appPackage = context$2$0.sent;

          if (appPackage) {
            appPackage.should.not.equal(APIDEMOS_PACKAGE);
          }

        case 9:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this3);
  });
});

// Don't test this on TestObject. The 'app' cap gets stripped out and can't be tested

// Don't test this on TestObject. The 'app' cap gets stripped out and can't be tested
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9kcml2ZXItZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7Ozt5QkFDN0IsWUFBWTs7Ozs4QkFDUixpQkFBaUI7Ozs7Z0JBQ00sT0FBTzs7dUJBQ3BCLFdBQVc7OzhCQUNkLG1CQUFtQjs7QUFFOUMsSUFBTSxNQUFNLEdBQUcsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDN0Isa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsSUFBTSxnQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQzs7QUFFbEQsU0FBZSxVQUFVLENBQUUsT0FBTztNQUUxQixHQUFHOzs7O1lBREosT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0I7Ozs7Ozt5Q0FDbkIsdUJBQUksU0FBUyxDQUFDLEVBQUMsT0FBTyxFQUFQLE9BQU8sRUFBQyxDQUFDOzs7QUFBcEMsV0FBRzs7eUNBQ0QsR0FBRyxDQUFDLFVBQVUsRUFBRTs7Ozs7OztDQUV6Qjs7QUFFRCxRQUFRLENBQUMsZUFBZSxFQUFFLFlBQVk7QUFDcEMsTUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLFFBQU0sQ0FBQzs7Ozs7MkNBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQzs7Ozs7OztHQUN2QixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGtCQUFrQixFQUFFLFlBQVk7OztBQUN2QyxhQUFTLENBQUM7Ozs7aUJBQ0osTUFBTTs7Ozs7OzZDQUNGLE1BQU0sQ0FBQyxJQUFJLEVBQUU7OztBQUVyQixrQkFBTSxHQUFHLElBQUksQ0FBQzs7Ozs7OztLQUNmLENBQUMsQ0FBQzs7QUFFSCxNQUFFLENBQUMsOERBQThELEVBQUU7VUFFN0QsVUFBVSxFQUNWLFdBQVc7Ozs7OzZDQUZBLHVEQUF5Qjs7O0FBQXhDLGtCQUFNOzs2Q0FDaUIsTUFBTSxDQUFDLGlCQUFpQixFQUFFOzs7QUFBN0Msc0JBQVU7OzZDQUNVLE1BQU0sQ0FBQyx3QkFB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a0JBQU0sUUFBTixNQUFNOztBQU1oQyxpQkFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDbkIsaUJBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNoQyxpQkFBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQzdCLGtCQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7OzZDQUNuQixxQ0FBYyxDQUFDLEVBQUMsR0FBRywyRUFBMkQsS0FBSyxDQUFDLFNBQVMsQUFBRSxFQUFDLENBQUM7Ozs7Ozs7S0FDeEcsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDOztBQUVILFFBQVEsQ0FBQyxPQUFPLEVBQUUsWUFBWTs7O0FBQzVCLElBQUUsQ0FBQywwQkFBMEIsRUFBRTtRQUN6QixNQUFNLEVBRU4sVUFBVTs7Ozs7MkNBRkssdURBQXlCOzs7QUFBeEMsZ0JBQU07OzJDQUNKLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Ozs7MkNBQ0EsTUFBTSxDQUFDLGlCQUFpQixFQUFFOzs7QUFBN0Msb0JBQVU7O0FBQ2QsY0FBSSxVQUFVLEVBQUU7QUFDZCxzQkFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7V0FDL0M7Ozs7Ozs7R0FDRixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC9mdW5jdGlvbmFsL2RyaXZlci1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcclxuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xyXG5pbXBvcnQgQURCIGZyb20gJ2FwcGl1bS1hZGInO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0LXByb21pc2UnO1xyXG5pbXBvcnQgeyBERUZBVUxUX0hPU1QsIERFRkFVTFRfUE9SVCB9IGZyb20gJy4uLy4uJztcclxuaW1wb3J0IHsgQVBJREVNT1NfQ0FQUyB9IGZyb20gJy4vZGVzaXJlZCc7XHJcbmltcG9ydCB7IGluaXREcml2ZXIgfSBmcm9tICcuL2hlbHBlcnMvc2Vzc2lvbic7XHJcblxyXG5jb25zdCBzaG91bGQgPSBjaGFpLnNob3VsZCgpO1xyXG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XHJcblxyXG5jb25zdCBBUElERU1PU19QQUNLQUdFID0gJ2lvLmFwcGl1bS5hbmRyb2lkLmFwaXMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24ga2lsbFNlcnZlciAoYWRiUG9ydCkge1xyXG4gIGlmICghcHJvY2Vzcy5lbnYuVEVTVE9CSkVDVF9FMkVfVEVTVFMpIHtcclxuICAgIGxldCBhZGIgPSBhd2FpdCBBREIuY3JlYXRlQURCKHthZGJQb3J0fSk7XHJcbiAgICBhd2FpdCBhZGIua2lsbFNlcnZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuZGVzY3JpYmUoJ2NyZWF0ZVNlc3Npb24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGRyaXZlcjtcclxuICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgYXdhaXQga2lsbFNlcnZlcig1MDM3KTtcclxuICB9KTtcclxuXHJcbiAgZGVzY3JpYmUoJ2RlZmF1bHQgYWRiIHBvcnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBhZnRlckVhY2goYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoZHJpdmVyKSB7XHJcbiAgICAgICAgYXdhaXQgZHJpdmVyLnF1aXQoKTtcclxuICAgICAgfVxyXG4gICAgICBkcml2ZXIgPSBudWxsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBzdGFydCBhbmRyb2lkIHNlc3Npb24gZm9jdXNpbmcgb24gZGVmYXVsdCBwa2cgYW5kIGFjdCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihBUElERU1PU19DQVBTKTtcclxuICAgICAgbGV0IGFwcFBhY2thZ2UgPSBhd2FpdCBkcml2ZXIuZ2V0Q3VycmVudFBhY2thZ2UoKTtcclxuICAgICAgbGV0IGFwcEFjdGl2aXR5ID0gYXdhaXQgZHJpdmVyLmdldEN1cnJlbnREZXZpY2VBY3Rpdml0eSgpO1xyXG4gICAgICBhcHBQYWNrYWdlLnNob3VsZC5lcXVhbCgnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycpO1xyXG4gICAgICBhcHBBY3Rpdml0eS5zaG91bGQuZXF1YWwoJy5BcGlEZW1vcycpO1xyXG4gICAgfSk7XHJcbiAgICBpdCgnc2hvdWxkIHN0YXJ0IGFuZHJvaWQgc2Vzc2lvbiBmb2N1c2luZyBvbiBjdXN0b20gcGtnIGFuZCBhY3QnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCBjYXBzID0gT2JqZWN0LmFzc2lnbih7fSwgQVBJREVNT1NfQ0FQUywge1xyXG4gICAgICAgIGFwcFBhY2thZ2U6ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJyxcclxuICAgICAgICBhcHBBY3Rpdml0eTogJy52aWV3LlNwbGl0VG91Y2hWaWV3JyxcclxuICAgICAgfSk7XHJcbiAgICAgIGRyaXZlciA9IGF3YWl0IGluaXREcml2ZXIoY2Fwcyk7XHJcbiAgICAgIGxldCBhcHBQYWNrYWdlID0gYXdhaXQgZHJpdmVyLmdldEN1cnJlbnRQYWNrYWdlKCk7XHJcbiAgICAgIGxldCBhcHBBY3Rpdml0eSA9IGF3YWl0IGRyaXZlci5nZXRDdXJyZW50RGV2aWNlQWN0aXZpdHkoKTtcclxuICAgICAgYXBwUGFja2FnZS5zaG91bGQuZXF1YWwoY2Fwcy5hcHBQYWNrYWdlKTtcclxuICAgICAgYXBwQWN0aXZpdHkuc2hvdWxkLmVxdWFsKGNhcHMuYXBwQWN0aXZpdHkpO1xyXG4gICAgfSk7XHJcbiAgICBpdCgnc2hvdWxkIGVycm9yIG91dCBmb3Igbm90IGFwayBleHRlbnNpb24nLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIC8vIERvbid0IHRlc3QgdGhpcyBvbiBUZXN0T2JqZWN0LiBUaGUgJ2FwcCcgY2FwIGdldHMgc3RyaXBwZWQgb3V0IGFuZCBjYW4ndCBiZSB0ZXN0ZWRcclxuICAgICAgaWYgKHByb2Nlc3MuZW52LlRFU1RPQkpFQ1RfRTJFX1RFU1RTKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBjYXBzID0gT2JqZWN0LmFzc2lnbih7fSwgQVBJREVNT1NfQ0FQUywge1xyXG4gICAgICAgIGFwcDogJ2ZvbycsXHJcbiAgICAgICAgYXBwUGFja2FnZTogJ2lvLmFwcGl1bS5hbmRyb2lkLmFwaXMnLFxyXG4gICAgICAgIGFwcEFjdGl2aXR5OiAnLnZpZXcuU3BsaXRUb3VjaFZpZXcnLFxyXG4gICAgICB9KTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBpbml0RHJpdmVyKGNhcHMpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FsbCB0byAnaW5pdERyaXZlcicgc2hvdWxkIG5vdCBoYXZlIHN1Y2NlZWRlZGApO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZS5kYXRhLnNob3VsZC5tYXRjaCgvTmV3IGFwcCBwYXRoIGZvbyBkaWQgbm90IGhhdmUgZXh0ZW5zaW9uIFxcLmFway8pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgZXJyb3Igb3V0IGZvciBpbnZhbGlkIGFwcCBwYXRoJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBEb24ndCB0ZXN0IHRoaXMgb24gVGVzdE9iamVjdC4gVGhlICdhcHAnIGNhcCBnZXRzIHN0cmlwcGVkIG91dCBhbmQgY2FuJ3QgYmUgdGVzdGVkXHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5URVNUT0JKRUNUX0UyRV9URVNUUykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgY2FwcyA9IE9iamVjdC5hc3NpZ24oe30sIEFQSURFTU9TX0NBUFMsIHtcclxuICAgICAgICBhcHA6ICdmb28uYXBrJyxcclxuICAgICAgICBhcHBQYWNrYWdlOiAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycsXHJcbiAgICAgICAgYXBwQWN0aXZpdHk6ICcudmlldy5TcGxpdFRvdWNoVmlldycsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBpbml0RHJpdmVyKGNhcHMpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FsbCB0byAnaW5pdERyaXZlcicgc2hvdWxkIG5vdCBoYXZlIHN1Y2NlZWRlZGApO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZS5kYXRhLnNob3VsZC5tYXRjaCgvQ291bGQgbm90IGZpbmQvKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpdCgnc2hvdWxkIGdldCBkZXZpY2UgbW9kZWwsIG1hbnVmYWN0dXJlciBhbmQgc2NyZWVuIHNpemUgaW4gc2Vzc2lvbiBkZXRhaWxzJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgY2FwcyA9IE9iamVjdC5hc3NpZ24oe30sIEFQSURFTU9TX0NBUFMsIHtcclxuICAgICAgICBhcHBQYWNrYWdlOiAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycsXHJcbiAgICAgICAgYXBwQWN0aXZpdHk6ICcudmlldy5TcGxpdFRvdWNoVmlldycsXHJcbiAgICAgIH0pO1xyXG4gICAgICBkcml2ZXIgPSBhd2FpdCBpbml0RHJpdmVyKGNhcHMpO1xyXG5cclxuICAgICAgbGV0IHNlcnZlckNhcHMgPSBhd2FpdCBkcml2ZXIuc2Vzc2lvbkNhcGFiaWxpdGllcygpO1xyXG4gICAgICBzZXJ2ZXJDYXBzLmRldmljZVNjcmVlblNpemUuc2hvdWxkLmV4aXN0O1xyXG4gICAgICBzZXJ2ZXJDYXBzLmRldmljZVNjcmVlbkRlbnNpdHkuc2hvdWxkLmV4aXN0O1xyXG4gICAgICBzZXJ2ZXJDYXBzLmRldmljZU1vZGVsLnNob3VsZC5leGlzdDtcclxuICAgICAgc2VydmVyQ2Fwcy5kZXZpY2VNYW51ZmFjdHVyZXIuc2hvdWxkLmV4aXN0O1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRlc2NyaWJlKCdjdXN0b20gYWRiIHBvcnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBEb24ndCBkbyB0aGVzZSB0ZXN0cyBvbiBUZXN0T2JqZWN0LiBDYW5ub3QgdXNlIFRlc3RPYmplY3QncyBBREIuXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuVEVTVE9CSkVDVF9FMkVfVEVTVFMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhZGJQb3J0ID0gNTA0MjtcclxuICAgIGxldCBkcml2ZXI7XHJcblxyXG4gICAgYmVmb3JlKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgYXdhaXQga2lsbFNlcnZlcig1MDM3KTtcclxuICAgIH0pO1xyXG4gICAgYWZ0ZXJFYWNoKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgYXdhaXQgZHJpdmVyLnF1aXQoKTtcclxuXHJcbiAgICAgIGF3YWl0IGtpbGxTZXJ2ZXIoYWRiUG9ydCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHN0YXJ0IGFuZHJvaWQgc2Vzc2lvbiB3aXRoIGEgY3VzdG9tIGFkYiBwb3J0JywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgY2FwcyA9IE9iamVjdC5hc3NpZ24oe30sIEFQSURFTU9TX0NBUFMsIHtcclxuICAgICAgICBhZGJQb3J0LFxyXG4gICAgICB9KTtcclxuICAgICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihjYXBzLCBhZGJQb3J0KTtcclxuICAgICAgbGV0IGFwcFBhY2thZ2UgPSBhd2FpdCBkcml2ZXIuZ2V0Q3VycmVudFBhY2thZ2UoKTtcclxuICAgICAgbGV0IGFwcEFjdGl2aXR5ID0gYXdhaXQgZHJpdmVyLmdldEN1cnJlbnREZXZpY2VBY3Rpdml0eSgpO1xyXG4gICAgICBhcHBQYWNrYWdlLnNob3VsZC5lcXVhbCgnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycpO1xyXG4gICAgICBhcHBBY3Rpdml0eS5zaG91bGQuZXF1YWwoJy5BcGlEZW1vcycpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRlc2NyaWJlKCd3M2MgY29tcGxpYW5jZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGl0KCdzaG91bGQgc3RhcnQgYSBzZXNzaW9uIHdpdGggVzNDIGNhcHMnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIHNlc3Npb25JZCwgc3RhdHVzIH0gPSBhd2FpdCByZXF1ZXN0LnBvc3Qoe3VybDogYGh0dHA6Ly8ke0RFRkFVTFRfSE9TVH06JHtERUZBVUxUX1BPUlR9L3dkL2h1Yi9zZXNzaW9uYCwganNvbjoge1xyXG4gICAgICAgIGNhcGFiaWxpdGllczoge1xyXG4gICAgICAgICAgYWx3YXlzTWF0Y2g6IEFQSURFTU9TX0NBUFMsXHJcbiAgICAgICAgICBmaXJzdE1hdGNoOiBbe31dLFxyXG4gICAgICAgIH1cclxuICAgICAgfX0pO1xyXG4gICAgICB2YWx1ZS5zaG91bGQuZXhpc3Q7XHJcbiAgICAgIHZhbHVlLmNhcGFiaWxpdGllcy5zaG91bGQuZXhpc3Q7XHJcbiAgICAgIHZhbHVlLnNlc3Npb25JZC5zaG91bGQuZXhpc3Q7XHJcbiAgICAgIHNob3VsZC5ub3QuZXhpc3Qoc2Vzc2lvbklkKTtcclxuICAgICAgc2hvdWxkLm5vdC5leGlzdChzdGF0dXMpO1xyXG4gICAgICBhd2FpdCByZXF1ZXN0LmRlbGV0ZSh7dXJsOiBgaHR0cDovLyR7REVGQVVMVF9IT1NUfToke0RFRkFVTFRfUE9SVH0vd2QvaHViL3Nlc3Npb24vJHt2YWx1ZS5zZXNzaW9uSWR9YH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZGVzY3JpYmUoJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gIGl0KCdzaG91bGQgY2xvc2UgYXBwbGljYXRpb24nLCBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihBUElERU1PU19DQVBTKTtcclxuICAgIGF3YWl0IGRyaXZlci5jbG9zZUFwcCgpO1xyXG4gICAgbGV0IGFwcFBhY2thZ2UgPSBhd2FpdCBkcml2ZXIuZ2V0Q3VycmVudFBhY2thZ2UoKTtcclxuICAgIGlmIChhcHBQYWNrYWdlKSB7XHJcbiAgICAgIGFwcFBhY2thZ2Uuc2hvdWxkLm5vdC5lcXVhbChBUElERU1PU19QQUNLQUdFKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLiJ9
