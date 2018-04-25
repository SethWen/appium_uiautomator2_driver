'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _ = require('../../..');

var _libLogger = require('../../../lib/logger');

var _libLogger2 = _interopRequireDefault(_libLogger);

var _wd = require('wd');

var _wd2 = _interopRequireDefault(_wd);

function initDriver(caps, adbPort) {
  var adb, driver;
  return _regeneratorRuntime.async(function initDriver$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!process.env.TRAVIS) {
          context$1$0.next = 13;
          break;
        }

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(_appiumAdb2['default'].createADB({ adbPort: adbPort }));

      case 3:
        adb = context$1$0.sent;
        context$1$0.prev = 4;
        context$1$0.next = 7;
        return _regeneratorRuntime.awrap(adb.forceStop('com.android.inputmethod.latin'));

      case 7:
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(adb.shell(['pm', 'clear', 'com.android.inputmethod.latin']));

      case 9:
        context$1$0.next = 13;
        break;

      case 11:
        context$1$0.prev = 11;
        context$1$0.t0 = context$1$0['catch'](4);

      case 13:

        // Create a WD driver
        _libLogger2['default'].debug('Starting session on ' + _.DEFAULT_HOST + ':' + _.DEFAULT_PORT);
        context$1$0.next = 16;
        return _regeneratorRuntime.awrap(_wd2['default'].promiseChainRemote(_.DEFAULT_HOST, _.DEFAULT_PORT));

      case 16:
        driver = context$1$0.sent;
        context$1$0.next = 19;
        return _regeneratorRuntime.awrap(driver.init(caps));

      case 19:
        return context$1$0.abrupt('return', driver);

      case 20:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[4, 11]]);
}

exports.initDriver = initDriver;

// on Travis, sometimes we get the keyboard dying and the screen stuck
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9oZWxwZXJzL3Nlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozt5QkFBZ0IsWUFBWTs7OztnQkFDZSxVQUFVOzt5QkFDbEMscUJBQXFCOzs7O2tCQUN6QixJQUFJOzs7O0FBRW5CLFNBQWUsVUFBVSxDQUFFLElBQUksRUFBRSxPQUFPO01BRWhDLEdBQUcsRUFVTCxNQUFNOzs7O2FBWE4sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNOzs7Ozs7eUNBQ0osdUJBQUksU0FBUyxDQUFDLEVBQUMsT0FBTyxFQUFQLE9BQU8sRUFBQyxDQUFDOzs7QUFBcEMsV0FBRzs7O3lDQUdDLEdBQUcsQ0FBQyxTQUFTLENBQUMsK0JBQStCLENBQUM7Ozs7eUNBQzlDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLCtCQUErQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFLckUsK0JBQU8sS0FBSyxnRUFBdUQsQ0FBQzs7eUNBQ2pELGdCQUFHLGtCQUFrQixnQ0FBNEI7OztBQUFoRSxjQUFNOzt5Q0FDSixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7OzRDQUNoQixNQUFNOzs7Ozs7O0NBQ2Q7O1FBRVEsVUFBVSxHQUFWLFVBQVUiLCJmaWxlIjoidGVzdC9mdW5jdGlvbmFsL2hlbHBlcnMvc2Vzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBREIgZnJvbSAnYXBwaXVtLWFkYic7XHJcbmltcG9ydCB7IERFRkFVTFRfSE9TVCwgREVGQVVMVF9QT1JUIH0gZnJvbSAnLi4vLi4vLi4nO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uLy4uLy4uL2xpYi9sb2dnZXInO1xyXG5pbXBvcnQgd2QgZnJvbSAnd2QnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdERyaXZlciAoY2FwcywgYWRiUG9ydCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5UUkFWSVMpIHtcclxuICAgIGxldCBhZGIgPSBhd2FpdCBBREIuY3JlYXRlQURCKHthZGJQb3J0fSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBvbiBUcmF2aXMsIHNvbWV0aW1lcyB3ZSBnZXQgdGhlIGtleWJvYXJkIGR5aW5nIGFuZCB0aGUgc2NyZWVuIHN0dWNrXHJcbiAgICAgIGF3YWl0IGFkYi5mb3JjZVN0b3AoJ2NvbS5hbmRyb2lkLmlucHV0bWV0aG9kLmxhdGluJyk7XHJcbiAgICAgIGF3YWl0IGFkYi5zaGVsbChbJ3BtJywgJ2NsZWFyJywgJ2NvbS5hbmRyb2lkLmlucHV0bWV0aG9kLmxhdGluJ10pO1xyXG4gICAgfSBjYXRjaCAoaWduKSB7fVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGEgV0QgZHJpdmVyXHJcbiAgbG9nZ2VyLmRlYnVnKGBTdGFydGluZyBzZXNzaW9uIG9uICR7REVGQVVMVF9IT1NUfToke0RFRkFVTFRfUE9SVH1gKTtcclxuICBsZXQgZHJpdmVyID0gYXdhaXQgd2QucHJvbWlzZUNoYWluUmVtb3RlKERFRkFVTFRfSE9TVCwgREVGQVVMVF9QT1JUKTtcclxuICBhd2FpdCBkcml2ZXIuaW5pdChjYXBzKTtcclxuICByZXR1cm4gZHJpdmVyO1xyXG59XHJcblxyXG5leHBvcnQgeyBpbml0RHJpdmVyIH07Il0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLiJ9
