"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var react=require("react"),QrCode=_interopDefault(require("qrcode")),useQrEncode=function(e,t){void 0===t&&(t={});var r=react.useState(null),u=r[0],n=r[1];return react.useEffect((function(){if(e){var r=document.createElement("canvas");r.width=1024,r.height=1024,QrCode.toDataURL(r,e,t,(function(e,t){e||t&&n(t)}))}}),[e,t]),u};exports.useQrEncode=useQrEncode;
//# sourceMappingURL=react-qr-hooks.cjs.js.map