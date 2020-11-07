(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header> \n  <h1>Todo List</h1>\n</header>\n<div class=\"app-container\">\n  <app-todo-form></app-todo-form>\n  <app-todo-list></app-todo-list>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/shared/priority-select/priority-select.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/shared/priority-select/priority-select.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"priority\">\n    <label>Priority <span *ngIf=\"displayErrorMessage\" class=\"error-message\"> - The field is mandatory.</span></label>\n    <select [class]=\"priority\" [ngModel]=\"priority\" (ngModelChange)=\"changePriority($event)\">\n        <option value=\"undefined\" selected=\"selected\" disabled=\"disabled\">Choose priority</option> \n        <option value=\"Low\">Low</option>\n        <option value=\"Medium\">Medium</option>\n        <option value=\"High\">High</option>\n    </select>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-form/todo-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-form/todo-form.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-container\">\n    <h2>Add Todo</h2>\n    <label>Title <span *ngIf=\"submitted && !todo.title?.trim()\" class=\"error-message\"> - The field is mandatory.</span></label>\n    <input [(ngModel)]=\"todo.title\" placeholder=\"Give the todo a title.\">\n    <label>Description</label>\n    <textarea [(ngModel)]=\"todo.description\" rows=\"3\" placeholder=\"Write a description for what to do.\"></textarea>\n    <app-priority-select [(priority)]=\"todo.priority\" [displayErrorMessage]=\"submitted && !todo.priority\"></app-priority-select>\n    <button (click)=\"saveTodo(todo)\">Save</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-list/todo-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-list/todo-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list-container\">\n    <app-todo @slideInOut *ngFor=\"let todo of todos\" [todo]=\"todo\"></app-todo>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo/todo.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo/todo.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"todo\">\n    <div>\n        <h2>{{todo.title}}</h2>\n        <div class=\"description\" *ngIf=\"todo.description\">{{todo.description}}</div>\n    </div>\n    <app-priority-select [priority]=\"todo.priority\" (priorityChange)=\"editTodo(todo, $event)\"></app-priority-select>\n    <button (click)=\"deleteTodo(todo)\">×</button>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  background-color: #39A2AE;\n  color: #fff;\n  font-weight: bolder;\n  padding: 1rem;\n  font-size: 2rem;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.35);\n  padding: 1rem;\n}\nheader h1 {\n  margin-left: 2rem;\n}\n@media (max-width: 600px) {\n  header h1 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 601px) and (max-width: 1249px) {\n  header {\n    font-size: 2.5rem;\n  }\n}\n@media (min-width: 1250px) {\n  header {\n    font-size: 3rem;\n  }\n}\n@media (min-width: 601px) and (max-width: 1249px) {\n  header {\n    padding: 1.5rem;\n  }\n}\n@media (min-width: 1250px) {\n  header {\n    padding: 2rem;\n  }\n}\nheader {\n  margin-bottom: 2rem;\n}\n@media (max-width: 600px) {\n  header {\n    margin-bottom: 1rem;\n  }\n}\napp-todo-form, app-todo-list {\n  margin: 0 1rem 1rem 1rem;\n}\n@media (min-width: 601px) and (max-width: 1249px) {\n  .app-container header {\n    margin-bottom: 2rem;\n  }\n  .app-container app-todo-form, .app-container app-todo-list {\n    margin: 0 2rem 2rem;\n  }\n}\n@media (min-width: 1250px) {\n  .app-container {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n  .app-container * {\n    flex: 1 1 auto;\n  }\n  .app-container header {\n    margin-bottom: 2rem;\n  }\n  .app-container app-todo-form {\n    margin-right: 2rem;\n  }\n  .app-container app-todo-list {\n    margin: 0 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxpbnN0YWxsXFxEZXNrdG9wXFxLb2RcXFRvZG8gQW5ndWxhclxcdG9kby1hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQzpcXFVzZXJzXFxpbnN0YWxsXFxEZXNrdG9wXFxLb2RcXFRvZG8gQW5ndWxhclxcdG9kby1hcHAvc3JjXFxzdHlsZXMuY29uZmlnLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQ0hLO0VESUwsV0NFVTtFRERWLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUMwQkgsMkNBQUE7RUFaQSxhQUFBO0FDYkQ7QUZHSTtFQUNJLGlCQUFBO0FFRFI7QURLRztFREFLO0lBQ0ksY0FBQTtFRUZWO0FBQ0Y7QURIRztFRFhIO0lBb0JRLGlCQUFBO0VFRk47QUFDRjtBRFhHO0VEUkg7SUF3QlEsZUFBQTtFRUROO0FBQ0Y7QURiRztFRFhIO0lDc0JRLGVBQUE7RUNNTjtBQUNGO0FEckJHO0VEUkg7SUMwQlEsYUFBQTtFQ09OO0FBQ0Y7QUZKQTtFQUNJLG1CQUFBO0FFT0o7QUR4Qkc7RURnQkg7SUFJUSxtQkFBQTtFRVFOO0FBQ0Y7QUZMQTtFQUNJLHdCQUFBO0FFUUo7QURwQ0c7RURrQ0s7SUFDSSxtQkFBQTtFRU1WO0VGSE07SUFDSSxtQkFBQTtFRUtWO0FBQ0Y7QURoREc7RURrQ0g7SUFhUSxhQUFBO0lBQ0EsMkJBQUE7RUVLTjtFRkhNO0lBQ0ksY0FBQTtFRUtWO0VGRk07SUFDSSxtQkFBQTtFRUlWO0VGRE07SUFDSSxrQkFBQTtFRUdWO0VGQU07SUFDSSxjQUFBO0VFRVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3N0eWxlcy5jb25maWcuc2Nzcyc7XHJcblxyXG5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuXHJcbiAgICBAaW5jbHVkZSBzdGFuZGFyZC1ib3gtc2hhZG93O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGluY2x1ZGUgc2NyZWVuLXNpemUoc21hbGwpIHtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBzY3JlZW4tc2l6ZShtZWRpdW0pIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBzY3JlZW4tc2l6ZShsYXJnZSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBzdGFuZGFyZC1wYWRkaW5nO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHJcbiAgICBAaW5jbHVkZSBzY3JlZW4tc2l6ZShzbWFsbCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbmFwcC10b2RvLWZvcm0sIGFwcC10b2RvLWxpc3Qge1xyXG4gICAgbWFyZ2luOiAgMCAxcmVtIDFyZW0gMXJlbTtcclxufVxyXG5cclxuLmFwcC1jb250YWluZXIge1xyXG5cclxuICAgIEBpbmNsdWRlIHNjcmVlbi1zaXplKG1lZGl1bSkge1xyXG4gICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcHAtdG9kby1mb3JtLCBhcHAtdG9kby1saXN0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDJyZW0gMnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgc2NyZWVuLXNpemUobGFyZ2UpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFwcC10b2RvLWZvcm0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGFwcC10b2RvLWxpc3Qge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxufSIsIiRjb2xvcjE6ICMzOUEyQUU7XG4kY29sb3IyOiAjNTVEQkNCO1xuJGNvbG9yMzogIzc1RTRCMztcbiRjb2xvcjQ6ICM1MzRiNGY7XG5cbiR0ZXh0LWNvbG9yMTogIzMzMztcbiR0ZXh0LWNvbG9yMjogI2ZmZjtcblxuQG1peGluIHNjcmVlbi1zaXplKCRzaXplKSB7XG5cdEBpZiAkc2l6ZSA9PSBsYXJnZSB7XG5cdCAgQG1lZGlhIChtaW4td2lkdGg6IDEyNTBweCkgeyBAY29udGVudDsgfVxuXHR9XG5cdEBlbHNlIGlmICRzaXplID09IG1lZGl1bSB7XG5cdCAgQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTI0OXB4KSB7IEBjb250ZW50OyB9XG5cdH1cblx0QGVsc2UgaWYgJHNpemUgPT0gc21hbGwge1xuXHQgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgIHsgQGNvbnRlbnQ7IH1cblx0fVxufVxuXG5AbWl4aW4gc3RhbmRhcmQtcGFkZGluZyB7XG5cdHBhZGRpbmc6IDFyZW07XG5cbiAgICBAaW5jbHVkZSBzY3JlZW4tc2l6ZShtZWRpdW0pIHtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHNjcmVlbi1zaXplKGxhcmdlKSB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgfVxufVxuXG5AbWl4aW4gIHN0YW5kYXJkLWJveC1zaGFkb3cge1xuXHRib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKGJsYWNrLCAuMzUpO1xufSIsImhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOUEyQUU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5oZWFkZXIgaDEge1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoZWFkZXIgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjQ5cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyNTBweCkge1xuICBoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTI0OXB4KSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxufVxuXG5oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxufVxuXG5hcHAtdG9kby1mb3JtLCBhcHAtdG9kby1saXN0IHtcbiAgbWFyZ2luOiAwIDFyZW0gMXJlbSAxcmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjQ5cHgpIHtcbiAgLmFwcC1jb250YWluZXIgaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG4gIC5hcHAtY29udGFpbmVyIGFwcC10b2RvLWZvcm0sIC5hcHAtY29udGFpbmVyIGFwcC10b2RvLWxpc3Qge1xuICAgIG1hcmdpbjogMCAycmVtIDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcbiAgLmFwcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG4gIC5hcHAtY29udGFpbmVyICoge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4gIC5hcHAtY29udGFpbmVyIGhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICAuYXBwLWNvbnRhaW5lciBhcHAtdG9kby1mb3JtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIH1cbiAgLmFwcC1jb250YWluZXIgYXBwLXRvZG8tbGlzdCB7XG4gICAgbWFyZ2luOiAwIDJyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_todo_todo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/todo/todo.component */ "./src/app/todo/todo/todo.component.ts");
/* harmony import */ var _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo/todo-list/todo-list.component */ "./src/app/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _todo_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo/todo-form/todo-form.component */ "./src/app/todo/todo-form/todo-form.component.ts");
/* harmony import */ var _todo_shared_priority_select_priority_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo/shared/priority-select/priority-select.component */ "./src/app/todo/shared/priority-select/priority-select.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _todo_todo_todo_component__WEBPACK_IMPORTED_MODULE_6__["TodoComponent"],
            _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"],
            _todo_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_11__["TodoFormComponent"],
            _todo_shared_priority_select_priority_select_component__WEBPACK_IMPORTED_MODULE_12__["PrioritySelectComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/todo/model/todo.model.ts":
/*!******************************************!*\
  !*** ./src/app/todo/model/todo.model.ts ***!
  \******************************************/
/*! exports provided: Todo, Priority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Priority", function() { return Priority; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Todo {
}
var Priority;
(function (Priority) {
    Priority["High"] = "High";
    Priority["Medium"] = "Medium";
    Priority["Low"] = "Low";
})(Priority || (Priority = {}));


/***/ }),

