'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _appiumBaseDriver = require('appium-base-driver');

var _asyncbox = require('asyncbox');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _installer = require('./installer');

var _adbkit = require('adbkit');

var _adbkit2 = _interopRequireDefault(_adbkit);

var _utils = require('./utils');

var _appiumSupport = require('appium-support');

var REQD_PARAMS = ['adb', 'tmpDir', 'host', 'systemPort', 'devicePort', 'disableWindowAnimation'];
var SERVER_LAUNCH_RETRIES = 20;
var SERVER_INSTALL_RETRIES = 20;
var INSTRUMENTATION_TARGET = 'io.appium.uiautomator2.server.test/android.support.test.runner.AndroidJUnitRunner';

var UiAutomator2Server = (function () {
  function UiAutomator2Server() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, UiAutomator2Server);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _getIterator(REQD_PARAMS), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var req = _step.value;

        if (!opts || !_appiumSupport.util.hasValue(opts[req])) {
          throw new Error('Option \'' + req + '\' is required!');
        }
        this[req] = opts[req];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.jwproxy = new _appiumBaseDriver.JWProxy({ host: this.host, port: this.systemPort });
    this.proxyReqRes = this.jwproxy.proxyReqRes.bind(this.jwproxy);

    this.client = _adbkit2['default'].createClient({
      port: this.adb.adbPort
    });
  }

  /**
   * Installs the apks on to the device or emulator.
   *
   * @param {number} installTimeout - Installation timeout
   */

  _createClass(UiAutomator2Server, [{
    key: 'installServerApk',
    value: function installServerApk() {
      var installTimeout = arguments.length <= 0 || arguments[0] === undefined ? SERVER_INSTALL_RETRIES * 1000 : arguments[0];

      var serverApkInfo, apkPackage, testApkPackage, isApkInstalled, isTestApkInstalled, testPackageInfo, apkVersion, pkgVersion, retries, output, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, line;

      return _regeneratorRuntime.async(function installServerApk$(context$2$0) {
        var _this = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(this.adb.getApkInfo(_installer.UI2_SERVER_APK_PATH));

          case 2:
            serverApkInfo = context$2$0.sent;
            apkPackage = serverApkInfo.name;

            if (apkPackage) {
              context$2$0.next = 6;
              break;
            }

            throw new Error('Cannot read manifest information from \'' + _installer.UI2_SERVER_APK_PATH + '\'. Does the package exist and is accessible?');

          case 6:
            testApkPackage = apkPackage + '.test';
            context$2$0.next = 9;
            return _regeneratorRuntime.awrap(this.adb.isAppInstalled(apkPackage));

          case 9:
            isApkInstalled = context$2$0.sent;
            context$2$0.next = 12;
            return _regeneratorRuntime.awrap(this.adb.isAppInstalled(testApkPackage));

          case 12:
            isTestApkInstalled = context$2$0.sent;

            if (!(isApkInstalled || isTestApkInstalled)) {
              context$2$0.next = 24;
              break;
            }

            context$2$0.next = 16;
            return _regeneratorRuntime.awrap(this.adb.getPackageInfo(apkPackage));

          case 16:
            testPackageInfo = context$2$0.sent;
            apkVersion = serverApkInfo.versionName;
            pkgVersion = testPackageInfo.versionName;

            if (!(!apkVersion || !pkgVersion || apkVersion !== pkgVersion)) {
              context$2$0.next = 24;
              break;
            }

            _logger2['default'].debug('Server installed but version ' + pkgVersion + ' instead of ' + apkVersion + '. Re-installing');
            isApkInstalled = isTestApkInstalled = false;
            context$2$0.next = 24;
            return _regeneratorRuntime.awrap(this.uninstallServerAndTest(apkPackage, testApkPackage));

          case 24:
            if (isApkInstalled) {
              context$2$0.next = 27;
              break;
            }

            context$2$0.next = 27;
            return _regeneratorRuntime.awrap(this.signAndInstall(_installer.UI2_SERVER_APK_PATH, apkPackage, installTimeout));

          case 27:
            if (isTestApkInstalled) {
              context$2$0.next = 30;
              break;
            }

            context$2$0.next = 30;
            return _regeneratorRuntime.awrap(this.signAndInstall(_installer.UI2_TEST_APK_PATH, testApkPackage, installTimeout, true));

          case 30:
            retries = (0, _utils.getRetries)('Server install', installTimeout, SERVER_INSTALL_RETRIES);

            _logger2['default'].debug('Waiting up to ' + retries * 1000 + 'ms for instrumentation \'' + INSTRUMENTATION_TARGET + '\' to be available');
            output = undefined;
            context$2$0.prev = 33;
            context$2$0.next = 36;
            return _regeneratorRuntime.awrap((0, _asyncbox.retryInterval)(retries, 1000, function callee$2$0() {
              var err;
              return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                  case 0:
                    context$3$0.next = 2;
                    return _regeneratorRuntime.awrap(this.adb.shell(['pm', 'list', 'instrumentation']));

                  case 2:
                    output = context$3$0.sent;

                    if (!(output.indexOf('Could not access the Package Manager') !== -1)) {
                      context$3$0.next = 9;
                      break;
                    }

                    err = new Error('Problem running package manager: ' + output);

                    output = null; // remove output, so it is not printed below
                    throw err;

                  case 9:
                    if (!(output.indexOf(INSTRUMENTATION_TARGET) === -1)) {
                      context$3$0.next = 11;
                      break;
                    }

                    throw new Error('No instrumentation process found. Retrying...');

                  case 11:
                    _logger2['default'].debug('Instrumentation \'' + INSTRUMENTATION_TARGET + '\' available');

                  case 12:
                  case 'end':
                    return context$3$0.stop();
                }
              }, null, _this);
            }));

          case 36:
            context$2$0.next = 62;
            break;

          case 38:
            context$2$0.prev = 38;
            context$2$0.t0 = context$2$0['catch'](33);

            _logger2['default'].error('Unable to find instrumentation target \'' + INSTRUMENTATION_TARGET + '\': ' + context$2$0.t0.message);

            if (!output) {
              context$2$0.next = 62;
              break;
            }

            _logger2['default'].debug('Available targets:');
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            context$2$0.prev = 46;
            for (_iterator2 = _getIterator(output.split('\n')); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              line = _step2.value;

              _logger2['default'].debug('    ' + line.replace('instrumentation:', ''));
            }
            context$2$0.next = 54;
            break;

          case 50:
            context$2$0.prev = 50;
            context$2$0.t1 = context$2$0['catch'](46);
            _didIteratorError2 = true;
            _iteratorError2 = context$2$0.t1;

          case 54:
            context$2$0.prev = 54;
            context$2$0.prev = 55;

            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }

          case 57:
            context$2$0.prev = 57;

            if (!_didIteratorError2) {
              context$2$0.next = 60;
              break;
            }

            throw _iteratorError2;

          case 60:
            return context$2$0.finish(57);

          case 61:
            return context$2$0.finish(54);

          case 62:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[33, 38], [46, 50, 54, 62], [55,, 57, 61]]);
    }
  }, {
    key: 'uninstallServerAndTest',
    value: function uninstallServerAndTest(apkPackage, testApkPackage) {
      return _regeneratorRuntime.async(function uninstallServerAndTest$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.prev = 0;
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(this.adb.uninstallApk(apkPackage));

          case 3:
            context$2$0.next = 9;
            break;

          case 5:
            context$2$0.prev = 5;
            context$2$0.t0 = context$2$0['catch'](0);

            _logger2['default'].warn('Error uninstalling \'' + apkPackage + '\': ' + context$2$0.t0.message);
            _logger2['default'].debug('Continuing');

          case 9:
            context$2$0.prev = 9;
            context$2$0.next = 12;
            return _regeneratorRuntime.awrap(this.adb.uninstallApk(testApkPackage));

          case 12:
            context$2$0.next = 18;
            break;

          case 14:
            context$2$0.prev = 14;
            context$2$0.t1 = context$2$0['catch'](9);

            _logger2['default'].warn('Error uninstalling \'' + testApkPackage + '\': ' + context$2$0.t1.message);
            _logger2['default'].debug('Continuing');

          case 18:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[0, 5], [9, 14]]);
    }
  }, {
    key: 'signAndInstall',
    value: function signAndInstall(apk, apkPackage) {
      var timeout = arguments.length <= 2 || arguments[2] === undefined ? SERVER_INSTALL_RETRIES * 1000 : arguments[2];
      var test = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
      return _regeneratorRuntime.async(function signAndInstall$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(this.checkAndSignCert(apk, apkPackage));

          case 2:
            context$2$0.next = 4;
            return _regeneratorRuntime.awrap(this.adb.install(apk, true, timeout));

          case 4:
            _logger2['default'].info('Installed UiAutomator2 server' + (test ? ' test' : '') + ' apk');

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'checkAndSignCert',
    value: function checkAndSignCert(apk, apkPackage) {
      var signed;
      return _regeneratorRuntime.async(function checkAndSignCert$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(this.adb.checkApkCert(apk, apkPackage));

          case 2:
            signed = context$2$0.sent;

            if (signed) {
              context$2$0.next = 6;
              break;
            }

            context$2$0.next = 6;
            return _regeneratorRuntime.awrap(this.adb.sign(apk));

          case 6:
            return context$2$0.abrupt('return', !signed);

          case 7:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'startSession',
    value: function startSession(caps) {
      var retries;
      return _regeneratorRuntime.async(function startSession$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(this.killUiAutomatorOnDevice());

          case 2:

            _logger2['default'].info('Starting uiautomator2 server ' + _installer.UI2_VER);

            // let cmd = ['am', 'instrument', '-w',
            //   'io.appium.uiautomator2.server.test/android.support.test.runner.AndroidJUnitRunner'];
            // this.adb.shell(cmd);
            // using 3rd party module called 'adbKit' for time being as using 'appium-adb'
            // facing IllegalStateException: UiAutomation not connected exception
            // https://github.com/appium/appium-uiautomator2-driver/issues/19

            context$2$0.next = 5;
            return _regeneratorRuntime.awrap(this.startSessionUsingAdbKit(caps.deviceUDID));

          case 5:
            retries = (0, _utils.getRetries)('Server launch', caps.uiautomator2ServerLaunchTimeout, SERVER_LAUNCH_RETRIES);

            _logger2['default'].info('Waiting up to ' + retries * 1000 + 'ms for UiAutomator2 to be online...');
            // wait for UiAutomator2 to be online
            context$2$0.next = 9;
            return _regeneratorRuntime.awrap((0, _asyncbox.retryInterval)(retries, 1000, this.jwproxy.command.bind(this.jwproxy), '/status', 'GET'));

          case 9:
            context$2$0.next = 11;
            return _regeneratorRuntime.awrap(this.jwproxy.command('/session', 'POST', { desiredCapabilities: caps }));

          case 11:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'startSessionUsingAdbKit',
    value: function startSessionUsingAdbKit(deviceUDID) {
      var cmd;
      return _regeneratorRuntime.async(function startSessionUsingAdbKit$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            cmd = 'am instrument -w';

            if (this.disableWindowAnimation) {
              cmd = cmd + ' --no-window-animation';
            }
            cmd = cmd + ' ' + INSTRUMENTATION_TARGET;
            _logger2['default'].info('Running command: \'adb -s ' + deviceUDID + ' shell ' + cmd + '\'');
            this.client.shell(deviceUDID, cmd).then(_adbkit2['default'].util.readAll) // eslint-disable-line promise/prefer-await-to-then
            .then(function (output) {
              // eslint-disable-line promise/prefer-await-to-then
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = _getIterator(output.toString().split('\n')), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var line = _step3.value;

                  if (line.length) {
                    _logger2['default'].debug('[UIAutomator2] ' + line);
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                    _iterator3['return']();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            })['catch'](function (err) {
              // eslint-disable-line promise/prefer-await-to-callbacks
              _logger2['default'].error('[UIAutomator2 Error] ' + err.message);
              _logger2['default'].debug('Full error: ' + err.stack);
            });

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'deleteSession',
    value: function deleteSession() {
      return _regeneratorRuntime.async(function deleteSession$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _logger2['default'].debug('Deleting UiAutomator2 server session');
            // rely on jwproxy's intelligence to know what we're talking about and
            // delete the current session
            context$2$0.prev = 1;
            context$2$0.next = 4;
            return _regeneratorRuntime.awrap(this.jwproxy.command('/', 'DELETE'));

          case 4:
            context$2$0.next = 9;
            break;

          case 6:
            context$2$0.prev = 6;
            context$2$0.t0 = context$2$0['catch'](1);

            _logger2['default'].warn('Did not get confirmation UiAutomator2 deleteSession worked; ' + ('Error was: ' + context$2$0.t0));

          case 9:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[1, 6]]);
    }
  }, {
    key: 'killUiAutomatorOnDevice',
    value: function killUiAutomatorOnDevice() {
      return _regeneratorRuntime.async(function killUiAutomatorOnDevice$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.prev = 0;
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(this.adb.forceStop('io.appium.uiautomator2.server'));

          case 3:
            context$2$0.next = 8;
            break;

          case 5:
            context$2$0.prev = 5;
            context$2$0.t0 = context$2$0['catch'](0);

            _logger2['default'].info("Unable to kill the io.appium.uiautomator2.server process, assuming it is already killed");

          case 8:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[0, 5]]);
    }
  }]);

  return UiAutomator2Server;
})();

exports['default'] = UiAutomator2Server;
module.exports = exports['default'];

// appending .test to apkPackage name to get test apk package name

//check server apk versionName

// kill any uiautomator existing processes
//# sourceMappingURL=data:application/json;charset=utf8;base64,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LElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRTs7Ozs7OztBQUN0QixtREFBaUIsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUhBQUU7c0JBQXZDLElBQUk7O0FBQ1gsc0JBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNmLHdDQUFPLEtBQUsscUJBQW1CLElBQUksQ0FBRyxDQUFDO21CQUN4QztpQkFDRjs7Ozs7Ozs7Ozs7Ozs7O2FBQ0YsQ0FBQyxTQUFNLENBQUMsVUFBVSxHQUFHLEVBQUU7O0FBQ3RCLGtDQUFPLEtBQUssMkJBQXlCLEdBQUcsQ0FBQyxPQUFPLENBQUcsQ0FBQztBQUNwRCxrQ0FBTyxLQUFLLGtCQUFnQixHQUFHLENBQUMsS0FBSyxDQUFHLENBQUM7YUFDMUMsQ0FBQyxDQUFDOzs7Ozs7O0tBQ047OztXQUVtQjs7OztBQUNsQixnQ0FBTyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQzs7Ozs7NkNBSTdDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Ozs7Ozs7Ozs7QUFFekMsZ0NBQU8sSUFBSSxDQUFDLGlHQUNXLENBQUMsQ0FBQzs7Ozs7OztLQUU1Qjs7O1dBRTZCOzs7Ozs7NkNBRXBCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLCtCQUErQixDQUFDOzs7Ozs7Ozs7O0FBRXpELGdDQUFPLElBQUksQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDOzs7Ozs7O0tBRTFHOzs7U0F4S0csa0JBQWtCOzs7cUJBMktULGtCQUFrQiIsImZpbGUiOiJsaWIvdWlhdXRvbWF0b3IyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSldQcm94eSB9IGZyb20gJ2FwcGl1bS1iYXNlLWRyaXZlcic7XHJcbmltcG9ydCB7IHJldHJ5SW50ZXJ2YWwgfSBmcm9tICdhc3luY2JveCc7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xyXG5pbXBvcnQgeyBVSTJfU0VSVkVSX0FQS19QQVRIIGFzIGFwa1BhdGgsIFVJMl9URVNUX0FQS19QQVRIIGFzIHRlc3RBcGtQYXRoLCBVSTJfVkVSfSBmcm9tICcuL2luc3RhbGxlcic7XHJcbmltcG9ydCBhZGJraXQgZnJvbSAnYWRia2l0JztcclxuaW1wb3J0IHsgZ2V0UmV0cmllcyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyB1dGlsIH0gZnJvbSAnYXBwaXVtLXN1cHBvcnQnO1xyXG5cclxuXHJcbmNvbnN0IFJFUURfUEFSQU1TID0gWydhZGInLCAndG1wRGlyJywgJ2hvc3QnLCAnc3lzdGVtUG9ydCcsICdkZXZpY2VQb3J0JywgJ2Rpc2FibGVXaW5kb3dBbmltYXRpb24nXTtcclxuY29uc3QgU0VSVkVSX0xBVU5DSF9SRVRSSUVTID0gMjA7XHJcbmNvbnN0IFNFUlZFUl9JTlNUQUxMX1JFVFJJRVMgPSAyMDtcclxuY29uc3QgSU5TVFJVTUVOVEFUSU9OX1RBUkdFVCA9ICdpby5hcHBpdW0udWlhdXRvbWF0b3IyLnNlcnZlci50ZXN0L2FuZHJvaWQuc3VwcG9ydC50ZXN0LnJ1bm5lci5BbmRyb2lkSlVuaXRSdW5uZXInO1xyXG5cclxuY2xhc3MgVWlBdXRvbWF0b3IyU2VydmVyIHtcclxuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XHJcbiAgICBmb3IgKGxldCByZXEgb2YgUkVRRF9QQVJBTVMpIHtcclxuICAgICAgaWYgKCFvcHRzIHx8ICF1dGlsLmhhc1ZhbHVlKG9wdHNbcmVxXSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9wdGlvbiAnJHtyZXF9JyBpcyByZXF1aXJlZCFgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzW3JlcV0gPSBvcHRzW3JlcV07XHJcbiAgICB9XHJcbiAgICB0aGlzLmp3cHJveHkgPSBuZXcgSldQcm94eSh7aG9zdDogdGhpcy5ob3N0LCBwb3J0OiB0aGlzLnN5c3RlbVBvcnR9KTtcclxuICAgIHRoaXMucHJveHlSZXFSZXMgPSB0aGlzLmp3cHJveHkucHJveHlSZXFSZXMuYmluZCh0aGlzLmp3cHJveHkpO1xyXG5cclxuICAgIHRoaXMuY2xpZW50ID0gYWRia2l0LmNyZWF0ZUNsaWVudCh7XHJcbiAgICAgIHBvcnQ6IHRoaXMuYWRiLmFkYlBvcnQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluc3RhbGxzIHRoZSBhcGtzIG9uIHRvIHRoZSBkZXZpY2Ugb3IgZW11bGF0b3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5zdGFsbFRpbWVvdXQgLSBJbnN0YWxsYXRpb24gdGltZW91dFxyXG4gICAqL1xyXG4gIGFzeW5jIGluc3RhbGxTZXJ2ZXJBcGsgKGluc3RhbGxUaW1lb3V0ID0gU0VSVkVSX0lOU1RBTExfUkVUUklFUyAqIDEwMDApIHtcclxuICAgIGNvbnN0IHNlcnZlckFwa0luZm8gPSBhd2FpdCB0aGlzLmFkYi5nZXRBcGtJbmZvKGFwa1BhdGgpO1xyXG4gICAgY29uc3QgYXBrUGFja2FnZSA9IHNlcnZlckFwa0luZm8ubmFtZTtcclxuICAgIGlmICghYXBrUGFja2FnZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCByZWFkIG1hbmlmZXN0IGluZm9ybWF0aW9uIGZyb20gJyR7YXBrUGF0aH0nLiBEb2VzIHRoZSBwYWNrYWdlIGV4aXN0IGFuZCBpcyBhY2Nlc3NpYmxlP2ApO1xyXG4gICAgfVxyXG4gICAgLy8gYXBwZW5kaW5nIC50ZXN0IHRvIGFwa1BhY2thZ2UgbmFtZSB0byBnZXQgdGVzdCBhcGsgcGFja2FnZSBuYW1lXHJcbiAgICBjb25zdCB0ZXN0QXBrUGFja2FnZSA9IGAke2Fwa1BhY2thZ2V9LnRlc3RgO1xyXG4gICAgbGV0IGlzQXBrSW5zdGFsbGVkID0gYXdhaXQgdGhpcy5hZGIuaXNBcHBJbnN0YWxsZWQoYXBrUGFja2FnZSk7XHJcbiAgICBsZXQgaXNUZXN0QXBrSW5zdGFsbGVkID0gYXdhaXQgdGhpcy5hZGIuaXNBcHBJbnN0YWxsZWQodGVzdEFwa1BhY2thZ2UpO1xyXG4gICAgaWYgKGlzQXBrSW5zdGFsbGVkIHx8IGlzVGVzdEFwa0luc3RhbGxlZCkge1xyXG4gICAgICBjb25zdCB0ZXN0UGFja2FnZUluZm8gPSBhd2FpdCB0aGlzLmFkYi5nZXRQYWNrYWdlSW5mbyhhcGtQYWNrYWdlKTtcclxuICAgICAgLy9jaGVjayBzZXJ2ZXIgYXBrIHZlcnNpb25OYW1lXHJcbiAgICAgIGNvbnN0IGFwa1ZlcnNpb24gPSBzZXJ2ZXJBcGtJbmZvLnZlcnNpb25OYW1lO1xyXG4gICAgICBjb25zdCBwa2dWZXJzaW9uID0gdGVzdFBhY2thZ2VJbmZvLnZlcnNpb25OYW1lO1xyXG4gICAgICBpZiAoIWFwa1ZlcnNpb24gfHwgIXBrZ1ZlcnNpb24gfHwgYXBrVmVyc2lvbiAhPT0gcGtnVmVyc2lvbikge1xyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgU2VydmVyIGluc3RhbGxlZCBidXQgdmVyc2lvbiAke3BrZ1ZlcnNpb259IGluc3RlYWQgb2YgJHthcGtWZXJzaW9ufS4gUmUtaW5zdGFsbGluZ2ApO1xyXG4gICAgICAgIGlzQXBrSW5zdGFsbGVkID0gaXNUZXN0QXBrSW5zdGFsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51bmluc3RhbGxTZXJ2ZXJBbmRUZXN0KGFwa1BhY2thZ2UsIHRlc3RBcGtQYWNrYWdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNBcGtJbnN0YWxsZWQpIHtcclxuICAgICAgYXdhaXQgdGhpcy5zaWduQW5kSW5zdGFsbChhcGtQYXRoLCBhcGtQYWNrYWdlLCBpbnN0YWxsVGltZW91dCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVGVzdEFwa0luc3RhbGxlZCkge1xyXG4gICAgICBhd2FpdCB0aGlzLnNpZ25BbmRJbnN0YWxsKHRlc3RBcGtQYXRoLCB0ZXN0QXBrUGFja2FnZSwgaW5zdGFsbFRpbWVvdXQsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXRyaWVzID0gZ2V0UmV0cmllcygnU2VydmVyIGluc3RhbGwnLCBpbnN0YWxsVGltZW91dCwgU0VSVkVSX0lOU1RBTExfUkVUUklFUyk7XHJcblxyXG4gICAgbG9nZ2VyLmRlYnVnKGBXYWl0aW5nIHVwIHRvICR7cmV0cmllcyAqIDEwMDB9bXMgZm9yIGluc3RydW1lbnRhdGlvbiAnJHtJTlNUUlVNRU5UQVRJT05fVEFSR0VUfScgdG8gYmUgYXZhaWxhYmxlYCk7XHJcbiAgICBsZXQgb3V0cHV0O1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgcmV0cnlJbnRlcnZhbChyZXRyaWVzLCAxMDAwLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgb3V0cHV0ID0gYXdhaXQgdGhpcy5hZGIuc2hlbGwoWydwbScsICdsaXN0JywgJ2luc3RydW1lbnRhdGlvbiddKTtcclxuICAgICAgICBpZiAob3V0cHV0LmluZGV4T2YoJ0NvdWxkIG5vdCBhY2Nlc3MgdGhlIFBhY2thZ2UgTWFuYWdlcicpICE9PSAtMSkge1xyXG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUHJvYmxlbSBydW5uaW5nIHBhY2thZ2UgbWFuYWdlcjogJHtvdXRwdXR9YCk7XHJcbiAgICAgICAgICBvdXRwdXQgPSBudWxsOyAvLyByZW1vdmUgb3V0cHV0LCBzbyBpdCBpcyBub3QgcHJpbnRlZCBiZWxvd1xyXG4gICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3V0cHV0LmluZGV4T2YoSU5TVFJVTUVOVEFUSU9OX1RBUkdFVCkgPT09IC0xKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGluc3RydW1lbnRhdGlvbiBwcm9jZXNzIGZvdW5kLiBSZXRyeWluZy4uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIuZGVidWcoYEluc3RydW1lbnRhdGlvbiAnJHtJTlNUUlVNRU5UQVRJT05fVEFSR0VUfScgYXZhaWxhYmxlYCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGxvZ2dlci5lcnJvcihgVW5hYmxlIHRvIGZpbmQgaW5zdHJ1bWVudGF0aW9uIHRhcmdldCAnJHtJTlNUUlVNRU5UQVRJT05fVEFSR0VUfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbiAgICAgIGlmIChvdXRwdXQpIHtcclxuICAgICAgICBsb2dnZXIuZGVidWcoJ0F2YWlsYWJsZSB0YXJnZXRzOicpO1xyXG4gICAgICAgIGZvciAobGV0IGxpbmUgb2Ygb3V0cHV0LnNwbGl0KCdcXG4nKSkge1xyXG4gICAgICAgICAgbG9nZ2VyLmRlYnVnKGAgICAgJHtsaW5lLnJlcGxhY2UoJ2luc3RydW1lbnRhdGlvbjonLCAnJyl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyB1bmluc3RhbGxTZXJ2ZXJBbmRUZXN0IChhcGtQYWNrYWdlLCB0ZXN0QXBrUGFja2FnZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5hZGIudW5pbnN0YWxsQXBrKGFwa1BhY2thZ2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGxvZ2dlci53YXJuKGBFcnJvciB1bmluc3RhbGxpbmcgJyR7YXBrUGFja2FnZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgICBsb2dnZXIuZGVidWcoJ0NvbnRpbnVpbmcnKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuYWRiLnVuaW5zdGFsbEFwayh0ZXN0QXBrUGFja2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgbG9nZ2VyLndhcm4oYEVycm9yIHVuaW5zdGFsbGluZyAnJHt0ZXN0QXBrUGFja2FnZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgICBsb2dnZXIuZGVidWcoJ0NvbnRpbnVpbmcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHNpZ25BbmRJbnN0YWxsIChhcGssIGFwa1BhY2thZ2UsIHRpbWVvdXQgPSBTRVJWRVJfSU5TVEFMTF9SRVRSSUVTICogMTAwMCwgdGVzdCA9IGZhbHNlKSB7XHJcbiAgICBhd2FpdCB0aGlzLmNoZWNrQW5kU2lnbkNlcnQoYXBrLCBhcGtQYWNrYWdlKTtcclxuICAgIGF3YWl0IHRoaXMuYWRiLmluc3RhbGwoYXBrLCB0cnVlLCB0aW1lb3V0KTtcclxuICAgIGxvZ2dlci5pbmZvKGBJbnN0YWxsZWQgVWlBdXRvbWF0b3IyIHNlcnZlciR7dGVzdCA/ICcgdGVzdCcgOiAnJ30gYXBrYCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjaGVja0FuZFNpZ25DZXJ0IChhcGssIGFwa1BhY2thZ2UpIHtcclxuICAgIGxldCBzaWduZWQgPSBhd2FpdCB0aGlzLmFkYi5jaGVja0Fwa0NlcnQoYXBrLCBhcGtQYWNrYWdlKTtcclxuICAgIGlmICghc2lnbmVkKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuYWRiLnNpZ24oYXBrKTtcclxuICAgIH1cclxuICAgIHJldHVybiAhc2lnbmVkO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc3RhcnRTZXNzaW9uIChjYXBzKSB7XHJcbiAgICAvLyBraWxsIGFueSB1aWF1dG9tYXRvciBleGlzdGluZyBwcm9jZXNzZXNcclxuICAgIGF3YWl0IHRoaXMua2lsbFVpQXV0b21hdG9yT25EZXZpY2UoKTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhgU3RhcnRpbmcgdWlhdXRvbWF0b3IyIHNlcnZlciAke1VJMl9WRVJ9YCk7XHJcblxyXG4gICAgLy8gbGV0IGNtZCA9IFsnYW0nLCAnaW5zdHJ1bWVudCcsICctdycsXHJcbiAgICAvLyAgICdpby5hcHBpdW0udWlhdXRvbWF0b3IyLnNlcnZlci50ZXN0L2FuZHJvaWQuc3VwcG9ydC50ZXN0LnJ1bm5lci5BbmRyb2lkSlVuaXRSdW5uZXInXTtcclxuICAgIC8vIHRoaXMuYWRiLnNoZWxsKGNtZCk7XHJcbiAgICAvLyB1c2luZyAzcmQgcGFydHkgbW9kdWxlIGNhbGxlZCAnYWRiS2l0JyBmb3IgdGltZSBiZWluZyBhcyB1c2luZyAnYXBwaXVtLWFkYidcclxuICAgIC8vIGZhY2luZyBJbGxlZ2FsU3RhdGVFeGNlcHRpb246IFVpQXV0b21hdGlvbiBub3QgY29ubmVjdGVkIGV4Y2VwdGlvblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FwcGl1bS9hcHBpdW0tdWlhdXRvbWF0b3IyLWRyaXZlci9pc3N1ZXMvMTlcclxuXHJcbiAgICBhd2FpdCB0aGlzLnN0YXJ0U2Vzc2lvblVzaW5nQWRiS2l0KGNhcHMuZGV2aWNlVURJRCk7XHJcblxyXG4gICAgbGV0IHJldHJpZXMgPSBnZXRSZXRyaWVzKCdTZXJ2ZXIgbGF1bmNoJywgY2Fwcy51aWF1dG9tYXRvcjJTZXJ2ZXJMYXVuY2hUaW1lb3V0LCBTRVJWRVJfTEFVTkNIX1JFVFJJRVMpO1xyXG5cclxuICAgIGxvZ2dlci5pbmZvKGBXYWl0aW5nIHVwIHRvICR7cmV0cmllcyAqIDEwMDB9bXMgZm9yIFVpQXV0b21hdG9yMiB0byBiZSBvbmxpbmUuLi5gKTtcclxuICAgIC8vIHdhaXQgZm9yIFVpQXV0b21hdG9yMiB0byBiZSBvbmxpbmVcclxuICAgIGF3YWl0IHJldHJ5SW50ZXJ2YWwocmV0cmllcywgMTAwMCwgdGhpcy5qd3Byb3h5LmNvbW1hbmQuYmluZCh0aGlzLmp3cHJveHkpLCAnL3N0YXR1cycsICdHRVQnKTtcclxuICAgIGF3YWl0IHRoaXMuandwcm94eS5jb21tYW5kKCcvc2Vzc2lvbicsICdQT1NUJywge2Rlc2lyZWRDYXBhYmlsaXRpZXM6IGNhcHN9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHN0YXJ0U2Vzc2lvblVzaW5nQWRiS2l0IChkZXZpY2VVRElEKSB7XHJcbiAgICBsZXQgY21kID0gJ2FtIGluc3RydW1lbnQgLXcnO1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZVdpbmRvd0FuaW1hdGlvbikge1xyXG4gICAgICBjbWQgPSBgJHtjbWR9IC0tbm8td2luZG93LWFuaW1hdGlvbmA7XHJcbiAgICB9XHJcbiAgICBjbWQgPSBgJHtjbWR9ICR7SU5TVFJVTUVOVEFUSU9OX1RBUkdFVH1gO1xyXG4gICAgbG9nZ2VyLmluZm8oYFJ1bm5pbmcgY29tbWFuZDogJ2FkYiAtcyAke2RldmljZVVESUR9IHNoZWxsICR7Y21kfSdgKTtcclxuICAgIHRoaXMuY2xpZW50LnNoZWxsKGRldmljZVVESUQsIGNtZClcclxuICAgICAgLnRoZW4oYWRia2l0LnV0aWwucmVhZEFsbCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcm9taXNlL3ByZWZlci1hd2FpdC10by10aGVuXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChvdXRwdXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcm9taXNlL3ByZWZlci1hd2FpdC10by10aGVuXHJcbiAgICAgICAgZm9yIChsZXQgbGluZSBvZiBvdXRwdXQudG9TdHJpbmcoKS5zcGxpdCgnXFxuJykpIHtcclxuICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoYFtVSUF1dG9tYXRvcjJdICR7bGluZX1gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcm9taXNlL3ByZWZlci1hd2FpdC10by1jYWxsYmFja3NcclxuICAgICAgICBsb2dnZXIuZXJyb3IoYFtVSUF1dG9tYXRvcjIgRXJyb3JdICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBGdWxsIGVycm9yOiAke2Vyci5zdGFja31gKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBkZWxldGVTZXNzaW9uICgpIHtcclxuICAgIGxvZ2dlci5kZWJ1ZygnRGVsZXRpbmcgVWlBdXRvbWF0b3IyIHNlcnZlciBzZXNzaW9uJyk7XHJcbiAgICAvLyByZWx5IG9uIGp3cHJveHkncyBpbnRlbGxpZ2VuY2UgdG8ga25vdyB3aGF0IHdlJ3JlIHRhbGtpbmcgYWJvdXQgYW5kXHJcbiAgICAvLyBkZWxldGUgdGhlIGN1cnJlbnQgc2Vzc2lvblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5qd3Byb3h5LmNvbW1hbmQoJy8nLCAnREVMRVRFJyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgbG9nZ2VyLndhcm4oYERpZCBub3QgZ2V0IGNvbmZpcm1hdGlvbiBVaUF1dG9tYXRvcjIgZGVsZXRlU2Vzc2lvbiB3b3JrZWQ7IGAgK1xyXG4gICAgICAgICAgYEVycm9yIHdhczogJHtlcnJ9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBraWxsVWlBdXRvbWF0b3JPbkRldmljZSAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCB0aGlzLmFkYi5mb3JjZVN0b3AoJ2lvLmFwcGl1bS51aWF1dG9tYXRvcjIuc2VydmVyJyk7XHJcbiAgICB9IGNhdGNoIChpZ25vcmUpIHtcclxuICAgICAgbG9nZ2VyLmluZm8oXCJVbmFibGUgdG8ga2lsbCB0aGUgaW8uYXBwaXVtLnVpYXV0b21hdG9yMi5zZXJ2ZXIgcHJvY2VzcywgYXNzdW1pbmcgaXQgaXMgYWxyZWFkeSBraWxsZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVaUF1dG9tYXRvcjJTZXJ2ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uIn0=
