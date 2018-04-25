'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _desired = require('../desired');

var _helpersSession = require('../helpers/session');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var caps = _lodash2['default'].defaults({
  appPackage: 'io.appium.android.apis',
  appActivity: '.view.WebView1',
  showChromedriverLog: true
}, _desired.APIDEMOS_CAPS);

describe('apidemo - context', function () {
  var _this = this;

  var driver = undefined;
  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps));

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
  it('should find webview context', function callee$1$0() {
    var contexts;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.contexts());

        case 2:
          contexts = context$2$0.sent;

          contexts.length.should.be.at.least(2);

          // make sure the process was found, otherwise it comes out as "undefined"
          contexts.join('').should.not.include('undefined');
          contexts.join('').should.include('WEBVIEW_io.appium.android.apis');

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should go into the webview', function callee$1$0() {
    var contexts;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          // TODO: Fix this on TestObject. Chromedriver does not exist error
          if (process.env.TESTOBJECT_E2E_TESTS) {
            this.skip();
          }
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.contexts());

        case 3:
          contexts = context$2$0.sent;
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.context(contexts[1]));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9jb250ZXh0LWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O3VCQUNmLFlBQVk7OzhCQUNmLG9CQUFvQjs7c0JBQ2pDLFFBQVE7Ozs7QUFHdEIsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixJQUFNLElBQUksR0FBRyxvQkFBRSxRQUFRLENBQUM7QUFDdEIsWUFBVSxFQUFFLHdCQUF3QjtBQUNwQyxhQUFXLEVBQUUsZ0JBQWdCO0FBQzdCLHFCQUFtQixFQUFFLElBQUk7Q0FDMUIseUJBQWdCLENBQUM7O0FBRWxCLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZOzs7QUFDeEMsTUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLFFBQU0sQ0FBQzs7Ozs7MkNBQ1UsZ0NBQVcsSUFBSSxDQUFDOzs7QUFBL0IsZ0JBQU07Ozs7Ozs7R0FDUCxDQUFDLENBQUM7QUFDSCxPQUFLLENBQUM7Ozs7OzJDQUNFLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Ozs7Ozs7R0FDcEIsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLDZCQUE2QixFQUFFO1FBQzVCLFFBQVE7Ozs7OzJDQUFTLE1BQU0sQ0FBQyxRQUFRLEVBQUU7OztBQUFsQyxrQkFBUTs7QUFDWixrQkFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7OztBQUd0QyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNsRCxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7Ozs7Ozs7R0FDcEUsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLDRCQUE0QixFQUFFO1FBSzNCLFFBQVE7Ozs7O0FBSFosY0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFO0FBQ3BDLGdCQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7V0FDYjs7MkNBQ29CLE1BQU0sQ0FBQyxRQUFRLEVBQUU7OztBQUFsQyxrQkFBUTs7MkNBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7R0FDbEMsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9jb250ZXh0LWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XHJcbmltcG9ydCB7IEFQSURFTU9TX0NBUFMgfSBmcm9tICcuLi9kZXNpcmVkJztcclxuaW1wb3J0IHsgaW5pdERyaXZlciB9IGZyb20gJy4uL2hlbHBlcnMvc2Vzc2lvbic7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuY2hhaS5zaG91bGQoKTtcclxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xyXG5cclxuY29uc3QgY2FwcyA9IF8uZGVmYXVsdHMoe1xyXG4gIGFwcFBhY2thZ2U6ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJyxcclxuICBhcHBBY3Rpdml0eTogJy52aWV3LldlYlZpZXcxJyxcclxuICBzaG93Q2hyb21lZHJpdmVyTG9nOiB0cnVlLFxyXG59LCBBUElERU1PU19DQVBTKTtcclxuXHJcbmRlc2NyaWJlKCdhcGlkZW1vIC0gY29udGV4dCcsIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgZHJpdmVyO1xyXG4gIGJlZm9yZShhc3luYyAoKSA9PiB7XHJcbiAgICBkcml2ZXIgPSBhd2FpdCBpbml0RHJpdmVyKGNhcHMpO1xyXG4gIH0pO1xyXG4gIGFmdGVyKGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRyaXZlci5xdWl0KCk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBmaW5kIHdlYnZpZXcgY29udGV4dCcsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBjb250ZXh0cyA9IGF3YWl0IGRyaXZlci5jb250ZXh0cygpO1xyXG4gICAgY29udGV4dHMubGVuZ3RoLnNob3VsZC5iZS5hdC5sZWFzdCgyKTtcclxuXHJcbiAgICAvLyBtYWtlIHN1cmUgdGhlIHByb2Nlc3Mgd2FzIGZvdW5kLCBvdGhlcndpc2UgaXQgY29tZXMgb3V0IGFzIFwidW5kZWZpbmVkXCJcclxuICAgIGNvbnRleHRzLmpvaW4oJycpLnNob3VsZC5ub3QuaW5jbHVkZSgndW5kZWZpbmVkJyk7XHJcbiAgICBjb250ZXh0cy5qb2luKCcnKS5zaG91bGQuaW5jbHVkZSgnV0VCVklFV19pby5hcHBpdW0uYW5kcm9pZC5hcGlzJyk7XHJcbiAgfSk7XHJcbiAgaXQoJ3Nob3VsZCBnbyBpbnRvIHRoZSB3ZWJ2aWV3JywgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gVE9ETzogRml4IHRoaXMgb24gVGVzdE9iamVjdC4gQ2hyb21lZHJpdmVyIGRvZXMgbm90IGV4aXN0IGVycm9yXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuVEVTVE9CSkVDVF9FMkVfVEVTVFMpIHtcclxuICAgICAgdGhpcy5za2lwKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgY29udGV4dHMgPSBhd2FpdCBkcml2ZXIuY29udGV4dHMoKTtcclxuICAgIGF3YWl0IGRyaXZlci5jb250ZXh0KGNvbnRleHRzWzFdKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi4ifQ==
