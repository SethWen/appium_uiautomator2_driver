'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _find = require('./find');

var _find2 = _interopRequireDefault(_find);

var _general = require('./general');

var _general2 = _interopRequireDefault(_general);

var _touch = require('./touch');

var _touch2 = _interopRequireDefault(_touch);

var _element = require('./element');

var _element2 = _interopRequireDefault(_element);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _network = require('./network');

var _network2 = _interopRequireDefault(_network);

var commands = {};
_Object$assign(commands, _find2['default'], _general2['default'], _touch2['default'], _actions2['default'], _element2['default'], _network2['default']
// add other command types here
);

exports['default'] = commands;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O29CQUFxQixRQUFROzs7O3VCQUNMLFdBQVc7Ozs7cUJBQ2IsU0FBUzs7Ozt1QkFDUCxXQUFXOzs7O3VCQUNYLFdBQVc7Ozs7dUJBQ1gsV0FBVzs7OztBQUVuQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsZUFDRSxRQUFROztDQVFULENBQUM7O3FCQUVhLFFBQVEiLCJmaWxlIjoibGliL2NvbW1hbmRzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpbmRDbWRzIGZyb20gJy4vZmluZCc7XHJcbmltcG9ydCBnZW5lcmFsQ21kcyBmcm9tICcuL2dlbmVyYWwnO1xyXG5pbXBvcnQgdG91Y2hDbWRzIGZyb20gJy4vdG91Y2gnO1xyXG5pbXBvcnQgZWxlbWVudENtZHMgZnJvbSAnLi9lbGVtZW50JztcclxuaW1wb3J0IGFjdGlvbnNDbWRzIGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBuZXR3b3JrQ21kcyBmcm9tICcuL25ldHdvcmsnO1xyXG5cclxubGV0IGNvbW1hbmRzID0ge307XHJcbk9iamVjdC5hc3NpZ24oXHJcbiAgY29tbWFuZHMsXHJcbiAgZmluZENtZHMsXHJcbiAgZ2VuZXJhbENtZHMsXHJcbiAgdG91Y2hDbWRzLFxyXG4gIGFjdGlvbnNDbWRzLFxyXG4gIGVsZW1lbnRDbWRzLFxyXG4gIG5ldHdvcmtDbWRzXHJcbiAgLy8gYWRkIG90aGVyIGNvbW1hbmQgdHlwZXMgaGVyZVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWFuZHM7XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi4ifQ==
