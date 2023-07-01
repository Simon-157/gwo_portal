exports.id = 173;
exports.ids = [173];
exports.modules = {

/***/ 1952:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Input_wrapper__VqOXN",
	"input": "Input_input__j09HZ"
};


/***/ }),

/***/ 2173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1952);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Input = ({ type = "text", onChange, style, placeholder, label, name, value, selectOptions })=>{
    const isSelect = type === "select";
    const handleInputChange = (event)=>{
        const { name, value } = event.target;
        onChange?.({
            target: {
                name,
                value
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),
        children: [
            isSelect ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                id: label,
                name: name,
                value: value,
                onChange: handleInputChange,
                style: style,
                className: (_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),
                children: selectOptions && selectOptions.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: option,
                        children: option
                    }, option))
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: label,
                name: name,
                type: type,
                placeholder: placeholder,
                value: value,
                onChange: handleInputChange,
                style: style,
                className: (_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)
            }),
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: label,
                children: label
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ })

};
;