'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _desired = require('../../desired');

var _helpersSession = require('../../helpers/session');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var atv = 'android.widget.TextView';
var f = "android.widget.FrameLayout";

describe('Find - xpath', function () {
  var _this = this;

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
  it('should find element by type', function callee$1$0() {
    var el, text;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByXPath('//' + atv));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(el.text());

        case 5:
          text = context$2$0.sent;

          text.toLowerCase().should.equal('api demos');

        case 7:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find element by text', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByXPath('//' + atv + '[@text=\'Accessibility\']'));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(el.text().should.eventually.equal('Accessibility'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find element by attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementsByXPath('//*[@enabled=\'true\' and @focused=\'true\']').should.eventually.have.length(1));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find exactly one element via elementsByXPath', function callee$1$0() {
    var els;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementsByXPath('//' + atv + '[@text=\'Accessibility\']'));

        case 2:
          els = context$2$0.sent;

          els.length.should.equal(1);
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(els[0].text().should.eventually.equal('Accessibility'));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find element by partial text', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByXPath('//' + atv + '[contains(@text, \'Accessibility\')]'));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(el.text().should.eventually.equal('Accessibility'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find the last element', function callee$1$0() {
    var el, text;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByXPath('(//' + atv + ')[last()]'));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(el.text());

        case 5:
          text = context$2$0.sent;

          ["OS", "Text", "Views", "Preference"].should.include(text);

        case 7:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find element by index and embedded desc', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByXPath('//' + f + '//' + atv + '[5]'));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(el.text().should.eventually.equal('Content'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find all elements', function callee$1$0() {
    var els;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementsByXPath('//*'));

        case 2:
          els = context$2$0.sent;

          els.length.should.be.above(2);

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find the first element when searching for all elements', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByXPath('//*'));

        case 2:
          el = context$2$0.sent;

          el.should.exist;

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find less elements with compression turned on', function callee$1$0() {
    var elementsWithoutCompression, elementsWithCompression;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.updateSettings({ "ignoreUnimportantViews": false }));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.elementsByXPath('//*'));

        case 4:
          elementsWithoutCompression = context$2$0.sent;
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(driver.updateSettings({ "ignoreUnimportantViews": true }));

        case 7:
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap(driver.elementsByXPath('//*'));

        case 9:
          elementsWithCompression = context$2$0.sent;

          elementsWithoutCompression.length.should.be.greaterThan(elementsWithCompression.length);

        case 11:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find toast message element by text @skip-ci', function callee$1$0() {
    var popUpEl, searchEl, addEl;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          // skip on travis, as it is too slow and the message is removed before
          // we can find it
          if (process.env.TESTOBJECT_E2E_TESTS) {
            this.skip();
          }

          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.startActivity({ appPackage: 'io.appium.android.apis', appActivity: '.view.PopupMenu1' }));

        case 3:
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.waitForElementByAccessibilityId('Make a Popup!'));

        case 5:
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(driver.elementByAccessibilityId('Make a Popup!'));

        case 7:
          popUpEl = context$2$0.sent;
          context$2$0.next = 10;
          return _regeneratorRuntime.awrap(popUpEl.click());

        case 10:
          context$2$0.next = 12;
          return _regeneratorRuntime.awrap(driver.waitForElementByXPath('.//*[@text=\'Search\']'));

        case 12:
          context$2$0.next = 14;
          return _regeneratorRuntime.awrap(driver.elementByXPath('.//*[@text=\'Search\']'));

        case 14:
          searchEl = context$2$0.sent;
          context$2$0.next = 17;
          return _regeneratorRuntime.awrap(searchEl.click());

        case 17:
          context$2$0.next = 19;
          return _regeneratorRuntime.awrap(driver.elementByXPath('//*[@text=\'Clicked popup menu item Search\']').should.eventually.exist);

        case 19:
          context$2$0.next = 21;
          return _regeneratorRuntime.awrap(popUpEl.click());

        case 21:
          context$2$0.next = 23;
          return _regeneratorRuntime.awrap(driver.waitForElementByXPath('.//*[@text=\'Add\']'));

        case 23:
          context$2$0.next = 25;
          return _regeneratorRuntime.awrap(driver.elementByXPath('.//*[@text=\'Add\']'));

        case 25:
          addEl = context$2$0.sent;
          context$2$0.next = 28;
          return _regeneratorRuntime.awrap(addEl.click());

        case 28:
          context$2$0.next = 30;
          return _regeneratorRuntime.awrap(driver.elementByXPath('//*[@text=\'Clicked popup menu item Add\']').should.eventually.exist);

        case 30:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9maW5kL2J5LXhwYXRoLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O3VCQUNmLGVBQWU7OzhCQUNsQix1QkFBdUI7O0FBR2xELGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsSUFBTSxHQUFHLEdBQUcseUJBQXlCLENBQUM7QUFDdEMsSUFBTSxDQUFDLEdBQUcsNEJBQTRCLENBQUM7O0FBRXZDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsWUFBWTs7O0FBQ25DLE1BQUksTUFBTSxZQUFBLENBQUM7QUFDWCxRQUFNLENBQUM7Ozs7OzJDQUNVLHVEQUF5Qjs7O0FBQXhDLGdCQUFNOzs7Ozs7O0dBQ1AsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsSUFBSSxFQUFFOzs7Ozs7O0dBQ3BCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyw2QkFBNkIsRUFBRTtRQUM1QixFQUFFLEVBQ0EsSUFBSTs7Ozs7MkNBREssTUFBTSxDQUFDLGNBQWMsUUFBTSxHQUFHLENBQUc7OztBQUE1QyxZQUFFOzsyQ0FDYSxFQUFFLENBQUMsSUFBSSxFQUFFOzs7QUFBdEIsY0FBSTs7QUFDVixjQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7OztHQUM5QyxDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsNkJBQTZCLEVBQUU7UUFDNUIsRUFBRTs7Ozs7MkNBQVMsTUFBTSxDQUFDLGNBQWMsUUFBTSxHQUFHLCtCQUEwQjs7O0FBQW5FLFlBQUU7OzJDQUNBLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Ozs7Ozs7R0FDekQsQ0FBQyxDQUFDO0FB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TyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRTtBQUNwQyxnQkFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1dBQ2I7OzsyQ0FFSyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUMsVUFBVSxFQUFFLHdCQUF3QixFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBQyxDQUFDOzs7OzJDQUM3RixNQUFNLENBQUMsK0JBQStCLENBQUMsZUFBZSxDQUFDOzs7OzJDQUN6QyxNQUFNLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDOzs7QUFBaEUsaUJBQU87OzJDQUVMLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Ozs7MkNBQ2YsTUFBTSxDQUFDLHFCQUFxQiwwQkFBd0I7Ozs7MkNBQ3JDLE1BQU0sQ0FBQyxjQUFjLDBCQUF3Qjs7O0FBQTlELGtCQUFROzsyQ0FDTixRQUFRLENBQUMsS0FBSyxFQUFFOzs7OzJDQUNoQixNQUFNLENBQUMsY0FBYyxpREFBK0MsQ0FDckUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLOzs7OzJDQUV0QixPQUFPLENBQUMsS0FBSyxFQUFFOzs7OzJDQUNmLE1BQU0sQ0FBQyxxQkFBcUIsdUJBQXFCOzs7OzJDQUNyQyxNQUFNLENBQUMsY0FBYyx1QkFBcUI7OztBQUF4RCxlQUFLOzsyQ0FDSCxLQUFLLENBQUMsS0FBSyxFQUFFOzs7OzJDQUNiLE1BQU0sQ0FBQyxjQUFjLDhDQUE0QyxDQUNsRSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUs7Ozs7Ozs7R0FDN0IsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9maW5kL2J5LXhwYXRoLWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XHJcbmltcG9ydCB7IEFQSURFTU9TX0NBUFMgfSBmcm9tICcuLi8uLi9kZXNpcmVkJztcclxuaW1wb3J0IHsgaW5pdERyaXZlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2Vzc2lvbic7XHJcblxyXG5cclxuY2hhaS5zaG91bGQoKTtcclxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xyXG5cclxuY29uc3QgYXR2ID0gJ2FuZHJvaWQud2lkZ2V0LlRleHRWaWV3JztcclxuY29uc3QgZiA9IFwiYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXRcIjtcclxuXHJcbmRlc2NyaWJlKCdGaW5kIC0geHBhdGgnLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGRyaXZlcjtcclxuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xyXG4gICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihBUElERU1PU19DQVBTKTtcclxuICB9KTtcclxuICBhZnRlcihhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZmluZCBlbGVtZW50IGJ5IHR5cGUnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgZWwgPSBhd2FpdCBkcml2ZXIuZWxlbWVudEJ5WFBhdGgoYC8vJHthdHZ9YCk7XHJcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgZWwudGV4dCgpO1xyXG4gICAgdGV4dC50b0xvd2VyQ2FzZSgpLnNob3VsZC5lcXVhbCgnYXBpIGRlbW9zJyk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBmaW5kIGVsZW1lbnQgYnkgdGV4dCcsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5lbGVtZW50QnlYUGF0aChgLy8ke2F0dn1bQHRleHQ9J0FjY2Vzc2liaWxpdHknXWApO1xyXG4gICAgYXdhaXQgZWwudGV4dCgpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKCdBY2Nlc3NpYmlsaXR5Jyk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBmaW5kIGVsZW1lbnQgYnkgYXR0cmlidXRlJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZHJpdmVyLmVsZW1lbnRzQnlYUGF0aChgLy8qW0BlbmFibGVkPSd0cnVlJyBhbmQgQGZvY3VzZWQ9J3RydWUnXWApXHJcbiAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5oYXZlLmxlbmd0aCgxKTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGZpbmQgZXhhY3RseSBvbmUgZWxlbWVudCB2aWEgZWxlbWVudHNCeVhQYXRoJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGVscyA9IGF3YWl0IGRyaXZlci5lbGVtZW50c0J5WFBhdGgoYC8vJHthdHZ9W0B0ZXh0PSdBY2Nlc3NpYmlsaXR5J11gKTtcclxuICAgIGVscy5sZW5ndGguc2hvdWxkLmVxdWFsKDEpO1xyXG4gICAgYXdhaXQgZWxzWzBdLnRleHQoKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCgnQWNjZXNzaWJpbGl0eScpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZmluZCBlbGVtZW50IGJ5IHBhcnRpYWwgdGV4dCcsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5lbGVtZW50QnlYUGF0aChgLy8ke2F0dn1bY29udGFpbnMoQHRleHQsICdBY2Nlc3NpYmlsaXR5JyldYCk7XHJcbiAgICBhd2FpdCBlbC50ZXh0KCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ0FjY2Vzc2liaWxpdHknKTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGZpbmQgdGhlIGxhc3QgZWxlbWVudCcsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5lbGVtZW50QnlYUGF0aChgKC8vJHthdHZ9KVtsYXN0KCldYCk7XHJcbiAgICBsZXQgdGV4dCA9IGF3YWl0IGVsLnRleHQoKTtcclxuICAgIFtcIk9TXCIsIFwiVGV4dFwiLCBcIlZpZXdzXCIsIFwiUHJlZmVyZW5jZVwiXS5zaG91bGQuaW5jbHVkZSh0ZXh0KTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGZpbmQgZWxlbWVudCBieSBpbmRleCBhbmQgZW1iZWRkZWQgZGVzYycsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5lbGVtZW50QnlYUGF0aChgLy8ke2Z9Ly8ke2F0dn1bNV1gKTtcclxuICAgIGF3YWl0IGVsLnRleHQoKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCgnQ29udGVudCcpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZmluZCBhbGwgZWxlbWVudHMnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgZWxzID0gYXdhaXQgZHJpdmVyLmVsZW1lbnRzQnlYUGF0aChgLy8qYCk7XHJcbiAgICBlbHMubGVuZ3RoLnNob3VsZC5iZS5hYm92ZSgyKTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGZpbmQgdGhlIGZpcnN0IGVsZW1lbnQgd2hlbiBzZWFyY2hpbmcgZm9yIGFsbCBlbGVtZW50cycsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5lbGVtZW50QnlYUGF0aChgLy8qYCk7XHJcbiAgICBlbC5zaG91bGQuZXhpc3Q7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBmaW5kIGxlc3MgZWxlbWVudHMgd2l0aCBjb21wcmVzc2lvbiB0dXJuZWQgb24nLCBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIudXBkYXRlU2V0dGluZ3Moe1wiaWdub3JlVW5pbXBvcnRhbnRWaWV3c1wiOiBmYWxzZX0pO1xyXG4gICAgbGV0IGVsZW1lbnRzV2l0aG91dENvbXByZXNzaW9uID0gYXdhaXQgZHJpdmVyLmVsZW1lbnRzQnlYUGF0aChgLy8qYCk7XHJcbiAgICBhd2FpdCBkcml2ZXIudXBkYXRlU2V0dGluZ3Moe1wiaWdub3JlVW5pbXBvcnRhbnRWaWV3c1wiOiB0cnVlfSk7XHJcbiAgICBsZXQgZWxlbWVudHNXaXRoQ29tcHJlc3Npb24gPSBhd2FpdCBkcml2ZXIuZWxlbWVudHNCeVhQYXRoKGAvLypgKTtcclxuICAgIGVsZW1lbnRzV2l0aG91dENvbXByZXNzaW9uLmxlbmd0aC5zaG91bGQuYmUuZ3JlYXRlclRoYW4oZWxlbWVudHNXaXRoQ29tcHJlc3Npb24ubGVuZ3RoKTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGZpbmQgdG9hc3QgbWVzc2FnZSBlbGVtZW50IGJ5IHRleHQgQHNraXAtY2knLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBza2lwIG9uIHRyYXZpcywgYXMgaXQgaXMgdG9vIHNsb3cgYW5kIHRoZSBtZXNzYWdlIGlzIHJlbW92ZWQgYmVmb3JlXHJcbiAgICAvLyB3ZSBjYW4gZmluZCBpdFxyXG4gICAgaWYgKHByb2Nlc3MuZW52LlRFU1RPQkpFQ1RfRTJFX1RFU1RTKSB7XHJcbiAgICAgIHRoaXMuc2tpcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGRyaXZlci5zdGFydEFjdGl2aXR5KHthcHBQYWNrYWdlOiAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycsIGFwcEFjdGl2aXR5OiAnLnZpZXcuUG9wdXBNZW51MSd9KTtcclxuICAgIGF3YWl0IGRyaXZlci53YWl0Rm9yRWxlbWVudEJ5QWNjZXNzaWJpbGl0eUlkKCdNYWtlIGEgUG9wdXAhJyk7XHJcbiAgICBsZXQgcG9wVXBFbCA9IGF3YWl0IGRyaXZlci5lbGVtZW50QnlBY2Nlc3NpYmlsaXR5SWQoJ01ha2UgYSBQb3B1cCEnKTtcclxuXHJcbiAgICBhd2FpdCBwb3BVcEVsLmNsaWNrKCk7XHJcbiAgICBhd2FpdCBkcml2ZXIud2FpdEZvckVsZW1lbnRCeVhQYXRoKGAuLy8qW0B0ZXh0PSdTZWFyY2gnXWApO1xyXG4gICAgbGV0IHNlYXJjaEVsID0gYXdhaXQgZHJpdmVyLmVsZW1lbnRCeVhQYXRoKGAuLy8qW0B0ZXh0PSdTZWFyY2gnXWApO1xyXG4gICAgYXdhaXQgc2VhcmNoRWwuY2xpY2soKTtcclxuICAgIGF3YWl0IGRyaXZlci5lbGVtZW50QnlYUGF0aChgLy8qW0B0ZXh0PSdDbGlja2VkIHBvcHVwIG1lbnUgaXRlbSBTZWFyY2gnXWApXHJcbiAgICAgICAgLnNob3VsZC5ldmVudHVhbGx5LmV4aXN0O1xyXG5cclxuICAgIGF3YWl0IHBvcFVwRWwuY2xpY2soKTtcclxuICAgIGF3YWl0IGRyaXZlci53YWl0Rm9yRWxlbWVudEJ5WFBhdGgoYC4vLypbQHRleHQ9J0FkZCddYCk7XHJcbiAgICBsZXQgYWRkRWwgPSBhd2FpdCBkcml2ZXIuZWxlbWVudEJ5WFBhdGgoYC4vLypbQHRleHQ9J0FkZCddYCk7XHJcbiAgICBhd2FpdCBhZGRFbC5jbGljaygpO1xyXG4gICAgYXdhaXQgZHJpdmVyLmVsZW1lbnRCeVhQYXRoKGAvLypbQHRleHQ9J0NsaWNrZWQgcG9wdXAgbWVudSBpdGVtIEFkZCddYClcclxuICAgICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuZXhpc3Q7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLiJ9
