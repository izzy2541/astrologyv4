(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2325:
/***/ ((module) => {

// Exports
module.exports = {
	"footerbottom": "Footer_footerbottom__yuTvn",
	"myFooter": "Footer_myFooter__AQnmg"
};


/***/ }),

/***/ 5890:
/***/ ((module) => {

// Exports
module.exports = {
	"app": "Layout_app__4QJF8",
	"main": "Layout_main__JqHba"
};


/***/ }),

/***/ 7864:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "NavigationBar_header__WJjQu",
	"brand": "NavigationBar_brand__QKGQH"
};


/***/ }),

/***/ 5287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout/NavigationBar.module.scss
var NavigationBar_module = __webpack_require__(7864);
var NavigationBar_module_default = /*#__PURE__*/__webpack_require__.n(NavigationBar_module);
;// CONCATENATED MODULE: ./components/layout/NavigationBar.js



//import { MdOutlineCodeOff } from 'react-icons/md';
function NavigationBar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (NavigationBar_module_default()).header,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (NavigationBar_module_default()).brand,
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "ASTROLOGY"
                    })
                })
            })
        })
    });
}
/* harmony default export */ const layout_NavigationBar = (NavigationBar);

// EXTERNAL MODULE: ./components/layout/Footer.module.scss
var Footer_module = __webpack_require__(2325);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/layout/Footer.js



function Footer() {
    const getCurrentYear = ()=>{
        return new Date().getFullYear();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).footerbottom,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).myFooter,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            div: true,
                            className: (Footer_module_default()).copyright,
                            children: [
                                "\xa9 ",
                                getCurrentYear(),
                                " ASTROLOGY"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "About"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/privacy",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Privacy"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Contact"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: ./components/layout/Layout.module.scss
var Layout_module = __webpack_require__(5890);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/layout/Layout.js




function Layout(props) {
    return(//within main div are thr routed components
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).app,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_NavigationBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (Layout_module_default()).main,
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
        ]
    }));
}
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: `https://www.googletagmanager.com/gtag/js?id=${"G-N6PP7TSZ1F"}`,
                strategy: "afterInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "google-analytics-script",
                strategy: "afterInteractive",
                children: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${"G-N6PP7TSZ1F"}');
      `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664], () => (__webpack_exec__(5287)));
module.exports = __webpack_exports__;

})();