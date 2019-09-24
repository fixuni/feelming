webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ImagesZoom.js":
/*!**********************************!*\
  !*** ./components/ImagesZoom.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mac/work/feelming/frontend/components/ImagesZoom.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ImagesZoom = function ImagesZoom(_ref) {
  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1];

  return __jsx("div", {
    style: {
      position: 'fixed',
      zIndex: 5000,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("header", {
    style: {
      height: 44,
      background: 'white',
      position: 'relative',
      padding: 0,
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h1", {
    style: {
      margin: 0,
      fontSize: '17px',
      color: '#333',
      lineHeight: '44px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "close",
    onClick: onClose,
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      padding: 15,
      lineHeight: '14px',
      cursor: 'pointer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("div", {
    style: {
      height: 'calc(100% - 44px)',
      background: '#090909'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {
    initialSlide: 0,
    afterChange: function afterChange(slide) {
      return setCurrentSlide(slide);
    },
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, images.map(function (v) {
    return __jsx("div", {
      style: {
        padding: 32,
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: "http://localhost:3065/".concat(v.src),
      style: {
        margin: '0 auto',
        maxHeight: 750
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  })), __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: 75,
      height: 30,
      lineHeight: '30px',
      borderRadius: 15,
      background: '#313131',
      display: 'inline-block',
      textAlign: 'center',
      color: 'white',
      fontSize: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, currentSlide + 1, " / ", images.length)))));
};

ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);
/*

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import { Icon } from 'antd';



const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide ] = useState(0);
    return (
        <div style={{ position: 'fixed', zIndex: 5000, top: 0, left: 0, right: 0, bottom: 0 }}>
            <header style={{ height: 44, background: 'white', postion: 'relative', padding: 0, textAlign: 'center'}}>
                <h1 style={{ margin: 0, fontSize: '17px', color: '#333', lineHeight: '44px' }}>상세 이미지</h1>
                <Icon type="close" onClick={onClose} style={{ position: 'absolute', right: 0, top: 0, padding: 15, lineHeight: '14px', cursor: 'pointer' }} />
            </header>
        <div style={{ height: 'calc(100% - 44px)', background: '#090909' }}>
            <div>
                <h1> 상세 이미지</h1>
                <Icon type="close" onClick={onClose} />
            </div>
        </div>
        <div>
            <div>
                <Slick
                    initialSlide={0}
                    afterChange={slide => setCurrentSlide(slide) }
                    infinite={false}
                    arrows
                    slidesToShow={1}
                    slidesToScroll={1}
                >
                    {images.map((v) => {
                        return (
                            <div>
                                <img src={`http://localhost:3065/${v.src}`}  style={{ margin: '0 auto', maxHeight: 750 }}/>
                            </div>
                        )
                    })}
                </Slick>
                <div style={{ textAlign: 'center'}}>
                    <div style={{ width: 75, height: 30, lineHeight: '30px', borderRadius: 15, background: '#313131', display: 'inline-block', textAlign:'center', color:'white', fontSize: '15px'}}>
                        {currentSlide + 1} / {images.length}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
    })).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;

*/

/***/ })

})
//# sourceMappingURL=index.js.bd99bce764747a866e2e.hot-update.js.map