/***/ "./src/app/todo/service/todo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/todo/service/todo.service.ts ***!
  \**********************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




/**
 * Fake Service that fetches from local storage instead of from an API.
 */
let TodoService = class TodoService {
    constructor() {
        this.todoListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        if (!localStorage.getItem('todos')) {
            localStorage.setItem('todos', JSON.stringify([]));
        }
    }
    getAllTodos() {
        this.todoListSubject.next(JSON.parse(localStorage.getItem('todos')));
        return this.todoListSubject;
    }
    addTodo(newTodo) {
        newTodo.id = Math.floor(100 * Math.random()).toString();
        const todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        this.todoListSubject.next(JSON.parse(localStorage.getItem('todos')));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(newTodo);
    }
    editTodo(todo) {
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos = todos.filter(t => {
            if (t.id !== todo.id) {
                return t;
            }
        });
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        this.todoListSubject.next(JSON.parse(localStorage.getItem('todos')));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(todo);
    }
    deleteTodo(todo) {
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos = todos.filter(t => {
            if (t.id !== todo.id) {
                return t;
            }
        });
        localStorage.setItem('todos', JSON.stringify(todos));
        this.todoListSubject.next(JSON.parse(localStorage.getItem('todos')));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(todo);
    }
};
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TodoService);



