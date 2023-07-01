exports.id = 745;
exports.ids = [745];
exports.modules = {

/***/ 9006:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__Tam1R",
	"solid": "Button_solid__QL82l",
	"outlined": "Button_outlined__0bPxI"
};


/***/ }),

/***/ 7899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9006);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);
// libraries

// styles

const Button = ({ children, type = "solid", style, onClick })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${(_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().button)} ${(_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default())[type]} btn btn-primary`,
        onClick: onClick,
        style: style,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 8545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ firebaseApp),
/* harmony export */   I: () => (/* binding */ auth)
/* harmony export */ });
/* unused harmony export db */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const firebaseConfig = {
    apiKey: "AIzaSyC-evrC9WOLNcSSYFRWRNDWpTJGpnCV3Eg",
    authDomain: "gwo-org.firebaseapp.com",
    projectId: "gwo-org",
    storageBucket: "gwo-org.appspot.com",
    messagingSenderId: "956235142581",
    appId: "1:956235142581:web:f6a40b9a1c46ae6a1b75fc"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const firebaseApp = app;
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app); // Create an instance of the Firebase authentication module

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J$: () => (/* binding */ fetchBlogs),
/* harmony export */   bl: () => (/* binding */ addBlog),
/* harmony export */   dg: () => (/* binding */ subscribeToBlogs)
/* harmony export */ });
/* unused harmony exports updateBlog, deleteBlog */
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8545);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _config_firebase__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _config_firebase__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__/* .firebaseApp */ .H);
const addBlog = async (blog)=>{
    try {
        const blogsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "blogs");
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(blogsCollection, blog);
        console.log("Blog added successfully");
    } catch (error) {
        console.error("Error adding blog:", error);
    }
};
const fetchBlogs = async ()=>{
    try {
        const blogsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "blogs");
        const blogsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(blogsCollection);
        const blogs = [];
        blogsSnapshot.forEach((doc)=>{
            blogs.push(doc.data());
        });
        return blogs;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};
const updateBlog = async (blogId, updatedData)=>{
    try {
        const blogDocRef = doc(db, "blogs", blogId);
        await updateDoc(blogDocRef, updatedData);
        console.log("Blog updated successfully");
    } catch (error) {
        console.error("Error updating blog:", error);
    }
};
const deleteBlog = async (blogId)=>{
    try {
        const blogDocRef = doc(db, "blogs", blogId);
        await deleteDoc(blogDocRef);
        console.log("Blog deleted successfully");
    } catch (error) {
        console.error("Error deleting blog:", error);
    }
};
const subscribeToBlogs = (callback)=>{
    const blogsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "blogs");
    const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshot)(blogsCollection, (snapshot)=>{
        const blogs = [];
        snapshot.forEach((doc)=>{
            blogs.push(doc.data());
        });
        callback(blogs);
    });
    return unsubscribe;
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;