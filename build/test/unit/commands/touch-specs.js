'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _this = this;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _ = require('../../..');

var _2 = _interopRequireDefault(_);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('Touch', function () {
  var adb = new _appiumAdb2['default']();
  var driver = new _2['default']();
  driver.adb = adb;

  describe('#parseTouch', function () {
    describe('given a touch sequence with absolute coordinates', function () {
      it('should use offsets for moveTo', function callee$3$0() {
        var actions, touchStates, parsedActions, index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, state;

        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              actions = [{ action: 'press', options: { x: 100, y: 101 } }, { action: 'moveTo', options: { x: 50, y: 51 } }, { action: 'wait', options: { ms: 5000 } }, { action: 'moveTo', options: { x: -40, y: -41 } }, { action: 'release', options: {} }];
              context$4$0.next = 3;
              return _regeneratorRuntime.awrap(driver.parseTouch(actions, false));

            case 3:
              touchStates = context$4$0.sent;

              touchStates.length.should.equal(5);
              parsedActions = [{ action: 'press', x: 100, y: 101 }, { action: 'moveTo', x: 150, y: 152 }, { action: 'wait', x: 150, y: 152 }, { action: 'moveTo', x: 110, y: 111 }, { action: 'release' }];
              index = 0;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              context$4$0.prev = 10;

              for (_iterator = _getIterator(touchStates); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                state = _step.value;

                state.action.should.equal(parsedActions[index].action);
                if (actions[index].action !== 'release') {
                  state.options.x.should.equal(parsedActions[index].x);
                  state.options.y.should.equal(parsedActions[index].y);
                }
                index++;
              }
              context$4$0.next = 18;
              break;

            case 14:
              context$4$0.prev = 14;
              context$4$0.t0 = context$4$0['catch'](10);
              _didIteratorError = true;
              _iteratorError = context$4$0.t0;

            case 18:
              context$4$0.prev = 18;
              context$4$0.prev = 19;

              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }

            case 21:
              context$4$0.prev = 21;

              if (!_didIteratorError) {
                context$4$0.next = 24;
                break;
              }

              throw _iteratorError;

            case 24:
              return context$4$0.finish(21);

            case 25:
              return context$4$0.finish(18);

            case 26:
            case 'end':
              return context$4$0.stop();
          }
        }, null, _this, [[10, 14, 18, 26], [19,, 21, 25]]);
      });
    });
  });
});