/***/ }),

/***/ "./src/app/todo/shared/priority-select/priority-select.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/todo/shared/priority-select/priority-select.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".priority {\n  display: flex;\n  flex-direction: column;\n}\n.priority label {\n  margin-bottom: 0.5rem;\n}\nselect {\n  padding: 0.5rem;\n  border: none;\n}\nselect:hover {\n  cursor: pointer;\n}\nselect.Low {\n  background-color: #ffffb3;\n}\nselect.Medium {\n  background-color: #ffe4b3;\n}\nselect.High {\n  background-color: #ffb3b3;\n}\nselect option {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9zaGFyZWQvcHJpb3JpdHktc2VsZWN0L0M6XFxVc2Vyc1xcaW5zdGFsbFxcRGVza3RvcFxcS29kXFxUb2RvIEFuZ3VsYXJcXHRvZG8tYXBwL3NyY1xcYXBwXFx0b2RvXFxzaGFyZWRcXHByaW9yaXR5LXNlbGVjdFxccHJpb3JpdHktc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2RvL3NoYXJlZC9wcmlvcml0eS1zZWxlY3QvcHJpb3JpdHktc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQUo7QURDSTtFQUNJLHFCQUFBO0FDQ1I7QURHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNJLGVBQUE7QUNBUjtBREdJO0VBQ0kseUJBQUE7QUNEUjtBRElJO0VBQ0kseUJBQUE7QUNGUjtBREtJO0VBQ0kseUJBQUE7QUNIUjtBRE1JO0VBQ0ksdUJBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vc2hhcmVkL3ByaW9yaXR5LXNlbGVjdC9wcmlvcml0eS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByaW9yaXR5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYuTG93IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKHllbGxvdywgMzUlKTtcclxuICAgIH1cclxuXHJcbiAgICAmLk1lZGl1bSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihvcmFuZ2UsIDM1JSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5IaWdoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKHJlZCwgMzUlKTtcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59IiwiLnByaW9yaXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcmlvcml0eSBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG5zZWxlY3Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5zZWxlY3QuTG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiMztcbn1cbnNlbGVjdC5NZWRpdW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNGIzO1xufVxuc2VsZWN0LkhpZ2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiM2IzO1xufVxuc2VsZWN0IG9wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/todo/shared/priority-select/priority-select.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/todo/shared/priority-select/priority-select.component.ts ***!
  \**************************************************************************/
/*! exports provided: PrioritySelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrioritySelectComponent", function() { return PrioritySelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrioritySelectComponent = class PrioritySelectComponent {
    constructor() {
        this.priorityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    changePriority(priority) {
        this.priority = priority;
        this.priorityChange.emit(this.priority);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrioritySelectComponent.prototype, "priority", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrioritySelectComponent.prototype, "displayErrorMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PrioritySelectComponent.prototype, "priorityChange", void 0);
PrioritySelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-priority-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./priority-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/shared/priority-select/priority-select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./priority-select.component.scss */ "./src/app/todo/shared/priority-select/priority-select.component.scss")).default]
    })
], PrioritySelectComponent);



