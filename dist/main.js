/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.todo-header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 3px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  min-height: 100vh;\\r\\n  font-size: 20px;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  background: #e5e7e9;\\r\\n  color: rgb(119, 113, 113);\\r\\n}\\r\\n\\r\\ni {\\r\\n  font-size: 15px;\\r\\n  color: rgb(119, 113, 113);\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.main-todo-container {\\r\\n  background: #fff;\\r\\n  border: 1px solid #ccc;\\r\\n  width: 500px;\\r\\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.todo-header,\\r\\n.add-todo {\\r\\n  border-bottom: 1px solid #ccc;\\r\\n  color: #222;\\r\\n}\\r\\n\\r\\n.add-todo-input {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  border-color: transparent;\\r\\n  font-size: 20px;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.todo-footer {\\r\\n  text-align: center;\\r\\n  background: #e5e7e9;\\r\\n}\\r\\n\\r\\n.list-item:not(:last-child) {\\r\\n  border-bottom: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n.list-item label {\\r\\n  padding-left: 15px;\\r\\n  color: #222;\\r\\n}\\r\\n\\r\\n.fa-ellipsis-v,\\r\\n.fa-trash-alt {\\r\\n  float: right;\\r\\n  cursor: pointer;\\r\\n  margin-top: 5px;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-review/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://todo-review/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/completed.js":
/*!**************************!*\
  !*** ./src/completed.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ completed)\n/* harmony export */ });\nfunction completed(arrs) {\r\n  const { li, arr, actions } = arrs;\r\n  const arrItem = arr.find((element) => element.description === li.textContent);\r\n  arrItem.completed = !arrItem.completed;\r\n  actions.updateOneItem(arrItem);\r\n}\n\n//# sourceURL=webpack://todo-review/./src/completed.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed.js */ \"./src/completed.js\");\n/* harmony import */ var _localStorageActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorageActions.js */ \"./src/localStorageActions.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _taskUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskUtils.js */ \"./src/taskUtils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst actions = new _localStorageActions_js__WEBPACK_IMPORTED_MODULE_2__.default();\r\nconst taskUtils = new _taskUtils_js__WEBPACK_IMPORTED_MODULE_4__.default(actions);\r\nconst localTodos = actions.getItems();\r\nconst addBtn = document.querySelector('.fa-level-down-alt');\r\nconst addTodoInputField = document.querySelector('.add-todo-input');\r\nconst completedTask = document.querySelector('.todo-footer');\r\n\r\nconst editTodo = (items) => {\r\n  const {\r\n    li, editIcon, deleteIcon, label,\r\n  } = items;\r\n\r\n  editIcon.classList.add('hidden');\r\n  deleteIcon.classList.remove('hidden');\r\n\r\n  const currDesc = li.textContent;\r\n\r\n  const editInput = document.createElement('input');\r\n  editInput.type = 'text';\r\n  editInput.className = 'edit-todo-input';\r\n  editInput.value = currDesc;\r\n\r\n  editInput.addEventListener('keyup', (e) => {\r\n    if (e.key === 'Enter') {\r\n      e.preventDefault();\r\n      const idx = localTodos.findIndex((todo) => todo.description === currDesc);\r\n      taskUtils.editTaskDescription(editInput.value, idx);\r\n      window.location.reload();\r\n    }\r\n  });\r\n\r\n  li.removeChild(label);\r\n  li.appendChild(editInput);\r\n};\r\n\r\nconst deleteTodo = (li) => {\r\n  const input = li.querySelector('.edit-todo-input');\r\n  const description = input.value;\r\n  const index = localTodos.findIndex((todo) => todo.description === description);\r\n  taskUtils.deleteTask(index);\r\n  window.location.reload();\r\n};\r\n\r\nconst displayTodo = (arr, actions) => {\r\n  const todoListContainer = document.querySelector('.todo-list');\r\n  const ul = document.createElement('ul');\r\n  todoListContainer.appendChild(ul);\r\n\r\n  arr.forEach((e) => {\r\n    const li = document.createElement('li');\r\n    li.className = 'list-item p-3';\r\n\r\n    const checkBox = document.createElement('input');\r\n    checkBox.type = 'checkbox';\r\n    checkBox.checked = e.completed;\r\n\r\n    const label = document.createElement('label');\r\n    label.textContent = e.description;\r\n\r\n    const editIcon = document.createElement('i');\r\n    editIcon.className = 'fas fa-ellipsis-v';\r\n\r\n    const deleteIcon = document.createElement('i');\r\n    deleteIcon.className = 'far fa-trash-alt hidden';\r\n\r\n    const tickIcon = document.createElement('i');\r\n    tickIcon.className = 'fas fa-check hidden';\r\n\r\n    const tasks = { li, arr, actions };\r\n    tickIcon.addEventListener('click', () => {\r\n      (0,_completed_js__WEBPACK_IMPORTED_MODULE_1__.default)(tasks);\r\n      tickIcon.classList.add('hidden');\r\n      checkBox.classList.remove('hidden');\r\n      checkBox.checked = e.completed;\r\n      label.style.textDecoration = 'none';\r\n    });\r\n\r\n    checkBox.addEventListener('click', () => {\r\n      (0,_completed_js__WEBPACK_IMPORTED_MODULE_1__.default)(tasks);\r\n      checkBox.classList.add('hidden');\r\n      tickIcon.classList.remove('hidden');\r\n      label.style.textDecoration = 'line-through';\r\n    });\r\n\r\n    editIcon.addEventListener('click', editTodo.bind(null, {\r\n      li, editIcon, deleteIcon, label,\r\n    }));\r\n\r\n    deleteIcon.addEventListener('click', deleteTodo.bind(null, li));\r\n\r\n    li.appendChild(checkBox);\r\n    li.appendChild(tickIcon);\r\n    li.appendChild(label);\r\n    li.appendChild(editIcon);\r\n    li.appendChild(deleteIcon);\r\n    ul.appendChild(li);\r\n  });\r\n};\r\n\r\ndisplayTodo(localTodos, actions);\r\n\r\nconst addTodo = () => {\r\n  const description = addTodoInputField.value;\r\n  const index = localTodos.length + 1;\r\n  const task = new _task_js__WEBPACK_IMPORTED_MODULE_3__.default(description, index);\r\n  if (description.length > 0) {\r\n    taskUtils.addTask(task, actions);\r\n    window.location.reload();\r\n  }\r\n};\r\n\r\nconst addOnEnter = (event) => {\r\n  if (event.keyCode === 13) {\r\n    event.preventDefault();\r\n    addBtn.click();\r\n  }\r\n};\r\n\r\naddBtn.addEventListener('click', addTodo);\r\naddTodoInputField.addEventListener('keyup', addOnEnter);\r\n\r\ncompletedTask.addEventListener('click', () => {\r\n  taskUtils.clearCompleted();\r\n  window.location.reload();\r\n});\r\n\n\n//# sourceURL=webpack://todo-review/./src/index.js?");

