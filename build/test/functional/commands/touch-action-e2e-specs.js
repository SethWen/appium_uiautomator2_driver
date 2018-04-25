'use strict';

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _wd = require('wd');

var _wd2 = _interopRequireDefault(_wd);

var _desired = require('../desired');

var _helpersSession = require('../helpers/session');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('apidemo - touch', function () {
  describe('multi-actions', function () {
    var _this = this;

    var driver = undefined;
    before(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_Object$assign({}, _desired.APIDEMOS_CAPS, {
              appPackage: 'io.appium.android.apis',
              appActivity: '.view.SplitTouchView'
            })));

          case 2:
            driver = context$3$0.sent;

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
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
      }, null, _this);
    });

    it('should scroll two different lists', function callee$2$0() {
      var _ref, _ref2, leftEl, rightEl, leftGesture, rightGesture, multiAction;

      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.elementsByClassName('android.widget.ListView'));

          case 2:
            _ref = context$3$0.sent;
            _ref2 = _slicedToArray(_ref, 2);
            leftEl = _ref2[0];
            rightEl = _ref2[1];
            leftGesture = new _wd2['default'].TouchAction().press({ element: leftEl }).moveTo({ element: leftEl, x: 10, y: 0 }).moveTo({ element: leftEl, x: 10, y: -75 }).moveTo({ element: leftEl, x: 10, y: -150 });
            rightGesture = new _wd2['default'].TouchAction().press({ element: rightEl }).moveTo({ element: rightEl, x: 10, y: 0 }).moveTo({ element: rightEl, x: 10, y: -75 }).moveTo({ element: rightEl, x: 10, y: -150 });
            multiAction = new _wd2['default'].MultiAction();

            multiAction.add(leftGesture, rightGesture);

            context$3$0.next = 12;
            return _regeneratorRuntime.awrap(driver.performMultiAction(multiAction));

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });

  describe('swipe-action', function () {
    var _this2 = this;

    var driver = undefined;
    before(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_Object$assign({}, _desired.APIDEMOS_CAPS, {
              appPackage: 'io.appium.android.apis',
              appActivity: '.view.List1'
            })));

          case 2:
            driver = context$3$0.sent;

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
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
      }, null, _this2);
    });

    function assertElement(driver) {
      var present = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
      var els;
      return _regeneratorRuntime.async(function assertElement$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.elementsByXPath("//*[@text='Abertam']"));

          case 2:
            els = context$3$0.sent;

            els.should.be.an['instanceof'](Array);
            els.should.have.length(present ? 1 : 0);

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    }

    it('should swipe', function callee$2$0() {
      var action, el;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(assertElement(driver, true));

          case 2:
            action = new _wd2['default'].TouchAction();
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.elementByXPath("//*[@text='Abertam']"));

          case 5:
            el = context$3$0.sent;

            action.press({ element: el }).wait(300).moveTo({ element: el, x: 0, y: -1500 }).release();
            context$3$0.next = 9;
            return _regeneratorRuntime.awrap(driver.performTouchAction(action));

          case 9:
            context$3$0.next = 11;
            return _regeneratorRuntime.awrap(assertElement(driver, false));

          case 11:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy90b3VjaC1hY3Rpb24tZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O2tCQUM5QixJQUFJOzs7O3VCQUNXLFlBQVk7OzhCQUNmLG9CQUFvQjs7QUFHL0Msa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsaUJBQWlCLEVBQUUsWUFBWTtBQUN0QyxVQUFRLENBQUMsZUFBZSxFQUFFLFlBQVk7OztBQUNwQyxRQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsVUFBTSxDQUFDOzs7Ozs2Q0FDVSxnQ0FBVyxlQUFjLEVBQUUsMEJBQWlCO0FBQ3pELHdCQUFVLEVBQUUsd0JBQXdCO0FBQ3BDLHlCQUFXLEVBQUUsc0JBQXNCO2FBQ3BDLENBQUMsQ0FBQzs7O0FBSEgsa0JBQU07Ozs7Ozs7S0FJUCxDQUFDLENBQUM7QUFDSCxTQUFLLENBQUM7Ozs7OzZDQUNFLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Ozs7Ozs7S0FDcEIsQ0FBQyxDQUFDOztBQUVILE1BQUUsQ0FBQyxtQ0FBbUMsRUFBRTt1QkFDakMsTUFBTSxFQUFFLE9BQU8sRUFFZCxXQUFXLEVBTVgsWUFBWSxFQU1aLFdBQVc7Ozs7Ozs2Q0FkYSxNQUFNLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLENBQUM7Ozs7O0FBQTlFLGtCQUFNO0FBQUUsbUJBQU87QUFFZCx1QkFBVyxHQUFHLElBQUksZ0JBQUcsV0FBVyxFQUFFLENBQ3JDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUN4QixNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQ3RDLE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUN4QyxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUM7QUFFdEMsd0JBQVksR0FBRyxJQUFJLGdCQUFHLFdBQVcsRUFBRSxDQUN0QyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FDekIsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUN2QyxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FDekMsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDO0FBRXZDLHVCQUFXLEdBQUcsSUFBSSxnQkFBRyxXQUFXLEVBQUU7O0FBQ3hDLHVCQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQzs7OzZDQUVyQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDOzs7Ozs7O0tBQzdDLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQzs7QUFFSCxVQUFRLENBQUMsY0FBYyxFQUFFLFlBQVk7OztBQUNuQyxRQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsVUFBTSxDQUFDOzs7Ozs2Q0FDVSxnQ0FBVyxlQUFjLEVBQUUsMEJBQWlCO0FBQ3pELHdCQUFVLEVBQUUsd0JBQXdCO0FBQ3BDLHlCQUFXLEVBQUUsYUFBYTthQUMzQixDQUFDLENBQUM7OztBQUhILGtCQUFNOzs7Ozs7O0tBSVAsQ0FBQyxDQUFDO0FBQ0gsU0FBSyxDQUFDOzs7Ozs2Q0FDRSxNQUFNLENBQUMsSUFBSSxFQUFFOzs7Ozs7O0tBQ3BCLENBQUMsQ0FBQzs7QUFFSCxhQUFlLGFBQWEsQ0FBRSxNQUFNO1VBQUUsT0FBTyx5REFBRyxJQUFJO1VBQzlDLEdBQUc7Ozs7OzZDQUFTLE1BQU0sQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUM7OztBQUExRCxlQUFHOztBQUNQLGVBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsY0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLGVBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0tBQ3pDOztBQUVELE1BQUUsQ0FBQyxjQUFjLEVBQUU7VUFFWCxNQUFNLEVBQ1IsRUFBRTs7Ozs7NkNBRkEsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7OztBQUMzQixrQkFBTSxHQUFHLElBQUksZ0JBQUcsV0FBVyxFQUFFOzs2Q0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQzs7O0FBQXhELGNBQUU7O0FBQ04sa0JBQU0sQ0FBQyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNULE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUNyQyxPQUFPLEVBQUUsQ0FBQzs7NkNBQ1AsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzs7Ozs2Q0FDakMsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Ozs7Ozs7S0FDbkMsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy90b3VjaC1hY3Rpb24tZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XHJcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcclxuaW1wb3J0IHdkIGZyb20gJ3dkJztcclxuaW1wb3J0IHsgQVBJREVNT1NfQ0FQUyB9IGZyb20gJy4uL2Rlc2lyZWQnO1xyXG5pbXBvcnQgeyBpbml0RHJpdmVyIH0gZnJvbSAnLi4vaGVscGVycy9zZXNzaW9uJztcclxuXHJcblxyXG5jaGFpLnNob3VsZCgpO1xyXG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XHJcblxyXG5kZXNjcmliZSgnYXBpZGVtbyAtIHRvdWNoJywgZnVuY3Rpb24gKCkge1xyXG4gIGRlc2NyaWJlKCdtdWx0aS1hY3Rpb25zJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGRyaXZlcjtcclxuICAgIGJlZm9yZShhc3luYyAoKSA9PiB7XHJcbiAgICAgIGRyaXZlciA9IGF3YWl0IGluaXREcml2ZXIoT2JqZWN0LmFzc2lnbih7fSwgQVBJREVNT1NfQ0FQUywge1xyXG4gICAgICAgIGFwcFBhY2thZ2U6ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJyxcclxuICAgICAgICBhcHBBY3Rpdml0eTogJy52aWV3LlNwbGl0VG91Y2hWaWV3JyxcclxuICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbiAgICBhZnRlcihhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5xdWl0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHNjcm9sbCB0d28gZGlmZmVyZW50IGxpc3RzJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgW2xlZnRFbCwgcmlnaHRFbF0gPSBhd2FpdCBkcml2ZXIuZWxlbWVudHNCeUNsYXNzTmFtZSgnYW5kcm9pZC53aWRnZXQuTGlzdFZpZXcnKTtcclxuXHJcbiAgICAgIGNvbnN0IGxlZnRHZXN0dXJlID0gbmV3IHdkLlRvdWNoQWN0aW9uKClcclxuICAgICAgICAucHJlc3Moe2VsZW1lbnQ6IGxlZnRFbH0pXHJcbiAgICAgICAgLm1vdmVUbyh7ZWxlbWVudDogbGVmdEVsLCB4OiAxMCwgeTogMH0pXHJcbiAgICAgICAgLm1vdmVUbyh7ZWxlbWVudDogbGVmdEVsLCB4OiAxMCwgeTogLTc1fSlcclxuICAgICAgICAubW92ZVRvKHtlbGVtZW50OiBsZWZ0RWwsIHg6IDEwLCB5OiAtMTUwfSk7XHJcblxyXG4gICAgICBjb25zdCByaWdodEdlc3R1cmUgPSBuZXcgd2QuVG91Y2hBY3Rpb24oKVxyXG4gICAgICAgIC5wcmVzcyh7ZWxlbWVudDogcmlnaHRFbH0pXHJcbiAgICAgICAgLm1vdmVUbyh7ZWxlbWVudDogcmlnaHRFbCwgeDogMTAsIHk6IDB9KVxyXG4gICAgICAgIC5tb3ZlVG8oe2VsZW1lbnQ6IHJpZ2h0RWwsIHg6IDEwLCB5OiAtNzV9KVxyXG4gICAgICAgIC5tb3ZlVG8oe2VsZW1lbnQ6IHJpZ2h0RWwsIHg6IDEwLCB5OiAtMTUwfSk7XHJcblxyXG4gICAgICBjb25zdCBtdWx0aUFjdGlvbiA9IG5ldyB3ZC5NdWx0aUFjdGlvbigpO1xyXG4gICAgICBtdWx0aUFjdGlvbi5hZGQobGVmdEdlc3R1cmUsIHJpZ2h0R2VzdHVyZSk7XHJcblxyXG4gICAgICBhd2FpdCBkcml2ZXIucGVyZm9ybU11bHRpQWN0aW9uKG11bHRpQWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBkZXNjcmliZSgnc3dpcGUtYWN0aW9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGRyaXZlcjtcclxuICAgIGJlZm9yZShhc3luYyAoKSA9PiB7XHJcbiAgICAgIGRyaXZlciA9IGF3YWl0IGluaXREcml2ZXIoT2JqZWN0LmFzc2lnbih7fSwgQVBJREVNT1NfQ0FQUywge1xyXG4gICAgICAgIGFwcFBhY2thZ2U6ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJyxcclxuICAgICAgICBhcHBBY3Rpdml0eTogJy52aWV3Lkxpc3QxJyxcclxuICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbiAgICBhZnRlcihhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5xdWl0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhc3NlcnRFbGVtZW50IChkcml2ZXIsIHByZXNlbnQgPSB0cnVlKSB7XHJcbiAgICAgIGxldCBlbHMgPSBhd2FpdCBkcml2ZXIuZWxlbWVudHNCeVhQYXRoKFwiLy8qW0B0ZXh0PSdBYmVydGFtJ11cIik7XHJcbiAgICAgIGVscy5zaG91bGQuYmUuYW4uaW5zdGFuY2VvZihBcnJheSk7XHJcbiAgICAgIGVscy5zaG91bGQuaGF2ZS5sZW5ndGgocHJlc2VudCA/IDEgOiAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpdCgnc2hvdWxkIHN3aXBlJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBhc3NlcnRFbGVtZW50KGRyaXZlciwgdHJ1ZSk7XHJcbiAgICAgIGNvbnN0IGFjdGlvbiA9IG5ldyB3ZC5Ub3VjaEFjdGlvbigpO1xyXG4gICAgICBsZXQgZWwgPSBhd2FpdCBkcml2ZXIuZWxlbWVudEJ5WFBhdGgoXCIvLypbQHRleHQ9J0FiZXJ0YW0nXVwiKTtcclxuICAgICAgYWN0aW9uLnByZXNzKHtlbGVtZW50OiBlbH0pXHJcbiAgICAgICAgLndhaXQoMzAwKVxyXG4gICAgICAgIC5tb3ZlVG8oe2VsZW1lbnQ6IGVsLCB4OiAwLCB5OiAtMTUwMH0pXHJcbiAgICAgICAgLnJlbGVhc2UoKTtcclxuICAgICAgYXdhaXQgZHJpdmVyLnBlcmZvcm1Ub3VjaEFjdGlvbihhY3Rpb24pO1xyXG4gICAgICBhd2FpdCBhc3NlcnRFbGVtZW50KGRyaXZlciwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uIn0=
