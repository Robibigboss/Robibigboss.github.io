function nt(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var I={exports:{}},n={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G;function rt(){if(G)return n;G=1;var c=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),$=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),g=Symbol.iterator;function S(t){return t===null||typeof t!="object"?null:(t=g&&t[g]||t["@@iterator"],typeof t=="function"?t:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,T={};function v(t,e,o){this.props=t,this.context=e,this.refs=T,this.updater=o||R}v.prototype.isReactComponent={},v.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},v.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z(){}z.prototype=v.prototype;function P(t,e,o){this.props=t,this.context=e,this.refs=T,this.updater=o||R}var b=P.prototype=new z;b.constructor=P,x(b,v.prototype),b.isPureReactComponent=!0;var U=Array.isArray;function O(){}var a={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function H(t,e,o){var r=o.ref;return{$$typeof:c,type:t,key:e,ref:r!==void 0?r:null,props:o}}function Q(t,e){return H(t.type,e,t.props)}function L(t){return typeof t=="object"&&t!==null&&t.$$typeof===c}function V(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(o){return e[o]})}var W=/\/+/g;function q(t,e){return typeof t=="object"&&t!==null&&t.key!=null?V(""+t.key):e.toString(36)}function J(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(O,O):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function m(t,e,o,r,u){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(s){case"bigint":case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case c:case p:i=!0;break;case w:return i=t._init,m(i(t._payload),e,o,r,u)}}if(i)return u=u(t),i=r===""?"."+q(t,0):r,U(u)?(o="",i!=null&&(o=i.replace(W,"$&/")+"/"),m(u,e,o,"",function(et){return et})):u!=null&&(L(u)&&(u=Q(u,o+(u.key==null||t&&t.key===u.key?"":(""+u.key).replace(W,"$&/")+"/")+i)),e.push(u)),1;i=0;var d=r===""?".":r+":";if(U(t))for(var l=0;l<t.length;l++)r=t[l],s=d+q(r,l),i+=m(r,e,o,s,u);else if(l=S(t),typeof l=="function")for(t=l.call(t),l=0;!(r=t.next()).done;)r=r.value,s=d+q(r,l++),i+=m(r,e,o,s,u);else if(s==="object"){if(typeof t.then=="function")return m(J(t),e,o,r,u);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return i}function A(t,e,o){if(t==null)return t;var r=[],u=0;return m(t,r,"","",function(s){return e.call(o,s,u++)}),r}function F(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(o){(t._status===0||t._status===-1)&&(t._status=1,t._result=o)},function(o){(t._status===0||t._status===-1)&&(t._status=2,t._result=o)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var B=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},tt={map:A,forEach:function(t,e,o){A(t,function(){e.apply(this,arguments)},o)},count:function(t){var e=0;return A(t,function(){e++}),e},toArray:function(t){return A(t,function(e){return e})||[]},only:function(t){if(!L(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};return n.Activity=N,n.Children=tt,n.Component=v,n.Fragment=y,n.Profiler=E,n.PureComponent=P,n.StrictMode=h,n.Suspense=j,n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.__COMPILER_RUNTIME={__proto__:null,c:function(t){return a.H.useMemoCache(t)}},n.cache=function(t){return function(){return t.apply(null,arguments)}},n.cacheSignal=function(){return null},n.cloneElement=function(t,e,o){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=x({},t.props),u=t.key;if(e!=null)for(s in e.key!==void 0&&(u=""+e.key),e)!D.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(r[s]=e[s]);var s=arguments.length-2;if(s===1)r.children=o;else if(1<s){for(var i=Array(s),d=0;d<s;d++)i[d]=arguments[d+2];r.children=i}return H(t.type,u,r)},n.createContext=function(t){return t={$$typeof:$,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:_,_context:t},t},n.createElement=function(t,e,o){var r,u={},s=null;if(e!=null)for(r in e.key!==void 0&&(s=""+e.key),e)D.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(u[r]=e[r]);var i=arguments.length-2;if(i===1)u.children=o;else if(1<i){for(var d=Array(i),l=0;l<i;l++)d[l]=arguments[l+2];u.children=d}if(t&&t.defaultProps)for(r in i=t.defaultProps,i)u[r]===void 0&&(u[r]=i[r]);return H(t,s,u)},n.createRef=function(){return{current:null}},n.forwardRef=function(t){return{$$typeof:M,render:t}},n.isValidElement=L,n.lazy=function(t){return{$$typeof:w,_payload:{_status:-1,_result:t},_init:F}},n.memo=function(t,e){return{$$typeof:C,type:t,compare:e===void 0?null:e}},n.startTransition=function(t){var e=a.T,o={};a.T=o;try{var r=t(),u=a.S;u!==null&&u(o,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(O,B)}catch(s){B(s)}finally{e!==null&&o.types!==null&&(e.types=o.types),a.T=e}},n.unstable_useCacheRefresh=function(){return a.H.useCacheRefresh()},n.use=function(t){return a.H.use(t)},n.useActionState=function(t,e,o){return a.H.useActionState(t,e,o)},n.useCallback=function(t,e){return a.H.useCallback(t,e)},n.useContext=function(t){return a.H.useContext(t)},n.useDebugValue=function(){},n.useDeferredValue=function(t,e){return a.H.useDeferredValue(t,e)},n.useEffect=function(t,e){return a.H.useEffect(t,e)},n.useEffectEvent=function(t){return a.H.useEffectEvent(t)},n.useId=function(){return a.H.useId()},n.useImperativeHandle=function(t,e,o){return a.H.useImperativeHandle(t,e,o)},n.useInsertionEffect=function(t,e){return a.H.useInsertionEffect(t,e)},n.useLayoutEffect=function(t,e){return a.H.useLayoutEffect(t,e)},n.useMemo=function(t,e){return a.H.useMemo(t,e)},n.useOptimistic=function(t,e){return a.H.useOptimistic(t,e)},n.useReducer=function(t,e,o){return a.H.useReducer(t,e,o)},n.useRef=function(t){return a.H.useRef(t)},n.useState=function(t){return a.H.useState(t)},n.useSyncExternalStore=function(t,e,o){return a.H.useSyncExternalStore(t,e,o)},n.useTransition=function(){return a.H.useTransition()},n.version="19.2.8",n}var K;function ot(){return K||(K=1,I.exports=rt()),I.exports}var k=ot();const St=nt(k);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(...c)=>c.filter((p,y,h)=>!!p&&p.trim()!==""&&h.indexOf(p)===y).join(" ").trim();/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(p,y,h)=>h?h.toUpperCase():y.toLowerCase());/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=c=>{const p=st(c);return p.charAt(0).toUpperCase()+p.slice(1)};/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=c=>{for(const p in c)if(p.startsWith("aria-")||p==="role"||p==="title")return!0;return!1},at=k.createContext({}),it=()=>k.useContext(at),ft=k.forwardRef(({color:c,size:p,strokeWidth:y,absoluteStrokeWidth:h,className:E="",children:_,iconNode:$,...M},j)=>{const{size:C=24,strokeWidth:w=2,absoluteStrokeWidth:N=!1,color:g="currentColor",className:S=""}=it()??{},R=h??N?Number(y??w)*24/Number(p??C):y??w;return k.createElement("svg",{ref:j,...Y,width:p??C??Y.width,height:p??C??Y.height,stroke:c??g,strokeWidth:R,className:Z("lucide",S,E),...!_&&!ct(M)&&{"aria-hidden":"true"},...M},[...$.map(([x,T])=>k.createElement(x,T)),...Array.isArray(_)?_:[_]])});/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(c,p)=>{const y=k.forwardRef(({className:h,...E},_)=>k.createElement(ft,{ref:_,iconNode:p,className:Z(`lucide-${ut(X(c))}`,`lucide-${c}`,h),...E}));return y.displayName=X(c),y};/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Pt=f("arrow-down",pt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bt=f("arrow-right",lt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Ot=f("arrow-up",yt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Ht=f("award",ht);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],Lt=f("book-open",dt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],qt=f("bot",_t);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],It=f("calculator",kt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Yt=f("check",vt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],zt=f("chevron-right",mt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],Ut=f("circle-check",Et);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Dt=f("clock",Ct);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Wt=f("code-xml",wt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Bt=f("cpu",Mt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Gt=f("graduation-cap",gt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Kt=f("mail",Rt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Xt=f("map-pin",xt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Zt=f("menu",Tt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Qt=f("mic",At);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Vt=f("phone",$t);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Jt=f("sparkles",jt);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ft=f("x",Nt);export{Pt as A,Lt as B,Dt as C,Gt as G,Zt as M,Vt as P,St as R,Jt as S,Ft as X,k as a,Xt as b,Ut as c,Bt as d,Yt as e,bt as f,nt as g,Wt as h,It as i,Ht as j,Qt as k,qt as l,Kt as m,Ot as n,zt as o,ot as r};
