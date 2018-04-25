'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _this = this;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _ = require('../..');

var _2 = _interopRequireDefault(_);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('driver.js', function () {
  describe('constructor', function () {
    it('calls BaseDriver constructor with opts', function () {
      var driver = new _2['default']({ foo: 'bar' });
      driver.should.exist;
      driver.opts.foo.should.equal('bar');
    });
  });

  describe('createSession', function () {
    it('should throw an error if app can not be found', function callee$2$0() {
      var driver;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _2['default']({}, false);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.createSession({ app: 'foo.apk' }).should.be.rejectedWith('does not exist or is not accessible'));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });

    it('should set sessionId', function callee$2$0() {
      var driver;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _2['default']({}, false);

            _sinon2['default'].mock(driver).expects('checkAppPresent').once().returns(_bluebird2['default'].resolve());
            _sinon2['default'].mock(driver).expects('startUiAutomator2Session').once().returns(_bluebird2['default'].resolve());
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.createSession({ cap: 'foo' }));

          case 5:

            driver.sessionId.should.exist;
            driver.caps.cap.should.equal('foo');

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });

    it('should set the default context', function callee$2$0() {
      var driver;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _2['default']({}, false);

            _sinon2['default'].mock(driver).expects('checkAppPresent').returns(_bluebird2['default'].resolve());
            _sinon2['default'].mock(driver).expects('startUiAutomator2Session').returns(_bluebird2['default'].resolve());
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.createSession({}));

          case 5:
            driver.curContext.should.equal('NATIVE_APP');

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });

  describe('checkAppPresent', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      var _this2 = this;

      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          it('should resolve if app present', function callee$2$0() {
            var driver, app;
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  driver = new _2['default']({}, false);
                  app = _path2['default'].resolve('.');

                  _sinon2['default'].mock(driver).expects('startUiAutomator2Session').returns(_bluebird2['default'].resolve());
                  _sinon2['default'].mock(driver.helpers).expects('configureApp').returns(app);

                  context$3$0.next = 6;
                  return _regeneratorRuntime.awrap(driver.createSession({ app: app }));

                case 6:
                  context$3$0.next = 8;
                  return _regeneratorRuntime.awrap(driver.checkAppPresent());

                case 8:
                  // should not error

                  // configureApp is shared between the two,
                  // so restore mock or the next test will fail
                  driver.helpers.configureApp.restore();

                case 9:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this2);
          });

          it('should reject if app not present', function callee$2$0() {
            var driver, app;
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  driver = new _2['default']({}, false);
                  app = _path2['default'].resolve('asdfasdf');

                  _sinon2['default'].mock(driver).expects('checkAppPresent').returns(_bluebird2['default'].resolve());
                  _sinon2['default'].mock(driver).expects('startUiAutomator2Session').returns(_bluebird2['default'].resolve());
                  _sinon2['default'].mock(driver.helpers).expects('configureApp').returns(app);

                  context$3$0.next = 7;
                  return _regeneratorRuntime.awrap(driver.createSession({ app: app }));

                case 7:

                  driver.checkAppPresent.restore();
                  context$3$0.next = 10;
                  return _regeneratorRuntime.awrap(driver.checkAppPresent().should.eventually.be.rejectedWith('Could not find'));

                case 10:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this2);
          });

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  describe('proxying', function () {
    var driver = undefined;
    before(function () {
      driver = new _2['default']({}, false);
      driver.sessionId = 'abc';
    });
    describe('#proxyActive', function () {
      it('should exist', function () {
        driver.proxyActive.should.be.an['instanceof'](Function);
      });
      it('should return true', function () {
        driver.proxyActive('abc').should.be['true'];
      });
      it('should throw an error if session id is wrong', function () {
        (function () {
          driver.proxyActive('aaa');
        }).should['throw'];
      });
    });

    describe('#getProxyAvoidList', function () {
      it('should exist', function () {
        driver.getProxyAvoidList.should.be.an['instanceof'](Function);
      });
      it('should return jwpProxyAvoid array', function () {
        var avoidList = driver.getProxyAvoidList('abc');
        avoidList.should.be.an['instanceof'](Array);
        avoidList.should.eql(driver.jwpProxyAvoid);
      });
      it('should throw an error if session id is wrong', function () {
        (function () {
          driver.getProxyAvoidList('aaa');
        }).should['throw'];
      });
      describe('nativeWebScreenshot', function () {
        var proxyAvoidList = undefined;
        var nativeWebScreenshotFilter = function nativeWebScreenshotFilter(item) {
          return item[0] === "GET" && item[1].test('/session/xxx/screenshot/');
        };
        beforeEach(function () {
          driver = new _2['default']({}, false);
          _sinon2['default'].mock(driver).expects('checkAppPresent').once().returns(_bluebird2['default'].resolve());
          _sinon2['default'].mock(driver).expects('startUiAutomator2Session').once().returns(_bluebird2['default'].resolve());
        });

        describe('on webview mode', function () {
          beforeEach(function () {
            driver.chromedriver = true;
          });
          it('should proxy screenshot if nativeWebScreenshot is off on chromedriver mode', function callee$5$0() {
            return _regeneratorRuntime.async(function callee$5$0$(context$6$0) {
              while (1) switch (context$6$0.prev = context$6$0.next) {
                case 0:
                  context$6$0.next = 2;
                  return _regeneratorRuntime.awrap(driver.createSession({ platformName: 'Android', deviceName: 'device', browserName: 'chrome', nativeWebScreenshot: false }));

                case 2:
                  proxyAvoidList = driver.getProxyAvoidList().filter(nativeWebScreenshotFilter);
                  proxyAvoidList.should.be.empty;

                case 4:
                case 'end':
                  return context$6$0.stop();
              }
            }, null, this);
          });
          it('should not proxy screenshot if nativeWebScreenshot is on on chromedriver mode', function callee$5$0() {
            return _regeneratorRuntime.async(function callee$5$0$(context$6$0) {
              while (1) switch (context$6$0.prev = context$6$0.next) {
                case 0:
                  context$6$0.next = 2;
                  return _regeneratorRuntime.awrap(driver.createSession({ platformName: 'Android', deviceName: 'device', browserName: 'chrome', nativeWebScreenshot: true }));

                case 2:
                  proxyAvoidList = driver.getProxyAvoidList().filter(nativeWebScreenshotFilter);
                  proxyAvoidList.should.not.be.empty;

                case 4:
                case 'end':
                  return context$6$0.stop();
              }
            }, null, this);
          });
        });

        describe('on native mode', function () {
          it('should never proxy screenshot regardless of nativeWebScreenshot setting (on)', function callee$5$0() {
            return _regeneratorRuntime.async(function callee$5$0$(context$6$0) {
              while (1) switch (context$6$0.prev = context$6$0.next) {
                case 0:
                  context$6$0.next = 2;
                  return _regeneratorRuntime.awrap(driver.createSession({ platformName: 'Android', deviceName: 'device', browserName: 'chrome', nativeWebScreenshot: true }));

                case 2:
                  proxyAvoidList = driver.getProxyAvoidList().filter(nativeWebScreenshotFilter);
                  proxyAvoidList.should.not.be.empty;

                case 4:
                case 'end':
                  return context$6$0.stop();
              }
            }, null, this);
          });

          it('should never proxy screenshot regardless of nativeWebScreenshot setting (off)', function callee$5$0() {
            return _regeneratorRuntime.async(function callee$5$0$(context$6$0) {
              while (1) switch (context$6$0.prev = context$6$0.next) {
                case 0:
                  context$6$0.next = 2;
                  return _regeneratorRuntime.awrap(driver.createSession({ platformName: 'Android', deviceName: 'device', browserName: 'chrome', nativeWebScreenshot: false }));

                case 2:
                  proxyAvoidList = driver.getProxyAvoidList().filter(nativeWebScreenshotFilter);
                  proxyAvoidList.should.not.be.empty;

                case 4:
                case 'end':
                  return context$6$0.stop();
              }
            }, null, this);
          });
        });
      });
    });

    describe('#canProxy', function () {
      it('should exist', function () {
        driver.canProxy.should.be.an['instanceof'](Function);
      });
      it('should return true', function () {
        driver.canProxy('abc').should.be['true'];
      });
      it('should throw an error if session id is wrong', function () {
        (function () {
          driver.canProxy('aaa');
        }).should['throw'];
      });
    });
  });
});

