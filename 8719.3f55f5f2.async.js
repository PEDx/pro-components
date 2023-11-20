"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[8719],{88794:function(Se,_,e){e.d(_,{S:function(){return P}});var q=e(77117),a=e.n(q),me=e(21320),Q=e.n(me),ge=e(27566),r=e.n(ge),re=e(95530),oe=e.n(re),z=e(33059),ie=e(1793),L=e(84875),Ce=e.n(L),fe=e(71770),l=e(50959),J=e(10422),B=e(13082),y=e(65534),le=function(m){return Q()({},m.componentCls,{position:"fixed",insetInlineEnd:0,bottom:0,zIndex:99,display:"flex",alignItems:"center",width:"100%",paddingInline:24,paddingBlock:0,boxSizing:"border-box",lineHeight:"64px",backgroundColor:(0,y.uK)(m.colorBgElevated,.6),borderBlockStart:"1px solid ".concat(m.colorSplit),"-webkit-backdrop-filter":"blur(8px)",backdropFilter:"blur(8px)",color:m.colorText,transition:"all 0.2s ease 0s","&-left":{flex:1,color:m.colorText},"&-right":{color:m.colorText,"> *":{marginInlineEnd:8,"&:last-child":{marginBlock:0,marginInline:0}}}})};function K(X){return(0,y.Xj)("ProLayoutFooterToolbar",function(m){var R=a()(a()({},m),{},{componentCls:".".concat(X)});return[le(R)]})}function xe(X,m){var R=m.stylish;return(0,y.Xj)("ProLayoutFooterToolbarStylish",function(k){var A=a()(a()({},k),{},{componentCls:".".concat(X)});return R?[Q()({},"".concat(A.componentCls),R==null?void 0:R(A))]:[]})}var w=e(11527),ye=["children","className","extra","portalDom","style","renderContent"],P=function(m){var R=m.children,k=m.className,A=m.extra,Z=m.portalDom,he=Z===void 0?!0:Z,H=m.style,t=m.renderContent,s=oe()(m,ye),u=(0,l.useContext)(ie.ZP.ConfigContext),g=u.getPrefixCls,M=u.getTargetContainer,d=m.prefixCls||g("pro"),E="".concat(d,"-footer-bar"),ee=K(E),ne=ee.wrapSSR,de=ee.hashId,v=(0,l.useContext)(B.X),se=(0,l.useMemo)(function(){var n=v.hasSiderMenu,o=v.isMobile,c=v.siderWidth;if(n)return c?o?"100%":"calc(100% - ".concat(c,"px)"):"100%"},[v.collapsed,v.hasSiderMenu,v.isMobile,v.siderWidth]),ce=(0,l.useMemo)(function(){return(typeof window=="undefined"?"undefined":r()(window))===void 0||(typeof document=="undefined"?"undefined":r()(document))===void 0?null:(M==null?void 0:M())||document.body},[]),ue=xe("".concat(E,".").concat(E,"-stylish"),{stylish:m.stylish}),ve=(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"".concat(E,"-left ").concat(de).trim(),children:A}),(0,w.jsx)("div",{className:"".concat(E,"-right ").concat(de).trim(),children:R})]});(0,l.useEffect)(function(){return!v||!(v!=null&&v.setHasFooterToolbar)?function(){}:(v==null||v.setHasFooterToolbar(!0),function(){var n;v==null||(n=v.setHasFooterToolbar)===null||n===void 0||n.call(v,!1)})},[]);var j=(0,w.jsx)("div",a()(a()({className:Ce()(k,de,E,Q()({},"".concat(E,"-stylish"),!!m.stylish)),style:a()({width:se},H)},(0,fe.Z)(s,["prefixCls"])),{},{children:t?t(a()(a()(a()({},m),v),{},{leftWidth:se}),ve):ve})),S=!(0,z.j)()||!he||!ce?j:(0,J.createPortal)(j,ce,E);return ue.wrapSSR(ne((0,w.jsx)(l.Fragment,{children:S},E)))}},48180:function(Se,_,e){e.d(_,{f:function(){return l}});var q=e(21320),a=e.n(q),me=e(1793),Q=e(84875),ge=e.n(Q),r=e(50959),re=e(13082),oe=e(77117),z=e.n(oe),ie=e(65534),L=function(B){return a()({},B.componentCls,{width:"100%","&-wide":{maxWidth:1152,margin:"0 auto"}})};function Ce(J){return(0,ie.Xj)("ProLayoutGridContent",function(B){var y=z()(z()({},B),{},{componentCls:".".concat(J)});return[L(y)]})}var fe=e(11527),l=function(B){var y=(0,r.useContext)(re.X),le=B.children,K=B.contentWidth,xe=B.className,w=B.style,ye=(0,r.useContext)(me.ZP.ConfigContext),P=ye.getPrefixCls,X=B.prefixCls||P("pro"),m=K||y.contentWidth,R="".concat(X,"-grid-content"),k=Ce(R),A=k.wrapSSR,Z=k.hashId,he=m==="Fixed"&&y.layout==="top";return A((0,fe.jsx)("div",{className:ge()(R,Z,xe,a()({},"".concat(R,"-wide"),he)),style:w,children:(0,fe.jsx)("div",{className:"".concat(X,"-grid-content-children ").concat(Z).trim(),children:le})}))}},78719:function(Se,_,e){e.d(_,{_z:function(){return ve},H_:function(){return se},yy:function(){return j}});var q=e(21320),a=e.n(q),me=e(95530),Q=e.n(me),ge=e(77117),r=e.n(ge),re=e(27566),oe=e.n(re),z=e(75579),ie=e(34559),L=e(8609),Ce=e(23287),fe=e(1793),l=e(71367),J=e(84875),B=e.n(J),y=e(50959),le=e(13082),K=e(88794),xe=e(48180),w=e(54462),ye=e(86807),P=e(48398),X=e(28152),m=e.n(X),R=e(65534),k=[576,768,992,1200].map(function(S){return"@media (max-width: ".concat(S,"px)")}),A=m()(k,4),Z=A[0],he=A[1],H=A[2],t=A[3],s=function(n){var o,c,i,I,D,C,G,x,h,b,V,N,$,F,te,p,f,T,W,U,O;return a()({},n.componentCls,(O={position:"relative","&-children-container":{paddingBlockStart:0,paddingBlockEnd:(o=n.layout)===null||o===void 0||(o=o.pageContainer)===null||o===void 0?void 0:o.paddingBlockPageContainerContent,paddingInline:(c=n.layout)===null||c===void 0||(c=c.pageContainer)===null||c===void 0?void 0:c.paddingInlinePageContainerContent},"&-children-container-no-header":{paddingBlockStart:(i=n.layout)===null||i===void 0||(i=i.pageContainer)===null||i===void 0?void 0:i.paddingBlockPageContainerContent},"&-affix":a()({},"".concat(n.antCls,"-affix"),a()({},"".concat(n.componentCls,"-warp"),{backgroundColor:(I=n.layout)===null||I===void 0||(I=I.pageContainer)===null||I===void 0?void 0:I.colorBgPageContainerFixed,transition:"background-color 0.3s",boxShadow:"0 2px 8px #f0f1f2"}))},a()(O,"& &-warp-page-header",(W={paddingBlockStart:((D=(C=n.layout)===null||C===void 0||(C=C.pageContainer)===null||C===void 0?void 0:C.paddingBlockPageContainerContent)!==null&&D!==void 0?D:40)/4,paddingBlockEnd:((G=(x=n.layout)===null||x===void 0||(x=x.pageContainer)===null||x===void 0?void 0:x.paddingBlockPageContainerContent)!==null&&G!==void 0?G:40)/2,paddingInlineStart:(h=n.layout)===null||h===void 0||(h=h.pageContainer)===null||h===void 0?void 0:h.paddingInlinePageContainerContent,paddingInlineEnd:(b=n.layout)===null||b===void 0||(b=b.pageContainer)===null||b===void 0?void 0:b.paddingInlinePageContainerContent},a()(W,"& ~ ".concat(n.proComponentsCls,"-grid-content"),a()({},"".concat(n.proComponentsCls,"-page-container-children-content"),{paddingBlock:((V=(N=n.layout)===null||N===void 0||(N=N.pageContainer)===null||N===void 0?void 0:N.paddingBlockPageContainerContent)!==null&&V!==void 0?V:24)/3})),a()(W,"".concat(n.antCls,"-page-header-breadcrumb"),{paddingBlockStart:(($=(F=n.layout)===null||F===void 0||(F=F.pageContainer)===null||F===void 0?void 0:F.paddingBlockPageContainerContent)!==null&&$!==void 0?$:40)/4+10}),a()(W,"".concat(n.antCls,"-page-header-heading"),{paddingBlockStart:((te=(p=n.layout)===null||p===void 0||(p=p.pageContainer)===null||p===void 0?void 0:p.paddingBlockPageContainerContent)!==null&&te!==void 0?te:40)/4}),a()(W,"".concat(n.antCls,"-page-header-footer"),{marginBlockStart:((f=(T=n.layout)===null||T===void 0||(T=T.pageContainer)===null||T===void 0?void 0:T.paddingBlockPageContainerContent)!==null&&f!==void 0?f:40)/4}),W)),a()(O,"&-detail",a()({display:"flex"},Z,{display:"block"})),a()(O,"&-main",{width:"100%"}),a()(O,"&-row",a()({display:"flex",width:"100%"},he,{display:"block"})),a()(O,"&-content",{flex:"auto",width:"100%"}),a()(O,"&-extraContent",(U={flex:"0 1 auto",minWidth:"242px",marginInlineStart:88,textAlign:"end"},a()(U,t,{marginInlineStart:44}),a()(U,H,{marginInlineStart:20}),a()(U,he,{marginInlineStart:0,textAlign:"start"}),a()(U,Z,{marginInlineStart:0}),U)),O))};function u(S,n){return(0,R.Xj)("ProLayoutPageContainer",function(o){var c,i=r()(r()({},o),{},{componentCls:".".concat(S),layout:r()(r()({},o==null?void 0:o.layout),{},{pageContainer:r()(r()({},o==null||(c=o.layout)===null||c===void 0?void 0:c.pageContainer),n)})});return[s(i)]})}function g(S,n){var o=n.stylish;return(0,R.Xj)("ProLayoutPageContainerStylish",function(c){var i=r()(r()({},c),{},{componentCls:".".concat(S)});return o?[a()({},"div".concat(i.componentCls),o==null?void 0:o(i))]:[]})}var M=e(75787),d=e(11527),E=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","childrenContentStyle","style","prefixCls","hashId","value","breadcrumbRender"],ee=["children","loading","className","style","footer","affixProps","token","fixedHeader","breadcrumbRender","footerToolBarProps","childrenContentStyle"];function ne(S){return oe()(S)==="object"?S:{spinning:S}}var de=function(n){var o=n.tabList,c=n.tabActiveKey,i=n.onTabChange,I=n.hashId,D=n.tabBarExtraContent,C=n.tabProps,G=n.prefixedClassName;return Array.isArray(o)||D?(0,d.jsx)(ie.Z,r()(r()({className:"".concat(G,"-tabs ").concat(I).trim(),activeKey:c,onChange:function(h){i&&i(h)},tabBarExtraContent:D,items:o==null?void 0:o.map(function(x,h){var b;return r()(r()({label:x.tab},x),{},{key:((b=x.key)===null||b===void 0?void 0:b.toString())||(h==null?void 0:h.toString())})})},C),{},{children:(0,M.n)(L.Z,"4.23.0")<0?o==null?void 0:o.map(function(x,h){return(0,d.jsx)(ie.Z.TabPane,r()({tab:x.tab},x),x.key||h)}):null})):null},v=function(n,o,c,i){return!n&&!o?null:(0,d.jsx)("div",{className:"".concat(c,"-detail ").concat(i).trim(),children:(0,d.jsx)("div",{className:"".concat(c,"-main ").concat(i).trim(),children:(0,d.jsxs)("div",{className:"".concat(c,"-row ").concat(i).trim(),children:[n&&(0,d.jsx)("div",{className:"".concat(c,"-content ").concat(i).trim(),children:n}),o&&(0,d.jsx)("div",{className:"".concat(c,"-extraContent ").concat(i).trim(),children:o})]})})})},se=function(n){var o=(0,y.useContext)(le.X);return(0,d.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:(0,d.jsx)(Ce.Z,r()(r()(r()({},o==null?void 0:o.breadcrumb),o==null?void 0:o.breadcrumbProps),n))})},ce=function(n){var o,c=n.title,i=n.content,I=n.pageHeaderRender,D=n.header,C=n.prefixedClassName,G=n.extraContent,x=n.childrenContentStyle,h=n.style,b=n.prefixCls,V=n.hashId,N=n.value,$=n.breadcrumbRender,F=Q()(n,E),te=function(){if($)return $};if(I===!1)return null;if(I)return(0,d.jsxs)(d.Fragment,{children:[" ",I(r()(r()({},n),N))]});var p=c;!c&&c!==!1&&(p=N.title);var f=r()(r()(r()({},N),{},{title:p},F),{},{footer:de(r()(r()({},F),{},{hashId:V,breadcrumbRender:$,prefixedClassName:C}))},D),T=f,W=T.breadcrumb,U=(!W||!(W!=null&&W.itemRender)&&!(W!=null&&(o=W.items)!==null&&o!==void 0&&o.length))&&!$;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(O){return!f[O]})&&U&&!i&&!G?null:(0,d.jsx)(w.m,r()(r()({},f),{},{className:"".concat(C,"-warp-page-header ").concat(V).trim(),breadcrumb:$===!1?void 0:r()(r()({},f.breadcrumb),N.breadcrumbProps),breadcrumbRender:te(),prefixCls:b,children:(D==null?void 0:D.children)||v(i,G,C,V)}))},ue=function(n){var o,c,i,I=n.children,D=n.loading,C=D===void 0?!1:D,G=n.className,x=n.style,h=n.footer,b=n.affixProps,V=n.token,N=n.fixedHeader,$=n.breadcrumbRender,F=n.footerToolBarProps,te=n.childrenContentStyle,p=Q()(n,ee),f=(0,y.useContext)(le.X);(0,y.useEffect)(function(){var ae;return!f||!(f!=null&&f.setHasPageContainer)?function(){}:(f==null||(ae=f.setHasPageContainer)===null||ae===void 0||ae.call(f,function(Pe){return Pe+1}),function(){var Pe;f==null||(Pe=f.setHasPageContainer)===null||Pe===void 0||Pe.call(f,function(Ne){return Ne-1})})},[]);var T=(0,y.useContext)(z.L_),W=T.token,U=(0,y.useContext)(fe.ZP.ConfigContext),O=U.getPrefixCls,be=n.prefixCls||O("pro"),Y="".concat(be,"-page-container"),Be=u(Y,V),De=Be.wrapSSR,pe=Be.hashId,Te=g("".concat(Y,".").concat(Y,"-stylish"),{stylish:n.stylish}),He=(0,y.useMemo)(function(){var ae;return $==!1?!1:$||(p==null||(ae=p.header)===null||ae===void 0?void 0:ae.breadcrumbRender)},[$,p==null||(o=p.header)===null||o===void 0?void 0:o.breadcrumbRender]),je=ce(r()(r()({},p),{},{breadcrumbRender:He,ghost:!0,hashId:pe,prefixCls:void 0,prefixedClassName:Y,value:f})),Ee=(0,y.useMemo)(function(){if(y.isValidElement(C))return C;if(typeof C=="boolean"&&!C)return null;var ae=ne(C);return ae.spinning?(0,d.jsx)(ye.S,r()({},ae)):null},[C]),Ie=(0,y.useMemo)(function(){return I?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:B()(pe,"".concat(Y,"-children-container"),a()({},"".concat(Y,"-children-container-no-header"),!je)),style:te,children:I})}):null},[I,Y,te,pe]),Re=(0,y.useMemo)(function(){var ae=Ee||Ie;if(n.waterMarkProps||f.waterMarkProps){var Pe=r()(r()({},f.waterMarkProps),n.waterMarkProps);return(0,d.jsx)(P.D,r()(r()({},Pe),{},{children:ae}))}return ae},[n.waterMarkProps,f.waterMarkProps,Ee,Ie]),Me=B()(Y,pe,G,(c={},a()(c,"".concat(Y,"-with-footer"),h),a()(c,"".concat(Y,"-with-affix"),N&&je),a()(c,"".concat(Y,"-stylish"),!!p.stylish),c));return De(Te.wrapSSR((0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{style:x,className:Me,children:[N&&je?(0,d.jsx)(l.Z,r()(r()({offsetTop:f.hasHeader&&f.fixedHeader?(i=W.layout)===null||i===void 0||(i=i.header)===null||i===void 0?void 0:i.heightLayoutHeader:1},b),{},{className:"".concat(Y,"-affix ").concat(pe).trim(),children:(0,d.jsx)("div",{className:"".concat(Y,"-warp ").concat(pe).trim(),children:je})})):je,Re&&(0,d.jsx)(xe.f,{children:Re})]}),h&&(0,d.jsx)(K.S,r()(r()({stylish:p.footerStylish,prefixCls:be},F),{},{children:h}))]})))},ve=function(n){return(0,d.jsx)(z._Y,{needDeps:!0,children:(0,d.jsx)(ue,r()({},n))})},j=function(n){var o=(0,y.useContext)(le.X);return ce(r()(r()({},n),{},{hashId:"",value:o}))}},54462:function(Se,_,e){e.d(_,{m:function(){return he}});var q=e(21320),a=e.n(q),me=e(28152),Q=e.n(me),ge=e(77117),r=e.n(ge),re=e(83964),oe=e.n(re),z=e(38532),ie=e.n(z),L=e(23287),Ce=e(30674),fe=e(80233),l=e(1793),J=e(84875),B=e.n(J),y=e(96226),le=e(50959),K=e(65534),xe=function(){return{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},w=function(t){var s,u,g;return a()({},t.componentCls,r()(r()({},K.Wf===null||K.Wf===void 0?void 0:(0,K.Wf)(t)),{},(g={position:"relative",backgroundColor:t.pageHeaderBgGhost,paddingBlock:t.pageHeaderPaddingVertical+2,paddingInline:t.pageHeaderPadding,"&-no-children":{height:(s=t.layout)===null||s===void 0||(s=s.pageContainer)===null||s===void 0?void 0:s.paddingBlockPageContainerContent},"& &-has-breadcrumb":{paddingBlockStart:t.pageHeaderPaddingBreadCrumb},"& &-has-footer":{paddingBlockEnd:0},"& &-back":a()({marginInlineEnd:t.margin,fontSize:16,lineHeight:1,"&-button":r()(r()({fontSize:16},K.Nd===null||K.Nd===void 0?void 0:(0,K.Nd)(t)),{},{color:t.pageHeaderColorBack,cursor:"pointer"})},"".concat(t.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:0})},a()(g,"& ".concat("ant","-divider-vertical"),{height:14,marginBlock:0,marginInline:t.marginSM,verticalAlign:"middle"}),a()(g,"& &-breadcrumb + &-heading",{marginBlockStart:t.marginXS}),a()(g,"& &-heading",{display:"flex",justifyContent:"space-between","&-left":{display:"flex",alignItems:"center",marginBlock:t.marginXS/2,marginInlineEnd:0,marginInlineStart:0,overflow:"hidden"},"&-title":r()(r()({marginInlineEnd:t.marginSM,marginBlockEnd:0,color:t.colorTextHeading,fontWeight:600,fontSize:t.pageHeaderFontSizeHeaderTitle,lineHeight:t.controlHeight+"px"},xe()),{},a()({},"".concat(t.componentCls,"-rlt &"),{marginInlineEnd:0,marginInlineStart:t.marginSM})),"&-avatar":a()({marginInlineEnd:t.marginSM},"".concat(t.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:t.marginSM}),"&-tags":a()({},"".concat(t.componentCls,"-rlt &"),{float:"right"}),"&-sub-title":r()(r()({marginInlineEnd:t.marginSM,color:t.colorTextSecondary,fontSize:t.pageHeaderFontSizeHeaderSubTitle,lineHeight:t.lineHeight},xe()),{},a()({},"".concat(t.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:12})),"&-extra":(u={marginBlock:t.marginXS/2,marginInlineEnd:0,marginInlineStart:0,whiteSpace:"nowrap","> *":a()({"white-space":"unset"},"".concat(t.componentCls,"-rlt &"),{marginInlineEnd:t.marginSM,marginInlineStart:0})},a()(u,"".concat(t.componentCls,"-rlt &"),{float:"left"}),a()(u,"*:first-child",a()({},"".concat(t.componentCls,"-rlt &"),{marginInlineEnd:0})),u)}),a()(g,"&-content",{paddingBlockStart:t.pageHeaderPaddingContentPadding}),a()(g,"&-footer",{marginBlockStart:t.margin}),a()(g,"&-compact &-heading",{flexWrap:"wrap"}),a()(g,"&-wide",{maxWidth:1152,margin:"0 auto"}),a()(g,"&-rtl",{direction:"rtl"}),g)))};function ye(H){return(0,K.Xj)("ProLayoutPageHeader",function(t){var s=r()(r()({},t),{},{componentCls:".".concat(H),pageHeaderBgGhost:"transparent",pageHeaderPadding:16,pageHeaderPaddingVertical:4,pageHeaderPaddingBreadCrumb:t.paddingSM,pageHeaderColorBack:t.colorTextHeading,pageHeaderFontSizeHeaderTitle:t.fontSizeHeading4,pageHeaderFontSizeHeaderSubTitle:14,pageHeaderPaddingContentPadding:t.paddingSM});return[w(s)]})}var P=e(11527),X=function(t,s,u,g){return!u||!g?null:(0,P.jsx)("div",{className:"".concat(t,"-back ").concat(s).trim(),children:(0,P.jsx)("div",{role:"button",onClick:function(d){g==null||g(d)},className:"".concat(t,"-back-button ").concat(s).trim(),"aria-label":"back",children:u})})},m=function(t,s){var u;return(u=t.items)!==null&&u!==void 0&&u.length?(0,P.jsx)(L.Z,r()(r()({},t),{},{className:B()("".concat(s,"-breadcrumb"),t.className)})):null},R=function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return t.backIcon!==void 0?t.backIcon:s==="rtl"?(0,P.jsx)(ie(),{}):(0,P.jsx)(oe(),{})},k=function(t,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",g=arguments.length>3?arguments[3]:void 0,M=s.title,d=s.avatar,E=s.subTitle,ee=s.tags,ne=s.extra,de=s.onBack,v="".concat(t,"-heading"),se=M||E||ee||ne;if(!se)return null;var ce=R(s,u),ue=X(t,g,ce,de),ve=ue||d||se;return(0,P.jsxs)("div",{className:v+" "+g,children:[ve&&(0,P.jsxs)("div",{className:"".concat(v,"-left ").concat(g).trim(),children:[ue,d&&(0,P.jsx)(Ce.C,r()({className:B()("".concat(v,"-avatar"),g,d.className)},d)),M&&(0,P.jsx)("span",{className:"".concat(v,"-title ").concat(g).trim(),title:typeof M=="string"?M:void 0,children:M}),E&&(0,P.jsx)("span",{className:"".concat(v,"-sub-title ").concat(g).trim(),title:typeof E=="string"?E:void 0,children:E}),ee&&(0,P.jsx)("span",{className:"".concat(v,"-tags ").concat(g).trim(),children:ee})]}),ne&&(0,P.jsx)("span",{className:"".concat(v,"-extra ").concat(g).trim(),children:(0,P.jsx)(fe.Z,{children:ne})})]})},A=function(t,s,u){return s?(0,P.jsx)("div",{className:"".concat(t,"-footer ").concat(u).trim(),children:s}):null},Z=function(t,s,u){return(0,P.jsx)("div",{className:"".concat(t,"-content ").concat(u).trim(),children:s})},he=function(t){var s,u,g=le.useState(!1),M=Q()(g,2),d=M[0],E=M[1],ee=function(f){var T=f.width;return E(T<768)},ne=le.useContext(l.ZP.ConfigContext),de=ne.getPrefixCls,v=ne.direction,se=t.prefixCls,ce=t.style,ue=t.footer,ve=t.children,j=t.breadcrumb,S=t.breadcrumbRender,n=t.className,o=t.contentWidth,c=t.layout,i=de("page-header",se),I=ye(i),D=I.wrapSSR,C=I.hashId,G=function(){return j&&!(j!=null&&j.items)&&j!==null&&j!==void 0&&j.routes&&(j.items=j.routes),j!=null&&j.items?m(j,i):null},x=G(),h=j&&"props"in j,b=(s=S==null?void 0:S(r()(r()({},t),{},{prefixCls:i}),x))!==null&&s!==void 0?s:x,V=h?j:b,N=B()(i,C,n,(u={},a()(u,"".concat(i,"-has-breadcrumb"),!!V),a()(u,"".concat(i,"-has-footer"),!!ue),a()(u,"".concat(i,"-rtl"),v==="rtl"),a()(u,"".concat(i,"-compact"),d),a()(u,"".concat(i,"-wide"),o==="Fixed"&&c=="top"),a()(u,"".concat(i,"-ghost"),!0),u)),$=k(i,t,v,C),F=ve&&Z(i,ve,C),te=A(i,ue,C);return!V&&!$&&!te&&!F?(0,P.jsx)("div",{className:B()(C,["".concat(i,"-no-children")])}):D((0,P.jsx)(y.Z,{onResize:ee,children:(0,P.jsxs)("div",{className:N,style:ce,children:[V,$,F,te]})}))}},86807:function(Se,_,e){e.d(_,{S:function(){return z}});var q=e(77117),a=e.n(q),me=e(95530),Q=e.n(me),ge=e(86898),r=e(50959),re=e(11527),oe=["isLoading","pastDelay","timedOut","error","retry"],z=function(L){var Ce=L.isLoading,fe=L.pastDelay,l=L.timedOut,J=L.error,B=L.retry,y=Q()(L,oe);return(0,re.jsx)("div",{style:{paddingBlockStart:100,textAlign:"center"},children:(0,re.jsx)(ge.Z,a()({size:"large"},y))})}},48398:function(Se,_,e){e.d(_,{D:function(){return Ce}});var q=e(77117),a=e.n(q),me=e(28152),Q=e.n(me),ge=e(65534),r=e(1793),re=e(84875),oe=e.n(re),z=e(50959),ie=e(11527),L=function(l){if(!l)return 1;var J=l.backingStorePixelRatio||l.webkitBackingStorePixelRatio||l.mozBackingStorePixelRatio||l.msBackingStorePixelRatio||l.oBackingStorePixelRatio||1;return(window.devicePixelRatio||1)/J},Ce=function(l){var J=(0,ge.dQ)(),B=J.token,y=l.children,le=l.style,K=l.className,xe=l.markStyle,w=l.markClassName,ye=l.zIndex,P=ye===void 0?9:ye,X=l.gapX,m=X===void 0?212:X,R=l.gapY,k=R===void 0?222:R,A=l.width,Z=A===void 0?120:A,he=l.height,H=he===void 0?64:he,t=l.rotate,s=t===void 0?-22:t,u=l.image,g=l.offsetLeft,M=l.offsetTop,d=l.fontStyle,E=d===void 0?"normal":d,ee=l.fontWeight,ne=ee===void 0?"normal":ee,de=l.fontColor,v=de===void 0?B.colorFill:de,se=l.fontSize,ce=se===void 0?16:se,ue=l.fontFamily,ve=ue===void 0?"sans-serif":ue,j=l.prefixCls,S=(0,z.useContext)(r.ZP.ConfigContext),n=S.getPrefixCls,o=n("pro-layout-watermark",j),c=oe()("".concat(o,"-wrapper"),K),i=oe()(o,w),I=(0,z.useState)(""),D=Q()(I,2),C=D[0],G=D[1];return(0,z.useEffect)(function(){var x=document.createElement("canvas"),h=x.getContext("2d"),b=L(h),V="".concat((m+Z)*b,"px"),N="".concat((k+H)*b,"px"),$=g||m/2,F=M||k/2;if(x.setAttribute("width",V),x.setAttribute("height",N),!h){console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas");return}h.translate($*b,F*b),h.rotate(Math.PI/180*Number(s));var te=Z*b,p=H*b,f=function(U){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,be=Number(ce)*b;h.font="".concat(E," normal ").concat(ne," ").concat(be,"px/").concat(p,"px ").concat(ve),h.fillStyle=v,Array.isArray(U)?U==null||U.forEach(function(Y,Be){return h.fillText(Y,0,Be*be+O)}):h.fillText(U,0,O?O+be:0),G(x.toDataURL())};if(u){var T=new Image;T.crossOrigin="anonymous",T.referrerPolicy="no-referrer",T.src=u,T.onload=function(){if(h.drawImage(T,0,0,te,p),G(x.toDataURL()),l.content){f(l.content,T.height+8);return}};return}if(l.content){f(l.content);return}},[m,k,g,M,s,E,ne,Z,H,ve,v,u,l.content,ce]),(0,ie.jsxs)("div",{style:a()({position:"relative"},le),className:c,children:[y,(0,ie.jsx)("div",{className:i,style:a()(a()({zIndex:P,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(m+Z,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},C?{backgroundImage:"url('".concat(C,"')")}:{}),xe)})]})}},13082:function(Se,_,e){e.d(_,{X:function(){return a}});var q=e(50959),a=(0,q.createContext)({})}}]);
