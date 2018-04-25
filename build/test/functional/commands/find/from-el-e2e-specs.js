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
var alv = 'android.widget.ListView';

describe('Find - from element', function () {
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
  it('should find a single element by tag name', function callee$1$0() {
    var el, innerEl;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByClassName(alv));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(el.elementByClassName(atv));

        case 5:
          innerEl = context$2$0.sent;
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(innerEl.text().should.eventually.equal("Access'ibility"));

        case 8:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find multiple elements by tag name', function callee$1$0() {
    var el, innerEls;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementByClassName(alv));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(el.elementsByClassName(atv));

        case 5:
          innerEls = context$2$0.sent;
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(innerEls.should.have.length.above(9));

        case 8:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9maW5kL2Zyb20tZWwtZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7dUJBQ2YsZUFBZTs7OEJBQ2xCLHVCQUF1Qjs7QUFHbEQsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixJQUFNLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQztBQUN0QyxJQUFNLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQzs7QUFFdEMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLFlBQVk7OztBQUMxQyxNQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsUUFBTSxDQUFDOzs7OzsyQ0FDVSx1REFBeUI7OztBQUF4QyxnQkFBTTs7Ozs7OztHQUNQLENBQUMsQ0FBQztBQUNILE9BQUssQ0FBQzs7Ozs7MkNBQ0UsTUFBTSxDQUFDLElBQUksRUFBRTs7Ozs7OztHQUNwQixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsMENBQTBDLEVBQUU7UUFDekMsRUFBRSxFQUNGLE9BQU87Ozs7OzJDQURJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7OztBQUF6QyxZQUFFOzsyQ0FDYyxFQUFFLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDOzs7QUFBMUMsaUJBQU87OzJDQUNMLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7Ozs7OztHQUMvRCxDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsMkNBQTJDLEVBQUU7UUFDMUMsRUFBRSxFQUNGLFFBQVE7Ozs7OzJDQURHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7OztBQUF6QyxZQUFFOzsyQ0FDZSxFQUFFLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDOzs7QUFBNUMsa0JBQVE7OzJDQUNOLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0dBQzNDLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvY29tbWFuZHMvZmluZC9mcm9tLWVsLWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XHJcbmltcG9ydCB7IEFQSURFTU9TX0NBUFMgfSBmcm9tICcuLi8uLi9kZXNpcmVkJztcclxuaW1wb3J0IHsgaW5pdERyaXZlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2Vzc2lvbic7XHJcblxyXG5cclxuY2hhaS5zaG91bGQoKTtcclxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xyXG5cclxuY29uc3QgYXR2ID0gJ2FuZHJvaWQud2lkZ2V0LlRleHRWaWV3JztcclxuY29uc3QgYWx2ID0gJ2FuZHJvaWQud2lkZ2V0Lkxpc3RWaWV3JztcclxuXHJcbmRlc2NyaWJlKCdGaW5kIC0gZnJvbSBlbGVtZW50JywgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBkcml2ZXI7XHJcbiAgYmVmb3JlKGFzeW5jICgpID0+IHtcclxuICAgIGRyaXZlciA9IGF3YWl0IGluaXREcml2ZXIoQVBJREVNT1NfQ0FQUyk7XHJcbiAgfSk7XHJcbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZHJpdmVyLnF1aXQoKTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGZpbmQgYSBzaW5nbGUgZWxlbWVudCBieSB0YWcgbmFtZScsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5lbGVtZW50QnlDbGFzc05hbWUoYWx2KTtcclxuICAgIGxldCBpbm5lckVsID0gYXdhaXQgZWwuZWxlbWVudEJ5Q2xhc3NOYW1lKGF0dik7XHJcbiAgICBhd2FpdCBpbm5lckVsLnRleHQoKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbChcIkFjY2VzcydpYmlsaXR5XCIpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgZmluZCBtdWx0aXBsZSBlbGVtZW50cyBieSB0YWcgbmFtZScsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5lbGVtZW50QnlDbGFzc05hbWUoYWx2KTtcclxuICAgIGxldCBpbm5lckVscyA9IGF3YWl0IGVsLmVsZW1lbnRzQnlDbGFzc05hbWUoYXR2KTtcclxuICAgIGF3YWl0IGlubmVyRWxzLnNob3VsZC5oYXZlLmxlbmd0aC5hYm92ZSg5KTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uIn0=
