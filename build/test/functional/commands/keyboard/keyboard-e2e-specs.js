'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _asyncbox = require('asyncbox');

var _desired = require('../../desired');

var _helpersSession = require('../../helpers/session');

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var BUTTON_CLASS = 'android.widget.Button';
var EDITTEXT_CLASS = 'android.widget.EditText';

var PACKAGE = 'io.appium.android.apis';
var TEXTFIELD_ACTIVITY = '.view.TextFields';
var KEYEVENT_ACTIVITY = '.text.KeyEventText';

var defaultAsciiCaps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
  newCommandTimeout: 90,
  appPackage: PACKAGE,
  appActivity: TEXTFIELD_ACTIVITY
});

var defaultUnicodeCaps = _Object$assign({}, defaultAsciiCaps, {
  unicodeKeyboard: true,
  resetKeyboard: true
});

function deSamsungify(text) {
  // For samsung S5 text is appended with ". Editing."
  return text.replace(". Editing.", "");
}

function getElement(driver, className) {
  return _regeneratorRuntime.async(function getElement$(context$1$0) {
    var _this = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap((0, _asyncbox.retryInterval)(process.env.TESTOBJECT_E2E_TESTS ? 100 : 10, 1000, function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(driver.elementByClassName(className));

              case 2:
                return context$2$0.abrupt('return', context$2$0.sent);

              case 3:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this);
        }));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function waitForText(element, expectedText) {
  return _regeneratorRuntime.async(function waitForText$(context$1$0) {
    var _this2 = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap((0, _asyncbox.retryInterval)(process.env.TESTOBJECT_E2E_TESTS ? 100 : 10, 1000, function callee$1$0() {
          var text;
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(element.text());

              case 2:
                text = context$2$0.sent;

                if (!(text !== expectedText)) {
                  context$2$0.next = 5;
                  break;
                }

                throw new Error('Unexpected element text. Actual: "' + text + '". Expected: "' + expectedText + '"');

              case 5:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this2);
        }));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function runTextEditTest(driver, testText) {
  var keys = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
  var el;
  return _regeneratorRuntime.async(function runTextEditTest$(context$1$0) {
    var _this3 = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(getElement(driver, EDITTEXT_CLASS));

      case 2:
        el = context$1$0.sent;
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(el.clear());

      case 5:
        if (!keys) {
          context$1$0.next = 10;
          break;
        }

        context$1$0.next = 8;
        return _regeneratorRuntime.awrap(driver.keys([testText]));

      case 8:
        context$1$0.next = 12;
        break;

      case 10:
        context$1$0.next = 12;
        return _regeneratorRuntime.awrap(el.sendKeys(testText));

      case 12:
        context$1$0.next = 14;
        return _regeneratorRuntime.awrap((0, _asyncbox.retryInterval)(process.env.TESTOBJECT_E2E_TESTS ? 100 : 10, 1000, function callee$1$0() {
          var text;
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(el.text());

              case 2:
                text = context$2$0.sent;

                deSamsungify(text).should.be.equal(testText);

              case 4:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this3);
        }));

      case 14:
        return context$1$0.abrupt('return', el);

      case 15:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

/*
 * The key event page needs to be cleared between runs, or else we get false
 * positives from previously run tests. The page has a single button that
 * removes all text from within the main TextView.
 */
function clearKeyEvents(driver) {
  var el;
  return _regeneratorRuntime.async(function clearKeyEvents$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(getElement(driver, BUTTON_CLASS));

      case 2:
        el = context$1$0.sent;
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(el.click());

      case 5:
        context$1$0.next = 7;
        return _regeneratorRuntime.awrap(_bluebird2['default'].delay(500));

      case 7:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function keyEventTest(driver, keyCode, metaState, expectedTextArray) {
  var runTest, text, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, expectedText;

  return _regeneratorRuntime.async(function keyEventTest$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        runTest = function runTest() {
          var el;
          return _regeneratorRuntime.async(function runTest$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(driver.pressKeycode(keyCode, metaState));

              case 2:
                el = driver.elementById('io.appium.android.apis:id/text');
                context$2$0.next = 5;
                return _regeneratorRuntime.awrap(el.text());

              case 5:
                return context$2$0.abrupt('return', context$2$0.sent);

              case 6:
              case 'end':
                return context$2$0.stop();
            }
          }, null, this);
        };

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(clearKeyEvents(driver));

      case 3:
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(runTest());

      case 5:
        text = context$1$0.sent;

        if (text) {
          context$1$0.next = 10;
          break;
        }

        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(runTest());

      case 9:
        text = context$1$0.sent;

      case 10:
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 13;

        for (_iterator = _getIterator(expectedTextArray); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          expectedText = _step.value;

          text.should.include(expectedText);
        }
        context$1$0.next = 21;
        break;

      case 17:
        context$1$0.prev = 17;
        context$1$0.t0 = context$1$0['catch'](13);
        _didIteratorError = true;
        _iteratorError = context$1$0.t0;

      case 21:
        context$1$0.prev = 21;
        context$1$0.prev = 22;

        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }

      case 24:
        context$1$0.prev = 24;

        if (!_didIteratorError) {
          context$1$0.next = 27;
          break;
        }

        throw _iteratorError;

      case 27:
        return context$1$0.finish(24);

      case 28:
        return context$1$0.finish(21);

      case 29:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[13, 17, 21, 29], [22,, 24, 28]]);
}

function runCombinationKeyEventTest(driver) {
  return _regeneratorRuntime.async(function runCombinationKeyEventTest$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(keyEventTest(driver, 29, 193, ['keyCode=KEYCODE_A', 'metaState=META_SHIFT_ON']));

      case 2:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function runKeyEventTest(driver) {
  return _regeneratorRuntime.async(function runKeyEventTest$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(keyEventTest(driver, 82, undefined, ['[keycode=82]', 'keyCode=KEYCODE_MENU']));

      case 2:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

var tests = [{ label: 'editing a text field', text: 'Life, the Universe and Everything.' }, { label: 'sending \'&-\'', text: '&-' }, { label: 'sending \'&\' and \'-\' in other text', text: 'In the mid-1990s he ate fish & chips as mayor-elect.' }, { label: 'sending \'-\' in text', text: 'Super-test.' }, { label: 'sending numbers', text: '0123456789' }];

var unicodeTests = [{ label: 'should be able to send \'-\' in unicode text', text: 'परीक्षा-परीक्षण' }, { label: 'should be able to send \'&\' in text', text: 'Fish & chips' }, { label: 'should be able to send \'&\' in unicode text', text: 'Mīna & chips' }, { label: 'should be able to send roman characters with diacritics', text: 'Áé Œ ù ḍ' }, { label: 'should be able to send a \'u\' with an umlaut', text: 'ü' }];

var languageTests = [{ label: 'should be able to send Tamil', text: 'சோதனை' }, { label: 'should be able to send Gujarati', text: 'પરીક્ષણ' }, { label: 'should be able to send Chinese', text: '测试' }, { label: 'should be able to send Russian', text: 'тестирование' }, { label: 'should be able to send Arabic', text: 'تجريب' }, { label: 'should be able to send Hebrew', text: 'בדיקות' }];

describe('keyboard', function () {
  describe('ascii', function () {
    var _this4 = this;

    var driver = undefined;
    before(function callee$2$0() {
      var engines, selectedEngine, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, engine;

      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(defaultAsciiCaps));

          case 2:
            driver = context$3$0.sent;
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.availableIMEEngines());

          case 5:
            engines = context$3$0.sent;
            selectedEngine = _lodash2['default'].first(engines);
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            context$3$0.prev = 10;

            for (_iterator2 = _getIterator(engines); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              engine = _step2.value;

              // it seems that the latin ime has `android.inputmethod` in its package name
              if (engine.indexOf('android.inputmethod') !== -1) {
                selectedEngine = engine;
              }
            }
            context$3$0.next = 18;
            break;

          case 14:
            context$3$0.prev = 14;
            context$3$0.t0 = context$3$0['catch'](10);
            _didIteratorError2 = true;
            _iteratorError2 = context$3$0.t0;

          case 18:
            context$3$0.prev = 18;
            context$3$0.prev = 19;

            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }

          case 21:
            context$3$0.prev = 21;

            if (!_didIteratorError2) {
              context$3$0.next = 24;
              break;
            }

            throw _iteratorError2;

          case 24:
            return context$3$0.finish(21);

          case 25:
            return context$3$0.finish(18);

          case 26:
            context$3$0.next = 28;
            return _regeneratorRuntime.awrap(driver.activateIMEEngine(selectedEngine));

          case 28:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this, [[10, 14, 18, 26], [19,, 21, 25]]);
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
      }, null, _this4);
    });

    describe('editing a text field', function () {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        var _loop = function () {
          var test = _step3.value;

          describe(test.label, function () {
            it('should work with setValue', function callee$5$0() {
              return _regeneratorRuntime.async(function callee$5$0$(context$6$0) {
                while (1) switch (context$6$0.prev = context$6$0.next) {
                  case 0:
                    context$6$0.next = 2;
                    return _regeneratorRuntime.awrap(runTextEditTest(driver, test.text));

                  case 2:
                  case 'end':
                    return context$6$0.stop();
                }
              }, null, this);
            });
            it('should work with keys', function callee$5$0() {
              return _regeneratorRuntime.async(function callee$5$0$(context$6$0) {
                while (1) switch (context$6$0.prev = context$6$0.next) {
                  case 0:
                    context$6$0.next = 2;
                    return _regeneratorRuntime.awrap(runTextEditTest(driver, test.text, true));

                  case 2:
                  case 'end':
                    return context$6$0.stop();
                }
              }, null, this);
            });
          });
        };

        for (var _iterator3 = _getIterator(tests), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          _loop();
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

      it('should be able to clear a password field', function callee$3$0() {
        var password, els, passwordTextField, passwordOutput;
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              password = 'super-duper password';
              context$4$0.next = 3;
              return _regeneratorRuntime.awrap(driver.elementsByClassName(EDITTEXT_CLASS));

            case 3:
              els = context$4$0.sent;
              passwordTextField = els[1];
              context$4$0.next = 7;
              return _regeneratorRuntime.awrap(driver.elementById('io.appium.android.apis:id/edit1Text'));

            case 7:
              passwordOutput = context$4$0.sent;
              context$4$0.next = 10;
              return _regeneratorRuntime.awrap(passwordTextField.sendKeys(password));

            case 10:
              context$4$0.next = 12;
              return _regeneratorRuntime.awrap(waitForText(passwordOutput, password));

            case 12:
              context$4$0.next = 14;
              return _regeneratorRuntime.awrap(passwordTextField.clear());

            case 14:
              context$4$0.next = 16;
              return _regeneratorRuntime.awrap(waitForText(passwordOutput, ''));

            case 16:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });

      it('should be able to type in length-limited field', function callee$3$0() {
        var adb, els, el, text;
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              if (process.env.TESTOBJECT_E2E_TESTS) {
                context$4$0.next = 8;
                break;
              }

              adb = new _appiumAdb2['default']();
              context$4$0.next = 4;
              return _regeneratorRuntime.awrap(adb.getApiLevel());

            case 4:
              context$4$0.t0 = context$4$0.sent;
              context$4$0.t1 = parseInt(context$4$0.t0, 10);

              if (!(context$4$0.t1 < 24)) {
                context$4$0.next = 8;
                break;
              }

              return context$4$0.abrupt('return', this.skip());

            case 8:
              context$4$0.next = 10;
              return _regeneratorRuntime.awrap(driver.elementsByClassName(EDITTEXT_CLASS));

            case 10:
              els = context$4$0.sent;
              el = els[3];
              context$4$0.next = 14;
              return _regeneratorRuntime.awrap(el.setImmediateValue('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));

            case 14:
              context$4$0.next = 16;
              return _regeneratorRuntime.awrap(el.text());

            case 16:
              text = context$4$0.sent;

              text.should.eql('0123456789a');

            case 18:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });
    });

    describe('sending a key event', function () {
      before(function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(driver.startActivity({ appPackage: PACKAGE, appActivity: KEYEVENT_ACTIVITY }));

            case 2:
              context$4$0.next = 4;
              return _regeneratorRuntime.awrap(_bluebird2['default'].delay(500));

            case 4:
            case 'end':
              return context$4$0.stop();
          }
        }, null, _this4);
      });

      it('should be able to send combination keyevents', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(runCombinationKeyEventTest(driver));

            case 2:
            case 'end':
              return context$4$0.stop();
          }
        }, null, _this4);
      });
      it('should be able to send keyevents', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(runKeyEventTest(driver));

            case 2:
            case 'end':
              return context$4$0.stop();
          }
        }, null, _this4);
      });
    });
  });

  describe('unicode', function () {
    var _this5 = this;

    var adb = undefined;
    if (!process.env.TESTOBJECT_E2E_TESTS) {
      adb = new _appiumAdb2['default']();
    }
    var initialIME = undefined;
    var driver = undefined;
    before(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!adb) {
              context$3$0.next = 5;
              break;
            }

            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(adb.defaultIME());

          case 3:
            initialIME = context$3$0.sent;

            initialIME.should.not.eql('io.appium.android.ime/.UnicodeIME');

          case 5:
            context$3$0.next = 7;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(defaultUnicodeCaps));

          case 7:
            driver = context$3$0.sent;

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    after(function callee$2$0() {
      var ime;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.quit());

          case 2:
            if (!adb) {
              context$3$0.next = 8;
              break;
            }

            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(adb.defaultIME());

          case 5:
            ime = context$3$0.sent;

            ime.should.eql(initialIME);
            ime.should.not.eql('io.appium.android.ime/.UnicodeIME');

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    describe('editing a text field', function () {
      var _arr = [tests, unicodeTests, languageTests];

      for (var _i = 0; _i < _arr.length; _i++) {
        var testSet = _arr[_i];var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          var _loop2 = function () {
            var test = _step4.value;

            describe(test.label, function () {
              it('should work with setValue', function callee$5$0() {
                return _regeneratorRuntime.async(function callee$5$0$(context$6$0) {
                  while (1) switch (context$6$0.prev = context$6$0.next) {
                    case 0:
                      context$6$0.next = 2;
                      return _regeneratorRuntime.awrap(runTextEditTest(driver, test.text));

                    case 2:
                    case 'end':
                      return context$6$0.stop();
                  }
                }, null, this);
              });
              it('should work with keys', function callee$5$0() {
                return _regeneratorRuntime.async(function callee$5$0$(context$6$0) {
                  while (1) switch (context$6$0.prev = context$6$0.next) {
                    case 0:
                      context$6$0.next = 2;
                      return _regeneratorRuntime.awrap(runTextEditTest(driver, test.text, true));

                    case 2:
                    case 'end':
                      return context$6$0.stop();
                  }
                }, null, this);
              });
            });
          };

          for (var _iterator4 = _getIterator(testSet), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            _loop2();
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4['return']) {
              _iterator4['return']();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    });

    describe('sending a key event', function () {
      before(function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(driver.startActivity({ appPackage: PACKAGE, appActivity: KEYEVENT_ACTIVITY }));

            case 2:
            case 'end':
              return context$4$0.stop();
          }
        }, null, _this5);
      });

      it('should be able to send combination keyevents', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(runCombinationKeyEventTest(driver));

            case 2:
            case 'end':
              return context$4$0.stop();
          }
        }, null, _this5);
      });
      it('should be able to send keyevents', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(runKeyEventTest(driver));

            case 2:
            case 'end':
              return context$4$0.stop();
          }
        }, null, _this5);
      });
    });
  });
});

