'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _appiumSupport = require('appium-support');

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

/**
 * UI2_VER, SERVER_DOWNLOAD_SHA512, SERVER_TEST_DOWNLOAD_SHA512 should be updated for every appium-uiautomator2-server release.
 */
var UI2_VER = "v0.3.0";
var SERVER_DOWNLOAD_SHA512 = "cc1f86460eb431f7ba6e62ff25c06b9cbbb9070642fa58f74a38d12bc897058065665b209aee54a41ddf69b3bf67f3cd0e4132e489810ed68b399b0d338e674d";
var SERVER_TEST_DOWNLOAD_SHA512 = "af54757ea3d91ba3ec69495ce9827d2de7f08cefb0d13a5c6a007db1c5b88915dd747e7b97d8be1d078278ee28c8cff28a76d3e01afa4cfb2ca519d2efd0b915";

var UI2_SERVER_DOWNLOAD_CDNURL = process.env.npm_config_uiautomator2_driver_cdnurl || process.env.UIAUTOMATOR2_DRIVER_CDNURL || 'https://github.com/appium/appium-uiautomator2-server/releases/download';
var UI2_SERVER_DOWNLOAD = UI2_SERVER_DOWNLOAD_CDNURL + ('/' + UI2_VER + '/appium-uiautomator2-server-' + UI2_VER + '.apk');
var UI2_SERVER_TEST_DOWNLOAD = UI2_SERVER_DOWNLOAD_CDNURL + ('/' + UI2_VER + '/appium-uiautomator2-server-debug-androidTest.apk');
var UI2_DIR = _path2['default'].resolve(__dirname, "..", "..", "uiautomator2");
var UI2_SERVER_APK_PATH = _path2['default'].resolve(UI2_DIR, 'appium-uiautomator2-server-' + UI2_VER + '.apk');
var UI2_TEST_APK_PATH = _path2['default'].resolve(UI2_DIR, 'appium-uiautomator2-server-debug-androidTest.apk');

