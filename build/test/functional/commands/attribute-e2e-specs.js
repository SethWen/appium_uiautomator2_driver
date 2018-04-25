'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _desired = require('../desired');

var _helpersSession = require('../helpers/session');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var driver = undefined;
var animationEl = undefined;

describe('apidemo - attributes', function () {
  var _this = this;

  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_desired.APIDEMOS_CAPS));

        case 2:
          driver = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.elementByAccessibilityId('Animation'));

        case 5:
          animationEl = context$2$0.sent;

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
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
  it('should be able to find resourceId attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(animationEl.getAttribute('resourceId').should.eventually.become('android:id/text1'));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find text attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(animationEl.getAttribute('text').should.eventually.become('Animation'));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find name attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(animationEl.getAttribute('name').should.eventually.become('Animation'));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find name attribute, falling back to text', function callee$1$0() {
    var textViewEl;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(animationEl.click());

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.waitForElementByAccessibilityId('Bouncing Balls'));

        case 4:
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.elementByAccessibilityId('Bouncing Balls'));

        case 6:
          textViewEl = context$2$0.sent;
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap(textViewEl.getAttribute('name'));

        case 9:
          context$2$0.next = 11;
          return _regeneratorRuntime.awrap(driver.back());

        case 11:
          context$2$0.next = 13;
          return _regeneratorRuntime.awrap(driver.waitForElementByAccessibilityId('Animation'));

        case 13:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find content description attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(animationEl.getAttribute('contentDescription').should.eventually.become("Animation"));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find displayed attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(animationEl.getAttribute('displayed').should.eventually.become('true'));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find enabled attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(animationEl.getAttribute('enabled').should.eventually.become('true'));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find displayed attribute through normal func', function callee$1$0() {
    var displayed;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(animationEl.isDisplayed());

        case 2:
          displayed = context$2$0.sent;

          (displayed + '').should.equal('true');

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to get element location using getLocation', function callee$1$0() {
    var location;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(animationEl.getLocation());

        case 2:
          location = context$2$0.sent;

          location.x.should.be.at.least(0);
          location.y.should.be.at.least(0);

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to get element location using getLocationInView', function callee$1$0() {
    var location;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(animationEl.getLocationInView());

        case 2:
          location = context$2$0.sent;

          location.x.should.be.at.least(0);
          location.y.should.be.at.least(0);

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to get element size', function callee$1$0() {
    var size;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(animationEl.getSize());

        case 2:
          size = context$2$0.sent;

          size.width.should.be.at.least(0);
          size.height.should.be.at.least(0);

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});

