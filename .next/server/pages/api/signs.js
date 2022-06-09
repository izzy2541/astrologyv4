"use strict";
(() => {
var exports = {};
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 8080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./db.js
const signs = [
    {
        id: 1,
        title: "Aries",
        date: "March 21 - April 19",
        element: "Fire",
        description: "lorem ipsum",
        image: "/images/aries.png"
    },
    {
        id: 2,
        title: "Taurus",
        date: "April 20 - May 20",
        element: "Earth",
        description: "lorem ipsum",
        image: "/images/taurus.jpg"
    },
    {
        id: 3,
        title: "Gemini",
        date: "May 21 - June 20",
        element: "Air",
        description: "lorem ipsum",
        image: "/images/gemini.png"
    },
    {
        id: 4,
        title: "Cancer",
        date: "June 21 - July 22",
        element: "Water",
        description: "lorem ipsum",
        image: "/images/cancerzodiac.jpg"
    },
    {
        id: 5,
        title: "Leo",
        date: "July 23 - August 22",
        element: "Fire",
        description: "lorem ipsum",
        image: "/images/leozodiac.jpg"
    },
    {
        id: 6,
        title: "Virgo",
        date: "August 23 - September 22",
        element: "Earth",
        description: "lorem ipsum",
        image: "/images/virgozodiac.jpg"
    },
    {
        id: 7,
        title: "Libra",
        date: "September 23 - October 22",
        element: "Air",
        description: "lorem ipsum",
        image: "/images/libra.jpg"
    },
    {
        id: 8,
        title: "Scorpio",
        date: "October 23 - November 21",
        element: "Water",
        description: "lorem ipsum",
        image: "/images/scorpiozodiac.jpg"
    },
    {
        id: 9,
        title: "Sagittarius",
        date: "November 22 - December 21",
        element: "Fire",
        description: "lorem ipsum",
        image: "/images/sagittariuszodiac.jpg"
    },
    {
        id: 10,
        title: "Capricorn",
        date: "December 22 - January 19",
        element: "Earth",
        description: "lorem ipsum",
        image: "/images/capricornzodiac.jpg"
    },
    {
        id: 11,
        title: "Aquarius",
        date: "January 20 - Febuary 18",
        element: "Water",
        description: "lorem ipsum",
        image: "/images/aquariuszodiac.jpg"
    },
    {
        id: 12,
        title: "Pisces",
        date: "February 19 - March 20",
        element: "Waterr",
        description: "lorem ipsum",
        image: "/images/pisces.jpg"
    }
];

;// CONCATENATED MODULE: ./pages/api/signs.js

function handler(req, res) {
    res.status(200).json(signs);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8080));
module.exports = __webpack_exports__;

})();