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

describe('general', function () {
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

  describe('startActivity', function () {
    var _this2 = this;

    it('should launch a new package and activity', function callee$2$0() {
      var appPackage, appActivity, startAppPackage, startAppActivity, newAppPackage, newAppActivity;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.getCurrentPackage());

          case 2:
            appPackage = context$3$0.sent;
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getCurrentActivity());

          case 5:
            appActivity = context$3$0.sent;

            appPackage.should.equal('io.appium.android.apis');
            appActivity.should.equal('.ApiDemos');

            startAppPackage = 'io.appium.android.apis';
            startAppActivity = '.view.SplitTouchView';
            context$3$0.next = 12;
            return _regeneratorRuntime.awrap(driver.startActivity({ appPackage: startAppPackage, appActivity: startAppActivity }));

          case 12:
            context$3$0.next = 14;
            return _regeneratorRuntime.awrap(driver.getCurrentPackage());

          case 14:
            newAppPackage = context$3$0.sent;
            context$3$0.next = 17;
            return _regeneratorRuntime.awrap(driver.getCurrentActivity());

          case 17:
            newAppActivity = context$3$0.sent;

            newAppPackage.should.equal(startAppPackage);
            newAppActivity.should.equal(startAppActivity);

          case 20:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
    it('should be able to launch activity with custom intent parameter category', function callee$2$0() {
      var startAppPackage, startAppActivity, startIntentCategory, appActivity;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            startAppPackage = 'io.appium.android.apis';
            startAppActivity = 'io.appium.android.apis.app.HelloWorld';
            startIntentCategory = 'appium.android.intent.category.SAMPLE_CODE';
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.startActivity({ appPackage: startAppPackage, appActivity: startAppActivity, intentCategory: startIntentCategory }));

          case 5:
            context$3$0.next = 7;
            return _regeneratorRuntime.awrap(driver.getCurrentActivity());

          case 7:
            appActivity = context$3$0.sent;

            appActivity.should.include('HelloWorld');

          case 9:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
    it('should be able to launch activity with dontStopAppOnReset = true', function callee$2$0() {
      var startAppPackage, startAppActivity, appPackage, appActivity;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            startAppPackage = 'io.appium.android.apis';
            startAppActivity = '.os.MorseCode';
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.startActivity({ appPackage: startAppPackage, appActivity: startAppActivity }));

          case 4:
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.getCurrentPackage());

          case 6:
            appPackage = context$3$0.sent;
            context$3$0.next = 9;
            return _regeneratorRuntime.awrap(driver.getCurrentActivity());

          case 9:
            appActivity = context$3$0.sent;

            appPackage.should.equal(startAppPackage);
            appActivity.should.equal(startAppActivity);

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
    it('should be able to launch activity with dontStopAppOnReset = false', function callee$2$0() {
      var startAppPackage, startAppActivity, appPackage, appActivity;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            startAppPackage = 'io.appium.android.apis';
            startAppActivity = '.os.MorseCode';
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.startActivity({ appPackage: startAppPackage, appActivity: startAppActivity }));

          case 4:
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.getCurrentPackage());

          case 6:
            appPackage = context$3$0.sent;
            context$3$0.next = 9;
            return _regeneratorRuntime.awrap(driver.getCurrentActivity());

          case 9:
            appActivity = context$3$0.sent;

            appPackage.should.equal(startAppPackage);
            appActivity.should.equal(startAppActivity);

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9nZW5lcmFsLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O3VCQUNmLFlBQVk7OzhCQUNmLG9CQUFvQjs7QUFHL0Msa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsU0FBUyxFQUFFLFlBQVk7OztBQUU5QixNQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsUUFBTSxDQUFDOzs7OzsyQ0FDVSx1REFBeUI7OztBQUF4QyxnQkFBTTs7Ozs7OztHQUNQLENBQUMsQ0FBQztBQUNILE9BQUssQ0FBQzs7Ozs7MkNBQ0UsTUFBTSxDQUFDLElBQUksRUFBRTs7Ozs7OztHQUNwQixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGVBQWUsRUFBRSxZQUFZOzs7QUFDcEMsTUFBRSxDQUFDLDBDQUEwQyxFQUFFO1VBQ3pDLFVBQVUsRUFDVixXQUFXLEVBSVgsZUFBZSxFQUNmLGdCQUFnQixFQUloQixhQUFhLEVBQ2IsY0FBYzs7Ozs7NkNBWE0sTUFBTSxDQUFDLGlCQUFpQixFQUFFOzs7QUFBOUMsc0JBQVU7OzZDQUNXLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTs7O0FBQWhELHVCQUFXOztBQUNmLHNCQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ2xELHVCQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFbEMsMkJBQWUsR0FBRyx3QkFBd0I7QUFDMUMsNEJBQWdCLEdBQUcsc0JBQXNCOzs2Q0FFdkMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFDLENBQUM7Ozs7NkNBRTdELE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTs7O0FBQWpELHlCQUFhOzs2Q0FDVyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7OztBQUFuRCwwQkFBYzs7QUFDbEIseUJBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzVDLDBCQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzs7Ozs7O0tBQy9DLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyx5RUFBeUUsRUFBRTtVQUN4RSxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUluQixXQUFXOzs7O0FBTlgsMkJBQWUsR0FBRyx3QkFBd0I7QUFDMUMsNEJBQWdCLEdBQUcsdUNBQXVDO0FBQzFELCtCQUFtQixHQUFHLDRDQUE0Qzs7NkNBRWhFLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQzs7Ozs2Q0FFcEcsTUFBTSxDQUFDLGtCQUFrQixFQUFFOzs7QUFBaEQsdUJBQVc7O0FBQ2YsdUJBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7Ozs7O0tBQzFDLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxrRUFBa0UsRUFBRTtVQUNqRSxlQUFlLEVBQ2YsZ0JBQWdCLEVBR2hCLFVBQVUsRUFDVixXQUFXOzs7O0FBTFgsMkJBQWUsR0FBRyx3QkFBd0I7QUFDMUMsNEJBQWdCLEdBQUcsZUFBZTs7NkNBQ2hDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDOzs7OzZDQUVoRSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7OztBQUE5QyxzQkFBVTs7NkNBQ1csTUFBTSxDQUFDLGtCQUFrQixFQUFFOzs7QUFBaEQsdUJBQVc7O0FBQ2Ysc0JBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pDLHVCQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzs7Ozs7O0tBQzVDLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxtRUFBbUUsRUFBRTtVQUNsRSxlQUFlLEVBQ2YsZ0JBQWdCLEVBR2hCLFVBQVUsRUFDVixXQUFXOzs7O0FBTFgsMkJBQWUsR0FBRyx3QkFBd0I7QUFDMUMsNEJBQWdCLEdBQUcsZUFBZTs7NkNBQ2hDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDOzs7OzZDQUVqRSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7OztBQUE3QyxzQkFBVTs7NkNBQ1UsTUFBTSxDQUFDLGtCQUFrQixFQUFFOzs7QUFBL0MsdUJBQVc7O0FBQ2Ysc0JBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pDLHVCQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzs7Ozs7O0tBQzVDLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvY29tbWFuZHMvZ2VuZXJhbC1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcclxuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xyXG5pbXBvcnQgeyBBUElERU1PU19DQVBTIH0gZnJvbSAnLi4vZGVzaXJlZCc7XHJcbmltcG9ydCB7IGluaXREcml2ZXIgfSBmcm9tICcuLi9oZWxwZXJzL3Nlc3Npb24nO1xyXG5cclxuXHJcbmNoYWkuc2hvdWxkKCk7XHJcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcclxuXHJcbmRlc2NyaWJlKCdnZW5lcmFsJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICBsZXQgZHJpdmVyO1xyXG4gIGJlZm9yZShhc3luYyAoKSA9PiB7XHJcbiAgICBkcml2ZXIgPSBhd2FpdCBpbml0RHJpdmVyKEFQSURFTU9TX0NBUFMpO1xyXG4gIH0pO1xyXG4gIGFmdGVyKGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRyaXZlci5xdWl0KCk7XHJcbiAgfSk7XHJcblxyXG4gIGRlc2NyaWJlKCdzdGFydEFjdGl2aXR5JywgZnVuY3Rpb24gKCkge1xyXG4gICAgaXQoJ3Nob3VsZCBsYXVuY2ggYSBuZXcgcGFja2FnZSBhbmQgYWN0aXZpdHknLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCBhcHBQYWNrYWdlID0gIGF3YWl0IGRyaXZlci5nZXRDdXJyZW50UGFja2FnZSgpO1xyXG4gICAgICBsZXQgYXBwQWN0aXZpdHkgPSAgYXdhaXQgZHJpdmVyLmdldEN1cnJlbnRBY3Rpdml0eSgpO1xyXG4gICAgICBhcHBQYWNrYWdlLnNob3VsZC5lcXVhbCgnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycpO1xyXG4gICAgICBhcHBBY3Rpdml0eS5zaG91bGQuZXF1YWwoJy5BcGlEZW1vcycpO1xyXG5cclxuICAgICAgbGV0IHN0YXJ0QXBwUGFja2FnZSA9ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJztcclxuICAgICAgbGV0IHN0YXJ0QXBwQWN0aXZpdHkgPSAnLnZpZXcuU3BsaXRUb3VjaFZpZXcnO1xyXG5cclxuICAgICAgYXdhaXQgZHJpdmVyLnN0YXJ0QWN0aXZpdHkoe2FwcFBhY2thZ2U6IHN0YXJ0QXBwUGFja2FnZSwgYXBwQWN0aXZpdHk6IHN0YXJ0QXBwQWN0aXZpdHl9KTtcclxuXHJcbiAgICAgIGxldCBuZXdBcHBQYWNrYWdlID0gIGF3YWl0IGRyaXZlci5nZXRDdXJyZW50UGFja2FnZSgpO1xyXG4gICAgICBsZXQgbmV3QXBwQWN0aXZpdHkgPSAgYXdhaXQgZHJpdmVyLmdldEN1cnJlbnRBY3Rpdml0eSgpO1xyXG4gICAgICBuZXdBcHBQYWNrYWdlLnNob3VsZC5lcXVhbChzdGFydEFwcFBhY2thZ2UpO1xyXG4gICAgICBuZXdBcHBBY3Rpdml0eS5zaG91bGQuZXF1YWwoc3RhcnRBcHBBY3Rpdml0eSk7XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBsYXVuY2ggYWN0aXZpdHkgd2l0aCBjdXN0b20gaW50ZW50IHBhcmFtZXRlciBjYXRlZ29yeScsIGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHN0YXJ0QXBwUGFja2FnZSA9ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJztcclxuICAgICAgbGV0IHN0YXJ0QXBwQWN0aXZpdHkgPSAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcy5hcHAuSGVsbG9Xb3JsZCc7XHJcbiAgICAgIGxldCBzdGFydEludGVudENhdGVnb3J5ID0gJ2FwcGl1bS5hbmRyb2lkLmludGVudC5jYXRlZ29yeS5TQU1QTEVfQ09ERSc7XHJcblxyXG4gICAgICBhd2FpdCBkcml2ZXIuc3RhcnRBY3Rpdml0eSh7YXBwUGFja2FnZTogc3RhcnRBcHBQYWNrYWdlLCBhcHBBY3Rpdml0eTogc3RhcnRBcHBBY3Rpdml0eSwgaW50ZW50Q2F0ZWdvcnk6IHN0YXJ0SW50ZW50Q2F0ZWdvcnl9KTtcclxuXHJcbiAgICAgIGxldCBhcHBBY3Rpdml0eSA9ICBhd2FpdCBkcml2ZXIuZ2V0Q3VycmVudEFjdGl2aXR5KCk7XHJcbiAgICAgIGFwcEFjdGl2aXR5LnNob3VsZC5pbmNsdWRlKCdIZWxsb1dvcmxkJyk7XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBsYXVuY2ggYWN0aXZpdHkgd2l0aCBkb250U3RvcEFwcE9uUmVzZXQgPSB0cnVlJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgc3RhcnRBcHBQYWNrYWdlID0gJ2lvLmFwcGl1bS5hbmRyb2lkLmFwaXMnO1xyXG4gICAgICBsZXQgc3RhcnRBcHBBY3Rpdml0eSA9ICcub3MuTW9yc2VDb2RlJztcclxuICAgICAgYXdhaXQgZHJpdmVyLnN0YXJ0QWN0aXZpdHkoe2FwcFBhY2thZ2U6IHN0YXJ0QXBwUGFja2FnZSwgYXBwQWN0aXZpdHk6IHN0YXJ0QXBwQWN0aXZpdHl9KTtcclxuXHJcbiAgICAgIGxldCBhcHBQYWNrYWdlID0gIGF3YWl0IGRyaXZlci5nZXRDdXJyZW50UGFja2FnZSgpO1xyXG4gICAgICBsZXQgYXBwQWN0aXZpdHkgPSAgYXdhaXQgZHJpdmVyLmdldEN1cnJlbnRBY3Rpdml0eSgpO1xyXG4gICAgICBhcHBQYWNrYWdlLnNob3VsZC5lcXVhbChzdGFydEFwcFBhY2thZ2UpO1xyXG4gICAgICBhcHBBY3Rpdml0eS5zaG91bGQuZXF1YWwoc3RhcnRBcHBBY3Rpdml0eSk7XHJcbiAgICB9KTtcclxuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBsYXVuY2ggYWN0aXZpdHkgd2l0aCBkb250U3RvcEFwcE9uUmVzZXQgPSBmYWxzZScsIGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHN0YXJ0QXBwUGFja2FnZSA9ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJztcclxuICAgICAgbGV0IHN0YXJ0QXBwQWN0aXZpdHkgPSAnLm9zLk1vcnNlQ29kZSc7XHJcbiAgICAgIGF3YWl0IGRyaXZlci5zdGFydEFjdGl2aXR5KHthcHBQYWNrYWdlOiBzdGFydEFwcFBhY2thZ2UsIGFwcEFjdGl2aXR5OiBzdGFydEFwcEFjdGl2aXR5fSk7XHJcblxyXG4gICAgICBsZXQgYXBwUGFja2FnZSA9IGF3YWl0IGRyaXZlci5nZXRDdXJyZW50UGFja2FnZSgpO1xyXG4gICAgICBsZXQgYXBwQWN0aXZpdHkgPSBhd2FpdCBkcml2ZXIuZ2V0Q3VycmVudEFjdGl2aXR5KCk7XHJcbiAgICAgIGFwcFBhY2thZ2Uuc2hvdWxkLmVxdWFsKHN0YXJ0QXBwUGFja2FnZSk7XHJcbiAgICAgIGFwcEFjdGl2aXR5LnNob3VsZC5lcXVhbChzdGFydEFwcEFjdGl2aXR5KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLiJ9
