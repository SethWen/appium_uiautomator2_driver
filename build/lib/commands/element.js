'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var commands = {},
    helpers = {},
    extensions = {};

function toBool(s) {
  return _lodash2['default'].isString(s) ? s.toLowerCase() === 'true' : !!s;
}

commands.getAttribute = function callee$0$0(attribute, elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/element/' + elementId + '/attribute/' + attribute, 'GET', {}));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.elementDisplayed = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.getAttribute("displayed", elementId));

      case 2:
        context$1$0.t0 = context$1$0.sent;
        return context$1$0.abrupt('return', toBool(context$1$0.t0));

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.elementEnabled = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.getAttribute("enabled", elementId));

      case 2:
        context$1$0.t0 = context$1$0.sent;
        return context$1$0.abrupt('return', toBool(context$1$0.t0));

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.elementSelected = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.getAttribute("selected", elementId));

      case 2:
        context$1$0.t0 = context$1$0.sent;
        return context$1$0.abrupt('return', toBool(context$1$0.t0));

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getName = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/element/' + elementId + '/name', 'GET', {}));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getLocation = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].info('calling get location: ' + elementId);
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/element/' + elementId + '/location', 'GET', {}));

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getSize = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/element/' + elementId + '/size', 'GET', {}));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.touchLongClick = function callee$0$0(element, x, y, duration) {
  var params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        params = { element: element, x: x, y: y, duration: duration };
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/touch/longclick', 'POST', { params: params }));

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.touchDown = function callee$0$0(element, x, y) {
  var params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        params = { element: element, x: x, y: y };
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/touch/down', 'POST', { params: params }));

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.touchUp = function callee$0$0(element, x, y) {
  var params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        params = { element: element, x: x, y: y };
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/touch/up', 'POST', { params: params }));

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.touchMove = function callee$0$0(element, x, y) {
  var params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        params = { element: element, x: x, y: y };
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/touch/move', 'POST', { params: params }));

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.doSetElementValue = function callee$0$0(params) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/element/' + params.elementId + '/value', 'POST', params));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getText = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/element/' + elementId + '/text', 'GET', {}));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.click = function callee$0$0(element) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/element/' + element + '/click', 'POST', { element: element }));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getElementScreenshot = function callee$0$0(element) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/element/' + element + '/screenshot', 'GET', {}));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.tap = function callee$0$0(element) {
  var x = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var y = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
  var count = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];
  var i, params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        i = 0;

      case 1:
        if (!(i < count)) {
          context$1$0.next = 14;
          break;
        }

        if (!element) {
          context$1$0.next = 9;
          break;
        }

        params = { element: element };

        if (x !== 0 || y !== 0) {
          params[x] = x;
          params[y] = y;
        }
        context$1$0.next = 7;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/element/' + element + '/click', 'POST', params));

      case 7:
        context$1$0.next = 11;
        break;

      case 9:
        context$1$0.next = 11;
        return _regeneratorRuntime.awrap(this.uiautomator2.jwproxy.command('/appium/tap', 'POST', { x: x, y: y }));

      case 11:
        i++;
        context$1$0.next = 1;
        break;

      case 14:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

_Object$assign(extensions, commands, helpers);
exports.commands = commands;
exports.helpers = helpers;
exports['default'] = extensions;

