"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1406],{46430:function(E,v,o){o.r(v),o.d(v,{default:function(){return L}});var f=o(76693),a=o(50959),b=Object.defineProperty,y=(r,e,t)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,u=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);const d=(r,e)=>typeof getComputedStyle<"u"?getComputedStyle(r,null).getPropertyValue(e):r.style.getPropertyValue(e),w=r=>d(r,"overflow")+d(r,"overflow-y")+d(r,"overflow-x"),g=r=>{if(!(r instanceof HTMLElement))return window;let e=r;for(;e&&!(e===document.body||e===document.documentElement||!e.parentNode);){if(/(scroll|auto)/.test(w(e)))return e;e=e.parentNode}return window};class c extends a.Component{constructor(e){super(e),u(this,"elementObserver"),u(this,"wrapper"),u(this,"lazyLoadHandler",t=>{var n,l;const{onContentVisible:s}=this.props,[h]=t,{isIntersecting:p}=h;if(p){this.setState({visible:!0},()=>{s&&s()});const i=(n=this.wrapper)==null?void 0:n.current;i&&i instanceof HTMLElement&&((l=this.elementObserver)==null||l.unobserve(i))}}),this.elementObserver=null,this.wrapper=a.createRef(),this.state={visible:!1}}componentDidMount(){var e;this.getEventNode();const{offset:t,threshold:n}=this.props,l={rootMargin:typeof t=="number"?`${t}px`:t||"0px",threshold:n||0};this.elementObserver=new IntersectionObserver(this.lazyLoadHandler,l);const s=(e=this.wrapper)==null?void 0:e.current;s instanceof HTMLElement&&this.elementObserver.observe(s)}shouldComponentUpdate(e,t){return t.visible}componentWillUnmount(){var e,t;const n=(e=this.wrapper)==null?void 0:e.current;n&&n instanceof HTMLElement&&((t=this.elementObserver)==null||t.unobserve(n))}getEventNode(){var e;return g((e=this.wrapper)==null?void 0:e.current)}render(){const{children:e,className:t,height:n,width:l,elementType:s}=this.props,{visible:h}=this.state,p={height:n,width:l},i=`LazyLoad${h?" is-visible":""}${t?` ${t}`:""}`;return(0,a.createElement)(s||"div",{className:i,style:p,ref:this.wrapper},h&&a.Children.only(e))}}u(c,"defaultProps",{elementType:"div",className:"",offset:0,threshold:0,width:null,onContentVisible:null,height:null});var C=o(9183),m=o(11527),L=function(){var r=(0,f.pC)();return(0,m.jsx)(C.Z,{children:(0,m.jsx)(c,{offset:300,height:500,children:r})})}}}]);
