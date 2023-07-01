exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 4901:
/***/ ((module) => {

// Exports
module.exports = {
	"home__container": "NoOngoingJourney_home__container__GTo9r",
	"home__wrapper": "NoOngoingJourney_home__wrapper__UYySb",
	"home__wrapper__text": "NoOngoingJourney_home__wrapper__text__z2lgO",
	"home__wrapper__image": "NoOngoingJourney_home__wrapper__image__uWdxe"
};


/***/ }),

/***/ 4221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NoOngoingJourney)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/assets/write.png
/* harmony default export */ const write = ({"src":"/_next/static/media/write.f3467724.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyklEQVR42mOAgb0MJYz3nr3mgPG/vnnLCJf8fOkaM4i+eOJu5+ebD+bBxD89fcHI8GfTKrDKXz6qnE+u3Dr38Nzd/w/O3akFib25+IiZYfuh22AFf+ryY94fOPDl2pn7/6+fv9cOEnt58xELAwi0tuwQP7np+PGXx0/8Pbv+xv+7V5/v+P/xqSYDDFzdeaDlyN6L/4+fvL7t3r13r+9ff/T30aWrcXAFOzfvNr1/9Vb2i0fPzF8+eXrg4up1lUBhQbDk8cOnGRnwAAAprGnyCrdU3gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/pages/blog/admin/no_ongoing_journey/NoOngoingJourney.module.css
var NoOngoingJourney_module = __webpack_require__(4901);
var NoOngoingJourney_module_default = /*#__PURE__*/__webpack_require__.n(NoOngoingJourney_module);
// EXTERNAL MODULE: ./src/components/button/Button.tsx
var Button = __webpack_require__(7899);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/utils/routes.ts
const createblog = "create";
const access = "access";


;// CONCATENATED MODULE: ./src/pages/blog/admin/no_ongoing_journey/NoOngoingJourney.tsx
//components







const NoDareJourney = ()=>{
    const router = (0,router_.useRouter)();
    const buttonStyle = {
        marginBottom: "1rem"
    };
    const handleClick = ()=>{
        router.push(`/blog/${access}`);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("main", {
        className: (NoOngoingJourney_module_default()).home__container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (NoOngoingJourney_module_default()).home__wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: (NoOngoingJourney_module_default()).home__wrapper__text,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                            children: [
                                "Welcome, ",
                                /*#__PURE__*/ jsx_runtime.jsx("span", {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            children: [
                                "umm, it seems you don't have write access",
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    style: {
                                        color: "yellow"
                                    },
                                    children: " to blog"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime.jsx(Button/* default */.Z, {
                            style: buttonStyle,
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "request access"
                            }),
                            type: "solid",
                            onClick: handleClick
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "",
                            style: {
                                color: "var(--app-yellow)"
                            },
                            children: "what's the gwo blog about ?"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("section", {
                    className: (NoOngoingJourney_module_default()).home__wrapper__image,
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: write,
                        alt: "Stage One"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const NoOngoingJourney = (NoDareJourney);


/***/ })

};
;