/***/ }),

/***/ "./src/app/todo/todo-form/todo-form.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/todo/todo-form/todo-form.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.35);\n}\n\nh2 {\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.form-container {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  background-color: #55DBCB;\n  color: #fff;\n}\n\n@media (min-width: 601px) and (max-width: 1249px) {\n  .form-container {\n    padding: 1.5rem;\n  }\n}\n\n@media (min-width: 1250px) {\n  .form-container {\n    padding: 2rem;\n  }\n}\n\ninput, label, textarea {\n  margin-bottom: 0.5rem;\n}\n\ntextarea {\n  resize: none;\n  padding: 0.5rem;\n}\n\napp-priority-select {\n  margin-bottom: 2rem;\n}\n\napp-priority-select, button {\n  align-self: flex-start;\n  width: 16rem;\n  box-sizing: border-box;\n}\n\n@media (max-width: 600px) {\n  app-priority-select, button {\n    align-self: unset;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWZvcm0vQzpcXFVzZXJzXFxpbnN0YWxsXFxEZXNrdG9wXFxLb2RcXFRvZG8gQW5ndWxhclxcdG9kby1hcHAvc3JjXFxhcHBcXHRvZG9cXHRvZG8tZm9ybVxcdG9kby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2RvL3RvZG8tZm9ybS9DOlxcVXNlcnNcXGluc3RhbGxcXERlc2t0b3BcXEtvZFxcVG9kbyBBbmd1bGFyXFx0b2RvLWFwcC9zcmNcXHN0eWxlcy5jb25maWcuc2NzcyIsInNyYy9hcHAvdG9kby90b2RvLWZvcm0vdG9kby1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQzhCSCwyQ0FBQTtBQzlCRDs7QUZJQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7QUVESjs7QUZJQTtFQ1NDLGFBQUE7RURORyxhQUFBO0VBQ0Esc0JBQUE7RUFFQSx5QkNqQks7RURrQkwsV0NiVTtBQ1VkOztBREhHO0VEREg7SUNZUSxlQUFBO0VDSk47QUFDRjs7QURYRztFREVIO0lDZ0JRLGFBQUE7RUNITjtBQUNGOztBRkpBO0VBQ0kscUJBQUE7QUVPSjs7QUZKQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FFT0o7O0FGSkE7RUFDSSxtQkFBQTtBRU9KOztBRkpBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUVPSjs7QUQ3Qkc7RURtQkg7SUFNUSxpQkFBQTtJQUNBLFdBQUE7RUVRTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdG9kby90b2RvLWZvcm0vdG9kby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLmNvbmZpZy5zY3NzJztcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgQGluY2x1ZGUgc3RhbmRhcmQtYm94LXNoYWRvdztcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBAaW5jbHVkZSBzdGFuZGFyZC1wYWRkaW5nO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICBjb2xvcjogJHRleHQtY29sb3IyO1xyXG59XHJcblxyXG5pbnB1dCwgbGFiZWwsIHRleHRhcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxufVxyXG5cclxuYXBwLXByaW9yaXR5LXNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG5hcHAtcHJpb3JpdHktc2VsZWN0LCBidXR0b24ge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiAxNnJlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgQGluY2x1ZGUgc2NyZWVuLXNpemUoc21hbGwpIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiB1bnNldDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSIsIiRjb2xvcjE6ICMzOUEyQUU7XG4kY29sb3IyOiAjNTVEQkNCO1xuJGNvbG9yMzogIzc1RTRCMztcbiRjb2xvcjQ6ICM1MzRiNGY7XG5cbiR0ZXh0LWNvbG9yMTogIzMzMztcbiR0ZXh0LWNvbG9yMjogI2ZmZjtcblxuQG1peGluIHNjcmVlbi1zaXplKCRzaXplKSB7XG5cdEBpZiAkc2l6ZSA9PSBsYXJnZSB7XG5cdCAgQG1lZGlhIChtaW4td2lkdGg6IDEyNTBweCkgeyBAY29udGVudDsgfVxuXHR9XG5cdEBlbHNlIGlmICRzaXplID09IG1lZGl1bSB7XG5cdCAgQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTI0OXB4KSB7IEBjb250ZW50OyB9XG5cdH1cblx0QGVsc2UgaWYgJHNpemUgPT0gc21hbGwge1xuXHQgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgIHsgQGNvbnRlbnQ7IH1cblx0fVxufVxuXG5AbWl4aW4gc3RhbmRhcmQtcGFkZGluZyB7XG5cdHBhZGRpbmc6IDFyZW07XG5cbiAgICBAaW5jbHVkZSBzY3JlZW4tc2l6ZShtZWRpdW0pIHtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHNjcmVlbi1zaXplKGxhcmdlKSB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgfVxufVxuXG5AbWl4aW4gIHN0YW5kYXJkLWJveC1zaGFkb3cge1xuXHRib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKGJsYWNrLCAuMzUpO1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1REJDQjtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjQ5cHgpIHtcbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG59XG5cbmlucHV0LCBsYWJlbCwgdGV4dGFyZWEge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbmFwcC1wcmlvcml0eS1zZWxlY3Qge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5hcHAtcHJpb3JpdHktc2VsZWN0LCBidXR0b24ge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTZyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYXBwLXByaW9yaXR5LXNlbGVjdCwgYnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiB1bnNldDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/todo/todo-form/todo-form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-form/todo-form.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFormComponent", function() { return TodoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/todo.model */ "./src/app/todo/model/todo.model.ts");
/* harmony import */ var _service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/todo.service */ "./src/app/todo/service/todo.service.ts");




