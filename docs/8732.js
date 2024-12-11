"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[8732],{70104:(e,n,t)=>{t.d(n,{Q1:()=>b,ZC:()=>k,Ay:()=>j});var r=t(58168),o=t(64467),a=t(5544),c=t(96540),l=t(89379),i=t(23029),s=t(92901),u=t(15361),d=t(29426),f=t(53986),v=t(82284),m=t(24978),p=["b"],h=["v"],g=function(e){return Math.round(Number(e||0))},b=function(e){(0,u.A)(t,e);var n=(0,d.A)(t);function t(e){return(0,i.A)(this,t),n.call(this,function(e){if(e&&"object"===(0,v.A)(e)&&"h"in e&&"b"in e){var n=e,t=n.b,r=(0,f.A)(n,p);return(0,l.A)((0,l.A)({},r),{},{v:t})}return"string"==typeof e&&/hsb/.test(e)?e.replace(/hsb/,"hsv"):e}(e))}return(0,s.A)(t,[{key:"toHsbString",value:function(){var e=this.toHsb(),n=g(100*e.s),t=g(100*e.b),r=g(e.h),o=e.a,a="hsb(".concat(r,", ").concat(n,"%, ").concat(t,"%)"),c="hsba(".concat(r,", ").concat(n,"%, ").concat(t,"%, ").concat(o.toFixed(0===o?0:2),")");return 1===o?a:c}},{key:"toHsb",value:function(){var e=this.toHsv();"object"===(0,v.A)(this.originalInput)&&this.originalInput&&"h"in this.originalInput&&(e=this.originalInput);var n=e,t=(n.v,(0,f.A)(n,h));return(0,l.A)((0,l.A)({},t),{},{b:e.v,a:this.a})}}]),t}(m.q),C=function(e){return e instanceof b?e:new b(e)},y=C("#1677ff"),A=function(e){var n=e.offset,t=e.targetRef,r=e.containerRef,o=e.color,a=e.type,c=r.current.getBoundingClientRect(),i=c.width,s=c.height,u=t.current.getBoundingClientRect(),d=u.width/2,f=u.height/2,v=(n.x+d)/i,m=1-(n.y+f)/s,p=o.toHsb(),h=v,g=(n.x+d)/i*360;if(a)switch(a){case"hue":return C((0,l.A)((0,l.A)({},p),{},{h:g<=0?0:g}));case"alpha":return C((0,l.A)((0,l.A)({},p),{},{a:h<=0?0:h}))}return C({h:p.h,s:v<=0?0:v,b:m>=1?1:m,a:p.a})},E=function(e,n,t,r){var o=e.current.getBoundingClientRect(),a=o.width,c=o.height,l=n.current.getBoundingClientRect(),i=l.width,s=l.height,u=i/2,d=s/2,f=t.toHsb();if((0!==i||0!==s)&&i===s){if(r)switch(r){case"hue":return{x:f.h/360*a-u,y:-d/3};case"alpha":return{x:f.a/1*a-u,y:-d/3}}return{x:f.s*a-u,y:(1-f.b)*c-d}}},x=t(46942),R=t.n(x);const k=function(e){var n=e.color,t=e.prefixCls,r=e.className,o=e.style,a=e.onClick,l="".concat(t,"-color-block");return c.createElement("div",{className:R()(l,r),style:o,onClick:a},c.createElement("div",{className:"".concat(l,"-inner"),style:{background:n}}))};const I=function(e){var n=e.offset,t=e.targetRef,r=e.containerRef,o=e.direction,l=e.onDragChange,i=e.onDragChangeComplete,s=e.calculate,u=e.color,d=e.disabledDrag,f=(0,c.useState)(n||{x:0,y:0}),v=(0,a.A)(f,2),m=v[0],p=v[1],h=(0,c.useRef)(null),g=(0,c.useRef)(null),b=(0,c.useRef)({flag:!1});(0,c.useEffect)((function(){if(!1===b.current.flag){var e=null==s?void 0:s(r);e&&p(e)}}),[u,r]),(0,c.useEffect)((function(){return function(){document.removeEventListener("mousemove",h.current),document.removeEventListener("mouseup",g.current),document.removeEventListener("touchmove",h.current),document.removeEventListener("touchend",g.current),h.current=null,g.current=null}}),[]);var C=function(e){var n=function(e){var n="touches"in e?e.touches[0]:e,t=document.documentElement.scrollLeft||document.body.scrollLeft||window.pageXOffset,r=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;return{pageX:n.pageX-t,pageY:n.pageY-r}}(e),a=n.pageX,c=n.pageY,i=r.current.getBoundingClientRect(),s=i.x,u=i.y,d=i.width,f=i.height,v=t.current.getBoundingClientRect(),h=v.width,g=v.height,b=h/2,C=g/2,y=Math.max(0,Math.min(a-s,d))-b,A=Math.max(0,Math.min(c-u,f))-C,E={x:y,y:"x"===o?m.y:A};if(0===h&&0===g||h!==g)return!1;p(E),null==l||l(E)},y=function(e){e.preventDefault(),C(e)},A=function(e){e.preventDefault(),b.current.flag=!1,document.removeEventListener("mousemove",h.current),document.removeEventListener("mouseup",g.current),document.removeEventListener("touchmove",h.current),document.removeEventListener("touchend",g.current),h.current=null,g.current=null,null==i||i()};return[m,function(e){document.removeEventListener("mousemove",h.current),document.removeEventListener("mouseup",g.current),d||(C(e),b.current.flag=!0,document.addEventListener("mousemove",y),document.addEventListener("mouseup",A),document.addEventListener("touchmove",y),document.addEventListener("touchend",A),h.current=y,g.current=A)}]};var N=t(81470);const w=function(e){var n=e.size,t=void 0===n?"default":n,r=e.color,a=e.prefixCls;return c.createElement("div",{className:R()("".concat(a,"-handler"),(0,o.A)({},"".concat(a,"-handler-sm"),"small"===t)),style:{backgroundColor:r}})};const L=function(e){var n=e.children,t=e.style,r=e.prefixCls;return c.createElement("div",{className:"".concat(r,"-palette"),style:(0,l.A)({position:"relative"},t)},n)};const M=(0,c.forwardRef)((function(e,n){var t=e.children,r=e.offset;return c.createElement("div",{ref:n,style:{position:"absolute",left:r.x,top:r.y,zIndex:1}},t)}));const S=function(e){var n=e.color,t=e.onChange,r=e.prefixCls,o=e.onChangeComplete,l=e.disabled,i=(0,c.useRef)(),s=(0,c.useRef)(),u=(0,c.useRef)(n),d=(0,N._q)((function(e){var r=A({offset:e,targetRef:s,containerRef:i,color:n});u.current=r,t(r)})),f=I({color:n,containerRef:i,targetRef:s,calculate:function(e){return E(e,s,n)},onDragChange:d,onDragChangeComplete:function(){return null==o?void 0:o(u.current)},disabledDrag:l}),v=(0,a.A)(f,2),m=v[0],p=v[1];return c.createElement("div",{ref:i,className:"".concat(r,"-select"),onMouseDown:p,onTouchStart:p},c.createElement(L,{prefixCls:r},c.createElement(M,{offset:m,ref:s},c.createElement(w,{color:n.toRgbString(),prefixCls:r})),c.createElement("div",{className:"".concat(r,"-saturation"),style:{backgroundColor:"hsl(".concat(n.toHsb().h,",100%, 50%)"),backgroundImage:"linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"}})))};const P=function(e){var n=e.colors,t=e.children,r=e.direction,o=void 0===r?"to right":r,a=e.type,l=e.prefixCls,i=(0,c.useMemo)((function(){return n.map((function(e,t){var r=C(e);return"alpha"===a&&t===n.length-1&&r.setAlpha(1),r.toRgbString()})).join(",")}),[n,a]);return c.createElement("div",{className:"".concat(l,"-gradient"),style:{position:"absolute",inset:0,background:"linear-gradient(".concat(o,", ").concat(i,")")}},t)};const D=function(e){var n=e.gradientColors,t=e.direction,r=e.type,o=void 0===r?"hue":r,l=e.color,i=e.value,s=e.onChange,u=e.onChangeComplete,d=e.disabled,f=e.prefixCls,v=(0,c.useRef)(),m=(0,c.useRef)(),p=(0,c.useRef)(l),h=(0,N._q)((function(e){var n=A({offset:e,targetRef:m,containerRef:v,color:l,type:o});p.current=n,s(n)})),g=I({color:l,targetRef:m,containerRef:v,calculate:function(e){return E(e,m,l,o)},onDragChange:h,onDragChangeComplete:function(){null==u||u(p.current,o)},direction:"x",disabledDrag:d}),b=(0,a.A)(g,2),C=b[0],y=b[1];return c.createElement("div",{ref:v,className:R()("".concat(f,"-slider"),"".concat(f,"-slider-").concat(o)),onMouseDown:y,onTouchStart:y},c.createElement(L,{prefixCls:f},c.createElement(M,{offset:C,ref:m},c.createElement(w,{size:"small",color:i,prefixCls:f})),c.createElement(P,{colors:n,direction:t,type:o,prefixCls:f})))};function K(e){return void 0!==e}const H=function(e,n){var t=n.defaultValue,r=n.value,o=(0,c.useState)((function(){var n;return n=K(r)?r:K(t)?t:e,C(n)})),l=(0,a.A)(o,2),i=l[0],s=l[1];return(0,c.useEffect)((function(){r&&s(C(r))}),[r]),[i,s]};var O=["rgb(255, 0, 0) 0%","rgb(255, 255, 0) 17%","rgb(0, 255, 0) 33%","rgb(0, 255, 255) 50%","rgb(0, 0, 255) 67%","rgb(255, 0, 255) 83%","rgb(255, 0, 0) 100%"];const j=(0,c.forwardRef)((function(e,n){var t=e.value,l=e.defaultValue,i=e.prefixCls,s=void 0===i?"rc-color-picker":i,u=e.onChange,d=e.onChangeComplete,f=e.className,v=e.style,m=e.panelRender,p=e.disabledAlpha,h=void 0!==p&&p,g=e.disabled,b=void 0!==g&&g,A=H(y,{value:t,defaultValue:l}),E=(0,a.A)(A,2),x=E[0],I=E[1],N=(0,c.useMemo)((function(){var e=C(x.toRgbString());return e.setAlpha(1),e.toRgbString()}),[x]),w=R()("".concat(s,"-panel"),f,(0,o.A)({},"".concat(s,"-panel-disabled"),b)),L={prefixCls:s,onChangeComplete:d,disabled:b},M=function(e,n){t||I(e),null==u||u(e,n)},P=c.createElement(c.Fragment,null,c.createElement(S,(0,r.A)({color:x,onChange:M},L)),c.createElement("div",{className:"".concat(s,"-slider-container")},c.createElement("div",{className:R()("".concat(s,"-slider-group"),(0,o.A)({},"".concat(s,"-slider-group-disabled-alpha"),h))},c.createElement(D,(0,r.A)({gradientColors:O,color:x,value:"hsl(".concat(x.toHsb().h,",100%, 50%)"),onChange:function(e){return M(e,"hue")}},L)),!h&&c.createElement(D,(0,r.A)({type:"alpha",gradientColors:["rgba(255, 0, 4, 0) 0%",N],color:x,value:x.toRgbString(),onChange:function(e){return M(e,"alpha")}},L))),c.createElement(k,{color:x.toRgbString(),prefixCls:s})));return c.createElement("div",{className:w,style:v,ref:n},"function"==typeof m?m(P):P)}))},71057:(e,n,t)=>{t.d(n,{A:()=>N});var r=t(58168),o=t(60436),a=t(5544),c=t(82284),l=t(46942),i=t.n(l),s=t(12533),u=t(68210),d=t(96540),f=t(53986),v=t(82546),m=t(64467),p=t(57557),h=t(16928),g=d.forwardRef((function(e,n){var t=e.prefixCls,r=e.forceRender,o=e.className,c=e.style,l=e.children,s=e.isActive,u=e.role,f=d.useState(s||r),v=(0,a.A)(f,2),p=v[0],h=v[1];return d.useEffect((function(){(r||s)&&h(!0)}),[r,s]),p?d.createElement("div",{ref:n,className:i()("".concat(t,"-content"),(0,m.A)((0,m.A)({},"".concat(t,"-content-active"),s),"".concat(t,"-content-inactive"),!s),o),style:c,role:u},d.createElement("div",{className:"".concat(t,"-content-box")},l)):null}));g.displayName="PanelContent";const b=g;var C=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"];const y=d.forwardRef((function(e,n){var t=e.showArrow,o=void 0===t||t,a=e.headerClass,c=e.isActive,l=e.onItemClick,s=e.forceRender,u=e.className,v=e.prefixCls,g=e.collapsible,y=e.accordion,A=e.panelKey,E=e.extra,x=e.header,R=e.expandIcon,k=e.openMotion,I=e.destroyInactivePanel,N=e.children,w=(0,f.A)(e,C),L="disabled"===g,M="header"===g,S="icon"===g,P=null!=E&&"boolean"!=typeof E,D=function(){null==l||l(A)},K="function"==typeof R?R(e):d.createElement("i",{className:"arrow"});K&&(K=d.createElement("div",{className:"".concat(v,"-expand-icon"),onClick:["header","icon"].includes(g)?D:void 0},K));var H=i()((0,m.A)((0,m.A)((0,m.A)({},"".concat(v,"-item"),!0),"".concat(v,"-item-active"),c),"".concat(v,"-item-disabled"),L),u),O={className:i()(a,(0,m.A)((0,m.A)((0,m.A)({},"".concat(v,"-header"),!0),"".concat(v,"-header-collapsible-only"),M),"".concat(v,"-icon-collapsible-only"),S)),"aria-expanded":c,"aria-disabled":L,onKeyDown:function(e){"Enter"!==e.key&&e.keyCode!==h.A.ENTER&&e.which!==h.A.ENTER||D()}};return M||S||(O.onClick=D,O.role=y?"tab":"button",O.tabIndex=L?-1:0),d.createElement("div",(0,r.A)({},w,{ref:n,className:H}),d.createElement("div",O,o&&K,d.createElement("span",{className:"".concat(v,"-header-text"),onClick:"header"===g?D:void 0},x),P&&d.createElement("div",{className:"".concat(v,"-extra")},E)),d.createElement(p.Ay,(0,r.A)({visible:c,leavedClassName:"".concat(v,"-content-hidden")},k,{forceRender:s,removeOnLeave:I}),(function(e,n){var t=e.className,r=e.style;return d.createElement(b,{ref:n,prefixCls:v,className:t,style:r,isActive:c,forceRender:s,role:y?"tabpanel":void 0},N)})))}));var A=["children","label","key","collapsible","onItemClick","destroyInactivePanel"];const E=function(e,n,t){return Array.isArray(e)?function(e,n){var t=n.prefixCls,o=n.accordion,a=n.collapsible,c=n.destroyInactivePanel,l=n.onItemClick,i=n.activeKey,s=n.openMotion,u=n.expandIcon;return e.map((function(e,n){var v=e.children,m=e.label,p=e.key,h=e.collapsible,g=e.onItemClick,b=e.destroyInactivePanel,C=(0,f.A)(e,A),E=String(null!=p?p:n),x=null!=h?h:a,R=null!=b?b:c,k=!1;return k=o?i[0]===E:i.indexOf(E)>-1,d.createElement(y,(0,r.A)({},C,{prefixCls:t,key:E,panelKey:E,isActive:k,accordion:o,openMotion:s,expandIcon:u,header:m,collapsible:x,onItemClick:function(e){"disabled"!==x&&(l(e),null==g||g(e))},destroyInactivePanel:R}),v)}))}(e,t):(0,v.A)(n).map((function(e,n){return function(e,n,t){if(!e)return null;var r=t.prefixCls,o=t.accordion,a=t.collapsible,c=t.destroyInactivePanel,l=t.onItemClick,i=t.activeKey,s=t.openMotion,u=t.expandIcon,f=e.key||String(n),v=e.props,m=v.header,p=v.headerClass,h=v.destroyInactivePanel,g=v.collapsible,b=v.onItemClick,C=!1;C=o?i[0]===f:i.indexOf(f)>-1;var y=null!=g?g:a,A={key:f,panelKey:f,header:m,headerClass:p,isActive:C,prefixCls:r,destroyInactivePanel:null!=h?h:c,openMotion:s,accordion:o,children:e.props.children,onItemClick:function(e){"disabled"!==y&&(l(e),null==b||b(e))},expandIcon:u,collapsible:y};return"string"==typeof e.type?e:(Object.keys(A).forEach((function(e){void 0===A[e]&&delete A[e]})),d.cloneElement(e,A))}(e,n,t)}))};var x=t(72065);function R(e){var n=e;if(!Array.isArray(n)){var t=(0,c.A)(n);n="number"===t||"string"===t?[n]:[]}return n.map((function(e){return String(e)}))}var k=d.forwardRef((function(e,n){var t=e.prefixCls,c=void 0===t?"rc-collapse":t,l=e.destroyInactivePanel,f=void 0!==l&&l,v=e.style,m=e.accordion,p=e.className,h=e.children,g=e.collapsible,b=e.openMotion,C=e.expandIcon,y=e.activeKey,A=e.defaultActiveKey,k=e.onChange,I=e.items,N=i()(c,p),w=(0,s.A)([],{value:y,onChange:function(e){return null==k?void 0:k(e)},defaultValue:A,postState:R}),L=(0,a.A)(w,2),M=L[0],S=L[1];(0,u.Ay)(!h,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var P=E(I,h,{prefixCls:c,accordion:m,openMotion:b,expandIcon:C,collapsible:g,destroyInactivePanel:f,onItemClick:function(e){return S((function(){return m?M[0]===e?[]:[e]:M.indexOf(e)>-1?M.filter((function(n){return n!==e})):[].concat((0,o.A)(M),[e])}))},activeKey:M});return d.createElement("div",(0,r.A)({ref:n,className:N,style:v,role:m?"tablist":void 0},(0,x.A)(e,{aria:!0,data:!0})),P)}));const I=Object.assign(k,{Panel:y}),N=I;I.Panel}}]);