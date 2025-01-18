(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2047],{56819:function(t,e,r){"use strict";r.r(e);var n,o=r(52846);function a(){return(a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(null,arguments)}e.default=function(t){return o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t),n||(n=o.createElement("path",{fill:"currentColor",d:"M12 3.5c0-.828.675-1.512 1.494-1.388a10 10 0 1 1-11.36 8.254c.136-.817.994-1.249 1.782-.993s1.201 1.105 1.119 1.93a7 7 0 1 0 8.454-6.143C12.679 4.984 12 4.328 12 3.5"},o.createElement("animateTransform",{attributeName:"transform",attributeType:"xml",dur:"0.5s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"}))))}},72671:function(t,e){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),o=Object.assign,a={};function _(t,e,r){this.props=t,this.context=e,this.refs=a,this.updater=r||n}function i(){}function s(t,e,r){this.props=t,this.context=e,this.refs=a,this.updater=r||n}_.prototype.isReactComponent={},_.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},_.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},i.prototype=_.prototype;var p=s.prototype=new i;p.constructor=s,o(p,_.prototype),p.isPureReactComponent=!0;var l=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};e.createElement=function(t,e,n){var o,a={},_=null,i=null;if(null!=e)for(o in void 0!==e.ref&&(i=e.ref),void 0!==e.key&&(_=""+e.key),e)l.call(e,o)&&!u.hasOwnProperty(o)&&(a[o]=e[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var p=Array(s),c=0;c<s;c++)p[c]=arguments[c+2];a.children=p}if(t&&t.defaultProps)for(o in s=t.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:r,type:t,key:_,ref:i,props:a,_owner:null}}},52846:function(t,e,r){"use strict";t.exports=r(72671)},2047:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var n=r(3827),o=r(64090),a=r(36274),_=r(30982),i=r(83805),s=r.n(i),p=r(67023),l=r.n(p),u=r(34314),c=r(56401),y=t=>{let{title:e,text:r,buttonText:o,img:a,buttonHref:_}=t;return(0,n.jsxs)("div",{className:l().errorTemplate,children:[a,(0,n.jsx)(u.Z,{className:l().errorTemplate__title,variant:"h6",children:e}),(0,n.jsx)(u.Z,{className:l().errorTemplate__text,fontWeight:400,variant:"system_h4",children:r}),(0,n.jsx)(c.z,{className:l().errorTemplate__button,size:"m",linkProps:{type:"internal",href:_},children:o})]})},h=r(97139),f=t=>{let{type:e}=t,{theme:r}=(0,a.F)(),i=(0,_.useTranslations)("errors.404"),p=(0,h.C)();return(0,o.useEffect)(()=>{if(p&&"main"===e)return;let t=document.querySelector("main"),r=document.querySelector("#auth-container"),n=document.querySelector("#auth-image");return t&&n&&r&&(n.style.display="none",t.style.padding="0",r.style.padding="0",r.style.margin="0"),()=>{t&&n&&r&&(r.style.padding="",r.style.margin="",n.style.display="",t.style.padding="")}},[p,e]),(0,n.jsx)(y,{title:i("404 Not Found"),text:i("The requested resource couldn't be found."),img:(0,n.jsx)("img",{src:"/img/errors/404/404".concat(r,".png"),className:s().notFound__image}),buttonText:i(p?"Go to overview":"Sign up"),buttonHref:p?"/overview":"/signup"})}},56401:function(t,e,r){"use strict";r.d(e,{z:function(){return h}});var n=r(3827),o=r(64090),a=r(75504),_=r(56819),i=r(44548),s=r.n(i),p=r(8792),l=r(34314),u=r(18463),c=r(85880),y=r(30982);let h=t=>{let{children:e,appearance:r="primary",size:i="m",isLoading:h,disabled:f,linkProps:d,leftIcon:m,rightIcon:g,className:b,tabIndex:T,align:x="center",...v}=t,w=t=>{let{Tag:p="button",className:u}=t,c=(0,o.useMemo)(()=>f||h,[f,h]);return(0,n.jsxs)(p,{className:(0,a.Z)(s().btn,u,s()[r],s()[i],s()[x],{[s().loading]:h,[s().disabled]:c}),disabled:c,tabIndex:T,...v,children:[m&&!h&&(0,n.jsx)("span",{className:s().buttonIcon,children:m}),h&&(0,n.jsx)(_.default,{className:s().buttonSpin}),"string"==typeof e&&e?(0,n.jsx)(l.Z,{variant:"outline_small"===r?"small_button":"button",className:s().buttonText,children:e}):e,g&&!h&&(0,n.jsx)("span",{className:s().buttonIcon,children:g})]})},W=(0,y.useLocale)();if((null==d?void 0:d.type)==="external"){let t=c.rA.test(d.href)?(0,u.n)(d.href,W):d.href;return(0,n.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",className:b,children:w({Tag:"span"})})}return(null==d?void 0:d.type)==="internal"?(0,n.jsx)(p.default,{href:d.href,className:(0,a.Z)(b,s().linkWrapper),tabIndex:T,children:w({Tag:"span"})}):w({className:b})}},34314:function(t,e,r){"use strict";var n=r(3827),o=r(75504),a=r(80523),_=r.n(a);let i={200:_().fontWeight_200,300:_().fontWeight_300,400:_().fontWeight_400,500:_().fontWeight_500,600:_().fontWeight_600,700:_().fontWeight_700},s={none:_().textTransform_none,uppercase:_().textTransform_uppercase,lowercase:_().textTransform_lowercase,capitalize:_().textTransform_capitalize,fullWidth:_().textTransform_fullWidth},p={none:_().textDecoration_none,underline:_().textDecoration_underline,overline:_().textDecoration_overline,lineThrough:_().textDecoration_lineThrough},l={wrap:_().textWrap_wrap,nowrap:_().textWrap_nowrap,balance:_().textWrap_balance,pretty:_().textWrap_pretty};e.Z=t=>{let{as:e="p",textTransform:r="none",textDecoration:a="none",textWrap:u="wrap",fontWeight:c,variant:y,children:h,className:f,isIgnoreRtl:d=!1,isIgnoreMediaQuery:m=!1,htmlProps:g,onClick:b}=t,T=(0,o.W)(_().typography,_()[y],f,{[i[null!=c?c:200]]:c&&Object.prototype.hasOwnProperty.call(i,c),[s[r]]:Object.prototype.hasOwnProperty.call(s,r)&&"none"!==r,[p[a]]:Object.prototype.hasOwnProperty.call(p,a)&&"none"!==a,[l[u]]:Object.prototype.hasOwnProperty.call(l,u)&&"wrap"!==u,[_().disabled__rtl]:d,[_().disabled__mediaQueryProps]:m});return(0,n.jsx)(e,{onClick:b,className:T,...g,children:h})}},85880:function(t,e,r){"use strict";r.d(e,{HN:function(){return o},qk:function(){return n},rA:function(){return a}});let n=/^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,o=/^(?!.*\.\.)(?!.*@.*@)(?!^\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,a=/^(https?:\/\/)(cryptomus\.com|((?!pay)[a-z0-9-]+)\.cryptomus\.com)\/?$/},18463:function(t,e,r){"use strict";r.d(e,{n:function(){return o}});let n=t=>{let e=t.split("/").slice(3).join("/");return{before:(null==e?void 0:e.length)?t.split(e)[0]:t,after:(null==e?void 0:e.length)?t.substring(t.lastIndexOf(e)):""}},o=(t,e)=>{let r=null!=e?e:"en",{before:o,after:a}=n(t);return"".concat(o).concat("en"===r?"":"".concat(r,"/")).concat(a)}},97139:function(t,e,r){"use strict";r.d(e,{C:function(){return o}});var n=r(98955);let o=()=>{var t;return!!(null===(t=n.default.get("session_id"))||void 0===t?void 0:t.length)}},36274:function(t,e,r){"use strict";r.d(e,{F:function(){return a}});var n=r(64090),o=r(6536);let a=()=>(0,n.useContext)(o.ThemeContext)},6536:function(t,e,r){"use strict";r.r(e),r.d(e,{ThemeContext:function(){return s}});var n=r(3827),o=r(64090),a=r(98955);let _=t=>{window.location.host.includes("cryptomus.com")?a.default.set("theme",t,{expires:400,domain:"cryptomus.com"}):a.default.set("theme",t,{expires:400})},i=()=>a.default.get("theme"),s=(0,o.createContext)({theme:"light",setThemeDirectly:()=>{},toggleTheme:()=>{}});e.default=t=>{let{children:e}=t,[r,a]=(0,o.useState)("light"),p=t=>{a(t),_(t)};return(0,o.useLayoutEffect)(()=>{let t=i();t&&(a(t),"dark"===r?(document.body.classList.add("dark"),document.body.classList.remove("light")):"light"===r&&(document.body.classList.add("light"),document.body.classList.remove("dark")))},[r]),(0,n.jsx)(s.Provider,{value:{theme:r,toggleTheme:()=>{"dark"===r?p("light"):p("dark")},setThemeDirectly:p},children:e})}},67023:function(t){t.exports={errorTemplate:"ErrorTemplate_errorTemplate__v3whL",errorTemplate__button:"ErrorTemplate_errorTemplate__button__AROuC",errorTemplate__title:"ErrorTemplate_errorTemplate__title__1K7ok",errorTemplate__text:"ErrorTemplate_errorTemplate__text__vKk5v",errorTemplate__image:"ErrorTemplate_errorTemplate__image__ipg0D"}},83805:function(t){t.exports={notFound__image:"NotFound_notFound__image__bAfyT"}},44548:function(t){t.exports={btn:"Button_btn__nhntQ",left:"Button_left__QIYeM",center:"Button_center__Nhqqb",right:"Button_right__wxG4b",buttonIcon:"Button_buttonIcon__YjEH_",loading:"Button_loading__WDyPj",buttonText:"Button_buttonText__BNCnu",buttonSpin:"Button_buttonSpin__bX8L4",disabled:"Button_disabled__Cu6k9",p2p_button:"Button_p2p_button__EyH29",s:"Button_s__Kh_57",m:"Button_m__scbpZ",l:"Button_l__1GRBk",primary:"Button_primary__swzAa",secondary:"Button_secondary__pFIlL",tertiary:"Button_tertiary__3PK3l",stroked:"Button_stroked__onpFx",outline:"Button_outline__tvaA1",outline_small:"Button_outline_small__unNHe",footer:"Button_footer__WCQCi",advertisement:"Button_advertisement__UBt1_",linkWrapper:"Button_linkWrapper__KTNQ7"}},80523:function(t){t.exports={typography:"Typography_typography__GIzzj",display_large:"Typography_display_large__HzU_s",disabled__mediaQueryProps:"Typography_disabled__mediaQueryProps__ObLyJ",display_medium:"Typography_display_medium__klmdF",h1:"Typography_h1__hU1R8",h2:"Typography_h2__fbe2k",h3:"Typography_h3__nvkMV",h4:"Typography_h4__1ZZ0G",h5:"Typography_h5__5SHRc",h6:"Typography_h6__mZvF3",system_h1:"Typography_system_h1__aNoDZ",system_h2:"Typography_system_h2__UbpGR",system_h3:"Typography_system_h3__p2mGZ",system_h4:"Typography_system_h4__lVbTL",system_h5:"Typography_system_h5__bhLHy",system_h6:"Typography_system_h6__egI_o",button:"Typography_button__FZ9Qg",ignoreMediaQuery:"Typography_ignoreMediaQuery___VgRw",small_button:"Typography_small_button__Qe0VR",link_h4:"Typography_link_h4__ZG4zU",link_h5:"Typography_link_h5__JMyC6",code:"Typography_code__2UIph",tag:"Typography_tag__KeH9Z",tapBar_menu:"Typography_tapBar_menu__lCXGs",fontWeight_200:"Typography_fontWeight_200___JxH5",fontWeight_300:"Typography_fontWeight_300___en1U",fontWeight_400:"Typography_fontWeight_400__7mRwo",fontWeight_500:"Typography_fontWeight_500__L9avQ",fontWeight_600:"Typography_fontWeight_600__zgLXC",fontWeight_700:"Typography_fontWeight_700__7Cvjo",textTransform_uppercase:"Typography_textTransform_uppercase__StL5X",textTransform_lowercase:"Typography_textTransform_lowercase__lXaaE",textTransform_capitalize:"Typography_textTransform_capitalize__mHEgS",textTransform_fullWidth:"Typography_textTransform_fullWidth__NEwiP",textDecoration_underline:"Typography_textDecoration_underline__tEwFo",textDecoration_overline:"Typography_textDecoration_overline__6_cWX",textDecoration_lineThrough:"Typography_textDecoration_lineThrough__uXscm",textWrap_wrap:"Typography_textWrap_wrap__AfG2Q",textWrap_nowrap:"Typography_textWrap_nowrap__19VxS",textWrap_balance:"Typography_textWrap_balance__clcOC",textWrap_pretty:"Typography_textWrap_pretty__9tk8P",disabled__rtl:"Typography_disabled__rtl__HAQB_"}},75504:function(t,e,r){"use strict";function n(){for(var t,e,r=0,n="",o=arguments.length;r<o;r++)(t=arguments[r])&&(e=function t(e){var r,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(n=t(e[r]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n)}return o}(t))&&(n&&(n+=" "),n+=e);return n}r.d(e,{W:function(){return n}}),e.Z=n},98955:function(t,e,r){"use strict";/*! js-cookie v3.0.5 | MIT */function n(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}r.r(e),r.d(e,{default:function(){return o}});var o=function t(e,r){function o(t,o,a){if("undefined"!=typeof document){"number"==typeof(a=n({},r,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var _="";for(var i in a)a[i]&&(_+="; "+i,!0!==a[i]&&(_+="="+a[i].split(";")[0]));return document.cookie=t+"="+e.write(o,t)+_}}return Object.create({set:o,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var r=document.cookie?document.cookie.split("; "):[],n={},o=0;o<r.length;o++){var a=r[o].split("="),_=a.slice(1).join("=");try{var i=decodeURIComponent(a[0]);if(n[i]=e.read(_,i),t===i)break}catch(t){}}return t?n[t]:n}},remove:function(t,e){o(t,"",n({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,n({},this.attributes,e))},withConverter:function(e){return t(n({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);