/***/ }),

/***/ "./src/localStorageActions.js":
/*!************************************!*\
  !*** ./src/localStorageActions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorageActions)\n/* harmony export */ });\nclass LocalStorageActions {\r\n  constructor() {\r\n    this.localStorage = localStorage;\r\n  }\r\n\r\n  getItems() {\r\n    const todos = JSON.parse(this.localStorage.getItem('Todos'));\r\n    return todos === null ? [] : todos;\r\n  }\r\n\r\n  setItem(arr) {\r\n    this.localStorage.setItem('Todos', JSON.stringify(arr));\r\n  }\r\n\r\n  updateAllItems(arr) {\r\n    this.localStorage.removeItem('Todos');\r\n    this.setItem(arr);\r\n  }\r\n\r\n  updateOneItem(item) {\r\n    const todos = this.getItems();\r\n    const index = todos.findIndex((todo) => todo.description === item.description);\r\n    todos.splice(index, 1, item);\r\n    this.setItem(todos);\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-review/./src/localStorageActions.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(description, index) {\r\n    this.description = description;\r\n    this.completed = false;\r\n    this.index = index;\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-review/./src/task.js?");

/***/ }),

/***/ "./src/taskUtils.js":
/*!**************************!*\
  !*** ./src/taskUtils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskUtils)\n/* harmony export */ });\nclass TaskUtils {\r\n    constructor(actions) {\r\n      this.actions = actions;\r\n    }\r\n  \r\n    addTask(task) {\r\n      const tasks = this.actions.getItems();\r\n      tasks.push(task);\r\n      this.actions.setItem(tasks);\r\n    }\r\n  \r\n    editTaskDescription(desc, index) {\r\n      const tasks = this.actions.getItems();\r\n      const currTask = tasks[index];\r\n      currTask.description = desc;\r\n      this.actions.updateAllItems(tasks);\r\n    }\r\n  \r\n    deleteTask(index) {\r\n      const tasks = this.actions.getItems();\r\n      const filteredTasks = tasks.filter((task, i) => i !== index);\r\n      const indexedTasks = this.reIndexTasks(filteredTasks);\r\n      this.actions.setItem(indexedTasks);\r\n    }\r\n  \r\n    // eslint-disable-next-line class-methods-use-this\r\n    reIndexTasks(tasks) {\r\n      // eslint-disable-next-line no-plusplus\r\n      for (let i = 0; i < tasks.length; i++) {\r\n        tasks[i].index = i + 1;\r\n      }\r\n      return tasks;\r\n    }\r\n  \r\n    clearCompleted() {\r\n      const localTasks = this.actions.getItems();\r\n      const tasks = localTasks.filter((task) => task.completed === false);\r\n      const indexedTasks = this.reIndexTasks(tasks);\r\n      this.actions.updateAllItems(indexedTasks);\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-review/./src/taskUtils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;