// TODO: 'getLocationInView' is returning a 404 not found error
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9hdHRyaWJ1dGUtZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7dUJBQ2YsWUFBWTs7OEJBQ2Ysb0JBQW9COztBQUUvQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLElBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxJQUFJLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFRLENBQUMsc0JBQXNCLEVBQUUsWUFBWTs7O0FBQzNDLFFBQU0sQ0FBQzs7Ozs7MkNBQ1UsdURBQXlCOzs7QUFBeEMsZ0JBQU07OzJDQUNjLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUM7OztBQUFoRSxxQkFBVzs7Ozs7OztHQUNaLENBQUMsQ0FBQztBQUNILE9BQUssQ0FBQzs7Ozs7MkNBQ0UsTUFBTSxDQUFDLElBQUksRUFBRTs7Ozs7OztHQUNwQixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsNkNBQTZDLEVBQUU7Ozs7OzJDQUMxQyxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDOzs7Ozs7O0dBQzFGLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyx1Q0FBdUMsRUFBRTs7Ozs7MkNBQ3BDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOzs7Ozs7O0dBQzdFLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyx1Q0FBdUMsRUFBRTs7Ozs7MkNBQ3BDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOzs7Ozs7O0dBQzdFLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyw2REFBNkQsRUFBRTtRQUc1RCxVQUFVOzs7OzsyQ0FGUixXQUFXLENBQUMsS0FBSyxFQUFFOzs7OzJDQUNuQixNQUFNLENBQUMsK0JBQStCLENBQUMsZ0JBQWdCLENBQUM7Ozs7MkNBQ3ZDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7O0FBQXBFLG9CQUFVOzsyQ0FDUixVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQzs7OzsyQ0FDL0IsTUFBTSxDQUFDLElBQUksRUFBRTs7OzsyQ0FDYixNQUFNLENBQUMsK0JBQStCLENBQUMsV0FBVyxDQUFDOzs7Ozs7O0dBQzFELENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxzREFBc0QsRUFBRTs7Ozs7MkNBQ25ELFdBQVcsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7R0FDM0YsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLDRDQUE0QyxFQUFFOzs7OzsyQ0FDekMsV0FBVyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7R0FDN0UsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLDBDQUEwQyxFQUFFOzs7OzsyQ0FDdkMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7R0FDM0UsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLGdFQUFnRSxFQUFFO1FBQzdELFNBQVM7Ozs7OzJDQUFTLFdBQVcsQ0FBQyxXQUFXLEVBQUU7OztBQUEzQyxtQkFBUzs7QUFDZixXQUFDLFNBQVMsR0FBRyxFQUFFLENBQUEsQ0FBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7O0dBQ3ZDLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQywwREFBMEQsRUFBRTtRQUN6RCxRQUFROzs7OzsyQ0FBUyxXQUFXLENBQUMsV0FBVyxFQUFFOzs7QUFBMUMsa0JBQVE7O0FBQ1osa0JBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLGtCQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztHQUNsQyxDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsZ0VBQWdFLEVBQUU7UUFFL0QsUUFBUTs7Ozs7MkNBQVMsV0FBVyxDQUFDLGlCQUFpQixFQUFFOzs7QUFBaEQsa0JBQVE7O0FBQ1osa0JBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLGtCQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztHQUNsQyxDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsb0NBQW9DLEVBQUU7UUFDbkMsSUFBSTs7Ozs7MkNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRTs7O0FBQWxDLGNBQUk7O0FBQ1IsY0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7R0FDbkMsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9hdHRyaWJ1dGUtZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XHJcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcclxuaW1wb3J0IHsgQVBJREVNT1NfQ0FQUyB9IGZyb20gJy4uL2Rlc2lyZWQnO1xyXG5pbXBvcnQgeyBpbml0RHJpdmVyIH0gZnJvbSAnLi4vaGVscGVycy9zZXNzaW9uJztcclxuXHJcbmNoYWkuc2hvdWxkKCk7XHJcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcclxuXHJcbmxldCBkcml2ZXI7XHJcbmxldCBhbmltYXRpb25FbDtcclxuXHJcbmRlc2NyaWJlKCdhcGlkZW1vIC0gYXR0cmlidXRlcycsIGZ1bmN0aW9uICgpIHtcclxuICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgZHJpdmVyID0gYXdhaXQgaW5pdERyaXZlcihBUElERU1PU19DQVBTKTtcclxuICAgIGFuaW1hdGlvbkVsID0gYXdhaXQgZHJpdmVyLmVsZW1lbnRCeUFjY2Vzc2liaWxpdHlJZCgnQW5pbWF0aW9uJyk7XHJcbiAgfSk7XHJcbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZHJpdmVyLnF1aXQoKTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gZmluZCByZXNvdXJjZUlkIGF0dHJpYnV0ZScsIGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGFuaW1hdGlvbkVsLmdldEF0dHJpYnV0ZSgncmVzb3VyY2VJZCcpLnNob3VsZC5ldmVudHVhbGx5LmJlY29tZSgnYW5kcm9pZDppZC90ZXh0MScpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBmaW5kIHRleHQgYXR0cmlidXRlJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgYW5pbWF0aW9uRWwuZ2V0QXR0cmlidXRlKCd0ZXh0Jykuc2hvdWxkLmV2ZW50dWFsbHkuYmVjb21lKCdBbmltYXRpb24nKTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gZmluZCBuYW1lIGF0dHJpYnV0ZScsIGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGFuaW1hdGlvbkVsLmdldEF0dHJpYnV0ZSgnbmFtZScpLnNob3VsZC5ldmVudHVhbGx5LmJlY29tZSgnQW5pbWF0aW9uJyk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGZpbmQgbmFtZSBhdHRyaWJ1dGUsIGZhbGxpbmcgYmFjayB0byB0ZXh0JywgYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgYW5pbWF0aW9uRWwuY2xpY2soKTtcclxuICAgIGF3YWl0IGRyaXZlci53YWl0Rm9yRWxlbWVudEJ5QWNjZXNzaWJpbGl0eUlkKCdCb3VuY2luZyBCYWxscycpO1xyXG4gICAgbGV0IHRleHRWaWV3RWwgPSBhd2FpdCBkcml2ZXIuZWxlbWVudEJ5QWNjZXNzaWJpbGl0eUlkKCdCb3VuY2luZyBCYWxscycpO1xyXG4gICAgYXdhaXQgdGV4dFZpZXdFbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgIGF3YWl0IGRyaXZlci5iYWNrKCk7XHJcbiAgICBhd2FpdCBkcml2ZXIud2FpdEZvckVsZW1lbnRCeUFjY2Vzc2liaWxpdHlJZCgnQW5pbWF0aW9uJyk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGZpbmQgY29udGVudCBkZXNjcmlwdGlvbiBhdHRyaWJ1dGUnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBhbmltYXRpb25FbC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnREZXNjcmlwdGlvbicpLnNob3VsZC5ldmVudHVhbGx5LmJlY29tZShcIkFuaW1hdGlvblwiKTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gZmluZCBkaXNwbGF5ZWQgYXR0cmlidXRlJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgYW5pbWF0aW9uRWwuZ2V0QXR0cmlidXRlKCdkaXNwbGF5ZWQnKS5zaG91bGQuZXZlbnR1YWxseS5iZWNvbWUoJ3RydWUnKTtcclxuICB9KTtcclxuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gZmluZCBlbmFibGVkIGF0dHJpYnV0ZScsIGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGFuaW1hdGlvbkVsLmdldEF0dHJpYnV0ZSgnZW5hYmxlZCcpLnNob3VsZC5ldmVudHVhbGx5LmJlY29tZSgndHJ1ZScpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBmaW5kIGRpc3BsYXllZCBhdHRyaWJ1dGUgdGhyb3VnaCBub3JtYWwgZnVuYycsIGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BsYXllZCA9IGF3YWl0IGFuaW1hdGlvbkVsLmlzRGlzcGxheWVkKCk7XHJcbiAgICAoZGlzcGxheWVkICsgJycpLnNob3VsZC5lcXVhbCgndHJ1ZScpO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBnZXQgZWxlbWVudCBsb2NhdGlvbiB1c2luZyBnZXRMb2NhdGlvbicsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBsb2NhdGlvbiA9IGF3YWl0IGFuaW1hdGlvbkVsLmdldExvY2F0aW9uKCk7XHJcbiAgICBsb2NhdGlvbi54LnNob3VsZC5iZS5hdC5sZWFzdCgwKTtcclxuICAgIGxvY2F0aW9uLnkuc2hvdWxkLmJlLmF0LmxlYXN0KDApO1xyXG4gIH0pO1xyXG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBnZXQgZWxlbWVudCBsb2NhdGlvbiB1c2luZyBnZXRMb2NhdGlvbkluVmlldycsIGFzeW5jICgpID0+IHtcclxuICAgIC8vIFRPRE86ICdnZXRMb2NhdGlvbkluVmlldycgaXMgcmV0dXJuaW5nIGEgNDA0IG5vdCBmb3VuZCBlcnJvclxyXG4gICAgbGV0IGxvY2F0aW9uID0gYXdhaXQgYW5pbWF0aW9uRWwuZ2V0TG9jYXRpb25JblZpZXcoKTtcclxuICAgIGxvY2F0aW9uLnguc2hvdWxkLmJlLmF0LmxlYXN0KDApO1xyXG4gICAgbG9jYXRpb24ueS5zaG91bGQuYmUuYXQubGVhc3QoMCk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGdldCBlbGVtZW50IHNpemUnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgc2l6ZSA9IGF3YWl0IGFuaW1hdGlvbkVsLmdldFNpemUoKTtcclxuICAgIHNpemUud2lkdGguc2hvdWxkLmJlLmF0LmxlYXN0KDApO1xyXG4gICAgc2l6ZS5oZWlnaHQuc2hvdWxkLmJlLmF0LmxlYXN0KDApO1xyXG4gIH0pO1xyXG59KTsiXSwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uIn0=