function setupUiAutomator2() {
  return _regeneratorRuntime.async(function setupUiAutomator2$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(hashCheck(UI2_SERVER_APK_PATH, SERVER_DOWNLOAD_SHA512));

      case 2:
        context$1$0.t0 = context$1$0.sent;

        if (!context$1$0.t0) {
          context$1$0.next = 7;
          break;
        }

        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(hashCheck(UI2_TEST_APK_PATH, SERVER_TEST_DOWNLOAD_SHA512));

      case 6:
        context$1$0.t0 = context$1$0.sent;

      case 7:
        if (!context$1$0.t0) {
          context$1$0.next = 12;
          break;
        }

        _logger2['default'].info('UiAutomator2 apks \'' + UI2_SERVER_APK_PATH + '\' and \'' + UI2_TEST_APK_PATH + '\' exist and have correct hash, skipping download');
        return context$1$0.abrupt('return');

      case 12:
        context$1$0.next = 14;
        return _regeneratorRuntime.awrap(downloadUiAutomator2ServerApk());

      case 14:
        context$1$0.next = 16;
        return _regeneratorRuntime.awrap(serverExists());

      case 16:
        if (context$1$0.sent) {
          context$1$0.next = 18;
          break;
        }

        throw new Error("Something went wrong in setting up UiAutomator2");

      case 18:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function hashCheck(fileName, SHA512) {
  var buffer, fingerprint;
  return _regeneratorRuntime.async(function hashCheck$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.exists(fileName));

      case 2:
        if (!context$1$0.sent) {
          context$1$0.next = 10;
          break;
        }

        buffer = require("fs").readFileSync(fileName);
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(sha512(buffer));

      case 6:
        fingerprint = context$1$0.sent;
        return context$1$0.abrupt('return', fingerprint === SHA512);

      case 10:
        return context$1$0.abrupt('return', false);

      case 11:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function downloadUiAutomator2ServerApk() {
  var serverApk, serverTestApk, serverFingerprint, serverTestFingerprint;
  return _regeneratorRuntime.async(function downloadUiAutomator2ServerApk$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.mkdir(UI2_DIR));

      case 2:
        _logger2['default'].info('downloading UiAutomator2 Server APK ' + UI2_VER + ' : ' + UI2_SERVER_DOWNLOAD);
        _logger2['default'].info('downloading UiAutomator2 Server test APK ' + UI2_VER + ' : ' + UI2_SERVER_TEST_DOWNLOAD);
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(_requestPromise2['default'].get({ url: UI2_SERVER_DOWNLOAD, encoding: null }));

      case 6:
        serverApk = context$1$0.sent;
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(_requestPromise2['default'].get({ url: UI2_SERVER_TEST_DOWNLOAD, encoding: null }));

      case 9:
        serverTestApk = context$1$0.sent;

        if (serverApk instanceof Buffer) {
          context$1$0.next = 12;
          break;
        }

        throw new Error(Object.prototype.toString.call(serverApk));

      case 12:
        if (serverTestApk instanceof Buffer) {
          context$1$0.next = 14;
          break;
        }

        throw new Error(Object.prototype.toString.call(serverTestApk));

      case 14:
        context$1$0.next = 16;
        return _regeneratorRuntime.awrap(sha512(serverApk));

      case 16:
        serverFingerprint = context$1$0.sent;
        context$1$0.next = 19;
        return _regeneratorRuntime.awrap(sha512(serverTestApk));

      case 19:
        serverTestFingerprint = context$1$0.sent;

        if (!(serverFingerprint !== SERVER_DOWNLOAD_SHA512)) {
          context$1$0.next = 24;
          break;
        }

        _logger2['default'].errorAndThrow('bad Server SHA512 fingerprint: ' + serverFingerprint);
        _logger2['default'].error("Stopping the installation");
        return context$1$0.abrupt('return');

      case 24:
        if (!(serverTestFingerprint !== SERVER_TEST_DOWNLOAD_SHA512)) {
          context$1$0.next = 28;
          break;
        }

        _logger2['default'].errorAndThrow('bad Server test SHA512 fingerprint: ' + serverTestFingerprint);
        _logger2['default'].error("Stopping the installation");
        return context$1$0.abrupt('return');

      case 28:
        context$1$0.next = 30;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.writeFile(UI2_SERVER_APK_PATH, serverApk, { encoding: 'binary' }));

      case 30:
        context$1$0.next = 32;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.writeFile(UI2_TEST_APK_PATH, serverTestApk, { encoding: 'binary' }));

      case 32:
        context$1$0.next = 34;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.chmod(UI2_SERVER_APK_PATH, 420));

      case 34:
        context$1$0.next = 36;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.chmod(UI2_TEST_APK_PATH, 420));

      case 36:

        _logger2['default'].info("UiAutomator2 Server APKs downloaded");

      case 37:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function sha512(buffer) {
  var hash;
  return _regeneratorRuntime.async(function sha512$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        hash = _crypto2['default'].createHash('sha512');
        return context$1$0.abrupt('return', hash.update(buffer).digest('hex'));

      case 2:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function serverExists() {
  return _regeneratorRuntime.async(function serverExists$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.exists(UI2_SERVER_APK_PATH));

      case 3:
        context$1$0.t0 = context$1$0.sent;

        if (!context$1$0.t0) {
          context$1$0.next = 8;
          break;
        }

        context$1$0.next = 7;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.exists(UI2_TEST_APK_PATH));

      case 7:
        context$1$0.t0 = context$1$0.sent;

      case 8:
        return context$1$0.abrupt('return', context$1$0.t0);

      case 11:
        context$1$0.prev = 11;
        context$1$0.t1 = context$1$0['catch'](0);

        if (!(context$1$0.t1.code.indexOf("ENOENT") !== -1)) {
          context$1$0.next = 15;
          break;
        }

        return context$1$0.abrupt('return', false);

      case 15:
        throw context$1$0.t1;

      case 16:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[0, 11]]);
}

