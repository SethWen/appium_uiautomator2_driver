"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getLocale(adb) {
  return _regeneratorRuntime.async(function getLocale$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(adb.getApiLevel());

      case 2:
        context$1$0.t0 = context$1$0.sent;

        if (!(context$1$0.t0 < 23)) {
          context$1$0.next = 9;
          break;
        }

        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(adb.getDeviceCountry());

      case 6:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 9:
        context$1$0.next = 11;
        return _regeneratorRuntime.awrap(adb.getDeviceLocale());

      case 11:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 12:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
}

exports.getLocale = getLocale;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9oZWxwZXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQWUsU0FBUyxDQUFFLEdBQUc7Ozs7O3lDQUNqQixHQUFHLENBQUMsV0FBVyxFQUFFOzs7OzsrQkFBRyxFQUFFOzs7Ozs7eUNBQ2pCLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRTs7Ozs7Ozt5Q0FFdEIsR0FBRyxDQUFDLGVBQWUsRUFBRTs7Ozs7Ozs7OztDQUVyQzs7UUFFUSxTQUFTLEdBQVQsU0FBUyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvaGVscGVycy9oZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYWxlIChhZGIpIHtcclxuICBpZiAoYXdhaXQgYWRiLmdldEFwaUxldmVsKCkgPCAyMykge1xyXG4gICAgcmV0dXJuIGF3YWl0IGFkYi5nZXREZXZpY2VDb3VudHJ5KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBhd2FpdCBhZGIuZ2V0RGV2aWNlTG9jYWxlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRMb2NhbGUgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLiJ9
