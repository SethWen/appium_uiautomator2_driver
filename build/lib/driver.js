'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _defineProperty = require('babel-runtime/helpers/define-property')['default'];

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _appiumBaseDriver = require('appium-base-driver');

var _uiautomator2 = require('./uiautomator2');

var _uiautomator22 = _interopRequireDefault(_uiautomator2);

var _appiumSupport = require('appium-support');

var _asyncbox = require('asyncbox');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _commandsIndex = require('./commands/index');

var _commandsIndex2 = _interopRequireDefault(_commandsIndex);

var _appiumAdb = require('appium-adb');

var _helpers = require('./helpers');

var uiautomator2Helpers = _interopRequireWildcard(_helpers);

var _appiumAndroidDriver = require('appium-android-driver');

var _desiredCaps = require('./desired-caps');

var _desiredCaps2 = _interopRequireDefault(_desiredCaps);

var _portscanner = require('portscanner');

var helpers = _Object$assign({}, uiautomator2Helpers, _appiumAndroidDriver.androidHelpers);

// The range of ports we can use on the system for communicating to the
// UiAutomator2 HTTP server on the device
var SYSTEM_PORT_RANGE = [8200, 8299];

// This is the port that UiAutomator2 listens to on the device. We will forward
// one of the ports above on the system to this port on the device.
var DEVICE_PORT = 6790;

// NO_PROXY contains the paths that we never want to proxy to UiAutomator2 server.
// TODO:  Add the list of paths that we never want to proxy to UiAutomator2 server.
// TODO: Need to segregate the paths better way using regular expressions wherever applicable.
// (Not segregating right away because more paths to be added in the NO_PROXY list)
var NO_PROXY = [['POST', new RegExp('^/session/[^/]+/touch/multi/perform')], ['POST', new RegExp('^/session/[^/]+/touch/perform')], ['POST', new RegExp('^/session/[^/]+/element')], ['POST', new RegExp('^/session/[^/]+/appium/element/[^/]+/value')], ['POST', new RegExp('^/session/[^/]+/appium/element/[^/]+/replace_value')], ['GET', new RegExp('^/session/[^/]+/appium/[^/]+/current_activity')], ['GET', new RegExp('^/session/[^/]+/appium/[^/]+/current_package')], ['POST', new RegExp('^/session/[^/]+/appium/[^/]+/start_activity')], ['POST', new RegExp('^/session/[^/]+/ime/activate')], ['POST', new RegExp('^/session/[^/]+/ime/deactivate')], ['GET', new RegExp('^/session/[^/]+/ime/active_engine')], ['GET', new RegExp('^/session/[^/]+/ime/available_engines')], ['GET', new RegExp('^/session/[^/]+/url')], ['POST', new RegExp('^/session/[^/]+/url')], ['POST', new RegExp('^/session/[^/]+/app/[^/]')], ['POST', new RegExp('^/session/[^/]+/location')], ['GET', new RegExp('^/session/[^/]+/element/[^/]+/location_in_view')], ['GET', new RegExp('^/session/[^/]+/appium/device/system_time')], ['POST', new RegExp('^/session/[^/]+/appium/settings')], ['GET', new RegExp('^/session/[^/]+/appium/settings')], ['POST', new RegExp('^/session/[^/]+/appium/device/app_installed')], ['POST', new RegExp('^/session/[^/]+/appium/device/lock')], ['POST', new RegExp('^/session/[^/]+/appium/app/close')], ['POST', new RegExp('^/session/[^/]+/appium/app/launch')], ['POST', new RegExp('^/session/[^/]+/appium/device/pull_file')], ['POST', new RegExp('^/session/[^/]+/appium/device/pull_folder')], ['POST', new RegExp('^/session/[^/]+/appium/device/push_file')], ['POST', new RegExp('^/session/[^/]+/appium/app/reset')], ['POST', new RegExp('^/session/[^/]+/appium/app/background')], ['POST', new RegExp('^/session/[^/]+/appium/device/toggle_location_services')], ['POST', new RegExp('^/session/[^/]+/appium/device/is_locked')], ['POST', new RegExp('^/session/[^/]+/appium/device/unlock')], ['POST', new RegExp('^/session/[^/]+/appium/device/press_keycode')], ['POST', new RegExp('^/session/[^/]+/appium/device/long_press_keycode')], ['POST', new RegExp('^/session/[^/]+/appium/app/end_test_coverage')], ['GET', new RegExp('^/session/[^/]+/contexts')], ['POST', new RegExp('^/session/[^/]+/context')], ['GET', new RegExp('^/session/[^/]+/context')], ['POST', new RegExp('^/session/[^/]+/network_connection')], ['GET', new RegExp('^/session/[^/]+/network_connection')], ['POST', new RegExp('^/session/[^/]+/timeouts')], ['GET', new RegExp('^/session/[^/]+/screenshot')], ['GET', new RegExp('^/session/[^/]+/element/[^/]+/attribute')], ['GET', new RegExp('^/session/[^/]+/element/[^/]+/enabled')], ['GET', new RegExp('^/session/[^/]+/element/[^/]+/selected')], ['GET', new RegExp('^/session/[^/]+/element/[^/]+/displayed')], ['GET', new RegExp('^/session/[^/]+/element/[^/]+/name')], ['GET', new RegExp('^/session/[^/]+/element/[^/]+/screenshot')], ['GET', new RegExp('^/session/(?!.*\/)')], ['POST', new RegExp('^/session/[^/]+/keys')], ['POST', new RegExp('^/session/[^/]+/appium/device/hide_keyboard')], ['POST', new RegExp('^/session/[^/]+/log')], ['GET', new RegExp('^/session/[^/]+/log/types')], ['POST', new RegExp('^/session/[^/]+/appium/device/remove_app')], ['POST', new RegExp('^/session/[^/]+/appium/device/install_app')], ['GET', new RegExp('^/session/[^/]+/appium/device/current_package')], ['GET', new RegExp('^/session/[^/]+/appium/device/display_density')], ['GET', new RegExp('^/session/[^/]+/appium/device/system_bars')], ['GET', new RegExp('^/session/[^/]+/appium/device/is_keyboard_shown')], ['POST', new RegExp('^/session/[^/]+/appium/app/strings')], ['POST', new RegExp('^/session/[^/]+/appium/getPerformanceData')], ['POST', new RegExp('^/session/[^/]+/appium/performanceData/types')], ['POST', new RegExp('^/session/[^/]+/appium/start_recording_screen')], ['POST', new RegExp('^/session/[^/]+/appium/stop_recording_screen')], ['GET', new RegExp('^/session/[^/]+/ime/available_engines')], ['GET', new RegExp('^/session/[^/]+/ime/active_engine')], ['GET', new RegExp('^/session/[^/]+/ime/activated')], ['POST', new RegExp('^/session/[^/]+/ime/deactivate')], ['POST', new RegExp('^/session/[^/]+/ime/activate')],
// MJSONWP commands
['POST', new RegExp('^/session/[^/]+/execute')], ['POST', new RegExp('^/session/[^/]+/execute_async')],
// W3C commands
['POST', new RegExp('^/session/[^/]+/execute/sync')], ['POST', new RegExp('^/session/[^/]+/execute/async')]];

// This is a set of methods and paths that we never want to proxy to Chromedriver.
var CHROME_NO_PROXY = [['POST', new RegExp('^/session/[^/]+/context')], ['GET', new RegExp('^/session/[^/]+/context')], ['POST', new RegExp('^/session/[^/]+/appium')], ['GET', new RegExp('^/session/[^/]+/appium')], ['POST', new RegExp('^/session/[^/]+/touch/perform')], ['POST', new RegExp('^/session/[^/]+/touch/multi/perform')], ['POST', new RegExp('^/session/[^/]+/orientation')], ['GET', new RegExp('^/session/[^/]+/orientation')]];
var APP_EXTENSION = '.apk';