exports.setupUiAutomator2 = setupUiAutomator2;
exports.serverExists = serverExists;
exports.UI2_SERVER_APK_PATH = UI2_SERVER_APK_PATH;
exports.UI2_TEST_APK_PATH = UI2_TEST_APK_PATH;
exports.UI2_VER = UI2_VER;
//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7Ozs7OzRDQUMxQixLQUFLOzs7Ozs7Ozs7O0NBSWpCOztRQUVRLGlCQUFpQixHQUFqQixpQkFBaUI7UUFBRSxZQUFZLEdBQVosWUFBWTtRQUFFLG1CQUFtQixHQUFuQixtQkFBbUI7UUFBRSxpQkFBaUIsR0FBakIsaUJBQWlCO1FBQUUsT0FBTyxHQUFQLE9BQU8iLCJmaWxlIjoibGliL2luc3RhbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBmcyB9IGZyb20gJ2FwcGl1bS1zdXBwb3J0JztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdC1wcm9taXNlJztcclxuaW1wb3J0IGxvZyBmcm9tICcuL2xvZ2dlcic7XHJcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuXHJcbi8qKlxyXG4gKiBVSTJfVkVSLCBTRVJWRVJfRE9XTkxPQURfU0hBNTEyLCBTRVJWRVJfVEVTVF9ET1dOTE9BRF9TSEE1MTIgc2hvdWxkIGJlIHVwZGF0ZWQgZm9yIGV2ZXJ5IGFwcGl1bS11aWF1dG9tYXRvcjItc2VydmVyIHJlbGVhc2UuXHJcbiAqL1xyXG5jb25zdCBVSTJfVkVSID0gXCJ2MC4zLjBcIjtcclxuY29uc3QgU0VSVkVSX0RPV05MT0FEX1NIQTUxMiA9IFwiY2MxZjg2NDYwZWI0MzFmN2JhNmU2MmZmMjVjMDZiOWNiYmI5MDcwNjQyZmE1OGY3NGEzOGQxMmJjODk3MDU4MDY1NjY1YjIwOWFlZTU0YTQxZGRmNjliM2JmNjdmM2NkMGU0MTMyZTQ4OTgxMGVkNjhiMzk5YjBkMzM4ZTY3NGRcIjtcclxuY29uc3QgU0VSVkVSX1RFU1RfRE9XTkxPQURfU0hBNTEyID0gXCJhZjU0NzU3ZWEzZDkxYmEzZWM2OTQ5NWNlOTgyN2QyZGU3ZjA4Y2VmYjBkMTNhNWM2YTAwN2RiMWM1Yjg4OTE1ZGQ3NDdlN2I5N2Q4YmUxZDA3ODI3OGVlMjhjOGNmZjI4YTc2ZDNlMDFhZmE0Y2ZiMmNhNTE5ZDJlZmQwYjkxNVwiO1xyXG5cclxuY29uc3QgVUkyX1NFUlZFUl9ET1dOTE9BRF9DRE5VUkwgPSBwcm9jZXNzLmVudi5ucG1fY29uZmlnX3VpYXV0b21hdG9yMl9kcml2ZXJfY2RudXJsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuVUlBVVRPTUFUT1IyX0RSSVZFUl9DRE5VUkwgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaHR0cHM6Ly9naXRodWIuY29tL2FwcGl1bS9hcHBpdW0tdWlhdXRvbWF0b3IyLXNlcnZlci9yZWxlYXNlcy9kb3dubG9hZGA7XHJcbmNvbnN0IFVJMl9TRVJWRVJfRE9XTkxPQUQgPSBVSTJfU0VSVkVSX0RPV05MT0FEX0NETlVSTCArXHJcbiAgICBgLyR7VUkyX1ZFUn0vYXBwaXVtLXVpYXV0b21hdG9yMi1zZXJ2ZXItJHtVSTJfVkVSfS5hcGtgO1xyXG5jb25zdCBVSTJfU0VSVkVSX1RFU1RfRE9XTkxPQUQgPSBVSTJfU0VSVkVSX0RPV05MT0FEX0NETlVSTCArXHJcbiAgICBgLyR7VUkyX1ZFUn0vYXBwaXVtLXVpYXV0b21hdG9yMi1zZXJ2ZXItZGVidWctYW5kcm9pZFRlc3QuYXBrYDtcclxuY29uc3QgVUkyX0RJUiA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi5cIiwgXCIuLlwiLCBcInVpYXV0b21hdG9yMlwiKTtcclxuY29uc3QgVUkyX1NFUlZFUl9BUEtfUEFUSCA9IHBhdGgucmVzb2x2ZShVSTJfRElSLCBgYXBwaXVtLXVpYXV0b21hdG9yMi1zZXJ2ZXItJHtVSTJfVkVSfS5hcGtgKTtcclxuY29uc3QgVUkyX1RFU1RfQVBLX1BBVEggPSBwYXRoLnJlc29sdmUoVUkyX0RJUiwgYGFwcGl1bS11aWF1dG9tYXRvcjItc2VydmVyLWRlYnVnLWFuZHJvaWRUZXN0LmFwa2ApO1xyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXR1cFVpQXV0b21hdG9yMiAoKSB7XHJcbiAgaWYgKGF3YWl0IGhhc2hDaGVjayhVSTJfU0VSVkVSX0FQS19QQVRILCBTRVJWRVJfRE9XTkxPQURfU0hBNTEyKSAmJiBhd2FpdCBoYXNoQ2hlY2soVUkyX1RFU1RfQVBLX1BBVEgsIFNFUlZFUl9URVNUX0RPV05MT0FEX1NIQTUxMikpIHtcclxuICAgIGxvZy5pbmZvKGBVaUF1dG9tYXRvcjIgYXBrcyAnJHtVSTJfU0VSVkVSX0FQS19QQVRIfScgYW5kICcke1VJMl9URVNUX0FQS19QQVRIfScgZXhpc3QgYW5kIGhhdmUgY29ycmVjdCBoYXNoLCBza2lwcGluZyBkb3dubG9hZGApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhd2FpdCBkb3dubG9hZFVpQXV0b21hdG9yMlNlcnZlckFwaygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCEoYXdhaXQgc2VydmVyRXhpc3RzKCkpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZyBpbiBzZXR0aW5nIHVwIFVpQXV0b21hdG9yMlwiKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhc2hDaGVjayAoZmlsZU5hbWUsIFNIQTUxMikge1xyXG4gIGlmIChhd2FpdCBmcy5leGlzdHMoZmlsZU5hbWUpKSB7XHJcbiAgICBsZXQgYnVmZmVyID0gcmVxdWlyZShcImZzXCIpLnJlYWRGaWxlU3luYyhmaWxlTmFtZSk7XHJcbiAgICBsZXQgZmluZ2VycHJpbnQgPSAgYXdhaXQgc2hhNTEyKGJ1ZmZlcik7XHJcbiAgICByZXR1cm4gZmluZ2VycHJpbnQgPT09IFNIQTUxMjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRVaUF1dG9tYXRvcjJTZXJ2ZXJBcGsgKCkge1xyXG4gIGF3YWl0IGZzLm1rZGlyKFVJMl9ESVIpO1xyXG4gIGxvZy5pbmZvKGBkb3dubG9hZGluZyBVaUF1dG9tYXRvcjIgU2VydmVyIEFQSyAke1VJMl9WRVJ9IDogJHtVSTJfU0VSVkVSX0RPV05MT0FEfWApO1xyXG4gIGxvZy5pbmZvKGBkb3dubG9hZGluZyBVaUF1dG9tYXRvcjIgU2VydmVyIHRlc3QgQVBLICR7VUkyX1ZFUn0gOiAke1VJMl9TRVJWRVJfVEVTVF9ET1dOTE9BRH1gKTtcclxuICBsZXQgc2VydmVyQXBrID0gYXdhaXQgcmVxdWVzdC5nZXQoe3VybDogVUkyX1NFUlZFUl9ET1dOTE9BRCwgZW5jb2Rpbmc6IG51bGx9KTtcclxuICBsZXQgc2VydmVyVGVzdEFwayA9IGF3YWl0IHJlcXVlc3QuZ2V0KHt1cmw6IFVJMl9TRVJWRVJfVEVTVF9ET1dOTE9BRCwgZW5jb2Rpbmc6IG51bGx9KTtcclxuICBpZiAoIShzZXJ2ZXJBcGsgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNlcnZlckFwaykpO1xyXG4gIH1cclxuICBpZiAoIShzZXJ2ZXJUZXN0QXBrIGluc3RhbmNlb2YgQnVmZmVyKSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzZXJ2ZXJUZXN0QXBrKSk7XHJcbiAgfVxyXG4gIGxldCBzZXJ2ZXJGaW5nZXJwcmludCA9IGF3YWl0IHNoYTUxMihzZXJ2ZXJBcGspO1xyXG4gIGxldCBzZXJ2ZXJUZXN0RmluZ2VycHJpbnQgPSBhd2FpdCBzaGE1MTIoc2VydmVyVGVzdEFwayk7XHJcblxyXG4gIGlmIChzZXJ2ZXJGaW5nZXJwcmludCAhPT0gU0VSVkVSX0RPV05MT0FEX1NIQTUxMikge1xyXG4gICAgbG9nLmVycm9yQW5kVGhyb3coYGJhZCBTZXJ2ZXIgU0hBNTEyIGZpbmdlcnByaW50OiAke3NlcnZlckZpbmdlcnByaW50fWApO1xyXG4gICAgbG9nLmVycm9yKFwiU3RvcHBpbmcgdGhlIGluc3RhbGxhdGlvblwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKHNlcnZlclRlc3RGaW5nZXJwcmludCAhPT0gU0VSVkVSX1RFU1RfRE9XTkxPQURfU0hBNTEyKSB7XHJcbiAgICBsb2cuZXJyb3JBbmRUaHJvdyhgYmFkIFNlcnZlciB0ZXN0IFNIQTUxMiBmaW5nZXJwcmludDogJHtzZXJ2ZXJUZXN0RmluZ2VycHJpbnR9YCk7XHJcbiAgICBsb2cuZXJyb3IoXCJTdG9wcGluZyB0aGUgaW5zdGFsbGF0aW9uXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBhd2FpdCBmcy53cml0ZUZpbGUoVUkyX1NFUlZFUl9BUEtfUEFUSCwgc2VydmVyQXBrLCB7ZW5jb2Rpbmc6ICdiaW5hcnknfSk7XHJcbiAgYXdhaXQgZnMud3JpdGVGaWxlKFVJMl9URVNUX0FQS19QQVRILCBzZXJ2ZXJUZXN0QXBrLCB7ZW5jb2Rpbmc6ICdiaW5hcnknfSk7XHJcblxyXG4gIGF3YWl0IGZzLmNobW9kKFVJMl9TRVJWRVJfQVBLX1BBVEgsIDBvMDY0NCk7XHJcbiAgYXdhaXQgZnMuY2htb2QoVUkyX1RFU1RfQVBLX1BBVEgsIDBvMDY0NCk7XHJcblxyXG4gIGxvZy5pbmZvKFwiVWlBdXRvbWF0b3IyIFNlcnZlciBBUEtzIGRvd25sb2FkZWRcIik7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNoYTUxMiAoYnVmZmVyKSB7XHJcbiAgY29uc3QgaGFzaCA9IGNyeXB0by5jcmVhdGVIYXNoKCdzaGE1MTInKTtcclxuICByZXR1cm4gaGFzaC51cGRhdGUoYnVmZmVyKS5kaWdlc3QoJ2hleCcpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXJ2ZXJFeGlzdHMgKCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gKGF3YWl0IGZzLmV4aXN0cyhVSTJfU0VSVkVSX0FQS19QQVRIKSAmJlxyXG4gICAgYXdhaXQgZnMuZXhpc3RzKFVJMl9URVNUX0FQS19QQVRIKSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUuY29kZS5pbmRleE9mKFwiRU5PRU5UXCIpICE9PSAtMSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgc2V0dXBVaUF1dG9tYXRvcjIsIHNlcnZlckV4aXN0cywgVUkyX1NFUlZFUl9BUEtfUEFUSCwgVUkyX1RFU1RfQVBLX1BBVEgsIFVJMl9WRVIgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi4ifQ==