// we are either tapping on the default location of the element
// or an offset from the top left corner
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztzQkFBZ0IsV0FBVzs7OztzQkFDYixRQUFROzs7O0FBRXRCLElBQUksUUFBUSxHQUFHLEVBQUU7SUFBRSxPQUFPLEdBQUcsRUFBRTtJQUFFLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRWpELFNBQVMsTUFBTSxDQUFFLENBQUMsRUFBRTtBQUNsQixTQUFPLG9CQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxHQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDM0Q7O0FBRUQsUUFBUSxDQUFDLFlBQVksR0FBRyxvQkFBZ0IsU0FBUyxFQUFFLFNBQVM7Ozs7O3lDQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLGVBQWEsU0FBUyxtQkFBYyxTQUFTLEVBQUksS0FBSyxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7OztDQUMxRyxDQUFDOztBQUVGLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBZ0IsU0FBUzs7Ozs7eUNBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQzs7Ozs0Q0FBdEQsTUFBTTs7Ozs7OztDQUNkLENBQUM7O0FBRUYsUUFBUSxDQUFDLGNBQWMsR0FBRyxvQkFBZ0IsU0FBUzs7Ozs7eUNBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQzs7Ozs0Q0FBcEQsTUFBTTs7Ozs7OztDQUNkLENBQUM7O0FBRUYsUUFBUSxDQUFDLGVBQWUsR0FBRyxvQkFBZ0IsU0FBUzs7Ozs7eUNBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQzs7Ozs0Q0FBckQsTUFBTTs7Ozs7OztDQUNkLENBQUM7O0FBRUYsUUFBUSxDQUFDLE9BQU8sR0FBRyxvQkFBZ0IsU0FBUzs7Ozs7eUNBQzdCLElBQUksQ0FB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LENBQUMsQ0FBQztRQUNwQyxRQUFRLEdBQVIsUUFBUTtRQUFFLE9BQU8sR0FBUCxPQUFPO3FCQUNYLFVBQVUiLCJmaWxlIjoibGliL2NvbW1hbmRzL2VsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nIGZyb20gJy4uL2xvZ2dlcic7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5sZXQgY29tbWFuZHMgPSB7fSwgaGVscGVycyA9IHt9LCBleHRlbnNpb25zID0ge307XHJcblxyXG5mdW5jdGlvbiB0b0Jvb2wgKHMpIHtcclxuICByZXR1cm4gXy5pc1N0cmluZyhzKSA/IChzLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykgOiAhIXM7XHJcbn1cclxuXHJcbmNvbW1hbmRzLmdldEF0dHJpYnV0ZSA9IGFzeW5jIGZ1bmN0aW9uIChhdHRyaWJ1dGUsIGVsZW1lbnRJZCkge1xyXG4gIHJldHVybiBhd2FpdCB0aGlzLnVpYXV0b21hdG9yMi5qd3Byb3h5LmNvbW1hbmQoYC9lbGVtZW50LyR7ZWxlbWVudElkfS9hdHRyaWJ1dGUvJHthdHRyaWJ1dGV9YCwgJ0dFVCcsIHt9KTtcclxufTtcclxuXHJcbmNvbW1hbmRzLmVsZW1lbnREaXNwbGF5ZWQgPSBhc3luYyBmdW5jdGlvbiAoZWxlbWVudElkKSB7XHJcbiAgcmV0dXJuIHRvQm9vbChhd2FpdCB0aGlzLmdldEF0dHJpYnV0ZShcImRpc3BsYXllZFwiLCBlbGVtZW50SWQpKTtcclxufTtcclxuXHJcbmNvbW1hbmRzLmVsZW1lbnRFbmFibGVkID0gYXN5bmMgZnVuY3Rpb24gKGVsZW1lbnRJZCkge1xyXG4gIHJldHVybiB0b0Jvb2woYXdhaXQgdGhpcy5nZXRBdHRyaWJ1dGUoXCJlbmFibGVkXCIsIGVsZW1lbnRJZCkpO1xyXG59O1xyXG5cclxuY29tbWFuZHMuZWxlbWVudFNlbGVjdGVkID0gYXN5bmMgZnVuY3Rpb24gKGVsZW1lbnRJZCkge1xyXG4gIHJldHVybiB0b0Jvb2woYXdhaXQgdGhpcy5nZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBlbGVtZW50SWQpKTtcclxufTtcclxuXHJcbmNvbW1hbmRzLmdldE5hbWUgPSBhc3luYyBmdW5jdGlvbiAoZWxlbWVudElkKSB7XHJcbiAgcmV0dXJuIGF3YWl0IHRoaXMudWlhdXRvbWF0b3IyLmp3cHJveHkuY29tbWFuZChgL2VsZW1lbnQvJHtlbGVtZW50SWR9L25hbWVgLCAnR0VUJywge30pO1xyXG59O1xyXG5cclxuY29tbWFuZHMuZ2V0TG9jYXRpb24gPSBhc3luYyBmdW5jdGlvbiAoZWxlbWVudElkKSB7XHJcbiAgbG9nLmluZm8oYGNhbGxpbmcgZ2V0IGxvY2F0aW9uOiAke2VsZW1lbnRJZH1gKTtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKGAvZWxlbWVudC8ke2VsZW1lbnRJZH0vbG9jYXRpb25gLCAnR0VUJywge30pO1xyXG59O1xyXG5cclxuY29tbWFuZHMuZ2V0U2l6ZSA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50SWQpIHtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKGAvZWxlbWVudC8ke2VsZW1lbnRJZH0vc2l6ZWAsICdHRVQnLCB7fSk7XHJcbn07XHJcblxyXG5jb21tYW5kcy50b3VjaExvbmdDbGljayA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50LCB4LCB5LCBkdXJhdGlvbikge1xyXG4gIGxldCBwYXJhbXMgPSB7ZWxlbWVudCwgeCwgeSwgZHVyYXRpb259O1xyXG4gIHJldHVybiBhd2FpdCB0aGlzLnVpYXV0b21hdG9yMi5qd3Byb3h5LmNvbW1hbmQoYC90b3VjaC9sb25nY2xpY2tgLCAnUE9TVCcsIHtwYXJhbXN9KTtcclxufTtcclxuXHJcbmNvbW1hbmRzLnRvdWNoRG93biA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50LCB4LCB5KSB7XHJcbiAgbGV0IHBhcmFtcyA9IHtlbGVtZW50LCB4LCB5fTtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKGAvdG91Y2gvZG93bmAsICdQT1NUJywge3BhcmFtc30pO1xyXG59O1xyXG5cclxuY29tbWFuZHMudG91Y2hVcCA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50LCB4LCB5KSB7XHJcbiAgbGV0IHBhcmFtcyA9IHtlbGVtZW50LCB4LCB5fTtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKGAvdG91Y2gvdXBgLCAnUE9TVCcsIHtwYXJhbXN9KTtcclxufTtcclxuXHJcbmNvbW1hbmRzLnRvdWNoTW92ZSA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50LCB4LCB5KSB7XHJcbiAgbGV0IHBhcmFtcyA9IHtlbGVtZW50LCB4LCB5fTtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKGAvdG91Y2gvbW92ZWAsICdQT1NUJywge3BhcmFtc30pO1xyXG59O1xyXG5cclxuaGVscGVycy5kb1NldEVsZW1lbnRWYWx1ZSA9IGFzeW5jIGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKGAvZWxlbWVudC8ke3BhcmFtcy5lbGVtZW50SWR9L3ZhbHVlYCwgJ1BPU1QnLCBwYXJhbXMpO1xyXG59O1xyXG5cclxuY29tbWFuZHMuZ2V0VGV4dCA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50SWQpIHtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKGAvZWxlbWVudC8ke2VsZW1lbnRJZH0vdGV4dGAsICdHRVQnLCB7fSk7XHJcbn07XHJcblxyXG5jb21tYW5kcy5jbGljayA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgcmV0dXJuIGF3YWl0IHRoaXMudWlhdXRvbWF0b3IyLmp3cHJveHkuY29tbWFuZChgL2VsZW1lbnQvJHtlbGVtZW50fS9jbGlja2AsICdQT1NUJywge2VsZW1lbnR9KTtcclxufTtcclxuXHJcbmNvbW1hbmRzLmdldEVsZW1lbnRTY3JlZW5zaG90ID0gYXN5bmMgZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICByZXR1cm4gYXdhaXQgdGhpcy51aWF1dG9tYXRvcjIuandwcm94eS5jb21tYW5kKGAvZWxlbWVudC8ke2VsZW1lbnR9L3NjcmVlbnNob3RgLCAnR0VUJywge30pO1xyXG59O1xyXG5cclxuY29tbWFuZHMudGFwID0gYXN5bmMgZnVuY3Rpb24gKGVsZW1lbnQsIHggPSAwLCB5ID0gMCwgY291bnQgPSAxKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAvLyB3ZSBhcmUgZWl0aGVyIHRhcHBpbmcgb24gdGhlIGRlZmF1bHQgbG9jYXRpb24gb2YgdGhlIGVsZW1lbnRcclxuICAgICAgLy8gb3IgYW4gb2Zmc2V0IGZyb20gdGhlIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgICBsZXQgcGFyYW1zID0ge2VsZW1lbnR9O1xyXG4gICAgICBpZiAoeCAhPT0gMCB8fCB5ICE9PSAwKSB7XHJcbiAgICAgICAgcGFyYW1zW3hdID0geDtcclxuICAgICAgICBwYXJhbXNbeV0gPSB5O1xyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IHRoaXMudWlhdXRvbWF0b3IyLmp3cHJveHkuY29tbWFuZChgL2VsZW1lbnQvJHtlbGVtZW50fS9jbGlja2AsICdQT1NUJywgcGFyYW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMudWlhdXRvbWF0b3IyLmp3cHJveHkuY29tbWFuZChgL2FwcGl1bS90YXBgLCAnUE9TVCcsIHt4LCB5fSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuT2JqZWN0LmFzc2lnbihleHRlbnNpb25zLCBjb21tYW5kcywgaGVscGVycyk7XHJcbmV4cG9ydCB7IGNvbW1hbmRzLCBoZWxwZXJzIH07XHJcbmV4cG9ydCBkZWZhdWx0IGV4dGVuc2lvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLiJ9