let TodoFormComponent = class TodoFormComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.todo = new _model_todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"]();
        this.submitted = false;
    }
    ngOnInit() {
    }
    saveTodo(todo) {
        if (todo.title && todo.title.trim() && todo.priority) {
            this.todoService.addTodo(todo).subscribe(() => {
                this.todo = new _model_todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"]();
                this.submitted = false;
            });
        }
        else {
            this.submitted = true;
        }
    }
};
TodoFormComponent.ctorParameters = () => [
    { type: _service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"] }
];
TodoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-form/todo-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-form.component.scss */ "./src/app/todo/todo-form/todo-form.component.scss")).default]
    })
], TodoFormComponent);



/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\napp-todo {\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.35);\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWxpc3QvQzpcXFVzZXJzXFxpbnN0YWxsXFxEZXNrdG9wXFxLb2RcXFRvZG8gQW5ndWxhclxcdG9kby1hcHAvc3JjXFxhcHBcXHRvZG9cXHRvZG8tbGlzdFxcdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2RvL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvZG8vdG9kby1saXN0L0M6XFxVc2Vyc1xcaW5zdGFsbFxcRGVza3RvcFxcS29kXFxUb2RvIEFuZ3VsYXJcXHRvZG8tYXBwL3NyY1xcc3R5bGVzLmNvbmZpZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VFMkJDLDJDQUFBO0VGekJHLG1CQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuY29uZmlnLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmFwcC10b2RvIHtcclxuICAgIEBpbmNsdWRlIHN0YW5kYXJkLWJveC1zaGFkb3c7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYXBwLXRvZG8ge1xuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSIsIiRjb2xvcjE6ICMzOUEyQUU7XG4kY29sb3IyOiAjNTVEQkNCO1xuJGNvbG9yMzogIzc1RTRCMztcbiRjb2xvcjQ6ICM1MzRiNGY7XG5cbiR0ZXh0LWNvbG9yMTogIzMzMztcbiR0ZXh0LWNvbG9yMjogI2ZmZjtcblxuQG1peGluIHNjcmVlbi1zaXplKCRzaXplKSB7XG5cdEBpZiAkc2l6ZSA9PSBsYXJnZSB7XG5cdCAgQG1lZGlhIChtaW4td2lkdGg6IDEyNTBweCkgeyBAY29udGVudDsgfVxuXHR9XG5cdEBlbHNlIGlmICRzaXplID09IG1lZGl1bSB7XG5cdCAgQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTI0OXB4KSB7IEBjb250ZW50OyB9XG5cdH1cblx0QGVsc2UgaWYgJHNpemUgPT0gc21hbGwge1xuXHQgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgIHsgQGNvbnRlbnQ7IH1cblx0fVxufVxuXG5AbWl4aW4gc3RhbmRhcmQtcGFkZGluZyB7XG5cdHBhZGRpbmc6IDFyZW07XG5cbiAgICBAaW5jbHVkZSBzY3JlZW4tc2l6ZShtZWRpdW0pIHtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHNjcmVlbi1zaXplKGxhcmdlKSB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgfVxufVxuXG5AbWl4aW4gIHN0YW5kYXJkLWJveC1zaGFkb3cge1xuXHRib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKGJsYWNrLCAuMzUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/todo.model */ "./src/app/todo/model/todo.model.ts");
/* harmony import */ var _service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/todo.service */ "./src/app/todo/service/todo.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let TodoListComponent = class TodoListComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() {
        this.todoService.getAllTodos().subscribe(todos => {
            this.todos = this.sortTodos(todos);
        });
    }
    sortTodos(todos) {
        todos = todos.sort((a, b) => {
            if (!a.title || !b.title) {
                return;
            }
            else {
                return a.title.localeCompare(b.title.toString());
            }
        });
        const todoMap = { high: [], medium: [], low: [] };
        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            if (todo.priority === _model_todo_model__WEBPACK_IMPORTED_MODULE_2__["Priority"].High) {
                todoMap.high.push(todo);
            }
            else if (todo.priority === _model_todo_model__WEBPACK_IMPORTED_MODULE_2__["Priority"].Medium) {
                todoMap.medium.push(todo);
            }
            else {
                todoMap.low.push(todo);
            }
        }
        return todoMap.high.concat(todoMap.medium).concat(todoMap.low);
    }
};
TodoListComponent.ctorParameters = () => [
    { type: _service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"] }
];
TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-list/todo-list.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translatex(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translatex(0%)' }))
                ]),
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/todo/todo-list/todo-list.component.scss")).default]
    })
], TodoListComponent);



