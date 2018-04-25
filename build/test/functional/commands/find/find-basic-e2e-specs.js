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

describe('Find - basic', function () {
  var _this = this;

  var driver = undefined;
  var singleResourceId = 'decor_content_parent';
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
  it('should find a single element by content-description', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByAccessibilityId('Animation'));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(el.text().should.eventually.equal('Animation'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find an element by class name', function callee$1$0() {
    var el, text;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByClassName('android.widget.TextView'));

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
  it('should find multiple elements by class name', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementsByClassName('android.widget.TextView').should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should not find multiple elements that doesnt exist', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementsByClassName('blargimarg').should.eventually.have.length(0));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should fail on empty locator', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementsByClassName('').should.be.rejectedWith(/selector/));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find a single element by resource-id', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementById('android:id/' + singleResourceId).should.eventually.exist);

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find multiple elements by resource-id', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementsById('android:id/text1').should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find multiple elements by resource-id even when theres just one', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementsById('android:id/' + singleResourceId).should.eventually.have.length(1));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  describe('implicit wait', function () {
    var implicitWaitTimeout = 5000;
    before(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setImplicitWaitTimeout(implicitWaitTimeout));

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should respect implicit wait with multiple elements', function callee$2$0() {
      var beforeMs, afterMs;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            beforeMs = Date.now();
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.elementsById('there_is_nothing_called_this').should.eventually.have.length(0));

          case 3:
            afterMs = Date.now();

            (afterMs - beforeMs).should.be.below(implicitWaitTimeout * 2);

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9maW5kL2ZpbmQtYmFzaWMtZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7dUJBQ2YsZUFBZTs7OEJBQ2xCLHVCQUF1Qjs7QUFHbEQsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsY0FBYyxFQUFFLFlBQVk7OztBQUNuQyxNQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsTUFBSSxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQztBQUM5QyxRQUFNLENBQUM7Ozs7OzJDQUNVLHVEQUF5Qjs7O0FBQXhDLGdCQUFNOzs7Ozs7O0dBQ1AsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsSUFBSSxFQUFFOzs7Ozs7O0dBQ3BCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxxREFBcUQsRUFBRTtRQUNwRCxFQUFFOzs7OzsyQ0FBUyxNQUFNLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDOzs7QUFBdkQsWUFBRTs7MkNBQ0EsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztHQUNyRCxDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsc0NBQXNDLEVBQUU7UUFDckMsRUFBRSxFQUNBLElBQUk7Ozs7OzJDQURLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQzs7O0FBQS9ELFlBQUU7OzJDQUNhLEVBQUUsQ0FBQyxJQUFJLEVBQUU7OztBQUF0QixjQUFJOztBQUNWLGNBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7O0dBQzlDLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyw2Q0FBNkMsRUFBRTs7Ozs7MkNBQzFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxDQUN4RCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7R0FDOUMsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLHFEQUFxRCxFQUFFOzs7OzsyQ0FDbEQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUMzQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0dBQ3BDLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyw4QkFBOEIsRUFBRTs7Ozs7MkNBQzNCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7R0FDeEUsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLDZDQUE2QyxFQUFFOzs7OzsyQ0FDMUMsTUFBTSxDQUFDLFdBQVcsaUJBQWUsZ0JBQWdCLENBQUcsQ0FDdkQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLOzs7Ozs7O0dBQzNCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyw4Q0FBOEMsRUFBRTs7Ozs7MkNBQzNDLE1BQU0sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FDMUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDOzs7Ozs7O0dBQzlDLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyx3RUFBd0UsRUFBRTs7Ozs7MkNBQ3JFLE1BQU0sQ0FBQyxZQUFZLGlCQUFlLGdCQUFnQixDQUFHLENBQ3hELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7R0FDcEMsQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxlQUFlLEVBQUUsWUFBTTtBQUM5QixRQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQztBQUMvQixVQUFNLENBQUM7Ozs7OzZDQUNDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQzs7Ozs7OztLQUN6RCxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMscURBQXFELEVBQUU7VUFDcEQsUUFBUSxFQUdSLE9BQU87Ozs7QUFIUCxvQkFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7OzZDQUNuQixNQUFNLENBQUMsWUFBWSxDQUFDLDhCQUE4QixDQUFDLENBQ3RELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztBQUMvQixtQkFBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7O0FBQ3hCLGFBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQSxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0tBQy9ELENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvY29tbWFuZHMvZmluZC9maW5kLWJhc2ljLWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XHJcbmltcG9ydCB7IEFQSURFTU9TX0NBUFMgfSBmcm9tICcuLi8uLi9kZXNpcmVkJztcclxuaW1wb3J0IHsgaW5pdERyaXZlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2Vzc2lvbic7XHJcblxyXG5cclxuY2hhaS5zaG91bGQoKTtcclxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xyXG5cclxuZGVzY3JpYmUoJ0ZpbmQgLSBiYXNpYycsIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgZHJpdmVyO1xyXG4gIGxldCBzaW5nbGVSZXNvdXJjZUlkID0gJ2RlY29yX2NvbnRlbnRfcGFyZW50JztcclxuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xyXG4gICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihBUElERU1PU19DQVBTKTtcclxuICB9KTtcclxuICBhZnRlcihhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZmluZCBhIHNpbmdsZSBlbGVtZW50IGJ5IGNvbnRlbnQtZGVzY3JpcHRpb24nLCBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgZWwgPSBhd2FpdCBkcml2ZXIuZWxlbWVudEJ5QWNjZXNzaWJpbGl0eUlkKCdBbmltYXRpb24nKTtcclxuICAgIGF3YWl0IGVsLnRleHQoKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCgnQW5pbWF0aW9uJyk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBmaW5kIGFuIGVsZW1lbnQgYnkgY2xhc3MgbmFtZScsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5lbGVtZW50QnlDbGFzc05hbWUoJ2FuZHJvaWQud2lkZ2V0LlRleHRWaWV3Jyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgZWwudGV4dCgpO1xyXG4gICAgdGV4dC50b0xvd2VyQ2FzZSgpLnNob3VsZC5lcXVhbCgnYXBpIGRlbW9zJyk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBmaW5kIG11bHRpcGxlIGVsZW1lbnRzIGJ5IGNsYXNzIG5hbWUnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIuZWxlbWVudHNCeUNsYXNzTmFtZSgnYW5kcm9pZC53aWRnZXQuVGV4dFZpZXcnKVxyXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuaGF2ZS5sZW5ndGguYXQubGVhc3QoMTApO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgbm90IGZpbmQgbXVsdGlwbGUgZWxlbWVudHMgdGhhdCBkb2VzbnQgZXhpc3QnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIuZWxlbWVudHNCeUNsYXNzTmFtZSgnYmxhcmdpbWFyZycpXHJcbiAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5oYXZlLmxlbmd0aCgwKTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGZhaWwgb24gZW1wdHkgbG9jYXRvcicsIGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRyaXZlci5lbGVtZW50c0J5Q2xhc3NOYW1lKCcnKS5zaG91bGQuYmUucmVqZWN0ZWRXaXRoKC9zZWxlY3Rvci8pO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZmluZCBhIHNpbmdsZSBlbGVtZW50IGJ5IHJlc291cmNlLWlkJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZHJpdmVyLmVsZW1lbnRCeUlkKGBhbmRyb2lkOmlkLyR7c2luZ2xlUmVzb3VyY2VJZH1gKVxyXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuZXhpc3Q7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBmaW5kIG11bHRpcGxlIGVsZW1lbnRzIGJ5IHJlc291cmNlLWlkJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZHJpdmVyLmVsZW1lbnRzQnlJZCgnYW5kcm9pZDppZC90ZXh0MScpXHJcbiAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5oYXZlLmxlbmd0aC5hdC5sZWFzdCgxMCk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBmaW5kIG11bHRpcGxlIGVsZW1lbnRzIGJ5IHJlc291cmNlLWlkIGV2ZW4gd2hlbiB0aGVyZXMganVzdCBvbmUnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkcml2ZXIuZWxlbWVudHNCeUlkKGBhbmRyb2lkOmlkLyR7c2luZ2xlUmVzb3VyY2VJZH1gKVxyXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuaGF2ZS5sZW5ndGgoMSk7XHJcbiAgfSk7XHJcblxyXG4gIGRlc2NyaWJlKCdpbXBsaWNpdCB3YWl0JywgKCkgPT4ge1xyXG4gICAgbGV0IGltcGxpY2l0V2FpdFRpbWVvdXQgPSA1MDAwO1xyXG4gICAgYmVmb3JlKGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgZHJpdmVyLnNldEltcGxpY2l0V2FpdFRpbWVvdXQoaW1wbGljaXRXYWl0VGltZW91dCk7XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgcmVzcGVjdCBpbXBsaWNpdCB3YWl0IHdpdGggbXVsdGlwbGUgZWxlbWVudHMnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCBiZWZvcmVNcyA9IERhdGUubm93KCk7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5lbGVtZW50c0J5SWQoJ3RoZXJlX2lzX25vdGhpbmdfY2FsbGVkX3RoaXMnKVxyXG4gICAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5oYXZlLmxlbmd0aCgwKTtcclxuICAgICAgbGV0IGFmdGVyTXMgPSBEYXRlLm5vdygpO1xyXG4gICAgICAoYWZ0ZXJNcyAtIGJlZm9yZU1zKS5zaG91bGQuYmUuYmVsb3coaW1wbGljaXRXYWl0VGltZW91dCAqIDIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLiJ9
