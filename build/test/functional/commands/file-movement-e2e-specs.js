'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _stream = require('stream');

var _stream2 = _interopRequireDefault(_stream);

var _unzip = require('unzip');

var _unzip2 = _interopRequireDefault(_unzip);

var _desired = require('../desired');

var _helpersSession = require('../helpers/session');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('file movement', function () {
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

  function getRandomDir() {
    return '/data/local/tmp/test' + Math.random();
  }

  it('should push and pull a file', function callee$1$0() {
    var stringData, base64Data, remotePath, remoteData64, remoteData;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          stringData = 'random string data ' + Math.random();
          base64Data = new Buffer(stringData).toString('base64');
          remotePath = getRandomDir() + '/remote.txt';
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.pushFile(remotePath, base64Data));

        case 5:
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(driver.pullFile(remotePath));

        case 7:
          remoteData64 = context$2$0.sent;
          remoteData = new Buffer(remoteData64, 'base64').toString();

          remoteData.should.equal(stringData);

        case 10:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  it('should pull a folder', function callee$1$0() {
    var stringData, base64Data, remoteDir, data, zipPromise;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          stringData = 'random string data ' + Math.random();
          base64Data = new Buffer(stringData).toString('base64');
          remoteDir = getRandomDir();
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.pushFile(remoteDir + '/remote0.txt', base64Data));

        case 5:
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(driver.pushFile(remoteDir + '/remote1.txt', base64Data));

        case 7:
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap(driver.pullFolder(remoteDir));

        case 9:
          data = context$2$0.sent;
          zipPromise = new _bluebird2['default'](function (resolve) {
            var entryCount = 0;
            var zipStream = new _stream2['default'].Readable();
            zipStream._read = _lodash2['default'].noop;
            zipStream.pipe(_unzip2['default'].Parse()).on('entry', function (entry) {
              entryCount++;
              entry.autodrain();
            }).on('close', function () {
              resolve(entryCount);
            });
            zipStream.push(data, 'base64');
            zipStream.push(null);
          });
          context$2$0.next = 13;
          return _regeneratorRuntime.awrap(zipPromise);

        case 13:
          context$2$0.sent.should.equal(2);

        case 14:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});

// get the file and its contents, to check

// send the files, then pull the whole folder

// TODO: 'pullFolder' is returning 404 error

// go through the folder we pulled and make sure the
// two files we pushed are in it
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9maWxlLW1vdmVtZW50LWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O3NCQUMvQixRQUFROzs7O3dCQUNSLFVBQVU7Ozs7c0JBQ0wsUUFBUTs7OztxQkFDVCxPQUFPOzs7O3VCQUNLLFlBQVk7OzhCQUNmLG9CQUFvQjs7QUFHL0Msa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsZUFBZSxFQUFFLFlBQVk7OztBQUNwQyxNQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsUUFBTSxDQUFDOzs7OzsyQ0FDVSx1REFBeUI7OztBQUF4QyxnQkFBTTs7Ozs7OztHQUNQLENBQUMsQ0FBQztBQUNILE9BQUssQ0FBQzs7Ozs7MkNBQ0UsTUFBTSxDQUFDLElBQUksRUFBRTs7Ozs7OztHQUNwQixDQUFDLENBQUM7O0FBRUgsV0FBUyxZQUFZLEdBQUk7QUFDdkIsb0NBQThCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBRztHQUMvQzs7QUFFRCxJQUFFLENBQUMsNkJBQTZCLEVBQUU7UUFDNUIsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBS1YsWUFBWSxFQUNaLFVBQVU7Ozs7QUFSVixvQkFBVSwyQkFBeUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNoRCxvQkFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7QUFDdEQsb0JBQVUsR0FBTSxZQUFZLEVBQUU7OzJDQUU1QixNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7Ozs7MkNBR3BCLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDOzs7QUFBaEQsc0JBQVk7QUFDWixvQkFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUU7O0FBQzlELG9CQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7OztHQUNyQyxDQUFDLENBQUM7O0FBRUgsSUFBRSxDQUFDLHNCQUFzQixFQUFFO1FBQ3JCLFVBQVUsRUFDVixVQUFVLEVBR1YsU0FBUyxFQUtULElBQUksRUFJSixVQUFVOzs7O0FBYlYsb0JBQVUsMkJBQXlCLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDaEQsb0JBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0FBR3RELG1CQUFTLEdBQUcsWUFBWSxFQUFFOzsyQ0FDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBSSxTQUFTLG1CQUFnQixVQUFVLENBQUM7Ozs7MkNBQ3ZELE1BQU0sQ0FBQyxRQUFRLENBQUksU0FBUyxtQkFBZ0IsVUFBVSxDQUFDOzs7OzJDQUc1QyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQzs7O0FBQXpDLGNBQUk7QUFJSixvQkFBVSxHQUFHLDBCQUFNLFVBQUMsT0FBTyxFQUFLO0FBQ2xDLGdCQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDbkIsZ0JBQUksU0FBUyxHQUFHLElBQUksb0JBQU8sUUFBUSxFQUFFLENBQUM7QUFDdEMscUJBQVMsQ0FBQyxLQUFLLEdBQUcsb0JBQUUsSUFBSSxDQUFDO0FBQ3pCLHFCQUFTLENBQ04sSUFBSSxDQUFDLG1CQUFNLEtBQUssRUFBRSxDQUFDLENBQ25CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDNUIsd0JBQVUsRUFBRSxDQUFDO0FBQ2IsbUJBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNuQixDQUFDLENBQ0QsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO0FBQ3ZCLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDckIsQ0FBQyxDQUFDO0FBQ0wscUJBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLHFCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1dBQ3RCLENBQUM7OzJDQUVLLFVBQVU7OzsyQkFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7R0FDbEMsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9maWxlLW1vdmVtZW50LWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBCIGZyb20gJ2JsdWViaXJkJztcclxuaW1wb3J0IHN0cmVhbSBmcm9tICdzdHJlYW0nO1xyXG5pbXBvcnQgVW56aXAgZnJvbSAndW56aXAnO1xyXG5pbXBvcnQgeyBBUElERU1PU19DQVBTIH0gZnJvbSAnLi4vZGVzaXJlZCc7XHJcbmltcG9ydCB7IGluaXREcml2ZXIgfSBmcm9tICcuLi9oZWxwZXJzL3Nlc3Npb24nO1xyXG5cclxuXHJcbmNoYWkuc2hvdWxkKCk7XHJcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcclxuXHJcbmRlc2NyaWJlKCdmaWxlIG1vdmVtZW50JywgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBkcml2ZXI7XHJcbiAgYmVmb3JlKGFzeW5jICgpID0+IHtcclxuICAgIGRyaXZlciA9IGF3YWl0IGluaXREcml2ZXIoQVBJREVNT1NfQ0FQUyk7XHJcbiAgfSk7XHJcbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZHJpdmVyLnF1aXQoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0UmFuZG9tRGlyICgpIHtcclxuICAgIHJldHVybiBgL2RhdGEvbG9jYWwvdG1wL3Rlc3Qke01hdGgucmFuZG9tKCl9YDtcclxuICB9XHJcblxyXG4gIGl0KCdzaG91bGQgcHVzaCBhbmQgcHVsbCBhIGZpbGUnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgc3RyaW5nRGF0YSA9IGByYW5kb20gc3RyaW5nIGRhdGEgJHtNYXRoLnJhbmRvbSgpfWA7XHJcbiAgICBsZXQgYmFzZTY0RGF0YSA9IG5ldyBCdWZmZXIoc3RyaW5nRGF0YSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG4gICAgbGV0IHJlbW90ZVBhdGggPSBgJHtnZXRSYW5kb21EaXIoKX0vcmVtb3RlLnR4dGA7XHJcblxyXG4gICAgYXdhaXQgZHJpdmVyLnB1c2hGaWxlKHJlbW90ZVBhdGgsIGJhc2U2NERhdGEpO1xyXG5cclxuICAgIC8vIGdldCB0aGUgZmlsZSBhbmQgaXRzIGNvbnRlbnRzLCB0byBjaGVja1xyXG4gICAgbGV0IHJlbW90ZURhdGE2NCA9IGF3YWl0IGRyaXZlci5wdWxsRmlsZShyZW1vdGVQYXRoKTtcclxuICAgIGxldCByZW1vdGVEYXRhID0gbmV3IEJ1ZmZlcihyZW1vdGVEYXRhNjQsICdiYXNlNjQnKS50b1N0cmluZygpO1xyXG4gICAgcmVtb3RlRGF0YS5zaG91bGQuZXF1YWwoc3RyaW5nRGF0YSk7XHJcbiAgfSk7XHJcblxyXG4gIGl0KCdzaG91bGQgcHVsbCBhIGZvbGRlcicsIGFzeW5jICgpID0+IHtcclxuICAgIGxldCBzdHJpbmdEYXRhID0gYHJhbmRvbSBzdHJpbmcgZGF0YSAke01hdGgucmFuZG9tKCl9YDtcclxuICAgIGxldCBiYXNlNjREYXRhID0gbmV3IEJ1ZmZlcihzdHJpbmdEYXRhKS50b1N0cmluZygnYmFzZTY0Jyk7XHJcblxyXG4gICAgLy8gc2VuZCB0aGUgZmlsZXMsIHRoZW4gcHVsbCB0aGUgd2hvbGUgZm9sZGVyXHJcbiAgICBsZXQgcmVtb3RlRGlyID0gZ2V0UmFuZG9tRGlyKCk7XHJcbiAgICBhd2FpdCBkcml2ZXIucHVzaEZpbGUoYCR7cmVtb3RlRGlyfS9yZW1vdGUwLnR4dGAsIGJhc2U2NERhdGEpO1xyXG4gICAgYXdhaXQgZHJpdmVyLnB1c2hGaWxlKGAke3JlbW90ZURpcn0vcmVtb3RlMS50eHRgLCBiYXNlNjREYXRhKTtcclxuXHJcbiAgICAvLyBUT0RPOiAncHVsbEZvbGRlcicgaXMgcmV0dXJuaW5nIDQwNCBlcnJvclxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBkcml2ZXIucHVsbEZvbGRlcihyZW1vdGVEaXIpO1xyXG5cclxuICAgIC8vIGdvIHRocm91Z2ggdGhlIGZvbGRlciB3ZSBwdWxsZWQgYW5kIG1ha2Ugc3VyZSB0aGVcclxuICAgIC8vIHR3byBmaWxlcyB3ZSBwdXNoZWQgYXJlIGluIGl0XHJcbiAgICBsZXQgemlwUHJvbWlzZSA9IG5ldyBCKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGxldCBlbnRyeUNvdW50ID0gMDtcclxuICAgICAgbGV0IHppcFN0cmVhbSA9IG5ldyBzdHJlYW0uUmVhZGFibGUoKTtcclxuICAgICAgemlwU3RyZWFtLl9yZWFkID0gXy5ub29wO1xyXG4gICAgICB6aXBTdHJlYW1cclxuICAgICAgICAucGlwZShVbnppcC5QYXJzZSgpKVxyXG4gICAgICAgIC5vbignZW50cnknLCBmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgICAgICAgIGVudHJ5Q291bnQrKztcclxuICAgICAgICAgIGVudHJ5LmF1dG9kcmFpbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJlc29sdmUoZW50cnlDb3VudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHppcFN0cmVhbS5wdXNoKGRhdGEsICdiYXNlNjQnKTtcclxuICAgICAgemlwU3RyZWFtLnB1c2gobnVsbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAoYXdhaXQgemlwUHJvbWlzZSkuc2hvdWxkLmVxdWFsKDIpO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLiJ9