/***/ }),

/***/ "./src/app/todo/todo/todo.component.scss":
/*!***********************************************!*\
  !*** ./src/app/todo/todo/todo.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.todo {\n  background-color: #75E4B3;\n  color: #fff;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.todo .content {\n  flex: 1 1 auto;\n}\n\n@media (max-width: 600px) {\n  .todo {\n    flex-direction: column;\n  }\n}\n\n@media (min-width: 601px) and (max-width: 1249px) {\n  .todo {\n    padding: 1.5rem;\n  }\n}\n\n@media (min-width: 1250px) {\n  .todo {\n    padding: 2rem;\n  }\n}\n\n.todo h2 {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.todo .description {\n  margin-bottom: 1rem;\n}\n\n.todo button {\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: none;\n  font-size: 2rem;\n  border: none;\n  padding: 0.2rem 0.7rem;\n  color: #fff;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvL0M6XFxVc2Vyc1xcaW5zdGFsbFxcRGVza3RvcFxcS29kXFxUb2RvIEFuZ3VsYXJcXHRvZG8tYXBwL3NyY1xcYXBwXFx0b2RvXFx0b2RvXFx0b2RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2RvL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby90b2RvL0M6XFxVc2Vyc1xcaW5zdGFsbFxcRGVza3RvcFxcS29kXFxUb2RvIEFuZ3VsYXJcXHRvZG8tYXBwL3NyY1xcc3R5bGVzLmNvbmZpZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0kseUJFTEs7RUZNTCxXRUZVO0VGR1Ysa0JBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUVTSCxhQUFBO0FEVkQ7O0FER0k7RUFDSSxjQUFBO0FDRFI7O0FDRUc7RUZWSDtJQWFRLHNCQUFBO0VDRE47QUFDRjs7QUNORztFRlBIO0lFa0JRLGVBQUE7RURETjtBQUNGOztBQ2RHO0VGSkg7SUVzQlEsYUFBQTtFREFOO0FBQ0Y7O0FETEk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDT1I7O0FESkk7RUFDSSxtQkFBQTtBQ01SOztBREhJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdFbkNNO0VGb0NOLG1CQUFBO0FDS1IiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5jb25maWcuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRvZG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMztcclxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgc2NyZWVuLXNpemUoc21hbGwpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHN0YW5kYXJkLXBhZGRpbmc7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIC43cmVtO1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50b2RvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1RTRCMztcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnRvZG8gLmNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudG9kbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTI0OXB4KSB7XG4gIC50b2RvIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcbiAgLnRvZG8ge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbn1cbi50b2RvIGgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4udG9kbyAuZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnRvZG8gYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC4ycmVtIDAuN3JlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59IiwiJGNvbG9yMTogIzM5QTJBRTtcbiRjb2xvcjI6ICM1NURCQ0I7XG4kY29sb3IzOiAjNzVFNEIzO1xuJGNvbG9yNDogIzUzNGI0ZjtcblxuJHRleHQtY29sb3IxOiAjMzMzO1xuJHRleHQtY29sb3IyOiAjZmZmO1xuXG5AbWl4aW4gc2NyZWVuLXNpemUoJHNpemUpIHtcblx0QGlmICRzaXplID09IGxhcmdlIHtcblx0ICBAbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7IEBjb250ZW50OyB9XG5cdH1cblx0QGVsc2UgaWYgJHNpemUgPT0gbWVkaXVtIHtcblx0ICBAbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjQ5cHgpIHsgQGNvbnRlbnQ7IH1cblx0fVxuXHRAZWxzZSBpZiAkc2l6ZSA9PSBzbWFsbCB7XG5cdCAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSAgeyBAY29udGVudDsgfVxuXHR9XG59XG5cbkBtaXhpbiBzdGFuZGFyZC1wYWRkaW5nIHtcblx0cGFkZGluZzogMXJlbTtcblxuICAgIEBpbmNsdWRlIHNjcmVlbi1zaXplKG1lZGl1bSkge1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgc2NyZWVuLXNpemUobGFyZ2UpIHtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICB9XG59XG5cbkBtaXhpbiAgc3RhbmRhcmQtYm94LXNoYWRvdyB7XG5cdGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoYmxhY2ssIC4zNSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/todo/todo/todo.component.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/todo/todo.component.ts ***!
  \*********************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/todo.service */ "./src/app/todo/service/todo.service.ts");



let TodoComponent = class TodoComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() {
    }
    deleteTodo(todo) {
        this.todoService.deleteTodo(todo).subscribe(() => {
        });
    }
    editTodo(todo, priority) {
        console.log(priority);
        todo.priority = priority;
        this.todoService.editTodo(todo).subscribe(() => {
        });
    }
};
TodoComponent.ctorParameters = () => [
    { type: _service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TodoComponent.prototype, "todo", void 0);
TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo/todo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo.component.scss */ "./src/app/todo/todo/todo.component.scss")).default]
    })
], TodoComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\install\Desktop\Kod\Todo Angular\todo-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map