// wait a moment for the clearing to occur, lest we too quickly try to enter more text

// the test is flakey... try again

// sometimes the default ime is not what we are using

// there is currently no way to directly assert anything about the contents
// of a password field, since there is no way to access the contents

// below Android 7.0 (API level 24) typing too many characters in a
// length-limited field will either throw a NullPointerException or
// crash the app

// expect first 11 characters (limit of the field) to be in the field

// save the initial ime so we can make sure it is restored

// make sure the IME has been restored
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9rZXlib2FyZC9rZXlib2FyZC1lMmUtc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7c0JBQy9CLFFBQVE7Ozs7d0JBQ1IsVUFBVTs7Ozt3QkFDTSxVQUFVOzt1QkFDVixlQUFlOzs4QkFDbEIsdUJBQXVCOzt5QkFDbEMsWUFBWTs7OztBQUc1QixrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLElBQU0sWUFBWSxHQUFHLHVCQUF1QixDQUFDO0FBQzdDLElBQU0sY0FBYyxHQUFHLHlCQUF5QixDQUFDOztBQUVqRCxJQUFNLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQztBQUN6QyxJQUFNLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0FBQzlDLElBQU0saUJBQWlCLEdBQUcsb0JBQW9CLENBQUM7O0FBRS9DLElBQUksZ0JBQWdCLEdBQUcsZUFBYyxFQUFFLDBCQUFpQjtBQUN0RCxtQkFBaUIsRUFBRSxFQUFFO0FBQ3JCLFlBQVUsRUFBRSxPQUFPO0FBQ25CLGFBQVcsRUFBRSxrQkFBa0I7Q0FDaEMsQ0FBQyxDQUFDOztBQUVILElBQUksa0JBQWtCLEdBQUcsZUFBYyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUU7QUFDM0QsaUJBQWUsRUFBRSxJQUFJO0FBQ3JCLGVBQWEsRUFBRSxJQUFJO0NBQ3BCLENBQUMsQ0FBQzs7QUFFSCxTQUFTLFlBQVksQ0FBRSxJQUFJLEVBQUU7O0FBRTNCLFNBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDdkM7O0FBRUQsU0FBZSxVQUFVLENBQUUsTUFBTSxFQUFFLFNBQVM7Ozs7Ozs7eUNBQzdCLDZCQUFjLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUU7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Ozs7T0FDekMsQ0FBQyxDQUFDO0FBQ0gsUUFBRSxDQUFDLGtDQUFrQyxFQUFFOzs7OzsrQ0FDL0IsZUFBZSxDQUFDLE1BQU0sQ0FBQzs7Ozs7OztPQUM5QixDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC9mdW5jdGlvbmFsL2NvbW1hbmRzL2tleWJvYXJkL2tleWJvYXJkLWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBCIGZyb20gJ2JsdWViaXJkJztcclxuaW1wb3J0IHsgcmV0cnlJbnRlcnZhbCB9IGZyb20gJ2FzeW5jYm94JztcclxuaW1wb3J0IHsgQVBJREVNT1NfQ0FQUyB9IGZyb20gJy4uLy4uL2Rlc2lyZWQnO1xyXG5pbXBvcnQgeyBpbml0RHJpdmVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zZXNzaW9uJztcclxuaW1wb3J0IEFEQiBmcm9tICdhcHBpdW0tYWRiJztcclxuXHJcblxyXG5jaGFpLnNob3VsZCgpO1xyXG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XHJcblxyXG5jb25zdCBCVVRUT05fQ0xBU1MgPSAnYW5kcm9pZC53aWRnZXQuQnV0dG9uJztcclxuY29uc3QgRURJVFRFWFRfQ0xBU1MgPSAnYW5kcm9pZC53aWRnZXQuRWRpdFRleHQnO1xyXG5cclxuY29uc3QgUEFDS0FHRSA9ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJztcclxuY29uc3QgVEVYVEZJRUxEX0FDVElWSVRZID0gJy52aWV3LlRleHRGaWVsZHMnO1xyXG5jb25zdCBLRVlFVkVOVF9BQ1RJVklUWSA9ICcudGV4dC5LZXlFdmVudFRleHQnO1xyXG5cclxubGV0IGRlZmF1bHRBc2NpaUNhcHMgPSBPYmplY3QuYXNzaWduKHt9LCBBUElERU1PU19DQVBTLCB7XHJcbiAgbmV3Q29tbWFuZFRpbWVvdXQ6IDkwLFxyXG4gIGFwcFBhY2thZ2U6IFBBQ0tBR0UsXHJcbiAgYXBwQWN0aXZpdHk6IFRFWFRGSUVMRF9BQ1RJVklUWVxyXG59KTtcclxuXHJcbmxldCBkZWZhdWx0VW5pY29kZUNhcHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0QXNjaWlDYXBzLCB7XHJcbiAgdW5pY29kZUtleWJvYXJkOiB0cnVlLFxyXG4gIHJlc2V0S2V5Ym9hcmQ6IHRydWVcclxufSk7XHJcblxyXG5mdW5jdGlvbiBkZVNhbXN1bmdpZnkgKHRleHQpIHtcclxuICAvLyBGb3Igc2Ftc3VuZyBTNSB0ZXh0IGlzIGFwcGVuZGVkIHdpdGggXCIuIEVkaXRpbmcuXCJcclxuICByZXR1cm4gdGV4dC5yZXBsYWNlKFwiLiBFZGl0aW5nLlwiLCBcIlwiKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RWxlbWVudCAoZHJpdmVyLCBjbGFzc05hbWUpIHtcclxuICByZXR1cm4gYXdhaXQgcmV0cnlJbnRlcnZhbChwcm9jZXNzLmVudi5URVNUT0JKRUNUX0UyRV9URVNUUyA/IDEwMCA6IDEwLCAxMDAwLCBhc3luYyAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgZHJpdmVyLmVsZW1lbnRCeUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB3YWl0Rm9yVGV4dCAoZWxlbWVudCwgZXhwZWN0ZWRUZXh0KSB7XHJcbiAgcmV0dXJuIGF3YWl0IHJldHJ5SW50ZXJ2YWwocHJvY2Vzcy5lbnYuVEVTVE9CSkVDVF9FMkVfVEVTVFMgPyAxMDAgOiAxMCwgMTAwMCwgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IGVsZW1lbnQudGV4dCgpO1xyXG4gICAgaWYgKHRleHQgIT09IGV4cGVjdGVkVGV4dCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgZWxlbWVudCB0ZXh0LiBBY3R1YWw6IFwiJHt0ZXh0fVwiLiBFeHBlY3RlZDogXCIke2V4cGVjdGVkVGV4dH1cImApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBydW5UZXh0RWRpdFRlc3QgKGRyaXZlciwgdGVzdFRleHQsIGtleXMgPSBmYWxzZSkge1xyXG4gIGxldCBlbCA9IGF3YWl0IGdldEVsZW1lbnQoZHJpdmVyLCBFRElUVEVYVF9DTEFTUyk7XHJcbiAgYXdhaXQgZWwuY2xlYXIoKTtcclxuXHJcbiAgaWYgKGtleXMpIHtcclxuICAgIGF3YWl0IGRyaXZlci5rZXlzKFt0ZXN0VGV4dF0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhd2FpdCBlbC5zZW5kS2V5cyh0ZXN0VGV4dCk7XHJcbiAgfVxyXG5cclxuICBhd2FpdCByZXRyeUludGVydmFsKHByb2Nlc3MuZW52LlRFU1RPQkpFQ1RfRTJFX1RFU1RTID8gMTAwIDogMTAsIDEwMDAsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCB0ZXh0ID0gYXdhaXQgZWwudGV4dCgpO1xyXG4gICAgZGVTYW1zdW5naWZ5KHRleHQpLnNob3VsZC5iZS5lcXVhbCh0ZXN0VGV4dCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlbDtcclxufVxyXG5cclxuLypcclxuICogVGhlIGtleSBldmVudCBwYWdlIG5lZWRzIHRvIGJlIGNsZWFyZWQgYmV0d2VlbiBydW5zLCBvciBlbHNlIHdlIGdldCBmYWxzZVxyXG4gKiBwb3NpdGl2ZXMgZnJvbSBwcmV2aW91c2x5IHJ1biB0ZXN0cy4gVGhlIHBhZ2UgaGFzIGEgc2luZ2xlIGJ1dHRvbiB0aGF0XHJcbiAqIHJlbW92ZXMgYWxsIHRleHQgZnJvbSB3aXRoaW4gdGhlIG1haW4gVGV4dFZpZXcuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBjbGVhcktleUV2ZW50cyAoZHJpdmVyKSB7XHJcbiAgbGV0IGVsID0gYXdhaXQgZ2V0RWxlbWVudChkcml2ZXIsIEJVVFRPTl9DTEFTUyk7XHJcbiAgYXdhaXQgZWwuY2xpY2soKTtcclxuXHJcbiAgLy8gd2FpdCBhIG1vbWVudCBmb3IgdGhlIGNsZWFyaW5nIHRvIG9jY3VyLCBsZXN0IHdlIHRvbyBxdWlja2x5IHRyeSB0byBlbnRlciBtb3JlIHRleHRcclxuICBhd2FpdCBCLmRlbGF5KDUwMCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGtleUV2ZW50VGVzdCAoZHJpdmVyLCBrZXlDb2RlLCBtZXRhU3RhdGUsIGV4cGVjdGVkVGV4dEFycmF5KSB7XHJcbiAgbGV0IHJ1blRlc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBhd2FpdCBkcml2ZXIucHJlc3NLZXljb2RlKGtleUNvZGUsIG1ldGFTdGF0ZSk7XHJcbiAgICBsZXQgZWwgPSBkcml2ZXIuZWxlbWVudEJ5SWQoJ2lvLmFwcGl1bS5hbmRyb2lkLmFwaXM6aWQvdGV4dCcpO1xyXG4gICAgcmV0dXJuIGF3YWl0IGVsLnRleHQoKTtcclxuICB9O1xyXG5cclxuICBhd2FpdCBjbGVhcktleUV2ZW50cyhkcml2ZXIpO1xyXG5cclxuICBsZXQgdGV4dCA9IGF3YWl0IHJ1blRlc3QoKTtcclxuICBpZiAoIXRleHQpIHtcclxuICAgIC8vIHRoZSB0ZXN0IGlzIGZsYWtleS4uLiB0cnkgYWdhaW5cclxuICAgIHRleHQgPSBhd2FpdCBydW5UZXN0KCk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGV4cGVjdGVkVGV4dCBvZiBleHBlY3RlZFRleHRBcnJheSkge1xyXG4gICAgdGV4dC5zaG91bGQuaW5jbHVkZShleHBlY3RlZFRleHQpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcnVuQ29tYmluYXRpb25LZXlFdmVudFRlc3QgKGRyaXZlcikge1xyXG4gIGF3YWl0IGtleUV2ZW50VGVzdChkcml2ZXIsIDI5LCAxOTMsIFsna2V5Q29kZT1LRVlDT0RFX0EnLCAnbWV0YVN0YXRlPU1FVEFfU0hJRlRfT04nXSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJ1bktleUV2ZW50VGVzdCAoZHJpdmVyKSB7XHJcbiAgYXdhaXQga2V5RXZlbnRUZXN0KGRyaXZlciwgODIsIHVuZGVmaW5lZCwgWydba2V5Y29kZT04Ml0nLCAna2V5Q29kZT1LRVlDT0RFX01FTlUnXSk7XHJcbn1cclxuXHJcbmxldCB0ZXN0cyA9IFtcclxuICB7IGxhYmVsOiAnZWRpdGluZyBhIHRleHQgZmllbGQnLCB0ZXh0OiAnTGlmZSwgdGhlIFVuaXZlcnNlIGFuZCBFdmVyeXRoaW5nLicgfSxcclxuICB7IGxhYmVsOiAnc2VuZGluZyBcXCcmLVxcJycsIHRleHQ6ICcmLScgfSxcclxuICB7IGxhYmVsOiAnc2VuZGluZyBcXCcmXFwnIGFuZCBcXCctXFwnIGluIG90aGVyIHRleHQnLCB0ZXh0OiAnSW4gdGhlIG1pZC0xOTkwcyBoZSBhdGUgZmlzaCAmIGNoaXBzIGFzIG1heW9yLWVsZWN0LicgfSxcclxuICB7IGxhYmVsOiAnc2VuZGluZyBcXCctXFwnIGluIHRleHQnLCB0ZXh0OiAnU3VwZXItdGVzdC4nIH0sXHJcbiAgeyBsYWJlbDogJ3NlbmRpbmcgbnVtYmVycycsIHRleHQ6ICcwMTIzNDU2Nzg5J30sXHJcbl07XHJcblxyXG5sZXQgdW5pY29kZVRlc3RzID0gW1xyXG4gIHsgbGFiZWw6ICdzaG91bGQgYmUgYWJsZSB0byBzZW5kIFxcJy1cXCcgaW4gdW5pY29kZSB0ZXh0JywgdGV4dDogJ+CkquCksOClgOCkleCljeCkt+Ckvi3gpKrgpLDgpYDgpJXgpY3gpLfgpKMnIH0sXHJcbiAgeyBsYWJlbDogJ3Nob3VsZCBiZSBhYmxlIHRvIHNlbmQgXFwnJlxcJyBpbiB0ZXh0JywgdGV4dDogJ0Zpc2ggJiBjaGlwcycgfSxcclxuICB7IGxhYmVsOiAnc2hvdWxkIGJlIGFibGUgdG8gc2VuZCBcXCcmXFwnIGluIHVuaWNvZGUgdGV4dCcsIHRleHQ6ICdNxKtuYSAmIGNoaXBzJyB9LFxyXG4gIHsgbGFiZWw6ICdzaG91bGQgYmUgYWJsZSB0byBzZW5kIHJvbWFuIGNoYXJhY3RlcnMgd2l0aCBkaWFjcml0aWNzJywgdGV4dDogJ8OBw6kgxZIgw7kg4biNJyB9LFxyXG4gIHsgbGFiZWw6ICdzaG91bGQgYmUgYWJsZSB0byBzZW5kIGEgXFwndVxcJyB3aXRoIGFuIHVtbGF1dCcsIHRleHQ6ICfDvCcgfSxcclxuXTtcclxuXHJcbmxldCBsYW5ndWFnZVRlc3RzID0gW1xyXG4gIHsgbGFiZWw6ICdzaG91bGQgYmUgYWJsZSB0byBzZW5kIFRhbWlsJywgdGV4dDogJ+CumuCvh+CuvuCupOCuqeCviCcgfSxcclxuICB7IGxhYmVsOiAnc2hvdWxkIGJlIGFibGUgdG8gc2VuZCBHdWphcmF0aScsIHRleHQ6ICfgqqrgqrDgq4DgqpXgq43gqrfgqqMnIH0sXHJcbiAgeyBsYWJlbDogJ3Nob3VsZCBiZSBhYmxlIHRvIHNlbmQgQ2hpbmVzZScsIHRleHQ6ICfmtYvor5UnIH0sXHJcbiAgeyBsYWJlbDogJ3Nob3VsZCBiZSBhYmxlIHRvIHNlbmQgUnVzc2lhbicsIHRleHQ6ICfRgtC10YHRgtC40YDQvtCy0LDQvdC40LUnIH0sXHJcbiAgeyBsYWJlbDogJ3Nob3VsZCBiZSBhYmxlIHRvIHNlbmQgQXJhYmljJywgdGV4dDogJ9iq2KzYsdmK2KgnIH0sXHJcbiAgeyBsYWJlbDogJ3Nob3VsZCBiZSBhYmxlIHRvIHNlbmQgSGVicmV3JywgdGV4dDogJ9eR15PXmden15XXqicgfSxcclxuXTtcclxuXHJcbmRlc2NyaWJlKCdrZXlib2FyZCcsIGZ1bmN0aW9uICgpIHtcclxuICBkZXNjcmliZSgnYXNjaWknLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZHJpdmVyO1xyXG4gICAgYmVmb3JlKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihkZWZhdWx0QXNjaWlDYXBzKTtcclxuXHJcbiAgICAgIC8vIHNvbWV0aW1lcyB0aGUgZGVmYXVsdCBpbWUgaXMgbm90IHdoYXQgd2UgYXJlIHVzaW5nXHJcbiAgICAgIGxldCBlbmdpbmVzID0gYXdhaXQgZHJpdmVyLmF2YWlsYWJsZUlNRUVuZ2luZXMoKTtcclxuICAgICAgbGV0IHNlbGVjdGVkRW5naW5lID0gXy5maXJzdChlbmdpbmVzKTtcclxuICAgICAgZm9yIChsZXQgZW5naW5lIG9mIGVuZ2luZXMpIHtcclxuICAgICAgICAvLyBpdCBzZWVtcyB0aGF0IHRoZSBsYXRpbiBpbWUgaGFzIGBhbmRyb2lkLmlucHV0bWV0aG9kYCBpbiBpdHMgcGFja2FnZSBuYW1lXHJcbiAgICAgICAgaWYgKGVuZ2luZS5pbmRleE9mKCdhbmRyb2lkLmlucHV0bWV0aG9kJykgIT09IC0xKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZEVuZ2luZSA9IGVuZ2luZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgZHJpdmVyLmFjdGl2YXRlSU1FRW5naW5lKHNlbGVjdGVkRW5naW5lKTtcclxuICAgIH0pO1xyXG4gICAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGRlc2NyaWJlKCdlZGl0aW5nIGEgdGV4dCBmaWVsZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZm9yIChsZXQgdGVzdCBvZiB0ZXN0cykge1xyXG4gICAgICAgIGRlc2NyaWJlKHRlc3QubGFiZWwsICgpID0+IHtcclxuICAgICAgICAgIGl0KCdzaG91bGQgd29yayB3aXRoIHNldFZhbHVlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhd2FpdCBydW5UZXh0RWRpdFRlc3QoZHJpdmVyLCB0ZXN0LnRleHQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpdCgnc2hvdWxkIHdvcmsgd2l0aCBrZXlzJywgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhd2FpdCBydW5UZXh0RWRpdFRlc3QoZHJpdmVyLCB0ZXN0LnRleHQsIHRydWUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBjbGVhciBhIHBhc3N3b3JkIGZpZWxkJywgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHRoZXJlIGlzIGN1cnJlbnRseSBubyB3YXkgdG8gZGlyZWN0bHkgYXNzZXJ0IGFueXRoaW5nIGFib3V0IHRoZSBjb250ZW50c1xyXG4gICAgICAgIC8vIG9mIGEgcGFzc3dvcmQgZmllbGQsIHNpbmNlIHRoZXJlIGlzIG5vIHdheSB0byBhY2Nlc3MgdGhlIGNvbnRlbnRzXHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAnc3VwZXItZHVwZXIgcGFzc3dvcmQnO1xyXG4gICAgICAgIGxldCBlbHMgPSBhd2FpdCBkcml2ZXIuZWxlbWVudHNCeUNsYXNzTmFtZShFRElUVEVYVF9DTEFTUyk7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkVGV4dEZpZWxkID0gZWxzWzFdO1xyXG4gICAgICAgIGxldCBwYXNzd29yZE91dHB1dCA9IGF3YWl0IGRyaXZlci5lbGVtZW50QnlJZCgnaW8uYXBwaXVtLmFuZHJvaWQuYXBpczppZC9lZGl0MVRleHQnKTtcclxuICAgICAgICBhd2FpdCBwYXNzd29yZFRleHRGaWVsZC5zZW5kS2V5cyhwYXNzd29yZCk7XHJcbiAgICAgICAgYXdhaXQgd2FpdEZvclRleHQocGFzc3dvcmRPdXRwdXQsIHBhc3N3b3JkKTtcclxuICAgICAgICBhd2FpdCBwYXNzd29yZFRleHRGaWVsZC5jbGVhcigpO1xyXG4gICAgICAgIGF3YWl0IHdhaXRGb3JUZXh0KHBhc3N3b3JkT3V0cHV0LCAnJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIHR5cGUgaW4gbGVuZ3RoLWxpbWl0ZWQgZmllbGQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5URVNUT0JKRUNUX0UyRV9URVNUUykge1xyXG4gICAgICAgICAgbGV0IGFkYiA9IG5ldyBBREIoKTtcclxuICAgICAgICAgIGlmIChwYXJzZUludChhd2FpdCBhZGIuZ2V0QXBpTGV2ZWwoKSwgMTApIDwgMjQpIHtcclxuICAgICAgICAgICAgLy8gYmVsb3cgQW5kcm9pZCA3LjAgKEFQSSBsZXZlbCAyNCkgdHlwaW5nIHRvbyBtYW55IGNoYXJhY3RlcnMgaW4gYVxyXG4gICAgICAgICAgICAvLyBsZW5ndGgtbGltaXRlZCBmaWVsZCB3aWxsIGVpdGhlciB0aHJvdyBhIE51bGxQb2ludGVyRXhjZXB0aW9uIG9yXHJcbiAgICAgICAgICAgIC8vIGNyYXNoIHRoZSBhcHBcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2tpcCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZWxzID0gYXdhaXQgZHJpdmVyLmVsZW1lbnRzQnlDbGFzc05hbWUoRURJVFRFWFRfQ0xBU1MpO1xyXG4gICAgICAgIGxldCBlbCA9IGVsc1szXTtcclxuICAgICAgICBhd2FpdCBlbC5zZXRJbW1lZGlhdGVWYWx1ZSgnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonKTtcclxuXHJcbiAgICAgICAgLy8gZXhwZWN0IGZpcnN0IDExIGNoYXJhY3RlcnMgKGxpbWl0IG9mIHRoZSBmaWVsZCkgdG8gYmUgaW4gdGhlIGZpZWxkXHJcbiAgICAgICAgbGV0IHRleHQgPSBhd2FpdCBlbC50ZXh0KCk7XHJcbiAgICAgICAgdGV4dC5zaG91bGQuZXFsKCcwMTIzNDU2Nzg5YScpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRlc2NyaWJlKCdzZW5kaW5nIGEga2V5IGV2ZW50JywgKCkgPT4ge1xyXG4gICAgICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGRyaXZlci5zdGFydEFjdGl2aXR5KHthcHBQYWNrYWdlOiBQQUNLQUdFLCBhcHBBY3Rpdml0eTogS0VZRVZFTlRfQUNUSVZJVFl9KTtcclxuICAgICAgICBhd2FpdCBCLmRlbGF5KDUwMCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIHNlbmQgY29tYmluYXRpb24ga2V5ZXZlbnRzJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHJ1bkNvbWJpbmF0aW9uS2V5RXZlbnRUZXN0KGRyaXZlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gc2VuZCBrZXlldmVudHMnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgcnVuS2V5RXZlbnRUZXN0KGRyaXZlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRlc2NyaWJlKCd1bmljb2RlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGFkYjtcclxuICAgIGlmICghcHJvY2Vzcy5lbnYuVEVTVE9CSkVDVF9FMkVfVEVTVFMpIHtcclxuICAgICAgYWRiID0gbmV3IEFEQigpO1xyXG4gICAgfVxyXG4gICAgbGV0IGluaXRpYWxJTUU7XHJcbiAgICBsZXQgZHJpdmVyO1xyXG4gICAgYmVmb3JlKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gc2F2ZSB0aGUgaW5pdGlhbCBpbWUgc28gd2UgY2FuIG1ha2Ugc3VyZSBpdCBpcyByZXN0b3JlZFxyXG4gICAgICBpZiAoYWRiKSB7XHJcbiAgICAgICAgaW5pdGlhbElNRSA9IGF3YWl0IGFkYi5kZWZhdWx0SU1FKCk7XHJcbiAgICAgICAgaW5pdGlhbElNRS5zaG91bGQubm90LmVxbCgnaW8uYXBwaXVtLmFuZHJvaWQuaW1lLy5Vbmljb2RlSU1FJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRyaXZlciA9IGF3YWl0IGluaXREcml2ZXIoZGVmYXVsdFVuaWNvZGVDYXBzKTtcclxuICAgIH0pO1xyXG4gICAgYWZ0ZXIoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xyXG5cclxuICAgICAgLy8gbWFrZSBzdXJlIHRoZSBJTUUgaGFzIGJlZW4gcmVzdG9yZWRcclxuICAgICAgaWYgKGFkYikge1xyXG4gICAgICAgIGxldCBpbWUgPSBhd2FpdCBhZGIuZGVmYXVsdElNRSgpO1xyXG4gICAgICAgIGltZS5zaG91bGQuZXFsKGluaXRpYWxJTUUpO1xyXG4gICAgICAgIGltZS5zaG91bGQubm90LmVxbCgnaW8uYXBwaXVtLmFuZHJvaWQuaW1lLy5Vbmljb2RlSU1FJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRlc2NyaWJlKCdlZGl0aW5nIGEgdGV4dCBmaWVsZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZm9yIChsZXQgdGVzdFNldCBvZiBbdGVzdHMsIHVuaWNvZGVUZXN0cywgbGFuZ3VhZ2VUZXN0c10pIHtcclxuICAgICAgICBmb3IgKGxldCB0ZXN0IG9mIHRlc3RTZXQpIHtcclxuICAgICAgICAgIGRlc2NyaWJlKHRlc3QubGFiZWwsICgpID0+IHtcclxuICAgICAgICAgICAgaXQoJ3Nob3VsZCB3b3JrIHdpdGggc2V0VmFsdWUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgcnVuVGV4dEVkaXRUZXN0KGRyaXZlciwgdGVzdC50ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGl0KCdzaG91bGQgd29yayB3aXRoIGtleXMnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgcnVuVGV4dEVkaXRUZXN0KGRyaXZlciwgdGVzdC50ZXh0LCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRlc2NyaWJlKCdzZW5kaW5nIGEga2V5IGV2ZW50JywgKCkgPT4ge1xyXG4gICAgICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGRyaXZlci5zdGFydEFjdGl2aXR5KHthcHBQYWNrYWdlOiBQQUNLQUdFLCBhcHBBY3Rpdml0eTogS0VZRVZFTlRfQUNUSVZJVFl9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gc2VuZCBjb21iaW5hdGlvbiBrZXlldmVudHMnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgcnVuQ29tYmluYXRpb25LZXlFdmVudFRlc3QoZHJpdmVyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBzZW5kIGtleWV2ZW50cycsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBydW5LZXlFdmVudFRlc3QoZHJpdmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uIn0=