// let driver = new AndroidDriver({foo: 'bar'});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy90b3VjaC1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztnQkFDUCxVQUFVOzs7O3lCQUNoQyxZQUFZOzs7O0FBRzVCLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsUUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFNO0FBQ3RCLE1BQUksR0FBRyxHQUFHLDRCQUFTLENBQUM7QUFDcEIsTUFBSSxNQUFNLEdBQUcsbUJBQStCLENBQUM7QUFDN0MsUUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O0FBRWpCLFVBQVEsQ0FBQyxhQUFhLEVBQUUsWUFBTTtBQUM1QixZQUFRLENBQUMsa0RBQWtELEVBQUUsWUFBTTtBQUNqRSxRQUFFLENBQUMsK0JBQStCLEVBQUU7WUFFOUIsT0FBTyxFQU9QLFdBQVcsRUFFWCxhQUFhLEVBT2IsS0FBSyxrRkFDQSxLQUFLOzs7OztBQWpCVixxQkFBTyxHQUFHLENBQ1osRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFDLEVBQzVDLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUMsRUFBQyxFQUMzQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxFQUFDLEVBQ3JDLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLEVBQUMsRUFDN0MsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FDakM7OytDQUN1QixNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7OztBQUFyRCx5QkFBVzs7QUFDZix5QkFBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLDJCQUFhLEdBQUcsQ0FDbEIsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUNqQyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQ2xDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFDaEMsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUNsQyxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FDcEI7QUFDRyxtQkFBSyxHQUFHLENBQUM7Ozs7OztBQUNiLDRDQUFrQixXQUFXLHFHQUFFO0FBQXRCLHFCQUFLOztBQUNaLHFCQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELG9CQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ3ZDLHVCQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCx1QkFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3REO0FBQ0QscUJBQUssRUFBRSxDQUFDO2VBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUNGLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L3VuaXQvY29tbWFuZHMvdG91Y2gtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcclxuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xyXG5pbXBvcnQgQW5kcm9pZFVpYXV0b21hdG9yMkRyaXZlciBmcm9tICcuLi8uLi8uLic7XHJcbmltcG9ydCBBREIgZnJvbSAnYXBwaXVtLWFkYic7XHJcblxyXG5cclxuY2hhaS5zaG91bGQoKTtcclxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xyXG5cclxuZGVzY3JpYmUoJ1RvdWNoJywgKCkgPT4ge1xyXG4gIGxldCBhZGIgPSBuZXcgQURCKCk7XHJcbiAgbGV0IGRyaXZlciA9IG5ldyBBbmRyb2lkVWlhdXRvbWF0b3IyRHJpdmVyKCk7XHJcbiAgZHJpdmVyLmFkYiA9IGFkYjtcclxuXHJcbiAgZGVzY3JpYmUoJyNwYXJzZVRvdWNoJywgKCkgPT4ge1xyXG4gICAgZGVzY3JpYmUoJ2dpdmVuIGEgdG91Y2ggc2VxdWVuY2Ugd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcycsICgpID0+IHtcclxuICAgICAgaXQoJ3Nob3VsZCB1c2Ugb2Zmc2V0cyBmb3IgbW92ZVRvJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIGxldCBkcml2ZXIgPSBuZXcgQW5kcm9pZERyaXZlcih7Zm9vOiAnYmFyJ30pO1xyXG4gICAgICAgIGxldCBhY3Rpb25zID0gW1xyXG4gICAgICAgICAge2FjdGlvbjogJ3ByZXNzJywgb3B0aW9uczoge3g6IDEwMCwgeTogMTAxfX0sXHJcbiAgICAgICAgICB7YWN0aW9uOiAnbW92ZVRvJywgb3B0aW9uczoge3g6IDUwLCB5OiA1MX19LFxyXG4gICAgICAgICAge2FjdGlvbjogJ3dhaXQnLCBvcHRpb25zOiB7bXM6IDUwMDB9fSxcclxuICAgICAgICAgIHthY3Rpb246ICdtb3ZlVG8nLCBvcHRpb25zOiB7eDogLTQwLCB5OiAtNDF9fSxcclxuICAgICAgICAgIHthY3Rpb246ICdyZWxlYXNlJywgb3B0aW9uczoge319XHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgdG91Y2hTdGF0ZXMgPSBhd2FpdCBkcml2ZXIucGFyc2VUb3VjaChhY3Rpb25zLCBmYWxzZSk7XHJcbiAgICAgICAgdG91Y2hTdGF0ZXMubGVuZ3RoLnNob3VsZC5lcXVhbCg1KTtcclxuICAgICAgICBsZXQgcGFyc2VkQWN0aW9ucyA9IFtcclxuICAgICAgICAgIHthY3Rpb246ICdwcmVzcycsIHg6IDEwMCwgeTogMTAxfSxcclxuICAgICAgICAgIHthY3Rpb246ICdtb3ZlVG8nLCB4OiAxNTAsIHk6IDE1Mn0sXHJcbiAgICAgICAgICB7YWN0aW9uOiAnd2FpdCcsIHg6IDE1MCwgeTogMTUyfSxcclxuICAgICAgICAgIHthY3Rpb246ICdtb3ZlVG8nLCB4OiAxMTAsIHk6IDExMX0sXHJcbiAgICAgICAgICB7YWN0aW9uOiAncmVsZWFzZSd9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHN0YXRlIG9mIHRvdWNoU3RhdGVzKSB7XHJcbiAgICAgICAgICBzdGF0ZS5hY3Rpb24uc2hvdWxkLmVxdWFsKHBhcnNlZEFjdGlvbnNbaW5kZXhdLmFjdGlvbik7XHJcbiAgICAgICAgICBpZiAoYWN0aW9uc1tpbmRleF0uYWN0aW9uICE9PSAncmVsZWFzZScpIHtcclxuICAgICAgICAgICAgc3RhdGUub3B0aW9ucy54LnNob3VsZC5lcXVhbChwYXJzZWRBY3Rpb25zW2luZGV4XS54KTtcclxuICAgICAgICAgICAgc3RhdGUub3B0aW9ucy55LnNob3VsZC5lcXVhbChwYXJzZWRBY3Rpb25zW2luZGV4XS55KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLiJ9
