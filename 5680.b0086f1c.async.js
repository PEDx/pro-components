(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[5680],{73404:function(Y,H,b){"use strict";b.d(H,{Z:function(){return p}});var D=b(24456),S=b(94881),R=b(50959),J=b(64769),j=b(21488),q=b(84875),L=b.n(q),W=b(91211),Q=b(28470),U=b(31130),O=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],I=R.forwardRef(function(y,h){var f=y.className,s=y.component,x=y.viewBox,w=y.spin,m=y.rotate,g=y.tabIndex,C=y.onClick,_=y.children,A=(0,S.Z)(y,O),F=R.useRef(),E=(0,W.x1)(F,h);(0,U.Kp)(!!(s||_),"Should have `component` prop or `children`."),(0,U.C3)(F);var $=R.useContext(Q.Z),z=$.prefixCls,k=z===void 0?"anticon":z,V=$.rootClassName,re=L()(V,k,f),ee=L()((0,j.Z)({},"".concat(k,"-spin"),!!w)),X=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,G=(0,J.Z)((0,J.Z)({},U.vD),{},{className:ee,style:X,viewBox:x});x||delete G.viewBox;var ae=function(){return s?R.createElement(s,G,_):_?((0,U.Kp)(!!x||R.Children.count(_)===1&&R.isValidElement(_)&&R.Children.only(_).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),R.createElement("svg",(0,D.Z)({},G,{viewBox:x}),_)):null},ie=g;return ie===void 0&&C&&(ie=-1),R.createElement("span",(0,D.Z)({role:"img"},A,{ref:E,tabIndex:ie,onClick:C,className:re}),ae())});I.displayName="AntdIcon";var l=I,P=["type","children"],a=new Set;function c(y){return!!(typeof y=="string"&&y.length&&!a.has(y))}function u(y){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,f=y[h];if(c(f)){var s=document.createElement("script");s.setAttribute("src",f),s.setAttribute("data-namespace",f),y.length>h+1&&(s.onload=function(){u(y,h+1)},s.onerror=function(){u(y,h+1)}),a.add(f),document.body.appendChild(s)}}function p(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=y.scriptUrl,f=y.extraCommonProps,s=f===void 0?{}:f;h&&typeof document!="undefined"&&typeof window!="undefined"&&typeof document.createElement=="function"&&(Array.isArray(h)?u(h.reverse()):u([h]));var x=R.forwardRef(function(w,m){var g=w.type,C=w.children,_=(0,S.Z)(w,P),A=null;return w.type&&(A=R.createElement("use",{xlinkHref:"#".concat(g)})),C&&(A=C),R.createElement(l,(0,D.Z)({},s,_,{ref:m}),A)});return x.displayName="Iconfont",x}},47155:function(Y,H,b){"use strict";b.d(H,{Z:function(){return L}});var D=b(24456),S=b(50959),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"}}]},name:"copyright",theme:"outlined"},J=R,j=b(53942),q=function(Q,U){return S.createElement(j.Z,(0,D.Z)({},Q,{ref:U,icon:J}))},L=S.forwardRef(q)},74:function(Y,H,b){"use strict";b.d(H,{Z:function(){return L}});var D=b(24456),S=b(50959),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},J=R,j=b(53942),q=function(Q,U){return S.createElement(j.Z,(0,D.Z)({},Q,{ref:U,icon:J}))},L=S.forwardRef(q)},32991:function(Y,H,b){"use strict";b.d(H,{nG:function(){return Qe},Un:function(){return We}});var D=b(70916);function S(e,r){return r>>>e|r<<32-e}function R(e,r,t){return e&r^~e&t}function J(e,r,t){return e&r^e&t^r&t}function j(e){return S(2,e)^S(13,e)^S(22,e)}function q(e){return S(6,e)^S(11,e)^S(25,e)}function L(e){return S(7,e)^S(18,e)^e>>>3}function W(e){return S(17,e)^S(19,e)^e>>>10}function Q(e,r){return e[r&15]+=W(e[r+14&15])+e[r+9&15]+L(e[r+1&15])}var U=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],O,I,l,P="0123456789abcdef";function a(e,r){var t=(e&65535)+(r&65535),n=(e>>16)+(r>>16)+(t>>16);return n<<16|t&65535}function c(){O=new Array(8),I=new Array(2),l=new Array(64),I[0]=I[1]=0,O[0]=1779033703,O[1]=3144134277,O[2]=1013904242,O[3]=2773480762,O[4]=1359893119,O[5]=2600822924,O[6]=528734635,O[7]=1541459225}function u(){var e,r,t,n,i,d,o,v,M,T,K=new Array(16);e=O[0],r=O[1],t=O[2],n=O[3],i=O[4],d=O[5],o=O[6],v=O[7];for(var Z=0;Z<16;Z++)K[Z]=l[(Z<<2)+3]|l[(Z<<2)+2]<<8|l[(Z<<2)+1]<<16|l[Z<<2]<<24;for(var N=0;N<64;N++)M=v+q(i)+R(i,d,o)+U[N],N<16?M+=K[N]:M+=Q(K,N),T=j(e)+J(e,r,t),v=o,o=d,d=i,i=a(n,M),n=t,t=r,r=e,e=a(M,T);O[0]+=e,O[1]+=r,O[2]+=t,O[3]+=n,O[4]+=i,O[5]+=d,O[6]+=o,O[7]+=v}function p(e,r){var t,n,i=0;n=I[0]>>3&63;var d=r&63;for((I[0]+=r<<3)<r<<3&&I[1]++,I[1]+=r>>29,t=0;t+63<r;t+=64){for(var o=n;o<64;o++)l[o]=e.charCodeAt(i++);u(),n=0}for(var v=0;v<d;v++)l[v]=e.charCodeAt(i++)}function y(){var e=I[0]>>3&63;if(l[e++]=128,e<=56)for(var r=e;r<56;r++)l[r]=0;else{for(var t=e;t<64;t++)l[t]=0;u();for(var n=0;n<56;n++)l[n]=0}l[56]=I[1]>>>24&255,l[57]=I[1]>>>16&255,l[58]=I[1]>>>8&255,l[59]=I[1]&255,l[60]=I[0]>>>24&255,l[61]=I[0]>>>16&255,l[62]=I[0]>>>8&255,l[63]=I[0]&255,u()}function h(){for(var e=0,r=new Array(32),t=0;t<8;t++)r[e++]=O[t]>>>24&255,r[e++]=O[t]>>>16&255,r[e++]=O[t]>>>8&255,r[e++]=O[t]&255;return r}function f(){for(var e=new String,r=0;r<8;r++)for(var t=28;t>=0;t-=4)e+=P.charAt(O[r]>>>t&15);return e}function s(e){return c(),p(e,e.length),y(),f()}var x=s;function w(e){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},w(e)}var m=["pro_layout_parentKeys","children","icon","flatMenu","indexRoute","routes"];function g(e,r){return A(e)||_(e,r)||pe(e,r)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(e,r){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,d=!1,o,v;try{for(t=t.call(e);!(i=(o=t.next()).done)&&(n.push(o.value),!(r&&n.length===r));i=!0);}catch(M){d=!0,v=M}finally{try{!i&&t.return!=null&&t.return()}finally{if(d)throw v}}return n}}function A(e){if(Array.isArray(e))return e}function F(e,r){var t=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=pe(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(T){throw T},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d=!0,o=!1,v;return{s:function(){t=t.call(e)},n:function(){var T=t.next();return d=T.done,T},e:function(T){o=!0,v=T},f:function(){try{!d&&t.return!=null&&t.return()}finally{if(o)throw v}}}}function E(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function $(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,r,t){return r&&$(e.prototype,r),t&&$(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function k(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&ne(e,r)}function V(e){var r=ae();return function(){var n=ce(e),i;if(r){var d=ce(this).constructor;i=Reflect.construct(n,arguments,d)}else i=n.apply(this,arguments);return re(this,i)}}function re(e,r){if(r&&(w(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ee(e)}function ee(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e){var r=typeof Map=="function"?new Map:void 0;return X=function(n){if(n===null||!ie(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r!="undefined"){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return G(n,arguments,ce(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ne(i,n)},X(e)}function G(e,r,t){return ae()?G=Reflect.construct.bind():G=function(i,d,o){var v=[null];v.push.apply(v,d);var M=Function.bind.apply(i,v),T=new M;return o&&ne(T,o.prototype),T},G.apply(null,arguments)}function ae(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function ie(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function ne(e,r){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},ne(e,r)}function ce(e){return ce=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ce(e)}function be(e){return Te(e)||Ce(e)||pe(e)||Se()}function Se(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(e,r){if(e){if(typeof e=="string")return he(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return he(e,r)}}function Ce(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Te(e){if(Array.isArray(e))return he(e)}function he(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ie(e,r){if(e==null)return{};var t=De(e,r),n,i;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(i=0;i<d.length;i++)n=d[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function De(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,d;for(d=0;d<n.length;d++)i=n[d],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}function we(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function B(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?we(Object(t),!0).forEach(function(n){Ne(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):we(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ne(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var te="routes";function le(e){return e.split("?")[0].split("#")[0]}var me=function(r){if(!r.startsWith("http"))return!1;try{var t=new URL(r);return!!t}catch(n){return!1}},$e=function(r){var t=r.path;if(!t||t==="/")try{return"/".concat(x(JSON.stringify(r)))}catch(n){}return t&&le(t)},je=function(r,t){var n=r.name,i=r.locale;return"locale"in r&&i===!1||!n?!1:r.locale||"".concat(t,".").concat(n)},Ee=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";return r.endsWith("/*")?r.replace("/*","/"):(r||t).startsWith("/")||me(r)?r:"/".concat(t,"/").concat(r).replace(/\/\//g,"/").replace(/\/\//g,"/")},Be=function(r,t){var n=r.menu,i=n===void 0?{}:n,d=r.indexRoute,o=r.path,v=o===void 0?"":o,M=r.children||[],T=i.name,K=T===void 0?r.name:T,Z=i.icon,N=Z===void 0?r.icon:Z,ve=i.hideChildren,_e=ve===void 0?r.hideChildren:ve,ge=i.flatMenu,Me=ge===void 0?r.flatMenu:ge,se=d&&Object.keys(d).join(",")!=="redirect"?[B({path:v,menu:i},d)].concat(M||[]):M,fe=B({},r);if(K&&(fe.name=K),N&&(fe.icon=N),se&&se.length){if(_e)return delete fe.children,fe;var xe=ye(B(B({},t),{},{data:se}),r);if(Me)return xe;delete fe[te]}return fe},ue=function(r){return Array.isArray(r)&&r.length>0};function ye(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{path:"/"},t=e.data,n=e.formatMessage,i=e.parentName,d=e.locale;return!t||!Array.isArray(t)?[]:t.filter(function(o){return o?ue(o.children)||o.path||o.originPath||o.layout?!0:(o.redirect||o.unaccessible,!1):!1}).filter(function(o){var v,M;return!(o==null||(v=o.menu)===null||v===void 0)&&v.name||o!=null&&o.flatMenu||!(o==null||(M=o.menu)===null||M===void 0)&&M.flatMenu?!0:o.menu!==!1}).map(function(o){var v=B(B({},o),{},{path:o.path||o.originPath});return!v.children&&v[te]&&(v.children=v[te],delete v[te]),v.unaccessible&&delete v.name,v.path==="*"&&(v.path="."),v.path==="/*"&&(v.path="."),!v.path&&v.originPath&&(v.path=v.originPath),v}).map(function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:"/"},v=o.children||[],M=Ee(o.path,r?r.path:"/"),T=o.name,K=je(o,i||"menu"),Z=K!==!1&&d!==!1&&n&&K?n({id:K,defaultMessage:T}):T,N=r.pro_layout_parentKeys,ve=N===void 0?[]:N,_e=r.children,ge=r.icon,Me=r.flatMenu,se=r.indexRoute,fe=r.routes,xe=Ie(r,m),Pe=new Set([].concat(be(ve),be(o.parentKeys||[])));r.key&&Pe.add(r.key);var oe=B(B(B({},xe),{},{menu:void 0},o),{},{path:M,locale:K,key:o.key||$e(B(B({},o),{},{path:M})),pro_layout_parentKeys:Array.from(Pe).filter(function(Ae){return Ae&&Ae!=="/"})});if(Z?oe.name=Z:delete oe.name,oe.menu===void 0&&delete oe.menu,ue(v)){var Re=ye(B(B({},e),{},{data:v,parentName:K||""}),oe);ue(Re)&&(oe.children=Re)}return Be(oe,e)}).flat(1)}var Fe=function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.filter(function(t){return t&&(t.name||ue(t.children))&&!t.hideInMenu&&!t.redirect}).map(function(t){var n=B({},t),i=n.children||[];if(delete n[te],ue(i)&&!n.hideChildrenInMenu&&i.some(function(o){return o&&!!o.name})){var d=e(i);if(d.length)return B(B({},n),{},{children:d})}return B({},t)}).filter(function(t){return t})},Ze=function(e){k(t,e);var r=V(t);function t(){return E(this,t),r.apply(this,arguments)}return z(t,[{key:"get",value:function(i){var d;try{var o=F(this.entries()),v;try{for(o.s();!(v=o.n()).done;){var M=g(v.value,2),T=M[0],K=M[1],Z=le(T);if(!me(T)&&(0,D.Bo)(Z,[]).test(i)){d=K;break}}}catch(N){o.e(N)}finally{o.f()}}catch(N){d=void 0}return d}}]),t}(X(Map)),Ke=function(r){var t=new Ze,n=function i(d,o){d.forEach(function(v){var M=v.children||[];ue(M)&&i(M,v);var T=Ee(v.path,o?o.path:"/");t.set(le(T),v)})};return n(r),t},He=function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.map(function(t){var n=t.children;if(ue(n)){var i=e(n);if(i.length)return B({},t)}var d=B({},t);return delete d[te],delete d.children,d}).filter(function(t){return t})},Le=function(r,t,n,i){var d=ye({data:r,formatMessage:n,locale:t}),o=i?He(d):Fe(d),v=Ke(d);return{breadcrumb:v,menuData:o}},We=Le;function Oe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function de(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Oe(Object(t),!0).forEach(function(n){Ue(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Oe(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ue(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var ze=function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t={};return r.forEach(function(n){var i=de({},n);if(!(!i||!i.key)){!i.children&&i[te]&&(i.children=i[te],delete i[te]);var d=i.children||[];t[le(i.path||i.key||"/")]=de({},i),t[i.key||i.path||"/"]=de({},i),d&&(t=de(de({},t),e(d)))}}),t},Ve=ze,Ge=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return r.filter(function(i){if(i==="/"&&t==="/")return!0;if(i!=="/"&&i!=="/*"&&i&&!me(i)){var d=le(i);try{if(n&&(0,D.Bo)("".concat(d)).test(t)||(0,D.Bo)("".concat(d),[]).test(t)||(0,D.Bo)("".concat(d,"/(.*)")).test(t))return!0}catch(o){}}return!1}).sort(function(i,d){return i===t?10:d===t?-10:i.substr(1).split("/").length-d.substr(1).split("/").length})},Je=function(r,t,n,i){var d=Ve(t),o=Object.keys(d),v=Ge(o,r||"/",i);return!v||v.length<1?[]:(n||(v=[v[v.length-1]]),v.map(function(M){var T=d[M]||{pro_layout_parentKeys:"",key:""},K=new Map,Z=(T.pro_layout_parentKeys||[]).map(function(N){return K.has(N)?null:(K.set(N,!0),d[N])}).filter(function(N){return N});return T.key&&Z.push(T),Z}).flat(1))},Qe=Je},70916:function(Y,H){var b;function D(a){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},D(a)}b={value:!0},H.Bo=b=b=b=b=b=b=void 0;function S(a){for(var c=[],u=0;u<a.length;){var p=a[u];if(p==="*"||p==="+"||p==="?"){c.push({type:"MODIFIER",index:u,value:a[u++]});continue}if(p==="\\"){c.push({type:"ESCAPED_CHAR",index:u++,value:a[u++]});continue}if(p==="{"){c.push({type:"OPEN",index:u,value:a[u++]});continue}if(p==="}"){c.push({type:"CLOSE",index:u,value:a[u++]});continue}if(p===":"){for(var y="",h=u+1;h<a.length;){var f=a.charCodeAt(h);if(f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||f===95){y+=a[h++];continue}break}if(!y)throw new TypeError("Missing parameter name at "+u);c.push({type:"NAME",index:u,value:y}),u=h;continue}if(p==="("){var s=1,x="",h=u+1;if(a[h]==="?")throw new TypeError('Pattern cannot start with "?" at '+h);for(;h<a.length;){if(a[h]==="\\"){x+=a[h++]+a[h++];continue}if(a[h]===")"){if(s--,s===0){h++;break}}else if(a[h]==="("&&(s++,a[h+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+h);x+=a[h++]}if(s)throw new TypeError("Unbalanced pattern at "+u);if(!x)throw new TypeError("Missing pattern at "+u);c.push({type:"PATTERN",index:u,value:x}),u=h;continue}c.push({type:"CHAR",index:u,value:a[u++]})}return c.push({type:"END",index:u,value:""}),c}function R(a,c){c===void 0&&(c={});for(var u=S(a),p=c.prefixes,y=p===void 0?"./":p,h="[^"+W(c.delimiter||"/#?")+"]+?",f=[],s=0,x=0,w="",m=function(X){if(x<u.length&&u[x].type===X)return u[x++].value},g=function(X){var G=m(X);if(G!==void 0)return G;var ae=u[x],ie=ae.type,ne=ae.index;throw new TypeError("Unexpected "+ie+" at "+ne+", expected "+X)},C=function(){for(var X="",G;G=m("CHAR")||m("ESCAPED_CHAR");)X+=G;return X};x<u.length;){var _=m("CHAR"),A=m("NAME"),F=m("PATTERN");if(A||F){var E=_||"";y.indexOf(E)===-1&&(w+=E,E=""),w&&(f.push(w),w=""),f.push({name:A||s++,prefix:E,suffix:"",pattern:F||h,modifier:m("MODIFIER")||""});continue}var $=_||m("ESCAPED_CHAR");if($){w+=$;continue}w&&(f.push(w),w="");var z=m("OPEN");if(z){var E=C(),k=m("NAME")||"",V=m("PATTERN")||"",re=C();g("CLOSE"),f.push({name:k||(V?s++:""),pattern:k&&!V?h:V,prefix:E,suffix:re,modifier:m("MODIFIER")||""});continue}g("END")}return f}b=R;function J(a,c){return j(R(a,c),c)}b=J;function j(a,c){c===void 0&&(c={});var u=Q(c),p=c.encode,y=p===void 0?function(x){return x}:p,h=c.validate,f=h===void 0?!0:h,s=a.map(function(x){if(D(x)==="object")return new RegExp("^(?:"+x.pattern+")$",u)});return function(x){for(var w="",m=0;m<a.length;m++){var g=a[m];if(typeof g=="string"){w+=g;continue}var C=x?x[g.name]:void 0,_=g.modifier==="?"||g.modifier==="*",A=g.modifier==="*"||g.modifier==="+";if(Array.isArray(C)){if(!A)throw new TypeError('Expected "'+g.name+'" to not repeat, but got an array');if(C.length===0){if(_)continue;throw new TypeError('Expected "'+g.name+'" to not be empty')}for(var F=0;F<C.length;F++){var E=y(C[F],g);if(f&&!s[m].test(E))throw new TypeError('Expected all "'+g.name+'" to match "'+g.pattern+'", but got "'+E+'"');w+=g.prefix+E+g.suffix}continue}if(typeof C=="string"||typeof C=="number"){var E=y(String(C),g);if(f&&!s[m].test(E))throw new TypeError('Expected "'+g.name+'" to match "'+g.pattern+'", but got "'+E+'"');w+=g.prefix+E+g.suffix;continue}if(!_){var $=A?"an array":"a string";throw new TypeError('Expected "'+g.name+'" to be '+$)}}return w}}b=j;function q(a,c){var u=[],p=P(a,u,c);return L(p,u,c)}b=q;function L(a,c,u){u===void 0&&(u={});var p=u.decode,y=p===void 0?function(h){return h}:p;return function(h){var f=a.exec(h);if(!f)return!1;for(var s=f[0],x=f.index,w=Object.create(null),m=function(_){if(f[_]===void 0)return"continue";var A=c[_-1];A.modifier==="*"||A.modifier==="+"?w[A.name]=f[_].split(A.prefix+A.suffix).map(function(F){return y(F,A)}):w[A.name]=y(f[_],A)},g=1;g<f.length;g++)m(g);return{path:s,index:x,params:w}}}b=L;function W(a){return a.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Q(a){return a&&a.sensitive?"":"i"}function U(a,c){if(!c)return a;var u=a.source.match(/\((?!\?)/g);if(u)for(var p=0;p<u.length;p++)c.push({name:p,prefix:"",suffix:"",modifier:"",pattern:""});return a}function O(a,c,u){var p=a.map(function(y){return P(y,c,u).source});return new RegExp("(?:"+p.join("|")+")",Q(u))}function I(a,c,u){return l(R(a,u),c,u)}function l(a,c,u){u===void 0&&(u={});for(var p=u.strict,y=p===void 0?!1:p,h=u.start,f=h===void 0?!0:h,s=u.end,x=s===void 0?!0:s,w=u.encode,m=w===void 0?function(ee){return ee}:w,g="["+W(u.endsWith||"")+"]|$",C="["+W(u.delimiter||"/#?")+"]",_=f?"^":"",A=0,F=a;A<F.length;A++){var E=F[A];if(typeof E=="string")_+=W(m(E));else{var $=W(m(E.prefix)),z=W(m(E.suffix));if(E.pattern)if(c&&c.push(E),$||z)if(E.modifier==="+"||E.modifier==="*"){var k=E.modifier==="*"?"?":"";_+="(?:"+$+"((?:"+E.pattern+")(?:"+z+$+"(?:"+E.pattern+"))*)"+z+")"+k}else _+="(?:"+$+"("+E.pattern+")"+z+")"+E.modifier;else _+="("+E.pattern+")"+E.modifier;else _+="(?:"+$+z+")"+E.modifier}}if(x)y||(_+=C+"?"),_+=u.endsWith?"(?="+g+")":"$";else{var V=a[a.length-1],re=typeof V=="string"?C.indexOf(V[V.length-1])>-1:V===void 0;y||(_+="(?:"+C+"(?="+g+"))?"),re||(_+="(?="+C+"|"+g+")")}return new RegExp(_,Q(u))}b=l;function P(a,c,u){return a instanceof RegExp?U(a,c):Array.isArray(a)?O(a,c,u):I(a,c,u)}H.Bo=P},29148:function(Y,H,b){"use strict";var D=b(9493),S=b(29138);const R=D.ZP;R.Header=D.h4,R.Footer=D.$_,R.Content=D.VY,R.Sider=S.Z,H.Z=R},58809:function(Y){Y.exports=I,Y.exports.parse=S,Y.exports.compile=R,Y.exports.tokensToFunction=J,Y.exports.tokensToRegExp=O;var H="/",b="./",D=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function S(l,P){for(var a=[],c=0,u=0,p="",y=P&&P.delimiter||H,h=P&&P.delimiters||b,f=!1,s;(s=D.exec(l))!==null;){var x=s[0],w=s[1],m=s.index;if(p+=l.slice(u,m),u=m+x.length,w){p+=w[1],f=!0;continue}var g="",C=l[u],_=s[2],A=s[3],F=s[4],E=s[5];if(!f&&p.length){var $=p.length-1;h.indexOf(p[$])>-1&&(g=p[$],p=p.slice(0,$))}p&&(a.push(p),p="",f=!1);var z=g!==""&&C!==void 0&&C!==g,k=E==="+"||E==="*",V=E==="?"||E==="*",re=g||y,ee=A||F;a.push({name:_||c++,prefix:g,delimiter:re,optional:V,repeat:k,partial:z,pattern:ee?q(ee):"[^"+j(re)+"]+?"})}return(p||u<l.length)&&a.push(p+l.substr(u)),a}function R(l,P){return J(S(l,P))}function J(l){for(var P=new Array(l.length),a=0;a<l.length;a++)typeof l[a]=="object"&&(P[a]=new RegExp("^(?:"+l[a].pattern+")$"));return function(c,u){for(var p="",y=u&&u.encode||encodeURIComponent,h=0;h<l.length;h++){var f=l[h];if(typeof f=="string"){p+=f;continue}var s=c?c[f.name]:void 0,x;if(Array.isArray(s)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but got array');if(s.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var w=0;w<s.length;w++){if(x=y(s[w],f),!P[h].test(x))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'"');p+=(w===0?f.prefix:f.delimiter)+x}continue}if(typeof s=="string"||typeof s=="number"||typeof s=="boolean"){if(x=y(String(s),f),!P[h].test(x))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but got "'+x+'"');p+=f.prefix+x;continue}if(f.optional){f.partial&&(p+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be '+(f.repeat?"an array":"a string"))}return p}}function j(l){return l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function q(l){return l.replace(/([=!:$/()])/g,"\\$1")}function L(l){return l&&l.sensitive?"":"i"}function W(l,P){if(!P)return l;var a=l.source.match(/\((?!\?)/g);if(a)for(var c=0;c<a.length;c++)P.push({name:c,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return l}function Q(l,P,a){for(var c=[],u=0;u<l.length;u++)c.push(I(l[u],P,a).source);return new RegExp("(?:"+c.join("|")+")",L(a))}function U(l,P,a){return O(S(l,a),P,a)}function O(l,P,a){a=a||{};for(var c=a.strict,u=a.start!==!1,p=a.end!==!1,y=j(a.delimiter||H),h=a.delimiters||b,f=[].concat(a.endsWith||[]).map(j).concat("$").join("|"),s=u?"^":"",x=l.length===0,w=0;w<l.length;w++){var m=l[w];if(typeof m=="string")s+=j(m),x=w===l.length-1&&h.indexOf(m[m.length-1])>-1;else{var g=m.repeat?"(?:"+m.pattern+")(?:"+j(m.delimiter)+"(?:"+m.pattern+"))*":m.pattern;P&&P.push(m),m.optional?m.partial?s+=j(m.prefix)+"("+g+")?":s+="(?:"+j(m.prefix)+"("+g+"))?":s+=j(m.prefix)+"("+g+")"}}return p?(c||(s+="(?:"+y+")?"),s+=f==="$"?"$":"(?="+f+")"):(c||(s+="(?:"+y+"(?="+f+"))?"),x||(s+="(?="+y+"|"+f+")")),new RegExp(s,L(a))}function I(l,P,a){return l instanceof RegExp?W(l,P):Array.isArray(l)?Q(l,P,a):U(l,P,a)}}}]);