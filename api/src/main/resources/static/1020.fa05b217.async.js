(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1020],{49101:function(fe,X,s){"use strict";s.d(X,{Z:function(){return _}});var U=s(28991),v=s(67294),t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},u=t,te=s(27029),ae=function(P,q){return v.createElement(te.Z,(0,U.Z)((0,U.Z)({},P),{},{ref:q,icon:u}))};ae.displayName="PlusOutlined";var _=v.forwardRef(ae)},31930:function(){},25414:function(){},81643:function(fe,X,s){"use strict";s.d(X,{Z:function(){return U}});var U=function(t){if(!t)return null;var u=typeof t=="function";return u?t():t}},25378:function(fe,X,s){"use strict";var U=s(28481),v=s(67294),t=s(24308);function u(){var te=(0,v.useState)({}),ae=(0,U.Z)(te,2),_=ae[0],ne=ae[1];return(0,v.useEffect)(function(){var P=t.ZP.subscribe(function(q){ne(q)});return function(){return t.ZP.unsubscribe(P)}},[]),_}X.Z=u},55241:function(fe,X,s){"use strict";var U=s(22122),v=s(67294),t=s(69713),u=s(65632),te=s(81643),ae=s(33603),_=function(P,q){var ce={};for(var j in P)Object.prototype.hasOwnProperty.call(P,j)&&q.indexOf(j)<0&&(ce[j]=P[j]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var J=0,j=Object.getOwnPropertySymbols(P);J<j.length;J++)q.indexOf(j[J])<0&&Object.prototype.propertyIsEnumerable.call(P,j[J])&&(ce[j[J]]=P[j[J]]);return ce},ne=v.forwardRef(function(P,q){var ce=P.prefixCls,j=P.title,J=P.content,re=_(P,["prefixCls","title","content"]),Re=v.useContext(u.E_),he=Re.getPrefixCls,ke=function(pe){return v.createElement(v.Fragment,null,j&&v.createElement("div",{className:"".concat(pe,"-title")},(0,te.Z)(j)),v.createElement("div",{className:"".concat(pe,"-inner-content")},(0,te.Z)(J)))},V=he("popover",ce),Be=he();return v.createElement(t.Z,(0,U.Z)({},re,{prefixCls:V,ref:q,overlay:ke(V),transitionName:(0,ae.m)(Be,"zoom-big",re.transitionName)}))});ne.displayName="Popover",ne.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}},X.Z=ne},20136:function(fe,X,s){"use strict";var U=s(38663),v=s.n(U),t=s(31930),u=s.n(t)},51752:function(fe,X,s){"use strict";s.d(X,{Z:function(){return ra}});var U=s(22122),v=s(96156),t=s(67294),u=s(28481),te=s(90484),ae=s(81253),_=s(28991),ne=s(94184),P=s.n(ne),q=s(50344),ce=s(31131),j=s(21770),J=s(85061),re=s(75164),Re=s(4084);function he(e){var i=(0,t.useRef)(),n=(0,t.useRef)(!1);function r(){for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];n.current||(re.Z.cancel(i.current),i.current=(0,re.Z)(function(){e.apply(void 0,o)}))}return(0,t.useEffect)(function(){return function(){n.current=!0,re.Z.cancel(i.current)}},[]),r}function ke(e){var i=(0,t.useRef)([]),n=(0,t.useState)({}),r=(0,u.Z)(n,2),a=r[1],o=(0,t.useRef)(typeof e=="function"?e():e),c=he(function(){var l=o.current;i.current.forEach(function(y){l=y(l)}),i.current=[],o.current=l,a({})});function d(l){i.current.push(l),c()}return[o.current,d]}var V=s(15105);function Be(e,i){var n,r=e.prefixCls,a=e.id,o=e.active,c=e.tab,d=c.key,l=c.tab,y=c.disabled,E=c.closeIcon,f=e.closable,C=e.renderWrapper,N=e.removeAriaLabel,T=e.editable,b=e.onClick,w=e.onRemove,K=e.onFocus,D=e.style,h="".concat(r,"-tab");t.useEffect(function(){return w},[]);var x=T&&f!==!1&&!y;function $(R){y||b(R)}function M(R){R.preventDefault(),R.stopPropagation(),T.onEdit("remove",{key:d,event:R})}var z=t.createElement("div",{key:d,ref:i,className:P()(h,(n={},(0,v.Z)(n,"".concat(h,"-with-remove"),x),(0,v.Z)(n,"".concat(h,"-active"),o),(0,v.Z)(n,"".concat(h,"-disabled"),y),n)),style:D,onClick:$},t.createElement("div",{role:"tab","aria-selected":o,id:a&&"".concat(a,"-tab-").concat(d),className:"".concat(h,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(d),"aria-disabled":y,tabIndex:y?null:0,onClick:function(p){p.stopPropagation(),$(p)},onKeyDown:function(p){[V.Z.SPACE,V.Z.ENTER].includes(p.which)&&(p.preventDefault(),$(p))},onFocus:K},l),x&&t.createElement("button",{type:"button","aria-label":N||"remove",tabIndex:0,className:"".concat(h,"-remove"),onClick:function(p){p.stopPropagation(),M(p)}},E||T.removeIcon||"\xD7"));return C?C(z):z}var Je=t.forwardRef(Be),pe={width:0,height:0,left:0,top:0};function Wt(e,i,n){return(0,t.useMemo)(function(){for(var r,a=new Map,o=i.get((r=e[0])===null||r===void 0?void 0:r.key)||pe,c=o.left+o.width,d=0;d<e.length;d+=1){var l=e[d].key,y=i.get(l);if(!y){var E;y=i.get((E=e[d-1])===null||E===void 0?void 0:E.key)||pe}var f=a.get(l)||(0,_.Z)({},y);f.right=c-f.left-f.width,a.set(l,f)}return a},[e.map(function(r){return r.key}).join("_"),i,n])}var Qe={width:0,height:0,left:0,top:0,right:0};function wt(e,i,n,r,a){var o=a.tabs,c=a.tabPosition,d=a.rtl,l,y,E;["top","bottom"].includes(c)?(l="width",y=d?"right":"left",E=Math.abs(i.left)):(l="height",y="top",E=-i.top);var f=i[l],C=n[l],N=r[l],T=f;return C+N>f&&(T=f-N),(0,t.useMemo)(function(){if(!o.length)return[0,0];for(var b=o.length,w=b,K=0;K<b;K+=1){var D=e.get(o[K].key)||Qe;if(D[y]+D[l]>E+T){w=K-1;break}}for(var h=0,x=b-1;x>=0;x-=1){var $=e.get(o[x].key)||Qe;if($[y]<E){h=x+1;break}}return[h,w]},[e,E,T,c,o.map(function(b){return b.key}).join("_"),d])}var qe=s(10985),kt=s(70271);function Bt(e,i){var n=e.prefixCls,r=e.editable,a=e.locale,o=e.style;return!r||r.showAdd===!1?null:t.createElement("button",{ref:i,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(a==null?void 0:a.addAriaLabel)||"Add tab",onClick:function(d){r.onEdit("add",{event:d})}},r.addIcon||"+")}var et=t.forwardRef(Bt);function _t(e,i){var n=e.prefixCls,r=e.id,a=e.tabs,o=e.locale,c=e.mobile,d=e.moreIcon,l=d===void 0?"More":d,y=e.moreTransitionName,E=e.style,f=e.className,C=e.editable,N=e.tabBarGutter,T=e.rtl,b=e.onTabClick,w=(0,t.useState)(!1),K=(0,u.Z)(w,2),D=K[0],h=K[1],x=(0,t.useState)(null),$=(0,u.Z)(x,2),M=$[0],z=$[1],R="".concat(r,"-more-popup"),p="".concat(n,"-dropdown"),I=M!==null?"".concat(R,"-").concat(M):null,A=o==null?void 0:o.dropdownAriaLabel,m=t.createElement(qe.ZP,{onClick:function(k){var F=k.key,G=k.domEvent;b(F,G),h(!1)},id:R,tabIndex:-1,role:"listbox","aria-activedescendant":I,selectedKeys:[M],"aria-label":A!==void 0?A:"expanded dropdown"},a.map(function(O){return t.createElement(qe.sN,{key:O.key,id:"".concat(R,"-").concat(O.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(O.key),disabled:O.disabled},O.tab)}));function Z(O){for(var k=a.filter(function(se){return!se.disabled}),F=k.findIndex(function(se){return se.key===M})||0,G=k.length,ie=0;ie<G;ie+=1){F=(F+O+G)%G;var Q=k[F];if(!Q.disabled){z(Q.key);return}}}function L(O){var k=O.which;if(!D){[V.Z.DOWN,V.Z.SPACE,V.Z.ENTER].includes(k)&&(h(!0),O.preventDefault());return}switch(k){case V.Z.UP:Z(-1),O.preventDefault();break;case V.Z.DOWN:Z(1),O.preventDefault();break;case V.Z.ESC:h(!1);break;case V.Z.SPACE:case V.Z.ENTER:M!==null&&b(M,O);break}}(0,t.useEffect)(function(){var O=document.getElementById(I);O&&O.scrollIntoView&&O.scrollIntoView(!1)},[M]),(0,t.useEffect)(function(){D||z(null)},[D]);var W=(0,v.Z)({},T?"marginRight":"marginLeft",N);a.length||(W.visibility="hidden",W.order=1);var oe=P()((0,v.Z)({},"".concat(p,"-rtl"),T)),ue=c?null:t.createElement(kt.Z,{prefixCls:p,overlay:m,trigger:["hover"],visible:D,transitionName:y,onVisibleChange:h,overlayClassName:oe,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:W,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":R,id:"".concat(r,"-more"),"aria-expanded":D,onKeyDown:L},l));return t.createElement("div",{className:P()("".concat(n,"-nav-operations"),f),style:E,ref:i},ue,t.createElement(et,{prefixCls:n,locale:o,editable:C}))}var Kt=t.forwardRef(_t),_e=(0,t.createContext)(null),$t=.1,tt=.01,Ze=20,at=Math.pow(.995,Ze);function Ht(e,i){var n=(0,t.useState)(),r=(0,u.Z)(n,2),a=r[0],o=r[1],c=(0,t.useState)(0),d=(0,u.Z)(c,2),l=d[0],y=d[1],E=(0,t.useState)(0),f=(0,u.Z)(E,2),C=f[0],N=f[1],T=(0,t.useState)(),b=(0,u.Z)(T,2),w=b[0],K=b[1],D=(0,t.useRef)();function h(p){var I=p.touches[0],A=I.screenX,m=I.screenY;o({x:A,y:m}),window.clearInterval(D.current)}function x(p){if(!!a){p.preventDefault();var I=p.touches[0],A=I.screenX,m=I.screenY;o({x:A,y:m});var Z=A-a.x,L=m-a.y;i(Z,L);var W=Date.now();y(W),N(W-l),K({x:Z,y:L})}}function $(){if(!!a&&(o(null),K(null),w)){var p=w.x/C,I=w.y/C,A=Math.abs(p),m=Math.abs(I);if(Math.max(A,m)<$t)return;var Z=p,L=I;D.current=window.setInterval(function(){if(Math.abs(Z)<tt&&Math.abs(L)<tt){window.clearInterval(D.current);return}Z*=at,L*=at,i(Z*Ze,L*Ze)},Ze)}}var M=(0,t.useRef)();function z(p){var I=p.deltaX,A=p.deltaY,m=0,Z=Math.abs(I),L=Math.abs(A);Z===L?m=M.current==="x"?I:A:Z>L?(m=I,M.current="x"):(m=A,M.current="y"),i(-m,-m)&&p.preventDefault()}var R=(0,t.useRef)(null);R.current={onTouchStart:h,onTouchMove:x,onTouchEnd:$,onWheel:z},t.useEffect(function(){function p(Z){R.current.onTouchStart(Z)}function I(Z){R.current.onTouchMove(Z)}function A(Z){R.current.onTouchEnd(Z)}function m(Z){R.current.onWheel(Z)}return document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",A,{passive:!1}),e.current.addEventListener("touchstart",p,{passive:!1}),e.current.addEventListener("wheel",m),function(){document.removeEventListener("touchmove",I),document.removeEventListener("touchend",A)}},[])}function Ut(){var e=(0,t.useRef)(new Map);function i(r){return e.current.has(r)||e.current.set(r,t.createRef()),e.current.get(r)}function n(r){e.current.delete(r)}return[i,n]}function nt(e,i){var n=t.useRef(e),r=t.useState({}),a=(0,u.Z)(r,2),o=a[1];function c(d){var l=typeof d=="function"?d(n.current):d;l!==n.current&&i(l,n.current),n.current=l,o({})}return[n.current,c]}var rt=function(i){var n=i.position,r=i.prefixCls,a=i.extra;if(!a)return null;var o,c={};return a&&(0,te.Z)(a)==="object"&&!t.isValidElement(a)?c=a:c.right=a,n==="right"&&(o=c.right),n==="left"&&(o=c.left),o?t.createElement("div",{className:"".concat(r,"-extra-content")},o):null};function jt(e,i){var n,r=t.useContext(_e),a=r.prefixCls,o=r.tabs,c=e.className,d=e.style,l=e.id,y=e.animated,E=e.activeKey,f=e.rtl,C=e.extra,N=e.editable,T=e.locale,b=e.tabPosition,w=e.tabBarGutter,K=e.children,D=e.onTabClick,h=e.onTabScroll,x=(0,t.useRef)(),$=(0,t.useRef)(),M=(0,t.useRef)(),z=(0,t.useRef)(),R=Ut(),p=(0,u.Z)(R,2),I=p[0],A=p[1],m=b==="top"||b==="bottom",Z=nt(0,function(S,g){m&&h&&h({direction:S>g?"left":"right"})}),L=(0,u.Z)(Z,2),W=L[0],oe=L[1],ue=nt(0,function(S,g){!m&&h&&h({direction:S>g?"top":"bottom"})}),O=(0,u.Z)(ue,2),k=O[0],F=O[1],G=(0,t.useState)(0),ie=(0,u.Z)(G,2),Q=ie[0],se=ie[1],Ie=(0,t.useState)(0),Oe=(0,u.Z)(Ie,2),ye=Oe[0],Me=Oe[1],Ke=(0,t.useState)(0),Ne=(0,u.Z)(Ke,2),Ee=Ne[0],$e=Ne[1],De=(0,t.useState)(0),me=(0,u.Z)(De,2),Ae=me[0],H=me[1],de=(0,t.useState)(null),Le=(0,u.Z)(de,2),ee=Le[0],oa=Le[1],ia=(0,t.useState)(null),ut=(0,u.Z)(ia,2),be=ut[0],sa=ut[1],la=(0,t.useState)(0),dt=(0,u.Z)(la,2),ca=dt[0],ua=dt[1],da=(0,t.useState)(0),vt=(0,u.Z)(da,2),va=vt[0],fa=vt[1],ma=ke(new Map),ft=(0,u.Z)(ma,2),ba=ft[0],ha=ft[1],We=Wt(o,ba,Q),mt="".concat(a,"-nav-operations-hidden"),ge=0,Se=0;m?f?(ge=0,Se=Math.max(0,Q-ee)):(ge=Math.min(0,ee-Q),Se=0):(ge=Math.min(0,be-ye),Se=0);function He(S){return S<ge?ge:S>Se?Se:S}var bt=(0,t.useRef)(),pa=(0,t.useState)(),ht=(0,u.Z)(pa,2),Ue=ht[0],pt=ht[1];function je(){pt(Date.now())}function ze(){window.clearTimeout(bt.current)}Ht(x,function(S,g){function B(Y,ve){Y(function(Ce){var xe=He(Ce+ve);return xe})}if(m){if(ee>=Q)return!1;B(oe,S)}else{if(be>=ye)return!1;B(F,g)}return ze(),je(),!0}),(0,t.useEffect)(function(){return ze(),Ue&&(bt.current=window.setTimeout(function(){pt(0)},100)),ze},[Ue]);function yt(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:E,g=We.get(S)||{width:0,height:0,left:0,right:0,top:0};if(m){var B=W;f?g.right<W?B=g.right:g.right+g.width>W+ee&&(B=g.right+g.width-ee):g.left<-W?B=-g.left:g.left+g.width>-W+ee&&(B=-(g.left+g.width-ee)),F(0),oe(He(B))}else{var Y=k;g.top<-k?Y=-g.top:g.top+g.height>-k+be&&(Y=-(g.top+g.height-be)),oe(0),F(He(Y))}}var ya=wt(We,{width:ee,height:be,left:W,top:k},{width:Ee,height:Ae},{width:ca,height:va},(0,_.Z)((0,_.Z)({},e),{},{tabs:o})),Et=(0,u.Z)(ya,2),Ea=Et[0],ga=Et[1],we={};b==="top"||b==="bottom"?we[f?"marginRight":"marginLeft"]=w:we.marginTop=w;var gt=o.map(function(S,g){var B=S.key;return t.createElement(Je,{id:l,prefixCls:a,key:B,tab:S,style:g===0?void 0:we,closable:S.closable,editable:N,active:B===E,renderWrapper:K,removeAriaLabel:T==null?void 0:T.removeAriaLabel,ref:I(B),onClick:function(ve){D(B,ve)},onRemove:function(){A(B)},onFocus:function(){yt(B),je(),!!x.current&&(f||(x.current.scrollLeft=0),x.current.scrollTop=0)}})}),Ve=he(function(){var S,g,B,Y,ve,Ce,xe,Ye,Xe,Ra=((S=x.current)===null||S===void 0?void 0:S.offsetWidth)||0,Za=((g=x.current)===null||g===void 0?void 0:g.offsetHeight)||0,It=((B=z.current)===null||B===void 0?void 0:B.offsetWidth)||0,Ot=((Y=z.current)===null||Y===void 0?void 0:Y.offsetHeight)||0,Ia=((ve=M.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,Oa=((Ce=M.current)===null||Ce===void 0?void 0:Ce.offsetHeight)||0;oa(Ra),sa(Za),ua(It),fa(Ot);var Mt=(((xe=$.current)===null||xe===void 0?void 0:xe.offsetWidth)||0)-It,Nt=(((Ye=$.current)===null||Ye===void 0?void 0:Ye.offsetHeight)||0)-Ot;se(Mt),Me(Nt);var Dt=(Xe=M.current)===null||Xe===void 0?void 0:Xe.className.includes(mt);$e(Mt-(Dt?0:Ia)),H(Nt-(Dt?0:Oa)),ha(function(){var At=new Map;return o.forEach(function(Ma){var Lt=Ma.key,Te=I(Lt).current;Te&&At.set(Lt,{width:Te.offsetWidth,height:Te.offsetHeight,left:Te.offsetLeft,top:Te.offsetTop})}),At})}),Sa=o.slice(0,Ea),Pa=o.slice(ga+1),St=[].concat((0,J.Z)(Sa),(0,J.Z)(Pa)),Ca=(0,t.useState)(),Pt=(0,u.Z)(Ca,2),xa=Pt[0],Ta=Pt[1],le=We.get(E),Ct=(0,t.useRef)();function xt(){re.Z.cancel(Ct.current)}(0,t.useEffect)(function(){var S={};return le&&(m?(f?S.right=le.right:S.left=le.left,S.width=le.width):(S.top=le.top,S.height=le.height)),xt(),Ct.current=(0,re.Z)(function(){Ta(S)}),xt},[le,m,f]),(0,t.useEffect)(function(){yt()},[E,le,We,m]),(0,t.useEffect)(function(){Ve()},[f,w,E,o.map(function(S){return S.key}).join("_")]);var Tt=!!St.length,Pe="".concat(a,"-nav-wrap"),Fe,Ge,Rt,Zt;return m?f?(Ge=W>0,Fe=W+ee<Q):(Fe=W<0,Ge=-W+ee<Q):(Rt=k<0,Zt=-k+be<ye),t.createElement("div",{ref:i,role:"tablist",className:P()("".concat(a,"-nav"),c),style:d,onKeyDown:function(){je()}},t.createElement(rt,{position:"left",extra:C,prefixCls:a}),t.createElement(Re.Z,{onResize:Ve},t.createElement("div",{className:P()(Pe,(n={},(0,v.Z)(n,"".concat(Pe,"-ping-left"),Fe),(0,v.Z)(n,"".concat(Pe,"-ping-right"),Ge),(0,v.Z)(n,"".concat(Pe,"-ping-top"),Rt),(0,v.Z)(n,"".concat(Pe,"-ping-bottom"),Zt),n)),ref:x},t.createElement(Re.Z,{onResize:Ve},t.createElement("div",{ref:$,className:"".concat(a,"-nav-list"),style:{transform:"translate(".concat(W,"px, ").concat(k,"px)"),transition:Ue?"none":void 0}},gt,t.createElement(et,{ref:z,prefixCls:a,locale:T,editable:N,style:(0,_.Z)((0,_.Z)({},gt.length===0?void 0:we),{},{visibility:Tt?"hidden":null})}),t.createElement("div",{className:P()("".concat(a,"-ink-bar"),(0,v.Z)({},"".concat(a,"-ink-bar-animated"),y.inkBar)),style:xa}))))),t.createElement(Kt,(0,U.Z)({},e,{ref:M,prefixCls:a,tabs:St,className:!Tt&&mt})),t.createElement(rt,{position:"right",extra:C,prefixCls:a}))}var ot=t.forwardRef(jt);function zt(e){var i=e.id,n=e.activeKey,r=e.animated,a=e.tabPosition,o=e.rtl,c=e.destroyInactiveTabPane,d=t.useContext(_e),l=d.prefixCls,y=d.tabs,E=r.tabPane,f=y.findIndex(function(C){return C.key===n});return t.createElement("div",{className:P()("".concat(l,"-content-holder"))},t.createElement("div",{className:P()("".concat(l,"-content"),"".concat(l,"-content-").concat(a),(0,v.Z)({},"".concat(l,"-content-animated"),E)),style:f&&E?(0,v.Z)({},o?"marginRight":"marginLeft","-".concat(f,"00%")):null},y.map(function(C){return t.cloneElement(C.node,{key:C.key,prefixCls:l,tabKey:C.key,id:i,animated:E,active:C.key===n,destroyInactiveTabPane:c})})))}function it(e){var i=e.prefixCls,n=e.forceRender,r=e.className,a=e.style,o=e.id,c=e.active,d=e.animated,l=e.destroyInactiveTabPane,y=e.tabKey,E=e.children,f=t.useState(n),C=(0,u.Z)(f,2),N=C[0],T=C[1];t.useEffect(function(){c?T(!0):l&&T(!1)},[c,l]);var b={};return c||(d?(b.visibility="hidden",b.height=0,b.overflowY="hidden"):b.display="none"),t.createElement("div",{id:o&&"".concat(o,"-panel-").concat(y),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(y),"aria-hidden":!c,style:(0,_.Z)((0,_.Z)({},b),a),className:P()("".concat(i,"-tabpane"),c&&"".concat(i,"-tabpane-active"),r)},(c||N||n)&&E)}var Vt=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],st=0;function Ft(e){return(0,q.Z)(e).map(function(i){if(t.isValidElement(i)){var n=i.key!==void 0?String(i.key):void 0;return(0,_.Z)((0,_.Z)({key:n},i.props),{},{node:i})}return null}).filter(function(i){return i})}function Gt(e,i){var n,r=e.id,a=e.prefixCls,o=a===void 0?"rc-tabs":a,c=e.className,d=e.children,l=e.direction,y=e.activeKey,E=e.defaultActiveKey,f=e.editable,C=e.animated,N=C===void 0?{inkBar:!0,tabPane:!1}:C,T=e.tabPosition,b=T===void 0?"top":T,w=e.tabBarGutter,K=e.tabBarStyle,D=e.tabBarExtraContent,h=e.locale,x=e.moreIcon,$=e.moreTransitionName,M=e.destroyInactiveTabPane,z=e.renderTabBar,R=e.onChange,p=e.onTabClick,I=e.onTabScroll,A=(0,ae.Z)(e,Vt),m=Ft(d),Z=l==="rtl",L;N===!1?L={inkBar:!1,tabPane:!1}:N===!0?L={inkBar:!0,tabPane:!0}:L=(0,_.Z)({inkBar:!0,tabPane:!1},(0,te.Z)(N)==="object"?N:{});var W=(0,t.useState)(!1),oe=(0,u.Z)(W,2),ue=oe[0],O=oe[1];(0,t.useEffect)(function(){O((0,ce.Z)())},[]);var k=(0,j.Z)(function(){var H;return(H=m[0])===null||H===void 0?void 0:H.key},{value:y,defaultValue:E}),F=(0,u.Z)(k,2),G=F[0],ie=F[1],Q=(0,t.useState)(function(){return m.findIndex(function(H){return H.key===G})}),se=(0,u.Z)(Q,2),Ie=se[0],Oe=se[1];(0,t.useEffect)(function(){var H=m.findIndex(function(Le){return Le.key===G});if(H===-1){var de;H=Math.max(0,Math.min(Ie,m.length-1)),ie((de=m[H])===null||de===void 0?void 0:de.key)}Oe(H)},[m.map(function(H){return H.key}).join("_"),G,Ie]);var ye=(0,j.Z)(null,{value:r}),Me=(0,u.Z)(ye,2),Ke=Me[0],Ne=Me[1],Ee=b;ue&&!["left","right"].includes(b)&&(Ee="top"),(0,t.useEffect)(function(){r||(Ne("rc-tabs-".concat(st)),st+=1)},[]);function $e(H,de){p==null||p(H,de),ie(H),R==null||R(H)}var De={id:Ke,activeKey:G,animated:L,tabPosition:Ee,rtl:Z,mobile:ue},me,Ae=(0,_.Z)((0,_.Z)({},De),{},{editable:f,locale:h,moreIcon:x,moreTransitionName:$,tabBarGutter:w,onTabClick:$e,onTabScroll:I,extra:D,style:K,panes:d});return z?me=z(Ae,ot):me=t.createElement(ot,Ae),t.createElement(_e.Provider,{value:{tabs:m,prefixCls:o}},t.createElement("div",(0,U.Z)({ref:i,id:r,className:P()(o,"".concat(o,"-").concat(Ee),(n={},(0,v.Z)(n,"".concat(o,"-mobile"),ue),(0,v.Z)(n,"".concat(o,"-editable"),f),(0,v.Z)(n,"".concat(o,"-rtl"),Z),n),c)},A),me,t.createElement(zt,(0,U.Z)({destroyInactiveTabPane:M},De,{animated:L}))))}var lt=t.forwardRef(Gt);lt.TabPane=it;var Yt=lt,Xt=Yt,Jt=s(44545),Qt=s(49101),qt=s(54549),ea=s(21687),ta=s(65632),aa=s(97647),na=function(e,i){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)i.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function ct(e){var i=e.type,n=e.className,r=e.size,a=e.onEdit,o=e.hideAdd,c=e.centered,d=e.addIcon,l=na(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),y=l.prefixCls,E=l.moreIcon,f=E===void 0?t.createElement(Jt.Z,null):E,C=t.useContext(ta.E_),N=C.getPrefixCls,T=C.direction,b=N("tabs",y),w;i==="editable-card"&&(w={onEdit:function(h,x){var $=x.key,M=x.event;a==null||a(h==="add"?M:$,h)},removeIcon:t.createElement(qt.Z,null),addIcon:d||t.createElement(Qt.Z,null),showAdd:o!==!0});var K=N();return(0,ea.Z)(!("onPrevClick"in l)&&!("onNextClick"in l),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),t.createElement(aa.Z.Consumer,null,function(D){var h,x=r!==void 0?r:D;return t.createElement(Xt,(0,U.Z)({direction:T,moreTransitionName:"".concat(K,"-slide-up")},l,{className:P()((h={},(0,v.Z)(h,"".concat(b,"-").concat(x),x),(0,v.Z)(h,"".concat(b,"-card"),["card","editable-card"].includes(i)),(0,v.Z)(h,"".concat(b,"-editable-card"),i==="editable-card"),(0,v.Z)(h,"".concat(b,"-centered"),c),h),n),editable:w,moreIcon:f,prefixCls:b}))})}ct.TabPane=it;var ra=ct},18106:function(fe,X,s){"use strict";var U=s(38663),v=s.n(U),t=s(25414),u=s.n(t)}}]);