// nativeWebScreenshot on

// nativeWebScreenshot off
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9kcml2ZXItc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O2dCQUNQLE9BQU87Ozs7cUJBQzNCLE9BQU87Ozs7b0JBQ1IsTUFBTTs7Ozt3QkFDVCxVQUFVOzs7O0FBR3hCLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsUUFBUSxDQUFDLFdBQVcsRUFBRSxZQUFNO0FBQzFCLFVBQVEsQ0FBQyxhQUFhLEVBQUUsWUFBTTtBQUM1QixNQUFFLENBQUMsd0NBQXdDLEVBQUUsWUFBTTtBQUNqRCxVQUFJLE1BQU0sR0FBRyxrQkFBOEIsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztBQUN6RCxZQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNwQixZQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JDLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQzs7QUFFSCxVQUFRLENBQUMsZUFBZSxFQUFFLFlBQU07QUFDOUIsTUFBRSxDQUFDLCtDQUErQyxFQUFFO1VBQzlDLE1BQU07Ozs7QUFBTixrQkFBTSxHQUFHLGtCQUE4QixFQUFFLEVBQUUsS0FBSyxDQUFDOzs2Q0FDL0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLHFDQUFxQyxDQUFDOzs7Ozs7O0tBQzNHLENBQUMsQ0FBQzs7QUFFSCxNQUFFLENBQUMsc0JBQXNCLEVBQUU7VUFDckIsTUFBTTs7OztBQUFOLGtCQUFNLEdBQUcsa0JBQThCLEVBQUUsRUFBRSxLQUFLLENBQUM7O0FBQ3JELCtCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMs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LENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCLENBQUEsQ0FBRSxNQUFNLFNBQU0sQ0FBQztPQUNqQixDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC91bml0L2RyaXZlci1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XHJcbmltcG9ydCBBbmRyb2lkVWlhdXRvbWF0b3IyRHJpdmVyIGZyb20gJy4uLy4uJztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBCIGZyb20gJ2JsdWViaXJkJztcclxuXHJcblxyXG5jaGFpLnNob3VsZCgpO1xyXG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XHJcblxyXG5kZXNjcmliZSgnZHJpdmVyLmpzJywgKCkgPT4ge1xyXG4gIGRlc2NyaWJlKCdjb25zdHJ1Y3RvcicsICgpID0+IHtcclxuICAgIGl0KCdjYWxscyBCYXNlRHJpdmVyIGNvbnN0cnVjdG9yIHdpdGggb3B0cycsICgpID0+IHtcclxuICAgICAgbGV0IGRyaXZlciA9IG5ldyBBbmRyb2lkVWlhdXRvbWF0b3IyRHJpdmVyKHtmb286ICdiYXInfSk7XHJcbiAgICAgIGRyaXZlci5zaG91bGQuZXhpc3Q7XHJcbiAgICAgIGRyaXZlci5vcHRzLmZvby5zaG91bGQuZXF1YWwoJ2JhcicpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRlc2NyaWJlKCdjcmVhdGVTZXNzaW9uJywgKCkgPT4ge1xyXG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBhbiBlcnJvciBpZiBhcHAgY2FuIG5vdCBiZSBmb3VuZCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IGRyaXZlciA9IG5ldyBBbmRyb2lkVWlhdXRvbWF0b3IyRHJpdmVyKHt9LCBmYWxzZSk7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKHthcHA6ICdmb28uYXBrJ30pLnNob3VsZC5iZS5yZWplY3RlZFdpdGgoJ2RvZXMgbm90IGV4aXN0IG9yIGlzIG5vdCBhY2Nlc3NpYmxlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHNldCBzZXNzaW9uSWQnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCBkcml2ZXIgPSBuZXcgQW5kcm9pZFVpYXV0b21hdG9yMkRyaXZlcih7fSwgZmFsc2UpO1xyXG4gICAgICBzaW5vbi5tb2NrKGRyaXZlcikuZXhwZWN0cygnY2hlY2tBcHBQcmVzZW50JylcclxuICAgICAgICAgIC5vbmNlKClcclxuICAgICAgICAgIC5yZXR1cm5zKEIucmVzb2x2ZSgpKTtcclxuICAgICAgc2lub24ubW9jayhkcml2ZXIpLmV4cGVjdHMoJ3N0YXJ0VWlBdXRvbWF0b3IyU2Vzc2lvbicpXHJcbiAgICAgICAgICAub25jZSgpXHJcbiAgICAgICAgICAucmV0dXJucyhCLnJlc29sdmUoKSk7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKHtjYXA6ICdmb28nfSk7XHJcblxyXG4gICAgICBkcml2ZXIuc2Vzc2lvbklkLnNob3VsZC5leGlzdDtcclxuICAgICAgZHJpdmVyLmNhcHMuY2FwLnNob3VsZC5lcXVhbCgnZm9vJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHNldCB0aGUgZGVmYXVsdCBjb250ZXh0JywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgZHJpdmVyID0gbmV3IEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXIoe30sIGZhbHNlKTtcclxuICAgICAgc2lub24ubW9jayhkcml2ZXIpLmV4cGVjdHMoJ2NoZWNrQXBwUHJlc2VudCcpXHJcbiAgICAgICAgICAucmV0dXJucyhCLnJlc29sdmUoKSk7XHJcbiAgICAgIHNpbm9uLm1vY2soZHJpdmVyKS5leHBlY3RzKCdzdGFydFVpQXV0b21hdG9yMlNlc3Npb24nKVxyXG4gICAgICAgICAgLnJldHVybnMoQi5yZXNvbHZlKCkpO1xyXG4gICAgICBhd2FpdCBkcml2ZXIuY3JlYXRlU2Vzc2lvbih7fSk7XHJcbiAgICAgIGRyaXZlci5jdXJDb250ZXh0LnNob3VsZC5lcXVhbCgnTkFUSVZFX0FQUCcpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRlc2NyaWJlKCdjaGVja0FwcFByZXNlbnQnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBpdCgnc2hvdWxkIHJlc29sdmUgaWYgYXBwIHByZXNlbnQnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCBkcml2ZXIgPSBuZXcgQW5kcm9pZFVpYXV0b21hdG9yMkRyaXZlcih7fSwgZmFsc2UpO1xyXG4gICAgICBsZXQgYXBwID0gcGF0aC5yZXNvbHZlKCcuJyk7XHJcbiAgICAgIHNpbm9uLm1vY2soZHJpdmVyKS5leHBlY3RzKCdzdGFydFVpQXV0b21hdG9yMlNlc3Npb24nKVxyXG4gICAgICAgICAgLnJldHVybnMoQi5yZXNvbHZlKCkpO1xyXG4gICAgICBzaW5vbi5tb2NrKGRyaXZlci5oZWxwZXJzKS5leHBlY3RzKCdjb25maWd1cmVBcHAnKVxyXG4gICAgICAgICAgLnJldHVybnMoYXBwKTtcclxuXHJcbiAgICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKHthcHB9KTtcclxuXHJcbiAgICAgIGF3YWl0IGRyaXZlci5jaGVja0FwcFByZXNlbnQoKTsgLy8gc2hvdWxkIG5vdCBlcnJvclxyXG5cclxuICAgICAgLy8gY29uZmlndXJlQXBwIGlzIHNoYXJlZCBiZXR3ZWVuIHRoZSB0d28sXHJcbiAgICAgIC8vIHNvIHJlc3RvcmUgbW9jayBvciB0aGUgbmV4dCB0ZXN0IHdpbGwgZmFpbFxyXG4gICAgICBkcml2ZXIuaGVscGVycy5jb25maWd1cmVBcHAucmVzdG9yZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCByZWplY3QgaWYgYXBwIG5vdCBwcmVzZW50JywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgZHJpdmVyID0gbmV3IEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXIoe30sIGZhbHNlKTtcclxuICAgICAgbGV0IGFwcCA9IHBhdGgucmVzb2x2ZSgnYXNkZmFzZGYnKTtcclxuICAgICAgc2lub24ubW9jayhkcml2ZXIpLmV4cGVjdHMoJ2NoZWNrQXBwUHJlc2VudCcpXHJcbiAgICAgICAgICAucmV0dXJucyhCLnJlc29sdmUoKSk7XHJcbiAgICAgIHNpbm9uLm1vY2soZHJpdmVyKS5leHBlY3RzKCdzdGFydFVpQXV0b21hdG9yMlNlc3Npb24nKVxyXG4gICAgICAgICAgLnJldHVybnMoQi5yZXNvbHZlKCkpO1xyXG4gICAgICBzaW5vbi5tb2NrKGRyaXZlci5oZWxwZXJzKS5leHBlY3RzKCdjb25maWd1cmVBcHAnKVxyXG4gICAgICAgICAgLnJldHVybnMoYXBwKTtcclxuXHJcbiAgICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKHthcHB9KTtcclxuXHJcbiAgICAgIGRyaXZlci5jaGVja0FwcFByZXNlbnQucmVzdG9yZSgpO1xyXG4gICAgICBhd2FpdCBkcml2ZXIuY2hlY2tBcHBQcmVzZW50KCkuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWRXaXRoKCdDb3VsZCBub3QgZmluZCcpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRlc2NyaWJlKCdwcm94eWluZycsICgpID0+IHtcclxuICAgIGxldCBkcml2ZXI7XHJcbiAgICBiZWZvcmUoKCkgPT4ge1xyXG4gICAgICBkcml2ZXIgPSBuZXcgQW5kcm9pZFVpYXV0b21hdG9yMkRyaXZlcih7fSwgZmFsc2UpO1xyXG4gICAgICBkcml2ZXIuc2Vzc2lvbklkID0gJ2FiYyc7XHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKCcjcHJveHlBY3RpdmUnLCAoKSA9PiB7XHJcbiAgICAgIGl0KCdzaG91bGQgZXhpc3QnLCAoKSA9PiB7XHJcbiAgICAgICAgZHJpdmVyLnByb3h5QWN0aXZlLnNob3VsZC5iZS5hbi5pbnN0YW5jZW9mKEZ1bmN0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUnLCAoKSA9PiB7XHJcbiAgICAgICAgZHJpdmVyLnByb3h5QWN0aXZlKCdhYmMnKS5zaG91bGQuYmUudHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgaWYgc2Vzc2lvbiBpZCBpcyB3cm9uZycsICgpID0+IHtcclxuICAgICAgICAoKCkgPT4ge1xyXG4gICAgICAgICAgZHJpdmVyLnByb3h5QWN0aXZlKCdhYWEnKTtcclxuICAgICAgICB9KS5zaG91bGQudGhyb3c7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZGVzY3JpYmUoJyNnZXRQcm94eUF2b2lkTGlzdCcsICgpID0+IHtcclxuICAgICAgaXQoJ3Nob3VsZCBleGlzdCcsICgpID0+IHtcclxuICAgICAgICBkcml2ZXIuZ2V0UHJveHlBdm9pZExpc3Quc2hvdWxkLmJlLmFuLmluc3RhbmNlb2YoRnVuY3Rpb24pO1xyXG4gICAgICB9KTtcclxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gandwUHJveHlBdm9pZCBhcnJheScsICgpID0+IHtcclxuICAgICAgICBsZXQgYXZvaWRMaXN0ID0gZHJpdmVyLmdldFByb3h5QXZvaWRMaXN0KCdhYmMnKTtcclxuICAgICAgICBhdm9pZExpc3Quc2hvdWxkLmJlLmFuLmluc3RhbmNlb2YoQXJyYXkpO1xyXG4gICAgICAgIGF2b2lkTGlzdC5zaG91bGQuZXFsKGRyaXZlci5qd3BQcm94eUF2b2lkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgaWYgc2Vzc2lvbiBpZCBpcyB3cm9uZycsICgpID0+IHtcclxuICAgICAgICAoKCkgPT4ge1xyXG4gICAgICAgICAgZHJpdmVyLmdldFByb3h5QXZvaWRMaXN0KCdhYWEnKTtcclxuICAgICAgICB9KS5zaG91bGQudGhyb3c7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkZXNjcmliZSgnbmF0aXZlV2ViU2NyZWVuc2hvdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgcHJveHlBdm9pZExpc3Q7XHJcbiAgICAgICAgbGV0IG5hdGl2ZVdlYlNjcmVlbnNob3RGaWx0ZXIgPSBpdGVtID0+IGl0ZW1bMF0gPT09IFwiR0VUXCIgJiYgaXRlbVsxXS50ZXN0KCcvc2Vzc2lvbi94eHgvc2NyZWVuc2hvdC8nKTtcclxuICAgICAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkVWlhdXRvbWF0b3IyRHJpdmVyKHt9LCBmYWxzZSk7XHJcbiAgICAgICAgICBzaW5vbi5tb2NrKGRyaXZlcikuZXhwZWN0cygnY2hlY2tBcHBQcmVzZW50JylcclxuICAgICAgICAgICAgICAub25jZSgpXHJcbiAgICAgICAgICAgICAgLnJldHVybnMoQi5yZXNvbHZlKCkpO1xyXG4gICAgICAgICAgc2lub24ubW9jayhkcml2ZXIpLmV4cGVjdHMoJ3N0YXJ0VWlBdXRvbWF0b3IyU2Vzc2lvbicpXHJcbiAgICAgICAgICAgICAgLm9uY2UoKVxyXG4gICAgICAgICAgICAgIC5yZXR1cm5zKEIucmVzb2x2ZSgpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGVzY3JpYmUoJ29uIHdlYnZpZXcgbW9kZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGJlZm9yZUVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkcml2ZXIuY2hyb21lZHJpdmVyID0gdHJ1ZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaXQoJ3Nob3VsZCBwcm94eSBzY3JlZW5zaG90IGlmIG5hdGl2ZVdlYlNjcmVlbnNob3QgaXMgb2ZmIG9uIGNocm9tZWRyaXZlciBtb2RlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhd2FpdCBkcml2ZXIuY3JlYXRlU2Vzc2lvbih7cGxhdGZvcm1OYW1lOiAnQW5kcm9pZCcsIGRldmljZU5hbWU6ICdkZXZpY2UnLCBicm93c2VyTmFtZTogJ2Nocm9tZScsIG5hdGl2ZVdlYlNjcmVlbnNob3Q6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIHByb3h5QXZvaWRMaXN0ID0gZHJpdmVyLmdldFByb3h5QXZvaWRMaXN0KCkuZmlsdGVyKG5hdGl2ZVdlYlNjcmVlbnNob3RGaWx0ZXIpO1xyXG4gICAgICAgICAgICBwcm94eUF2b2lkTGlzdC5zaG91bGQuYmUuZW1wdHk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGl0KCdzaG91bGQgbm90IHByb3h5IHNjcmVlbnNob3QgaWYgbmF0aXZlV2ViU2NyZWVuc2hvdCBpcyBvbiBvbiBjaHJvbWVkcml2ZXIgbW9kZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oe3BsYXRmb3JtTmFtZTogJ0FuZHJvaWQnLCBkZXZpY2VOYW1lOiAnZGV2aWNlJywgYnJvd3Nlck5hbWU6ICdjaHJvbWUnLCBuYXRpdmVXZWJTY3JlZW5zaG90OiB0cnVlfSk7XHJcbiAgICAgICAgICAgIHByb3h5QXZvaWRMaXN0ID0gZHJpdmVyLmdldFByb3h5QXZvaWRMaXN0KCkuZmlsdGVyKG5hdGl2ZVdlYlNjcmVlbnNob3RGaWx0ZXIpO1xyXG4gICAgICAgICAgICBwcm94eUF2b2lkTGlzdC5zaG91bGQubm90LmJlLmVtcHR5O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRlc2NyaWJlKCdvbiBuYXRpdmUgbW9kZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGl0KCdzaG91bGQgbmV2ZXIgcHJveHkgc2NyZWVuc2hvdCByZWdhcmRsZXNzIG9mIG5hdGl2ZVdlYlNjcmVlbnNob3Qgc2V0dGluZyAob24pJywgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBuYXRpdmVXZWJTY3JlZW5zaG90IG9uXHJcbiAgICAgICAgICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKHtwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJywgZGV2aWNlTmFtZTogJ2RldmljZScsIGJyb3dzZXJOYW1lOiAnY2hyb21lJywgbmF0aXZlV2ViU2NyZWVuc2hvdDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBwcm94eUF2b2lkTGlzdCA9IGRyaXZlci5nZXRQcm94eUF2b2lkTGlzdCgpLmZpbHRlcihuYXRpdmVXZWJTY3JlZW5zaG90RmlsdGVyKTtcclxuICAgICAgICAgICAgcHJveHlBdm9pZExpc3Quc2hvdWxkLm5vdC5iZS5lbXB0eTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGl0KCdzaG91bGQgbmV2ZXIgcHJveHkgc2NyZWVuc2hvdCByZWdhcmRsZXNzIG9mIG5hdGl2ZVdlYlNjcmVlbnNob3Qgc2V0dGluZyAob2ZmKScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gbmF0aXZlV2ViU2NyZWVuc2hvdCBvZmZcclxuICAgICAgICAgICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oe3BsYXRmb3JtTmFtZTogJ0FuZHJvaWQnLCBkZXZpY2VOYW1lOiAnZGV2aWNlJywgYnJvd3Nlck5hbWU6ICdjaHJvbWUnLCBuYXRpdmVXZWJTY3JlZW5zaG90OiBmYWxzZX0pO1xyXG4gICAgICAgICAgICBwcm94eUF2b2lkTGlzdCA9IGRyaXZlci5nZXRQcm94eUF2b2lkTGlzdCgpLmZpbHRlcihuYXRpdmVXZWJTY3JlZW5zaG90RmlsdGVyKTtcclxuICAgICAgICAgICAgcHJveHlBdm9pZExpc3Quc2hvdWxkLm5vdC5iZS5lbXB0eTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRlc2NyaWJlKCcjY2FuUHJveHknLCAoKSA9PiB7XHJcbiAgICAgIGl0KCdzaG91bGQgZXhpc3QnLCAoKSA9PiB7XHJcbiAgICAgICAgZHJpdmVyLmNhblByb3h5LnNob3VsZC5iZS5hbi5pbnN0YW5jZW9mKEZ1bmN0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUnLCAoKSA9PiB7XHJcbiAgICAgICAgZHJpdmVyLmNhblByb3h5KCdhYmMnKS5zaG91bGQuYmUudHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgaWYgc2Vzc2lvbiBpZCBpcyB3cm9uZycsICgpID0+IHtcclxuICAgICAgICAoKCkgPT4ge1xyXG4gICAgICAgICAgZHJpdmVyLmNhblByb3h5KCdhYWEnKTtcclxuICAgICAgICB9KS5zaG91bGQudGhyb3c7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi4ifQ==