var AndroidUiautomator2Driver = (function (_BaseDriver) {
  _inherits(AndroidUiautomator2Driver, _BaseDriver);

  function AndroidUiautomator2Driver() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var shouldValidateCaps = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    _classCallCheck(this, AndroidUiautomator2Driver);

    // `shell` overwrites adb.shell, so remove
    delete opts.shell;

    _get(Object.getPrototypeOf(AndroidUiautomator2Driver.prototype), 'constructor', this).call(this, opts, shouldValidateCaps);
    this.locatorStrategies = ['xpath', 'id', 'class name', 'accessibility id', '-android uiautomator'];
    this.desiredCapConstraints = _desiredCaps2['default'];
    this.uiautomator2 = null;
    this.jwpProxyActive = false;
    this.defaultIME = null;
    this.jwpProxyAvoid = NO_PROXY;
    this.apkStrings = {}; // map of language -> strings obj

    this.settings = new _appiumBaseDriver.DeviceSettings({ ignoreUnimportantViews: false, allowInvisibleElements: false }, this.onSettingsUpdate.bind(this));
    // handle webview mechanics from AndroidDriver
    this.chromedriver = null;
    this.sessionChromedrivers = {};
  }

  // first add the android-driver commands which we will fall back to

  _createClass(AndroidUiautomator2Driver, [{
    key: 'createSession',
    value: function createSession() {
      var _len,
          args,
          _key,
          _ref,
          _ref2,
          sessionId,
          caps,
          serverDetails,
          defaultOpts,
          _helpers$getChromePkg,
          pkg,
          activity,
          args$2$0 = arguments;

      return _regeneratorRuntime.async(function createSession$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.prev = 0;

            for (_len = args$2$0.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = args$2$0[_key];
            }

            context$2$0.next = 4;
            return _regeneratorRuntime.awrap(_get(Object.getPrototypeOf(AndroidUiautomator2Driver.prototype), 'createSession', this).apply(this, args));

          case 4:
            _ref = context$2$0.sent;
            _ref2 = _slicedToArray(_ref, 2);
            sessionId = _ref2[0];
            caps = _ref2[1];
            serverDetails = { platform: 'LINUX',
              webStorageEnabled: false,
              takesScreenshot: true,
              javascriptEnabled: true,
              databaseEnabled: false,
              networkConnectionEnabled: true,
              locationContextEnabled: false,
              warnings: {},
              desired: this.caps };

            this.caps = _Object$assign(serverDetails, this.caps);

            this.curContext = this.defaultContextName();

            defaultOpts = {
              fullReset: false,
              autoLaunch: true,
              adbPort: _appiumAdb.DEFAULT_ADB_PORT,
              androidInstallTimeout: 90000
            };

            _lodash2['default'].defaults(this.opts, defaultOpts);

            if (this.isChromeSession) {
              _logger2['default'].info("We're going to run a Chrome-based session");
              _helpers$getChromePkg = helpers.getChromePkg(this.opts.browserName);
              pkg = _helpers$getChromePkg.pkg;
              activity = _helpers$getChromePkg.activity;

              this.opts.appPackage = this.caps.appPackage = pkg;
              this.opts.appActivity = this.caps.appActivity = activity;
              _logger2['default'].info('Chrome-type package and activity are ' + pkg + ' and ' + activity);
            }

            if (this.opts.reboot) {
              this.setAvdFromCapabilities(caps);
              this.addWipeDataToAvdArgs();
            }

            if (!this.opts.app) {
              context$2$0.next = 23;
              break;
            }

            context$2$0.next = 18;
            return _regeneratorRuntime.awrap(this.helpers.configureApp(this.opts.app, APP_EXTENSION));

          case 18:
            this.opts.app = context$2$0.sent;
            context$2$0.next = 21;
            return _regeneratorRuntime.awrap(this.checkAppPresent());

          case 21:
            context$2$0.next = 27;
            break;

          case 23:
            if (!this.appOnDevice) {
              context$2$0.next = 27;
              break;
            }

            // the app isn't an actual app file but rather something we want to
            // assume is on the device and just launch via the appPackage
            _logger2['default'].info('App file was not listed, instead we\'re going to run ' + (this.opts.appPackage + ' directly on the device'));
            context$2$0.next = 27;
            return _regeneratorRuntime.awrap(this.checkPackagePresent());

          case 27:
            context$2$0.t0 = this.opts.systemPort;

            if (context$2$0.t0) {
              context$2$0.next = 32;
              break;
            }

            context$2$0.next = 31;
            return _regeneratorRuntime.awrap((0, _portscanner.findAPortNotInUse)(SYSTEM_PORT_RANGE[0], SYSTEM_PORT_RANGE[1]));

          case 31:
            context$2$0.t0 = context$2$0.sent;

          case 32:
            this.opts.systemPort = context$2$0.t0;

            this.opts.adbPort = this.opts.adbPort || _appiumAdb.DEFAULT_ADB_PORT;

            context$2$0.next = 36;
            return _regeneratorRuntime.awrap(this.startUiAutomator2Session());

          case 36:
            return context$2$0.abrupt('return', [sessionId, caps]);

          case 39:
            context$2$0.prev = 39;
            context$2$0.t1 = context$2$0['catch'](0);
            context$2$0.next = 43;
            return _regeneratorRuntime.awrap(this.deleteSession());

          case 43:
            throw context$2$0.t1;

          case 44:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[0, 39]]);
    }
  }, {
    key: 'isEmulator',
    value: function isEmulator() {
      return !!this.opts.avd;
    }
  }, {
    key: 'setAvdFromCapabilities',
    value: function setAvdFromCapabilities(caps) {
      if (this.opts.avd) {
        _logger2['default'].info('avd name defined, ignoring device name and platform version');
      } else {
        if (!caps.deviceName) {
          _logger2['default'].errorAndThrow('avd or deviceName should be specified when reboot option is enables');
        }
        if (!caps.platformVersion) {
          _logger2['default'].errorAndThrow('avd or platformVersion should be specified when reboot option is enabled');
        }
        var avdDevice = caps.deviceName.replace(/[^a-zA-Z0-9_.]/g, "-");
        this.opts.avd = avdDevice + '__' + caps.platformVersion;
      }
    }
  }, {
    key: 'addWipeDataToAvdArgs',
    value: function addWipeDataToAvdArgs() {
      if (!this.opts.avdArgs) {
        this.opts.avdArgs = '-wipe-data';
      } else if (this.opts.avdArgs.toLowerCase().indexOf("-wipe-data") === -1) {
        this.opts.avdArgs += ' -wipe-data';
      }
    }
  }, {
    key: 'startUiAutomator2Session',
    value: function startUiAutomator2Session() {
      var _ref3,

      // get device udid for this session
      udid, emPort, appInfo;

      return _regeneratorRuntime.async(function startUiAutomator2Session$(context$2$0) {
        var _this = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            if (this.opts.javaVersion) {
              context$2$0.next = 4;
              break;
            }

            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(helpers.getJavaVersion());

          case 3:
            this.opts.javaVersion = context$2$0.sent;

          case 4:
            context$2$0.next = 6;
            return _regeneratorRuntime.awrap(helpers.getDeviceInfoFromCaps(this.opts));

          case 6:
            _ref3 = context$2$0.sent;
            udid = _ref3.udid;
            emPort = _ref3.emPort;

            this.opts.udid = udid;
            this.opts.emPort = emPort;

            // now that we know our java version and device info, we can create our
            // ADB instance
            context$2$0.next = 13;
            return _regeneratorRuntime.awrap(_appiumAndroidDriver.androidHelpers.createADB(this.opts.javaVersion, this.opts.udid, this.opts.emPort, this.opts.adbPort, this.opts.suppressKillServer, this.opts.remoteAdbHost, this.opts.clearDeviceLogsOnStart));

          case 13:
            this.adb = context$2$0.sent;
            context$2$0.next = 16;
            return _regeneratorRuntime.awrap(this.adb.getApiLevel());

          case 16:
            context$2$0.t0 = context$2$0.sent;

            if (!(context$2$0.t0 < 21)) {
              context$2$0.next = 19;
              break;
            }

            _logger2['default'].errorAndThrow('UIAutomation2 is only supported since Android 5.0 (Lollipop). ' + 'You could still use other supported backends in order to automate older Android versions.');

          case 19:
            context$2$0.next = 21;
            return _regeneratorRuntime.awrap(helpers.getLaunchInfo(this.adb, this.opts));

          case 21:
            appInfo = context$2$0.sent;

            // and get it onto our 'opts' object so we use it from now on
            _Object$assign(this.opts, appInfo);

            // set actual device name, udid, platform version, screen size, screen density, model and manufacturer details
            this.caps.deviceName = this.adb.curDeviceId;
            this.caps.deviceUDID = this.opts.udid;
            this.caps.platformVersion = '';
            this.caps.deviceScreenSize = '';
            this.caps.deviceScreenDensity = '';
            this.caps.deviceModel = '';
            this.caps.deviceManufacturer = '';

            // set up the modified UiAutomator2 server etc
            context$2$0.next = 32;
            return _regeneratorRuntime.awrap(this.initUiAutomator2Server());

          case 32:
            context$2$0.next = 34;
            return _regeneratorRuntime.awrap(helpers.initDevice(this.adb, this.opts));

          case 34:
            this.defaultIME = context$2$0.sent;

            // Further prepare the device by forwarding the UiAutomator2 port
            _logger2['default'].debug('Forwarding UiAutomator2 Server port ' + DEVICE_PORT + ' to ' + this.opts.systemPort);
            context$2$0.next = 38;
            return _regeneratorRuntime.awrap(this.adb.forwardPort(this.opts.systemPort, DEVICE_PORT));

          case 38:
            if (this.opts.skipUnlock) {
              context$2$0.next = 43;
              break;
            }

            context$2$0.next = 41;
            return _regeneratorRuntime.awrap(helpers.unlock(this, this.adb, this.caps));

          case 41:
            context$2$0.next = 44;
            break;

          case 43:
            _logger2['default'].debug('\'skipUnlock\' capability set, so skipping device unlock');

          case 44:
            if (!this.opts.autoLaunch) {
              context$2$0.next = 47;
              break;
            }

            context$2$0.next = 47;
            return _regeneratorRuntime.awrap(this.initAUT());

          case 47:
            // Adding AUT package name in the capabilities if package name not exist in caps
            if (!this.caps.appPackage && appInfo) {
              this.caps.appPackage = appInfo.appPackage;
            }

            // launch UiAutomator2 and wait till its online and we have a session
            context$2$0.next = 50;
            return _regeneratorRuntime.awrap(this.uiautomator2.startSession(this.caps));

          case 50:
            if (!this.opts.autoLaunch) {
              context$2$0.next = 53;
              break;
            }

            context$2$0.next = 53;
            return _regeneratorRuntime.awrap(this.ensureAppStarts());

          case 53:
            if (!_appiumSupport.util.hasValue(this.opts.orientation)) {
              context$2$0.next = 57;
              break;
            }

            _logger2['default'].debug('Setting initial orientation to \'' + this.opts.orientation + '\'');
            context$2$0.next = 57;
            return _regeneratorRuntime.awrap(this.setOrientation(this.opts.orientation));

          case 57:
            if (!this.opts.autoWebview) {
              context$2$0.next = 60;
              break;
            }

            context$2$0.next = 60;
            return _regeneratorRuntime.awrap((0, _asyncbox.retryInterval)(20, this.opts.autoWebviewTimeout || 2000, function callee$2$0() {
              return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                  case 0:
                    context$3$0.next = 2;
                    return _regeneratorRuntime.awrap(this.setContext(this.defaultWebviewName()));

                  case 2:
                  case 'end':
                    return context$3$0.stop();
                }
              }, null, _this);
            }));

          case 60:
            if (!this.isChromeSession) {
              context$2$0.next = 63;
              break;
            }

            context$2$0.next = 63;
            return _regeneratorRuntime.awrap(_appiumAndroidDriver.AndroidDriver.prototype.startChromeSession.call(this));

          case 63:

            // now that everything has started successfully, turn on proxying so all
            // subsequent session requests go straight to/from uiautomator2
            this.jwpProxyActive = true;

          case 64:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'initUiAutomator2Server',
    value: function initUiAutomator2Server() {
      return _regeneratorRuntime.async(function initUiAutomator2Server$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            // now that we have package and activity, we can create an instance of
            // uiautomator2 with the appropriate data
            this.uiautomator2 = new _uiautomator22['default']({
              host: this.opts.host || 'localhost',
              systemPort: this.opts.systemPort,
              devicePort: DEVICE_PORT,
              adb: this.adb,
              apk: this.opts.app,
              tmpDir: this.opts.tmpDir,
              appPackage: this.opts.appPackage,
              appActivity: this.opts.appActivity,
              disableWindowAnimation: !!this.opts.disableWindowAnimation
            });
            this.proxyReqRes = this.uiautomator2.proxyReqRes.bind(this.uiautomator2);

            // killing any uiautomator existing processes
            context$2$0.next = 4;
            return _regeneratorRuntime.awrap(this.uiautomator2.killUiAutomatorOnDevice());

          case 4:
            context$2$0.next = 6;
            return _regeneratorRuntime.awrap(this.uiautomator2.installServerApk(this.opts.uiautomator2ServerInstallTimeout));

          case 6:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'initAUT',
    value: function initAUT() {
      var signed;
      return _regeneratorRuntime.async(function initAUT$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(_appiumAndroidDriver.androidHelpers.pushStrings(this.opts.language, this.adb, this.opts));

          case 2:
            this.apkStrings[this.opts.language] = context$2$0.sent;

            if (this.opts.app) {
              context$2$0.next = 9;
              break;
            }

            if (this.opts.fullReset) {
              _logger2['default'].errorAndThrow('Full reset requires an app capability, use fastReset if app is not provided');
            }
            _logger2['default'].debug('No app capability. Assuming it is already on the device');

            if (!this.opts.fastReset) {
              context$2$0.next = 9;
              break;
            }

            context$2$0.next = 9;
            return _regeneratorRuntime.awrap(helpers.resetApp(this.adb, this.opts.app, this.opts.appPackage, this.opts.fastReset));

          case 9:
            if (this.opts.skipUninstall) {
              context$2$0.next = 12;
              break;
            }

            context$2$0.next = 12;
            return _regeneratorRuntime.awrap(this.adb.uninstallApk(this.opts.appPackage));

          case 12:
            if (this.opts.noSign) {
              context$2$0.next = 19;
              break;
            }

            context$2$0.next = 15;
            return _regeneratorRuntime.awrap(this.adb.checkApkCert(this.opts.app, this.opts.appPackage));

          case 15:
            signed = context$2$0.sent;

            if (!(!signed && this.opts.app)) {
              context$2$0.next = 19;
              break;
            }

            context$2$0.next = 19;
            return _regeneratorRuntime.awrap(this.adb.sign(this.opts.app, this.opts.appPackage));

          case 19:
            if (!this.opts.app) {
              context$2$0.next = 22;
              break;
            }

            context$2$0.next = 22;
            return _regeneratorRuntime.awrap(helpers.installApkRemotely(this.adb, this.opts));

          case 22:
            context$2$0.next = 24;
            return _regeneratorRuntime.awrap(this.grantPermissions());

          case 24:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'grantPermissions',
    value: function grantPermissions() {
      return _regeneratorRuntime.async(function grantPermissions$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            if (!this.opts.autoGrantPermissions) {
              context$2$0.next = 9;
              break;
            }

            context$2$0.prev = 1;
            context$2$0.next = 4;
            return _regeneratorRuntime.awrap(this.adb.grantAllPermissions(this.opts.appPackage, this.opts.app));

          case 4:
            context$2$0.next = 9;
            break;

          case 6:
            context$2$0.prev = 6;
            context$2$0.t0 = context$2$0['catch'](1);

            _logger2['default'].error('Unable to grant permissions requested. Original error: ' + context$2$0.t0.message);

          case 9:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[1, 6]]);
    }
  }, {
    key: 'ensureAppStarts',
    value: function ensureAppStarts() {
      var appWaitPackage, appWaitActivity;
      return _regeneratorRuntime.async(function ensureAppStarts$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            appWaitPackage = this.opts.appWaitPackage || this.opts.appPackage;
            appWaitActivity = this.opts.appWaitActivity || this.opts.appActivity;

            _logger2['default'].info('UiAutomator2 did not start the activity we were waiting for, ' + ('\'' + appWaitPackage + '/' + appWaitActivity + '\'. ') + 'Starting it ourselves');

            if (!this.caps.androidCoverage) {
              context$2$0.next = 9;
              break;
            }

            _logger2['default'].info('androidCoverage is configured. ' + (' Starting instrumentation of \'' + this.caps.androidCoverage + '\'...'));
            context$2$0.next = 7;
            return _regeneratorRuntime.awrap(this.adb.androidCoverage(this.caps.androidCoverage, appWaitPackage, appWaitActivity));

          case 7:
            context$2$0.next = 11;
            break;

          case 9:
            context$2$0.next = 11;
            return _regeneratorRuntime.awrap(this.adb.startApp({
              pkg: this.opts.appPackage,
              activity: this.opts.appActivity,
              action: this.opts.intentAction,
              category: this.opts.intentCategory,
              flags: this.opts.intentFlags,
              waitPkg: this.opts.appWaitPackage,
              waitActivity: this.opts.appWaitActivity,
              optionalIntentArguments: this.opts.optionalIntentArguments,
              stopApp: !this.opts.dontStopAppOnReset,
              retry: false
            }));

          case 11:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'deleteSession',
    value: function deleteSession() {
      var avdName;
      return _regeneratorRuntime.async(function deleteSession$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _logger2['default'].debug('Deleting UiAutomator2 session');

            if (!this.uiautomator2) {
              context$2$0.next = 20;
              break;
            }

            context$2$0.prev = 2;
            context$2$0.next = 5;
            return _regeneratorRuntime.awrap(this.stopChromedriverProxies());

          case 5:
            context$2$0.next = 10;
            break;

          case 7:
            context$2$0.prev = 7;
            context$2$0.t0 = context$2$0['catch'](2);

            _logger2['default'].warn('Unable to stop ChromeDriver proxies: ' + context$2$0.t0.message);

          case 10:
            if (!this.jwpProxyActive) {
              context$2$0.next = 19;
              break;
            }

            context$2$0.prev = 11;
            context$2$0.next = 14;
            return _regeneratorRuntime.awrap(this.uiautomator2.deleteSession());

          case 14:
            context$2$0.next = 19;
            break;

          case 16:
            context$2$0.prev = 16;
            context$2$0.t1 = context$2$0['catch'](11);

            _logger2['default'].warn('Unable to proxy deleteSession to UiAutomator2: ' + context$2$0.t1.message);

          case 19:
            this.uiautomator2 = null;

          case 20:
            this.jwpProxyActive = false;

            if (!this.adb) {
              context$2$0.next = 75;
              break;
            }

            if (!(this.opts.unicodeKeyboard && this.opts.resetKeyboard && this.defaultIME)) {
              context$2$0.next = 32;
              break;
            }

            _logger2['default'].debug('Resetting IME to \'' + this.defaultIME + '\'');
            context$2$0.prev = 24;
            context$2$0.next = 27;
            return _regeneratorRuntime.awrap(this.adb.setIME(this.defaultIME));

          case 27:
            context$2$0.next = 32;
            break;

          case 29:
            context$2$0.prev = 29;
            context$2$0.t2 = context$2$0['catch'](24);

            _logger2['default'].warn('Unable to reset IME: ' + context$2$0.t2.message);

          case 32:
            if (!this.caps.androidCoverage) {
              context$2$0.next = 43;
              break;
            }

            _logger2['default'].info('Shutting down the adb process of instrumentation...');
            context$2$0.next = 36;
            return _regeneratorRuntime.awrap(this.adb.endAndroidCoverage());

          case 36:
            if (!this.caps.androidCoverageEndIntent) {
              context$2$0.next = 42;
              break;
            }

            _logger2['default'].info('Sending intent broadcast \'' + this.caps.androidCoverageEndIntent + '\' at the end of instrumenting.');
            context$2$0.next = 40;
            return _regeneratorRuntime.awrap(this.adb.broadcast(this.caps.androidCoverageEndIntent));

          case 40:
            context$2$0.next = 43;
            break;

          case 42:
            _logger2['default'].warn('No androidCoverageEndIntent is configured in caps. Possibly you cannot get coverage file.');

          case 43:
            if (!this.opts.appPackage) {
              context$2$0.next = 52;
              break;
            }

            context$2$0.prev = 44;
            context$2$0.next = 47;
            return _regeneratorRuntime.awrap(this.adb.forceStop(this.opts.appPackage));

          case 47:
            context$2$0.next = 52;
            break;

          case 49:
            context$2$0.prev = 49;
            context$2$0.t3 = context$2$0['catch'](44);

            _logger2['default'].warn('Unable to force stop app: ' + context$2$0.t3.message);

          case 52:
            if (!(this.opts.fullReset && !this.opts.skipUninstall && !this.appOnDevice)) {
              context$2$0.next = 62;
              break;
            }

            _logger2['default'].debug('Capability \'fullReset\' set to \'true\', Uninstalling \'' + this.opts.appPackage + '\'');
            context$2$0.prev = 54;
            context$2$0.next = 57;
            return _regeneratorRuntime.awrap(this.adb.uninstallApk(this.opts.appPackage));

          case 57:
            context$2$0.next = 62;
            break;

          case 59:
            context$2$0.prev = 59;
            context$2$0.t4 = context$2$0['catch'](54);

            _logger2['default'].warn('Unable to uninstall app: ' + context$2$0.t4.message);

          case 62:
            context$2$0.next = 64;
            return _regeneratorRuntime.awrap(this.adb.stopLogcat());

          case 64:
            if (!this.opts.reboot) {
              context$2$0.next = 75;
              break;
            }

            avdName = this.opts.avd.replace('@', '');

            _logger2['default'].debug('Closing emulator \'' + avdName + '\'');
            context$2$0.prev = 67;
            context$2$0.next = 70;
            return _regeneratorRuntime.awrap(this.adb.killEmulator(avdName));

          case 70:
            context$2$0.next = 75;
            break;

          case 72:
            context$2$0.prev = 72;
            context$2$0.t5 = context$2$0['catch'](67);

            _logger2['default'].warn('Unable to close emulator: ' + context$2$0.t5.message);

          case 75:
            context$2$0.next = 77;
            return _regeneratorRuntime.awrap(_get(Object.getPrototypeOf(AndroidUiautomator2Driver.prototype), 'deleteSession', this).call(this));

          case 77:
            if (!(this.opts.systemPort !== undefined && this.adb)) {
              context$2$0.next = 86;
              break;
            }

            context$2$0.prev = 78;
            context$2$0.next = 81;
            return _regeneratorRuntime.awrap(this.adb.removePortForward(this.opts.systemPort));

          case 81:
            context$2$0.next = 86;
            break;

          case 83:
            context$2$0.prev = 83;
            context$2$0.t6 = context$2$0['catch'](78);

            _logger2['default'].warn('Unable to remove port forward \'' + context$2$0.t6.message + '\'');
            //Ignore, this block will also be called when we fall in catch block
            // and before even port forward.

          case 86:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[2, 7], [11, 16], [24, 29], [44, 49], [54, 59], [67, 72], [78, 83]]);
    }
  }, {
    key: 'checkAppPresent',
    value: function checkAppPresent() {
      return _regeneratorRuntime.async(function checkAppPresent$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _logger2['default'].debug('Checking whether app is actually present');
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(_appiumSupport.fs.exists(this.opts.app));

          case 3:
            if (context$2$0.sent) {
              context$2$0.next = 5;
              break;
            }

            _logger2['default'].errorAndThrow('Could not find app apk at \'' + this.opts.app + '\'');

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'defaultWebviewName',
    value: function defaultWebviewName() {
      return _appiumAndroidDriver.WEBVIEW_BASE + '0';
    }
  }, {
    key: 'onSettingsUpdate',
    value: function onSettingsUpdate(key, value) {
      var settings;
      return _regeneratorRuntime.async(function onSettingsUpdate$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            settings = _defineProperty({}, key, value);
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/appium/settings', 'POST', { settings: settings }));

          case 3:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }

    // Need to override android-driver's version of this since we don't actually
    // have a bootstrap; instead we just restart adb and re-forward the UiAutomator2
    // port
  }, {
    key: 'wrapBootstrapDisconnect',
    value: function wrapBootstrapDisconnect(wrapped) {
      return _regeneratorRuntime.async(function wrapBootstrapDisconnect$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(wrapped());

          case 2:
            context$2$0.next = 4;
            return _regeneratorRuntime.awrap(this.adb.restart());

          case 4:
            context$2$0.next = 6;
            return _regeneratorRuntime.awrap(this.adb.forwardPort(this.opts.systemPort, DEVICE_PORT));

          case 6:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'proxyActive',
    value: function proxyActive(sessionId) {
      _get(Object.getPrototypeOf(AndroidUiautomator2Driver.prototype), 'proxyActive', this).call(this, sessionId);

      // we always have an active proxy to the UiAutomator2 server
      return true;
    }
  }, {
    key: 'canProxy',
    value: function canProxy(sessionId) {
      _get(Object.getPrototypeOf(AndroidUiautomator2Driver.prototype), 'canProxy', this).call(this, sessionId);

      // we can always proxy to the uiautomator2 server
      return true;
    }
  }, {
    key: 'getProxyAvoidList',
    value: function getProxyAvoidList(sessionId) {
      _get(Object.getPrototypeOf(AndroidUiautomator2Driver.prototype), 'getProxyAvoidList', this).call(this, sessionId);
      // we are maintaining two sets of NO_PROXY lists, one for chromedriver(CHROME_NO_PROXY)
      // and one for uiautomator2(NO_PROXY), based on current context will return related NO_PROXY list
      if (_appiumSupport.util.hasValue(this.chromedriver)) {
        //if the current context is webview(chromedriver), then return CHROME_NO_PROXY list
        this.jwpProxyAvoid = CHROME_NO_PROXY;
      } else {
        this.jwpProxyAvoid = NO_PROXY;
      }
      if (this.opts.nativeWebScreenshot) {
        this.jwpProxyAvoid = [].concat(_toConsumableArray(this.jwpProxyAvoid), [['GET', new RegExp('^/session/[^/]+/screenshot')]]);
      }

      return this.jwpProxyAvoid;
    }
  }, {
    key: 'driverData',
    get: function get() {
      // TODO fill out resource info here
      return {};
    }
  }, {
    key: 'isChromeSession',
    get: function get() {
      return helpers.isChromeBrowser(this.opts.browserName);
    }
  }]);

  return AndroidUiautomator2Driver;
})(_appiumBaseDriver.BaseDriver);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _getIterator(_lodash2['default'].toPairs(_appiumAndroidDriver.androidCommands)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2);

    var cmd = _step$value[0];
    var fn = _step$value[1];

    // we do some different/special things with these methods
    if (!_lodash2['default'].includes(['defaultWebviewName'], cmd)) {
      AndroidUiautomator2Driver.prototype[cmd] = fn;
    }
  }

  // then overwrite with any uiautomator2-specific commands
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

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = _getIterator(_lodash2['default'].toPairs(_commandsIndex2['default'])), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _step2$value = _slicedToArray(_step2.value, 2);

    var cmd = _step2$value[0];
    var fn = _step2$value[1];

    AndroidUiautomator2Driver.prototype[cmd] = fn;
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
      _iterator2['return']();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

exports['default'] = AndroidUiautomator2Driver;
module.exports = exports['default'];

// TODO handle otherSessionData for multiple sessions

// find and copy, or download and unzip an app url or path

// get appPackage et al from manifest if necessary

// start an avd, set the language/locale, pick an emulator, etc...
// TODO with multiple devices we'll need to parameterize this

// unlock the device to prepare it for testing

// If the user sets autoLaunch to false, they are responsible for initAUT() and startAUT()

// set up app under test
// prepare our actual AUT, get it on the device, etc...

// rescue UiAutomator2 if it fails to start our AUT

// if the initial orientation is requested, set it

// if we want to immediately get into a webview, set our context
// appropriately

// set the localized strings for the current language from the apk
// TODO: incorporate changes from appium#5308 which fix a race cond-
// ition bug in old appium and need to be replicated here

// make sure we have an activity and package to wait for

// Use this broadcast intent to notify it's time to dump coverage to file
//# sourceMappingURL=data:application/json;charset=utf8;base64,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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJhc2VEcml2ZXIsIERldmljZVNldHRpbmdzIH0gZnJvbSAnYXBwaXVtLWJhc2UtZHJpdmVyJztcclxuaW1wb3J0IFVpQXV0b21hdG9yMlNlcnZlciBmcm9tICcuL3VpYXV0b21hdG9yMic7XHJcbmltcG9ydCB7IGZzLCB1dGlsIH0gZnJvbSAnYXBwaXVtLXN1cHBvcnQnO1xyXG5pbXBvcnQgeyByZXRyeUludGVydmFsIH0gZnJvbSAnYXN5bmNib3gnO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcclxuaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBERUZBVUxUX0FEQl9QT1JUIH0gZnJvbSAnYXBwaXVtLWFkYic7XHJcbmltcG9ydCAqIGFzIHVpYXV0b21hdG9yMkhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgYW5kcm9pZEhlbHBlcnMsIGFuZHJvaWRDb21tYW5kcywgV0VCVklFV19CQVNFLCBBbmRyb2lkRHJpdmVyIH0gZnJvbSAnYXBwaXVtLWFuZHJvaWQtZHJpdmVyJztcclxuaW1wb3J0IGRlc2lyZWRDYXBDb25zdHJhaW50cyBmcm9tICcuL2Rlc2lyZWQtY2Fwcyc7XHJcbmltcG9ydCB7IGZpbmRBUG9ydE5vdEluVXNlIH0gZnJvbSAncG9ydHNjYW5uZXInO1xyXG5cclxubGV0IGhlbHBlcnMgPSBPYmplY3QuYXNzaWduKHt9LCB1aWF1dG9tYXRvcjJIZWxwZXJzLCBhbmRyb2lkSGVscGVycyk7XHJcblxyXG4vLyBUaGUgcmFuZ2Ugb2YgcG9ydHMgd2UgY2FuIHVzZSBvbiB0aGUgc3lzdGVtIGZvciBjb21tdW5pY2F0aW5nIHRvIHRoZVxyXG4vLyBVaUF1dG9tYXRvcjIgSFRUUCBzZXJ2ZXIgb24gdGhlIGRldmljZVxyXG5jb25zdCBTWVNURU1fUE9SVF9SQU5HRSA9IFs4MjAwLCA4Mjk5XTtcclxuXHJcbi8vIFRoaXMgaXMgdGhlIHBvcnQgdGhhdCBVaUF1dG9tYXRvcjIgbGlzdGVucyB0byBvbiB0aGUgZGV2aWNlLiBXZSB3aWxsIGZvcndhcmRcclxuLy8gb25lIG9mIHRoZSBwb3J0cyBhYm92ZSBvbiB0aGUgc3lzdGVtIHRvIHRoaXMgcG9ydCBvbiB0aGUgZGV2aWNlLlxyXG5jb25zdCBERVZJQ0VfUE9SVCA9IDY3OTA7XHJcblxyXG4vLyBOT19QUk9YWSBjb250YWlucyB0aGUgcGF0aHMgdGhhdCB3ZSBuZXZlciB3YW50IHRvIHByb3h5IHRvIFVpQXV0b21hdG9yMiBzZXJ2ZXIuXHJcbi8vIFRPRE86ICBBZGQgdGhlIGxpc3Qgb2YgcGF0aHMgdGhhdCB3ZSBuZXZlciB3YW50IHRvIHByb3h5IHRvIFVpQXV0b21hdG9yMiBzZXJ2ZXIuXHJcbi8vIFRPRE86IE5lZWQgdG8gc2VncmVnYXRlIHRoZSBwYXRocyBiZXR0ZXIgd2F5IHVzaW5nIHJlZ3VsYXIgZXhwcmVzc2lvbnMgd2hlcmV2ZXIgYXBwbGljYWJsZS5cclxuLy8gKE5vdCBzZWdyZWdhdGluZyByaWdodCBhd2F5IGJlY2F1c2UgbW9yZSBwYXRocyB0byBiZSBhZGRlZCBpbiB0aGUgTk9fUFJPWFkgbGlzdClcclxuY29uc3QgTk9fUFJPWFkgPSBbXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL3RvdWNoL211bHRpL3BlcmZvcm0nKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL3RvdWNoL3BlcmZvcm0nKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2VsZW1lbnQnKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9lbGVtZW50L1teL10rL3ZhbHVlJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9hcHBpdW0vZWxlbWVudC9bXi9dKy9yZXBsYWNlX3ZhbHVlJyldLFxyXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9bXi9dKy9jdXJyZW50X2FjdGl2aXR5JyldLFxyXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9bXi9dKy9jdXJyZW50X3BhY2thZ2UnKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9bXi9dKy9zdGFydF9hY3Rpdml0eScpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvaW1lL2FjdGl2YXRlJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9pbWUvZGVhY3RpdmF0ZScpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9pbWUvYWN0aXZlX2VuZ2luZScpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9pbWUvYXZhaWxhYmxlX2VuZ2luZXMnKV0sXHJcbiAgWydHRVQnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvdXJsJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy91cmwnKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcC9bXi9dJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9sb2NhdGlvbicpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9lbGVtZW50L1teL10rL2xvY2F0aW9uX2luX3ZpZXcnKV0sXHJcbiAgWydHRVQnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL2RldmljZS9zeXN0ZW1fdGltZScpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL3NldHRpbmdzJyldLFxyXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9zZXR0aW5ncycpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL2RldmljZS9hcHBfaW5zdGFsbGVkJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9hcHBpdW0vZGV2aWNlL2xvY2snKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9hcHAvY2xvc2UnKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9hcHAvbGF1bmNoJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9hcHBpdW0vZGV2aWNlL3B1bGxfZmlsZScpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL2RldmljZS9wdWxsX2ZvbGRlcicpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL2RldmljZS9wdXNoX2ZpbGUnKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9hcHAvcmVzZXQnKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9hcHAvYmFja2dyb3VuZCcpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL2RldmljZS90b2dnbGVfbG9jYXRpb25fc2VydmljZXMnKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9kZXZpY2UvaXNfbG9ja2VkJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9hcHBpdW0vZGV2aWNlL3VubG9jaycpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL2RldmljZS9wcmVzc19rZXljb2RlJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9hcHBpdW0vZGV2aWNlL2xvbmdfcHJlc3Nfa2V5Y29kZScpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL2FwcC9lbmRfdGVzdF9jb3ZlcmFnZScpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9jb250ZXh0cycpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvY29udGV4dCcpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9jb250ZXh0JyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9uZXR3b3JrX2Nvbm5lY3Rpb24nKV0sXHJcbiAgWydHRVQnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvbmV0d29ya19jb25uZWN0aW9uJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy90aW1lb3V0cycpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9zY3JlZW5zaG90JyldLFxyXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2VsZW1lbnQvW14vXSsvYXR0cmlidXRlJyldLFxyXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2VsZW1lbnQvW14vXSsvZW5hYmxlZCcpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9lbGVtZW50L1teL10rL3NlbGVjdGVkJyldLFxyXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2VsZW1lbnQvW14vXSsvZGlzcGxheWVkJyldLFxyXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2VsZW1lbnQvW14vXSsvbmFtZScpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9lbGVtZW50L1teL10rL3NjcmVlbnNob3QnKV0sXHJcbiAgWydHRVQnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vKD8hLipcXC8pJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9rZXlzJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9hcHBpdW0vZGV2aWNlL2hpZGVfa2V5Ym9hcmQnKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2xvZycpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9sb2cvdHlwZXMnKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9kZXZpY2UvcmVtb3ZlX2FwcCcpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL2RldmljZS9pbnN0YWxsX2FwcCcpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9hcHBpdW0vZGV2aWNlL2N1cnJlbnRfcGFja2FnZScpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9hcHBpdW0vZGV2aWNlL2Rpc3BsYXlfZGVuc2l0eScpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9hcHBpdW0vZGV2aWNlL3N5c3RlbV9iYXJzJyldLFxyXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9kZXZpY2UvaXNfa2V5Ym9hcmRfc2hvd24nKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9hcHAvc3RyaW5ncycpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL2dldFBlcmZvcm1hbmNlRGF0YScpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL3BlcmZvcm1hbmNlRGF0YS90eXBlcycpXSxcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtL3N0YXJ0X3JlY29yZGluZ19zY3JlZW4nKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bS9zdG9wX3JlY29yZGluZ19zY3JlZW4nKV0sXHJcbiAgWydHRVQnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvaW1lL2F2YWlsYWJsZV9lbmdpbmVzJyldLFxyXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2ltZS9hY3RpdmVfZW5naW5lJyldLFxyXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2ltZS9hY3RpdmF0ZWQnKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2ltZS9kZWFjdGl2YXRlJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9pbWUvYWN0aXZhdGUnKV0sXHJcbiAgLy8gTUpTT05XUCBjb21tYW5kc1xyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9leGVjdXRlJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9leGVjdXRlX2FzeW5jJyldLFxyXG4gIC8vIFczQyBjb21tYW5kc1xyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9leGVjdXRlL3N5bmMnKV0sXHJcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2V4ZWN1dGUvYXN5bmMnKV0sXHJcbl07XHJcblxyXG4vLyBUaGlzIGlzIGEgc2V0IG9mIG1ldGhvZHMgYW5kIHBhdGhzIHRoYXQgd2UgbmV2ZXIgd2FudCB0byBwcm94eSB0byBDaHJvbWVkcml2ZXIuXHJcbmNvbnN0IENIUk9NRV9OT19QUk9YWSA9IFtcclxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvY29udGV4dCcpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9jb250ZXh0JyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9hcHBpdW0nKV0sXHJcbiAgWydHRVQnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvYXBwaXVtJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy90b3VjaC9wZXJmb3JtJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy90b3VjaC9tdWx0aS9wZXJmb3JtJyldLFxyXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9vcmllbnRhdGlvbicpXSxcclxuICBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9vcmllbnRhdGlvbicpXSxcclxuXTtcclxuY29uc3QgQVBQX0VYVEVOU0lPTiA9ICcuYXBrJztcclxuXHJcbmNsYXNzIEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXIgZXh0ZW5kcyBCYXNlRHJpdmVyIHtcclxuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzaG91bGRWYWxpZGF0ZUNhcHMgPSB0cnVlKSB7XHJcbiAgICAvLyBgc2hlbGxgIG92ZXJ3cml0ZXMgYWRiLnNoZWxsLCBzbyByZW1vdmVcclxuICAgIGRlbGV0ZSBvcHRzLnNoZWxsO1xyXG5cclxuICAgIHN1cGVyKG9wdHMsIHNob3VsZFZhbGlkYXRlQ2Fwcyk7XHJcbiAgICB0aGlzLmxvY2F0b3JTdHJhdGVnaWVzID0gW1xyXG4gICAgICAneHBhdGgnLFxyXG4gICAgICAnaWQnLFxyXG4gICAgICAnY2xhc3MgbmFtZScsXHJcbiAgICAgICdhY2Nlc3NpYmlsaXR5IGlkJyxcclxuICAgICAgJy1hbmRyb2lkIHVpYXV0b21hdG9yJ1xyXG4gICAgXTtcclxuICAgIHRoaXMuZGVzaXJlZENhcENvbnN0cmFpbnRzID0gZGVzaXJlZENhcENvbnN0cmFpbnRzO1xyXG4gICAgdGhpcy51aWF1dG9tYXRvcjIgPSBudWxsO1xyXG4gICAgdGhpcy5qd3BQcm94eUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5kZWZhdWx0SU1FID0gbnVsbDtcclxuICAgIHRoaXMuandwUHJveHlBdm9pZCA9IE5PX1BST1hZO1xyXG4gICAgdGhpcy5hcGtTdHJpbmdzID0ge307IC8vIG1hcCBvZiBsYW5ndWFnZSAtPiBzdHJpbmdzIG9ialxyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgRGV2aWNlU2V0dGluZ3Moe2lnbm9yZVVuaW1wb3J0YW50Vmlld3M6IGZhbHNlLCBhbGxvd0ludmlzaWJsZUVsZW1lbnRzOiBmYWxzZX0sXHJcbiAgICAgICAgdGhpcy5vblNldHRpbmdzVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgLy8gaGFuZGxlIHdlYnZpZXcgbWVjaGFuaWNzIGZyb20gQW5kcm9pZERyaXZlclxyXG4gICAgdGhpcy5jaHJvbWVkcml2ZXIgPSBudWxsO1xyXG4gICAgdGhpcy5zZXNzaW9uQ2hyb21lZHJpdmVycyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY3JlYXRlU2Vzc2lvbiAoLi4uYXJncykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gVE9ETyBoYW5kbGUgb3RoZXJTZXNzaW9uRGF0YSBmb3IgbXVsdGlwbGUgc2Vzc2lvbnNcclxuICAgICAgbGV0IFtzZXNzaW9uSWQsIGNhcHNdID0gYXdhaXQgc3VwZXIuY3JlYXRlU2Vzc2lvbiguLi5hcmdzKTtcclxuXHJcbiAgICAgIGxldCBzZXJ2ZXJEZXRhaWxzID0ge3BsYXRmb3JtOiAnTElOVVgnLFxyXG4gICAgICAgIHdlYlN0b3JhZ2VFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICB0YWtlc1NjcmVlbnNob3Q6IHRydWUsXHJcbiAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgZGF0YWJhc2VFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBuZXR3b3JrQ29ubmVjdGlvbkVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgbG9jYXRpb25Db250ZXh0RW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgd2FybmluZ3M6IHt9LFxyXG4gICAgICAgIGRlc2lyZWQ6IHRoaXMuY2Fwc307XHJcblxyXG4gICAgICB0aGlzLmNhcHMgPSBPYmplY3QuYXNzaWduKHNlcnZlckRldGFpbHMsIHRoaXMuY2Fwcyk7XHJcblxyXG4gICAgICB0aGlzLmN1ckNvbnRleHQgPSB0aGlzLmRlZmF1bHRDb250ZXh0TmFtZSgpO1xyXG5cclxuICAgICAgbGV0IGRlZmF1bHRPcHRzID0ge1xyXG4gICAgICAgIGZ1bGxSZXNldDogZmFsc2UsXHJcbiAgICAgICAgYXV0b0xhdW5jaDogdHJ1ZSxcclxuICAgICAgICBhZGJQb3J0OiBERUZBVUxUX0FEQl9QT1JULFxyXG4gICAgICAgIGFuZHJvaWRJbnN0YWxsVGltZW91dDogOTAwMDBcclxuICAgICAgfTtcclxuICAgICAgXy5kZWZhdWx0cyh0aGlzLm9wdHMsIGRlZmF1bHRPcHRzKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzQ2hyb21lU2Vzc2lvbikge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKFwiV2UncmUgZ29pbmcgdG8gcnVuIGEgQ2hyb21lLWJhc2VkIHNlc3Npb25cIik7XHJcbiAgICAgICAgbGV0IHtwa2csIGFjdGl2aXR5fSA9IGhlbHBlcnMuZ2V0Q2hyb21lUGtnKHRoaXMub3B0cy5icm93c2VyTmFtZSk7XHJcbiAgICAgICAgdGhpcy5vcHRzLmFwcFBhY2thZ2UgPSB0aGlzLmNhcHMuYXBwUGFja2FnZSA9IHBrZztcclxuICAgICAgICB0aGlzLm9wdHMuYXBwQWN0aXZpdHkgPSB0aGlzLmNhcHMuYXBwQWN0aXZpdHkgPSBhY3Rpdml0eTtcclxuICAgICAgICBsb2dnZXIuaW5mbyhgQ2hyb21lLXR5cGUgcGFja2FnZSBhbmQgYWN0aXZpdHkgYXJlICR7cGtnfSBhbmQgJHthY3Rpdml0eX1gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMub3B0cy5yZWJvb3QpIHtcclxuICAgICAgICB0aGlzLnNldEF2ZEZyb21DYXBhYmlsaXRpZXMoY2Fwcyk7XHJcbiAgICAgICAgdGhpcy5hZGRXaXBlRGF0YVRvQXZkQXJncygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRzLmFwcCkge1xyXG4gICAgICAgIC8vIGZpbmQgYW5kIGNvcHksIG9yIGRvd25sb2FkIGFuZCB1bnppcCBhbiBhcHAgdXJsIG9yIHBhdGhcclxuICAgICAgICB0aGlzLm9wdHMuYXBwID0gYXdhaXQgdGhpcy5oZWxwZXJzLmNvbmZpZ3VyZUFwcCh0aGlzLm9wdHMuYXBwLCBBUFBfRVhURU5TSU9OKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmNoZWNrQXBwUHJlc2VudCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwT25EZXZpY2UpIHtcclxuICAgICAgICAvLyB0aGUgYXBwIGlzbid0IGFuIGFjdHVhbCBhcHAgZmlsZSBidXQgcmF0aGVyIHNvbWV0aGluZyB3ZSB3YW50IHRvXHJcbiAgICAgICAgLy8gYXNzdW1lIGlzIG9uIHRoZSBkZXZpY2UgYW5kIGp1c3QgbGF1bmNoIHZpYSB0aGUgYXBwUGFja2FnZVxyXG4gICAgICAgIGxvZ2dlci5pbmZvKGBBcHAgZmlsZSB3YXMgbm90IGxpc3RlZCwgaW5zdGVhZCB3ZSdyZSBnb2luZyB0byBydW4gYCArXHJcbiAgICAgICAgICAgIGAke3RoaXMub3B0cy5hcHBQYWNrYWdlfSBkaXJlY3RseSBvbiB0aGUgZGV2aWNlYCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jaGVja1BhY2thZ2VQcmVzZW50KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vcHRzLnN5c3RlbVBvcnQgPSB0aGlzLm9wdHMuc3lzdGVtUG9ydCB8fCBhd2FpdCBmaW5kQVBvcnROb3RJblVzZShTWVNURU1fUE9SVF9SQU5HRVswXSwgU1lTVEVNX1BPUlRfUkFOR0VbMV0pO1xyXG4gICAgICB0aGlzLm9wdHMuYWRiUG9ydCA9IHRoaXMub3B0cy5hZGJQb3J0IHx8IERFRkFVTFRfQURCX1BPUlQ7XHJcblxyXG4gICAgICBhd2FpdCB0aGlzLnN0YXJ0VWlBdXRvbWF0b3IyU2Vzc2lvbigpO1xyXG4gICAgICByZXR1cm4gW3Nlc3Npb25JZCwgY2Fwc107XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZGVsZXRlU2Vzc2lvbigpO1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRyaXZlckRhdGEgKCkge1xyXG4gICAgLy8gVE9ETyBmaWxsIG91dCByZXNvdXJjZSBpbmZvIGhlcmVcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIGlzRW11bGF0b3IgKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5vcHRzLmF2ZDtcclxuICB9XHJcblxyXG4gIHNldEF2ZEZyb21DYXBhYmlsaXRpZXMgKGNhcHMpIHtcclxuICAgIGlmICh0aGlzLm9wdHMuYXZkKSB7XHJcbiAgICAgIGxvZ2dlci5pbmZvKCdhdmQgbmFtZSBkZWZpbmVkLCBpZ25vcmluZyBkZXZpY2UgbmFtZSBhbmQgcGxhdGZvcm0gdmVyc2lvbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFjYXBzLmRldmljZU5hbWUpIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3JBbmRUaHJvdygnYXZkIG9yIGRldmljZU5hbWUgc2hvdWxkIGJlIHNwZWNpZmllZCB3aGVuIHJlYm9vdCBvcHRpb24gaXMgZW5hYmxlcycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghY2Fwcy5wbGF0Zm9ybVZlcnNpb24pIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3JBbmRUaHJvdygnYXZkIG9yIHBsYXRmb3JtVmVyc2lvbiBzaG91bGQgYmUgc3BlY2lmaWVkIHdoZW4gcmVib290IG9wdGlvbiBpcyBlbmFibGVkJyk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGF2ZERldmljZSA9IGNhcHMuZGV2aWNlTmFtZS5yZXBsYWNlKC9bXmEtekEtWjAtOV8uXS9nLCBcIi1cIik7XHJcbiAgICAgIHRoaXMub3B0cy5hdmQgPSBgJHthdmREZXZpY2V9X18ke2NhcHMucGxhdGZvcm1WZXJzaW9ufWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRXaXBlRGF0YVRvQXZkQXJncyAoKSB7XHJcbiAgICBpZiAoIXRoaXMub3B0cy5hdmRBcmdzKSB7XHJcbiAgICAgIHRoaXMub3B0cy5hdmRBcmdzID0gJy13aXBlLWRhdGEnO1xyXG4gICAgfSBlbHNlICBpZiAodGhpcy5vcHRzLmF2ZEFyZ3MudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiLXdpcGUtZGF0YVwiKSA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5vcHRzLmF2ZEFyZ3MgKz0gJyAtd2lwZS1kYXRhJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHN0YXJ0VWlBdXRvbWF0b3IyU2Vzc2lvbiAoKSB7XHJcbiAgICBpZiAoIXRoaXMub3B0cy5qYXZhVmVyc2lvbikge1xyXG4gICAgICB0aGlzLm9wdHMuamF2YVZlcnNpb24gPSBhd2FpdCBoZWxwZXJzLmdldEphdmFWZXJzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IGRldmljZSB1ZGlkIGZvciB0aGlzIHNlc3Npb25cclxuICAgIGxldCB7dWRpZCwgZW1Qb3J0fSA9IGF3YWl0IGhlbHBlcnMuZ2V0RGV2aWNlSW5mb0Zyb21DYXBzKHRoaXMub3B0cyk7XHJcbiAgICB0aGlzLm9wdHMudWRpZCA9IHVkaWQ7XHJcbiAgICB0aGlzLm9wdHMuZW1Qb3J0ID0gZW1Qb3J0O1xyXG5cclxuICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgb3VyIGphdmEgdmVyc2lvbiBhbmQgZGV2aWNlIGluZm8sIHdlIGNhbiBjcmVhdGUgb3VyXHJcbiAgICAvLyBBREIgaW5zdGFuY2VcclxuICAgIHRoaXMuYWRiID0gYXdhaXQgYW5kcm9pZEhlbHBlcnMuY3JlYXRlQURCKHRoaXMub3B0cy5qYXZhVmVyc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0cy51ZGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRzLmVtUG9ydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0cy5hZGJQb3J0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRzLnN1cHByZXNzS2lsbFNlcnZlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0cy5yZW1vdGVBZGJIb3N0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRzLmNsZWFyRGV2aWNlTG9nc09uU3RhcnQpO1xyXG5cclxuICAgIGlmIChhd2FpdCB0aGlzLmFkYi5nZXRBcGlMZXZlbCgpIDwgMjEpIHtcclxuICAgICAgbG9nZ2VyLmVycm9yQW5kVGhyb3coJ1VJQXV0b21hdGlvbjIgaXMgb25seSBzdXBwb3J0ZWQgc2luY2UgQW5kcm9pZCA1LjAgKExvbGxpcG9wKS4gJyArXHJcbiAgICAgICAgJ1lvdSBjb3VsZCBzdGlsbCB1c2Ugb3RoZXIgc3VwcG9ydGVkIGJhY2tlbmRzIGluIG9yZGVyIHRvIGF1dG9tYXRlIG9sZGVyIEFuZHJvaWQgdmVyc2lvbnMuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IGFwcFBhY2thZ2UgZXQgYWwgZnJvbSBtYW5pZmVzdCBpZiBuZWNlc3NhcnlcclxuICAgIGxldCBhcHBJbmZvID0gYXdhaXQgaGVscGVycy5nZXRMYXVuY2hJbmZvKHRoaXMuYWRiLCB0aGlzLm9wdHMpO1xyXG4gICAgLy8gYW5kIGdldCBpdCBvbnRvIG91ciAnb3B0cycgb2JqZWN0IHNvIHdlIHVzZSBpdCBmcm9tIG5vdyBvblxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdHMsIGFwcEluZm8pO1xyXG5cclxuICAgIC8vIHNldCBhY3R1YWwgZGV2aWNlIG5hbWUsIHVkaWQsIHBsYXRmb3JtIHZlcnNpb24sIHNjcmVlbiBzaXplLCBzY3JlZW4gZGVuc2l0eSwgbW9kZWwgYW5kIG1hbnVmYWN0dXJlciBkZXRhaWxzXHJcbiAgICB0aGlzLmNhcHMuZGV2aWNlTmFtZSA9IHRoaXMuYWRiLmN1ckRldmljZUlkO1xyXG4gICAgdGhpcy5jYXBzLmRldmljZVVESUQgPSB0aGlzLm9wdHMudWRpZDtcclxuICAgIHRoaXMuY2Fwcy5wbGF0Zm9ybVZlcnNpb24gPSAnJztcclxuICAgIHRoaXMuY2Fwcy5kZXZpY2VTY3JlZW5TaXplID0gJyc7XHJcbiAgICB0aGlzLmNhcHMuZGV2aWNlU2NyZWVuRGVuc2l0eSA9ICcnO1xyXG4gICAgdGhpcy5jYXBzLmRldmljZU1vZGVsID0gJyc7XHJcbiAgICB0aGlzLmNhcHMuZGV2aWNlTWFudWZhY3R1cmVyID0gJyc7XHJcblxyXG4gICAgLy8gc2V0IHVwIHRoZSBtb2RpZmllZCBVaUF1dG9tYXRvcjIgc2VydmVyIGV0Y1xyXG4gICAgYXdhaXQgdGhpcy5pbml0VWlBdXRvbWF0b3IyU2VydmVyKCk7XHJcblxyXG4gICAgLy8gc3RhcnQgYW4gYXZkLCBzZXQgdGhlIGxhbmd1YWdlL2xvY2FsZSwgcGljayBhbiBlbXVsYXRvciwgZXRjLi4uXHJcbiAgICAvLyBUT0RPIHdpdGggbXVsdGlwbGUgZGV2aWNlcyB3ZSdsbCBuZWVkIHRvIHBhcmFtZXRlcml6ZSB0aGlzXHJcbiAgICB0aGlzLmRlZmF1bHRJTUUgPSBhd2FpdCBoZWxwZXJzLmluaXREZXZpY2UodGhpcy5hZGIsIHRoaXMub3B0cyk7XHJcblxyXG4gICAgLy8gRnVydGhlciBwcmVwYXJlIHRoZSBkZXZpY2UgYnkgZm9yd2FyZGluZyB0aGUgVWlBdXRvbWF0b3IyIHBvcnRcclxuICAgIGxvZ2dlci5kZWJ1ZyhgRm9yd2FyZGluZyBVaUF1dG9tYXRvcjIgU2VydmVyIHBvcnQgJHtERVZJQ0VfUE9SVH0gdG8gJHt0aGlzLm9wdHMuc3lzdGVtUG9ydH1gKTtcclxuICAgIGF3YWl0IHRoaXMuYWRiLmZvcndhcmRQb3J0KHRoaXMub3B0cy5zeXN0ZW1Qb3J0LCBERVZJQ0VfUE9SVCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdHMuc2tpcFVubG9jaykge1xyXG4gICAgICAvLyB1bmxvY2sgdGhlIGRldmljZSB0byBwcmVwYXJlIGl0IGZvciB0ZXN0aW5nXHJcbiAgICAgIGF3YWl0IGhlbHBlcnMudW5sb2NrKHRoaXMsIHRoaXMuYWRiLCB0aGlzLmNhcHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9nZ2VyLmRlYnVnKGAnc2tpcFVubG9jaycgY2FwYWJpbGl0eSBzZXQsIHNvIHNraXBwaW5nIGRldmljZSB1bmxvY2tgKTtcclxuICAgIH1cclxuICAgIC8vIElmIHRoZSB1c2VyIHNldHMgYXV0b0xhdW5jaCB0byBmYWxzZSwgdGhleSBhcmUgcmVzcG9uc2libGUgZm9yIGluaXRBVVQoKSBhbmQgc3RhcnRBVVQoKVxyXG4gICAgaWYgKHRoaXMub3B0cy5hdXRvTGF1bmNoKSB7XHJcbiAgICAgIC8vIHNldCB1cCBhcHAgdW5kZXIgdGVzdFxyXG4gICAgICAvLyBwcmVwYXJlIG91ciBhY3R1YWwgQVVULCBnZXQgaXQgb24gdGhlIGRldmljZSwgZXRjLi4uXHJcbiAgICAgIGF3YWl0IHRoaXMuaW5pdEFVVCgpO1xyXG4gICAgfVxyXG4gICAgLy8gQWRkaW5nIEFVVCBwYWNrYWdlIG5hbWUgaW4gdGhlIGNhcGFiaWxpdGllcyBpZiBwYWNrYWdlIG5hbWUgbm90IGV4aXN0IGluIGNhcHNcclxuICAgIGlmICghdGhpcy5jYXBzLmFwcFBhY2thZ2UgJiYgYXBwSW5mbykge1xyXG4gICAgICB0aGlzLmNhcHMuYXBwUGFja2FnZSA9IGFwcEluZm8uYXBwUGFja2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsYXVuY2ggVWlBdXRvbWF0b3IyIGFuZCB3YWl0IHRpbGwgaXRzIG9ubGluZSBhbmQgd2UgaGF2ZSBhIHNlc3Npb25cclxuICAgIGF3YWl0IHRoaXMudWlhdXRvbWF0b3IyLnN0YXJ0U2Vzc2lvbih0aGlzLmNhcHMpO1xyXG5cclxuICAgIC8vIHJlc2N1ZSBVaUF1dG9tYXRvcjIgaWYgaXQgZmFpbHMgdG8gc3RhcnQgb3VyIEFVVFxyXG4gICAgaWYgKHRoaXMub3B0cy5hdXRvTGF1bmNoKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZW5zdXJlQXBwU3RhcnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlIGluaXRpYWwgb3JpZW50YXRpb24gaXMgcmVxdWVzdGVkLCBzZXQgaXRcclxuICAgIGlmICh1dGlsLmhhc1ZhbHVlKHRoaXMub3B0cy5vcmllbnRhdGlvbikpIHtcclxuICAgICAgbG9nZ2VyLmRlYnVnKGBTZXR0aW5nIGluaXRpYWwgb3JpZW50YXRpb24gdG8gJyR7dGhpcy5vcHRzLm9yaWVudGF0aW9ufSdgKTtcclxuICAgICAgYXdhaXQgdGhpcy5zZXRPcmllbnRhdGlvbih0aGlzLm9wdHMub3JpZW50YXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIHdlIHdhbnQgdG8gaW1tZWRpYXRlbHkgZ2V0IGludG8gYSB3ZWJ2aWV3LCBzZXQgb3VyIGNvbnRleHRcclxuICAgIC8vIGFwcHJvcHJpYXRlbHlcclxuICAgIGlmICh0aGlzLm9wdHMuYXV0b1dlYnZpZXcpIHtcclxuICAgICAgYXdhaXQgcmV0cnlJbnRlcnZhbCgyMCwgdGhpcy5vcHRzLmF1dG9XZWJ2aWV3VGltZW91dCB8fCAyMDAwLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRDb250ZXh0KHRoaXMuZGVmYXVsdFdlYnZpZXdOYW1lKCkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0Nocm9tZVNlc3Npb24pIHtcclxuICAgICAgYXdhaXQgQW5kcm9pZERyaXZlci5wcm90b3R5cGUuc3RhcnRDaHJvbWVTZXNzaW9uLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbm93IHRoYXQgZXZlcnl0aGluZyBoYXMgc3RhcnRlZCBzdWNjZXNzZnVsbHksIHR1cm4gb24gcHJveHlpbmcgc28gYWxsXHJcbiAgICAvLyBzdWJzZXF1ZW50IHNlc3Npb24gcmVxdWVzdHMgZ28gc3RyYWlnaHQgdG8vZnJvbSB1aWF1dG9tYXRvcjJcclxuICAgIHRoaXMuandwUHJveHlBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5pdFVpQXV0b21hdG9yMlNlcnZlciAoKSB7XHJcbiAgICAvLyBub3cgdGhhdCB3ZSBoYXZlIHBhY2thZ2UgYW5kIGFjdGl2aXR5LCB3ZSBjYW4gY3JlYXRlIGFuIGluc3RhbmNlIG9mXHJcbiAgICAvLyB1aWF1dG9tYXRvcjIgd2l0aCB0aGUgYXBwcm9wcmlhdGUgZGF0YVxyXG4gICAgdGhpcy51aWF1dG9tYXRvcjIgPSBuZXcgVWlBdXRvbWF0b3IyU2VydmVyKHtcclxuICAgICAgaG9zdDogdGhpcy5vcHRzLmhvc3QgfHwgJ2xvY2FsaG9zdCcsXHJcbiAgICAgIHN5c3RlbVBvcnQ6IHRoaXMub3B0cy5zeXN0ZW1Qb3J0LFxyXG4gICAgICBkZXZpY2VQb3J0OiBERVZJQ0VfUE9SVCxcclxuICAgICAgYWRiOiB0aGlzLmFkYixcclxuICAgICAgYXBrOiB0aGlzLm9wdHMuYXBwLFxyXG4gICAgICB0bXBEaXI6IHRoaXMub3B0cy50bXBEaXIsXHJcbiAgICAgIGFwcFBhY2thZ2U6IHRoaXMub3B0cy5hcHBQYWNrYWdlLFxyXG4gICAgICBhcHBBY3Rpdml0eTogdGhpcy5vcHRzLmFwcEFjdGl2aXR5LFxyXG4gICAgICBkaXNhYmxlV2luZG93QW5pbWF0aW9uOiAhIXRoaXMub3B0cy5kaXNhYmxlV2luZG93QW5pbWF0aW9uLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3h5UmVxUmVzID0gdGhpcy51aWF1dG9tYXRvcjIucHJveHlSZXFSZXMuYmluZCh0aGlzLnVpYXV0b21hdG9yMik7XHJcblxyXG4gICAgLy8ga2lsbGluZyBhbnkgdWlhdXRvbWF0b3IgZXhpc3RpbmcgcHJvY2Vzc2VzXHJcbiAgICBhd2FpdCB0aGlzLnVpYXV0b21hdG9yMi5raWxsVWlBdXRvbWF0b3JPbkRldmljZSgpO1xyXG5cclxuICAgIGF3YWl0IHRoaXMudWlhdXRvbWF0b3IyLmluc3RhbGxTZXJ2ZXJBcGsodGhpcy5vcHRzLnVpYXV0b21hdG9yMlNlcnZlckluc3RhbGxUaW1lb3V0KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGluaXRBVVQgKCkge1xyXG4gICAgLy8gc2V0IHRoZSBsb2NhbGl6ZWQgc3RyaW5ncyBmb3IgdGhlIGN1cnJlbnQgbGFuZ3VhZ2UgZnJvbSB0aGUgYXBrXHJcbiAgICAvLyBUT0RPOiBpbmNvcnBvcmF0ZSBjaGFuZ2VzIGZyb20gYXBwaXVtIzUzMDggd2hpY2ggZml4IGEgcmFjZSBjb25kLVxyXG4gICAgLy8gaXRpb24gYnVnIGluIG9sZCBhcHBpdW0gYW5kIG5lZWQgdG8gYmUgcmVwbGljYXRlZCBoZXJlXHJcbiAgICB0aGlzLmFwa1N0cmluZ3NbdGhpcy5vcHRzLmxhbmd1YWdlXSA9IGF3YWl0IGFuZHJvaWRIZWxwZXJzLnB1c2hTdHJpbmdzKFxyXG4gICAgICAgIHRoaXMub3B0cy5sYW5ndWFnZSwgdGhpcy5hZGIsIHRoaXMub3B0cyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdHMuYXBwKSB7XHJcbiAgICAgIGlmICh0aGlzLm9wdHMuZnVsbFJlc2V0KSB7XHJcbiAgICAgICAgbG9nZ2VyLmVycm9yQW5kVGhyb3coJ0Z1bGwgcmVzZXQgcmVxdWlyZXMgYW4gYXBwIGNhcGFiaWxpdHksIHVzZSBmYXN0UmVzZXQgaWYgYXBwIGlzIG5vdCBwcm92aWRlZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGxvZ2dlci5kZWJ1ZygnTm8gYXBwIGNhcGFiaWxpdHkuIEFzc3VtaW5nIGl0IGlzIGFscmVhZHkgb24gdGhlIGRldmljZScpO1xyXG4gICAgICBpZiAodGhpcy5vcHRzLmZhc3RSZXNldCkge1xyXG4gICAgICAgIGF3YWl0IGhlbHBlcnMucmVzZXRBcHAodGhpcy5hZGIsIHRoaXMub3B0cy5hcHAsIHRoaXMub3B0cy5hcHBQYWNrYWdlLCB0aGlzLm9wdHMuZmFzdFJlc2V0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5vcHRzLnNraXBVbmluc3RhbGwpIHtcclxuICAgICAgYXdhaXQgdGhpcy5hZGIudW5pbnN0YWxsQXBrKHRoaXMub3B0cy5hcHBQYWNrYWdlKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5vcHRzLm5vU2lnbikge1xyXG4gICAgICBsZXQgc2lnbmVkID0gYXdhaXQgdGhpcy5hZGIuY2hlY2tBcGtDZXJ0KHRoaXMub3B0cy5hcHAsIHRoaXMub3B0cy5hcHBQYWNrYWdlKTtcclxuICAgICAgaWYgKCFzaWduZWQgJiYgdGhpcy5vcHRzLmFwcCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWRiLnNpZ24odGhpcy5vcHRzLmFwcCwgdGhpcy5vcHRzLmFwcFBhY2thZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRzLmFwcCkge1xyXG4gICAgICBhd2FpdCBoZWxwZXJzLmluc3RhbGxBcGtSZW1vdGVseSh0aGlzLmFkYiwgdGhpcy5vcHRzKTtcclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMuZ3JhbnRQZXJtaXNzaW9ucygpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ3JhbnRQZXJtaXNzaW9ucyAoKSB7XHJcbiAgICBpZiAodGhpcy5vcHRzLmF1dG9HcmFudFBlcm1pc3Npb25zKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hZGIuZ3JhbnRBbGxQZXJtaXNzaW9ucyh0aGlzLm9wdHMuYXBwUGFja2FnZSwgdGhpcy5vcHRzLmFwcCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9nZ2VyLmVycm9yKGBVbmFibGUgdG8gZ3JhbnQgcGVybWlzc2lvbnMgcmVxdWVzdGVkLiBPcmlnaW5hbCBlcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBlbnN1cmVBcHBTdGFydHMgKCkge1xyXG4gICAgLy8gbWFrZSBzdXJlIHdlIGhhdmUgYW4gYWN0aXZpdHkgYW5kIHBhY2thZ2UgdG8gd2FpdCBmb3JcclxuICAgIGxldCBhcHBXYWl0UGFja2FnZSA9IHRoaXMub3B0cy5hcHBXYWl0UGFja2FnZSB8fCB0aGlzLm9wdHMuYXBwUGFja2FnZTtcclxuICAgIGxldCBhcHBXYWl0QWN0aXZpdHkgPSB0aGlzLm9wdHMuYXBwV2FpdEFjdGl2aXR5IHx8IHRoaXMub3B0cy5hcHBBY3Rpdml0eTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhgVWlBdXRvbWF0b3IyIGRpZCBub3Qgc3RhcnQgdGhlIGFjdGl2aXR5IHdlIHdlcmUgd2FpdGluZyBmb3IsIGAgK1xyXG4gICAgICAgIGAnJHthcHBXYWl0UGFja2FnZX0vJHthcHBXYWl0QWN0aXZpdHl9Jy4gYCArXHJcbiAgICAgICAgYFN0YXJ0aW5nIGl0IG91cnNlbHZlc2ApO1xyXG5cclxuICAgIGlmICh0aGlzLmNhcHMuYW5kcm9pZENvdmVyYWdlKSB7XHJcbiAgICAgIGxvZ2dlci5pbmZvKGBhbmRyb2lkQ292ZXJhZ2UgaXMgY29uZmlndXJlZC4gYCArXHJcbiAgICAgICAgYCBTdGFydGluZyBpbnN0cnVtZW50YXRpb24gb2YgJyR7dGhpcy5jYXBzLmFuZHJvaWRDb3ZlcmFnZX0nLi4uYCk7XHJcbiAgICAgIGF3YWl0IHRoaXMuYWRiLmFuZHJvaWRDb3ZlcmFnZSh0aGlzLmNhcHMuYW5kcm9pZENvdmVyYWdlLCBhcHBXYWl0UGFja2FnZSwgYXBwV2FpdEFjdGl2aXR5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuYWRiLnN0YXJ0QXBwKHtcclxuICAgICAgICBwa2c6IHRoaXMub3B0cy5hcHBQYWNrYWdlLFxyXG4gICAgICAgIGFjdGl2aXR5OiB0aGlzLm9wdHMuYXBwQWN0aXZpdHksXHJcbiAgICAgICAgYWN0aW9uOiB0aGlzLm9wdHMuaW50ZW50QWN0aW9uLFxyXG4gICAgICAgIGNhdGVnb3J5OiB0aGlzLm9wdHMuaW50ZW50Q2F0ZWdvcnksXHJcbiAgICAgICAgZmxhZ3M6IHRoaXMub3B0cy5pbnRlbnRGbGFncyxcclxuICAgICAgICB3YWl0UGtnOiB0aGlzLm9wdHMuYXBwV2FpdFBhY2thZ2UsXHJcbiAgICAgICAgd2FpdEFjdGl2aXR5OiB0aGlzLm9wdHMuYXBwV2FpdEFjdGl2aXR5LFxyXG4gICAgICAgIG9wdGlvbmFsSW50ZW50QXJndW1lbnRzOiB0aGlzLm9wdHMub3B0aW9uYWxJbnRlbnRBcmd1bWVudHMsXHJcbiAgICAgICAgc3RvcEFwcDogIXRoaXMub3B0cy5kb250U3RvcEFwcE9uUmVzZXQsXHJcbiAgICAgICAgcmV0cnk6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGFzeW5jIGRlbGV0ZVNlc3Npb24gKCkge1xyXG4gICAgbG9nZ2VyLmRlYnVnKCdEZWxldGluZyBVaUF1dG9tYXRvcjIgc2Vzc2lvbicpO1xyXG4gICAgaWYgKHRoaXMudWlhdXRvbWF0b3IyKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9wQ2hyb21lZHJpdmVyUHJveGllcygpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBsb2dnZXIud2FybihgVW5hYmxlIHRvIHN0b3AgQ2hyb21lRHJpdmVyIHByb3hpZXM6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuandwUHJveHlBY3RpdmUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuZGVsZXRlU2Vzc2lvbigpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgbG9nZ2VyLndhcm4oYFVuYWJsZSB0byBwcm94eSBkZWxldGVTZXNzaW9uIHRvIFVpQXV0b21hdG9yMjogJHtlcnIubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51aWF1dG9tYXRvcjIgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5qd3BQcm94eUFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0aGlzLmFkYikge1xyXG4gICAgICBpZiAodGhpcy5vcHRzLnVuaWNvZGVLZXlib2FyZCAmJiB0aGlzLm9wdHMucmVzZXRLZXlib2FyZCAmJiB0aGlzLmRlZmF1bHRJTUUpIHtcclxuICAgICAgICBsb2dnZXIuZGVidWcoYFJlc2V0dGluZyBJTUUgdG8gJyR7dGhpcy5kZWZhdWx0SU1FfSdgKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5hZGIuc2V0SU1FKHRoaXMuZGVmYXVsdElNRSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBsb2dnZXIud2FybihgVW5hYmxlIHRvIHJlc2V0IElNRTogJHtlcnIubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY2Fwcy5hbmRyb2lkQ292ZXJhZ2UpIHtcclxuICAgICAgICBsb2dnZXIuaW5mbygnU2h1dHRpbmcgZG93biB0aGUgYWRiIHByb2Nlc3Mgb2YgaW5zdHJ1bWVudGF0aW9uLi4uJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hZGIuZW5kQW5kcm9pZENvdmVyYWdlKCk7XHJcbiAgICAgICAgLy8gVXNlIHRoaXMgYnJvYWRjYXN0IGludGVudCB0byBub3RpZnkgaXQncyB0aW1lIHRvIGR1bXAgY292ZXJhZ2UgdG8gZmlsZVxyXG4gICAgICAgIGlmICh0aGlzLmNhcHMuYW5kcm9pZENvdmVyYWdlRW5kSW50ZW50KSB7XHJcbiAgICAgICAgICBsb2dnZXIuaW5mbyhgU2VuZGluZyBpbnRlbnQgYnJvYWRjYXN0ICcke3RoaXMuY2Fwcy5hbmRyb2lkQ292ZXJhZ2VFbmRJbnRlbnR9JyBhdCB0aGUgZW5kIG9mIGluc3RydW1lbnRpbmcuYCk7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmFkYi5icm9hZGNhc3QodGhpcy5jYXBzLmFuZHJvaWRDb3ZlcmFnZUVuZEludGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxvZ2dlci53YXJuKCdObyBhbmRyb2lkQ292ZXJhZ2VFbmRJbnRlbnQgaXMgY29uZmlndXJlZCBpbiBjYXBzLiBQb3NzaWJseSB5b3UgY2Fubm90IGdldCBjb3ZlcmFnZSBmaWxlLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5vcHRzLmFwcFBhY2thZ2UpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5hZGIuZm9yY2VTdG9wKHRoaXMub3B0cy5hcHBQYWNrYWdlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGxvZ2dlci53YXJuKGBVbmFibGUgdG8gZm9yY2Ugc3RvcCBhcHA6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm9wdHMuZnVsbFJlc2V0ICYmICF0aGlzLm9wdHMuc2tpcFVuaW5zdGFsbCAmJiAhdGhpcy5hcHBPbkRldmljZSkge1xyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgQ2FwYWJpbGl0eSAnZnVsbFJlc2V0JyBzZXQgdG8gJ3RydWUnLCBVbmluc3RhbGxpbmcgJyR7dGhpcy5vcHRzLmFwcFBhY2thZ2V9J2ApO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmFkYi51bmluc3RhbGxBcGsodGhpcy5vcHRzLmFwcFBhY2thZ2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgbG9nZ2VyLndhcm4oYFVuYWJsZSB0byB1bmluc3RhbGwgYXBwOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0aGlzLmFkYi5zdG9wTG9nY2F0KCk7XHJcbiAgICAgIGlmICh0aGlzLm9wdHMucmVib290KSB7XHJcbiAgICAgICAgbGV0IGF2ZE5hbWUgPSB0aGlzLm9wdHMuYXZkLnJlcGxhY2UoJ0AnLCAnJyk7XHJcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBDbG9zaW5nIGVtdWxhdG9yICcke2F2ZE5hbWV9J2ApO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmFkYi5raWxsRW11bGF0b3IoYXZkTmFtZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBsb2dnZXIud2FybihgVW5hYmxlIHRvIGNsb3NlIGVtdWxhdG9yOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXdhaXQgc3VwZXIuZGVsZXRlU2Vzc2lvbigpO1xyXG4gICAgaWYgKHRoaXMub3B0cy5zeXN0ZW1Qb3J0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5hZGIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCB0aGlzLmFkYi5yZW1vdmVQb3J0Rm9yd2FyZCh0aGlzLm9wdHMuc3lzdGVtUG9ydCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9nZ2VyLndhcm4oYFVuYWJsZSB0byByZW1vdmUgcG9ydCBmb3J3YXJkICcke2Vycm9yLm1lc3NhZ2V9J2ApO1xyXG4gICAgICAgIC8vSWdub3JlLCB0aGlzIGJsb2NrIHdpbGwgYWxzbyBiZSBjYWxsZWQgd2hlbiB3ZSBmYWxsIGluIGNhdGNoIGJsb2NrXHJcbiAgICAgICAgLy8gYW5kIGJlZm9yZSBldmVuIHBvcnQgZm9yd2FyZC5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY2hlY2tBcHBQcmVzZW50ICgpIHtcclxuICAgIGxvZ2dlci5kZWJ1ZygnQ2hlY2tpbmcgd2hldGhlciBhcHAgaXMgYWN0dWFsbHkgcHJlc2VudCcpO1xyXG4gICAgaWYgKCEoYXdhaXQgZnMuZXhpc3RzKHRoaXMub3B0cy5hcHApKSkge1xyXG4gICAgICBsb2dnZXIuZXJyb3JBbmRUaHJvdyhgQ291bGQgbm90IGZpbmQgYXBwIGFwayBhdCAnJHt0aGlzLm9wdHMuYXBwfSdgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlZmF1bHRXZWJ2aWV3TmFtZSAoKSB7XHJcbiAgICByZXR1cm4gYCR7V0VCVklFV19CQVNFfTBgO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25TZXR0aW5nc1VwZGF0ZSAoa2V5LCB2YWx1ZSkge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge1trZXldOiB2YWx1ZX07XHJcbiAgICBhd2FpdCB0aGlzLnVpYXV0b21hdG9yMi5qd3Byb3h5LmNvbW1hbmQoJy9hcHBpdW0vc2V0dGluZ3MnLCAnUE9TVCcsIHtzZXR0aW5nc30pO1xyXG4gIH1cclxuXHJcbiAgLy8gTmVlZCB0byBvdmVycmlkZSBhbmRyb2lkLWRyaXZlcidzIHZlcnNpb24gb2YgdGhpcyBzaW5jZSB3ZSBkb24ndCBhY3R1YWxseVxyXG4gIC8vIGhhdmUgYSBib290c3RyYXA7IGluc3RlYWQgd2UganVzdCByZXN0YXJ0IGFkYiBhbmQgcmUtZm9yd2FyZCB0aGUgVWlBdXRvbWF0b3IyXHJcbiAgLy8gcG9ydFxyXG4gIGFzeW5jIHdyYXBCb290c3RyYXBEaXNjb25uZWN0ICh3cmFwcGVkKSB7XHJcbiAgICBhd2FpdCB3cmFwcGVkKCk7XHJcbiAgICBhd2FpdCB0aGlzLmFkYi5yZXN0YXJ0KCk7XHJcbiAgICBhd2FpdCB0aGlzLmFkYi5mb3J3YXJkUG9ydCh0aGlzLm9wdHMuc3lzdGVtUG9ydCwgREVWSUNFX1BPUlQpO1xyXG4gIH1cclxuXHJcbiAgcHJveHlBY3RpdmUgKHNlc3Npb25JZCkge1xyXG4gICAgc3VwZXIucHJveHlBY3RpdmUoc2Vzc2lvbklkKTtcclxuXHJcbiAgICAvLyB3ZSBhbHdheXMgaGF2ZSBhbiBhY3RpdmUgcHJveHkgdG8gdGhlIFVpQXV0b21hdG9yMiBzZXJ2ZXJcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2FuUHJveHkgKHNlc3Npb25JZCkge1xyXG4gICAgc3VwZXIuY2FuUHJveHkoc2Vzc2lvbklkKTtcclxuXHJcbiAgICAvLyB3ZSBjYW4gYWx3YXlzIHByb3h5IHRvIHRoZSB1aWF1dG9tYXRvcjIgc2VydmVyXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldFByb3h5QXZvaWRMaXN0IChzZXNzaW9uSWQpIHtcclxuICAgIHN1cGVyLmdldFByb3h5QXZvaWRMaXN0KHNlc3Npb25JZCk7XHJcbiAgICAvLyB3ZSBhcmUgbWFpbnRhaW5pbmcgdHdvIHNldHMgb2YgTk9fUFJPWFkgbGlzdHMsIG9uZSBmb3IgY2hyb21lZHJpdmVyKENIUk9NRV9OT19QUk9YWSlcclxuICAgIC8vIGFuZCBvbmUgZm9yIHVpYXV0b21hdG9yMihOT19QUk9YWSksIGJhc2VkIG9uIGN1cnJlbnQgY29udGV4dCB3aWxsIHJldHVybiByZWxhdGVkIE5PX1BST1hZIGxpc3RcclxuICAgIGlmICh1dGlsLmhhc1ZhbHVlKHRoaXMuY2hyb21lZHJpdmVyKSkge1xyXG4gICAgICAvL2lmIHRoZSBjdXJyZW50IGNvbnRleHQgaXMgd2VidmlldyhjaHJvbWVkcml2ZXIpLCB0aGVuIHJldHVybiBDSFJPTUVfTk9fUFJPWFkgbGlzdFxyXG4gICAgICB0aGlzLmp3cFByb3h5QXZvaWQgPSBDSFJPTUVfTk9fUFJPWFk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmp3cFByb3h5QXZvaWQgPSBOT19QUk9YWTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdHMubmF0aXZlV2ViU2NyZWVuc2hvdCkge1xyXG4gICAgICB0aGlzLmp3cFByb3h5QXZvaWQgPSBbLi4udGhpcy5qd3BQcm94eUF2b2lkLCBbJ0dFVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9zY3JlZW5zaG90JyldXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5qd3BQcm94eUF2b2lkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQ2hyb21lU2Vzc2lvbiAoKSB7XHJcbiAgICByZXR1cm4gaGVscGVycy5pc0Nocm9tZUJyb3dzZXIodGhpcy5vcHRzLmJyb3dzZXJOYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGZpcnN0IGFkZCB0aGUgYW5kcm9pZC1kcml2ZXIgY29tbWFuZHMgd2hpY2ggd2Ugd2lsbCBmYWxsIGJhY2sgdG9cclxuZm9yIChsZXQgW2NtZCwgZm5dIG9mIF8udG9QYWlycyhhbmRyb2lkQ29tbWFuZHMpKSB7XHJcbiAgLy8gd2UgZG8gc29tZSBkaWZmZXJlbnQvc3BlY2lhbCB0aGluZ3Mgd2l0aCB0aGVzZSBtZXRob2RzXHJcbiAgaWYgKCFfLmluY2x1ZGVzKFsnZGVmYXVsdFdlYnZpZXdOYW1lJ10sIGNtZCkpIHtcclxuICAgIEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXIucHJvdG90eXBlW2NtZF0gPSBmbjtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRoZW4gb3ZlcndyaXRlIHdpdGggYW55IHVpYXV0b21hdG9yMi1zcGVjaWZpYyBjb21tYW5kc1xyXG5mb3IgKGxldCBbY21kLCBmbl0gb2YgXy50b1BhaXJzKGNvbW1hbmRzKSkge1xyXG4gIEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXIucHJvdG90eXBlW2NtZF0gPSBmbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5kcm9pZFVpYXV0b21hdG9yMkRyaXZlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi4ifQ==
