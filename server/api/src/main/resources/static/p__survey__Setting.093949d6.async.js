(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1117],{90586:function(Pe,X,t){"use strict";t.d(X,{P:function(){return l}});var re=t(11849),k=t(93224),ee=t(2299),P=t(67294),de=t(30381),K=t.n(de),Z=t(85893),l=function($){var ve=$.children,b=$.syncDisplay,he=$.isMoment,T=(0,k.Z)($,["children","syncDisplay","isMoment"]),me=(0,P.useMemo)(function(){return(0,ee.$j)(function(y){var g=y.value,W=y.onChange,B=g;return he&&g&&(B=K()(g)),P.cloneElement(ve,{value:B,onChange:function(e){W(e)}})},(0,ee.jM)(function(y,g){return{value:y.value,onChange:function(B){K().isMoment(B)?g.onInput(B.valueOf()):g.onInput(B)}}}))},[]);return(0,Z.jsx)(ee.gN,(0,re.Z)((0,re.Z)({},T),{},{component:[me,$],reactions:[function(y){if(b)if(typeof b=="string"){var g=y.query(y.path.parent().concat(b)).get("value");g?y.display="visible":y.display="none"}else typeof b=="object"&&Object.keys(b).forEach(function(W){var B=y.query(y.path.parent().concat(W)).get("value");b[W].includes(B)?y.display="visible":y.display="none"})}]}))};X.Z=l},25204:function(Pe,X,t){"use strict";t.r(X),t.d(X,{Setting:function(){return Ne},default:function(){return Dt}});var re=t(13062),k=t(71230),ee=t(89032),P=t(15746),de=t(34792),K=t(48086),Z=t(2299),l=t(67294),te=(0,l.createContext)({});function $(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=(0,l.useContext)(te),a=n.prefixCls;return a+u}var ve=t(58024),b=t(39144),he=t(77576),T=t(12028),me=t(22385),y=t(31097),g=t(2824),W=t(99008),B=t(84387),Oe=t(63185),e=t(85893),Nt=function(n){var a=n.children,o=_objectWithoutProperties(n,["children"]),i=function(s){return _jsx(_Checkbox,{checked:s.value,onChange:function(v){s.onChange(v.target.checked)},children:a})};return _jsx(Field,_objectSpread({component:[i]},o))},M=t(11849),Pt=t(47673),ne=t(4107),Ie=t(93224),we=function(n){var a=n.children,o=n.style,i=(0,Ie.Z)(n,["children","style"]),r=function(c){return(0,e.jsx)(ne.Z,{value:c.value,style:o,onChange:function(m){c.onChange(m.target.value)},children:a})};return(0,e.jsx)(Z.gN,(0,M.Z)({component:[r]},i))},Ot=t(57663),I=t(71577),It=t(71194),G=t(50146),ge=t(99741),J=t(54531),R=t(11628),Le=function(n){var a=n.value,o=n.onChange,i=(0,l.useState)(!1),r=(0,g.Z)(i,2),s=r[0],c=r[1],v=(0,R.IE)(),m=(0,l.useRef)(null);return(0,e.jsxs)(e.Fragment,{children:[s&&(0,e.jsx)(G.Z,{visible:!0,onCancel:function(){return c(!1)},bodyStyle:{maxHeight:600,overflowY:"auto",padding:0},maskClosable:!1,width:650,onOk:function(){var C;o((0,J.ZN)((C=m.current)===null||C===void 0?void 0:C.getValues())),c(!1)},children:v.schema?(0,e.jsx)(ge.Z,{ref:m,initialValues:a,schema:v.schema,footerVisible:!1,onSubmit:function(C){console.log(C)}}):"\u95EE\u5377\u4E3A\u7A7A"}),(0,e.jsx)(I.Z,{onClick:function(){return c(!0)},style:{marginLeft:10},type:"dashed",children:a?"\u70B9\u51FB\u4FEE\u6539":"\u70B9\u51FB\u8BBE\u7F6E"})]})},be=function(n){return(0,e.jsx)(Z.gN,(0,M.Z)({component:[Le]},n))},Me=t(17758),Re=function(n){var a=n.value,o=n.onChange,i=(0,l.useState)(!1),r=(0,g.Z)(i,2),s=r[0],c=r[1];return(0,e.jsxs)(e.Fragment,{children:[s&&(0,e.jsx)(Me.cM,{value:a,title:"\u63D0\u4EA4\u540E\u56FE\u6587\u5C55\u793A",width:750,onChange:function(m){o(m),c(!1)},onClose:function(){c(!1)}}),(0,e.jsx)(I.Z,{onClick:function(){return c(!0)},style:{marginLeft:10},type:"dashed",children:a?"\u70B9\u51FB\u4FEE\u6539":"\u70B9\u51FB\u8BBE\u7F6E"})]})},Ue=function(n){return(0,e.jsx)(Z.gN,(0,M.Z)({component:[Re]},n))},q=function(n){var a=function(i){return(0,e.jsx)(T.Z,{checked:i.value,onChange:function(s){i.onChange(s)}})};return(0,e.jsx)(Z.gN,(0,M.Z)({component:[a]},n))},wt=t(77883),fe=t(85482),Lt=t(43358),z=t(97268),Te=function(n){var a=n.value,o=a===void 0?{limitNum:1,limitFreq:"only"}:a,i=n.onChange;return(0,e.jsxs)("div",{children:[(0,e.jsx)(z.Z,{style:{width:100},value:o.limitFreq,onChange:function(s){return i((0,M.Z)((0,M.Z)({},o),{},{limitFreq:s}))},options:[{label:"\u53EA\u80FD",value:"only"},{label:"\u6BCF\u5C0F\u65F6",value:"hour"},{label:"\u6BCF\u5929",value:"day"},{label:"\u6BCF\u81EA\u7136\u5468",value:"week"},{label:"\u6BCF\u81EA\u7136\u6708",value:"month"},{label:"\u6BCF\u5B63\u5EA6",value:"quarter"},{label:"\u6BCF\u81EA\u7136\u5E74",value:"year"}]}),(0,e.jsx)("span",{style:{margin:"0 10px"},children:"\u7B54\u9898"}),(0,e.jsx)(fe.Z,{min:1,max:9999,defaultValue:1,value:o.limitNum,onChange:function(s){return i((0,M.Z)((0,M.Z)({},o),{},{limitNum:s}))}}),(0,e.jsx)("span",{style:{margin:"0 10px"},children:"\u6B21"})]})},xe=function(n){return(0,e.jsx)(Z.gN,(0,M.Z)({component:[Te]},n))},je=t(25782),Ve=t(69816),ke=function(){var n=function(o){var i=o.value,r=o.onChange;return i===1?(0,e.jsx)(I.Z,{type:"primary",icon:(0,e.jsx)(je.Z,{}),onClick:function(){return r(0)},children:"\u6B63\u5728\u56DE\u6536"}):(0,e.jsx)(I.Z,{type:"primary",danger:!0,icon:(0,e.jsx)(Ve.Z,{}),onClick:function(){return r(1)},children:"\u6682\u505C\u56DE\u6536"})};return(0,e.jsx)(Z.gN,{name:"status",component:[n],basePath:""})},bt=t(59250),$e=t(13013),Mt=t(30887),se=t(54689),ie=t(3182),He=t(94043),H=t.n(He),ae=t(92592),Q=t(86582),Rt=t(20136),We=t(55241),Ut=t(49111),_=t(19650),Ke=t(54977),ze=t(23538),Qe=t(73171),Ye=t(71211),Xe=ne.Z.Search;function Ge(u){return"".concat(window.location.origin,"/s/").concat(u)}var Je=function(n){var a=n.item,o=n.onChange,i=n.onDelete,r=(0,R.IE)(),s=a.url,c=(0,l.useState)(""),v=(0,g.Z)(c,2),m=v[0],x=v[1],C=(0,l.useRef)(null),S=(0,R.IE)(),h=(0,l.useState)(!1),O=(0,g.Z)(h,2),L=O[0],w=O[1];(0,l.useEffect)(function(){function E(){return j.apply(this,arguments)}function j(){return j=(0,ie.Z)(H().mark(function U(){return H().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:ae.toDataURL(s,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.3,margin:5}).then(function(A){x(A)}).catch(function(A){console.error(A)});case 1:case"end":return f.stop()}},U)})),j.apply(this,arguments)}E()},[s]);var N=(0,l.useCallback)(function(){var E=(0,ie.Z)(H().mark(function j(U){return H().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:ae.toDataURL(s,{errorCorrectionLevel:"H",margin:5,width:U}).then(function(A){x(A);var p=document.createElement("a");p.href=A,p.setAttribute("download","".concat(r.name,"_").concat(U,".png")),document.body.appendChild(p),p.click(),document.body.removeChild(p)});case 1:case"end":return f.stop()}},j)}));return function(j){return E.apply(this,arguments)}}(),[s,r]);return(0,e.jsxs)("div",{style:{border:"1px solid #d9d9d9",margin:"5px 0",padding:"8px 4px"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsx)(ne.Z,{value:a.name,style:{width:200},placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",onChange:function(j){return o((0,M.Z)((0,M.Z)({},a),{},{name:j.target.value}))}}),(0,e.jsxs)(_.Z,{children:[(0,e.jsx)(I.Z,{icon:(0,e.jsx)(Ke.Z,{}),onClick:function(){return w(!0)}}),(0,e.jsx)(We.Z,{content:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:m,height:150,width:150}),(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsxs)(_.Z,{children:[(0,e.jsx)(I.Z,{size:"small",type:"link",onClick:function(){return N(256)},children:"\u5C0F\u53F7"}),(0,e.jsx)(I.Z,{size:"small",type:"link",onClick:function(){return N(512)},children:"\u4E2D\u53F7"}),(0,e.jsx)(I.Z,{size:"small",type:"link",onClick:function(){return N(1024)},children:"\u5927\u53F7"})]})})]}),title:"".concat(r.name,"(\u4E8C\u7EF4\u7801)"),trigger:["click"],children:(0,e.jsx)(I.Z,{icon:(0,e.jsx)(ze.Z,{})})}),(0,e.jsx)(I.Z,{icon:(0,e.jsx)(Qe.Z,{}),onClick:function(){return i(a.id)}})]})]}),(0,e.jsx)(Xe,{value:s,style:{margin:"5px 0 0 0"},enterButton:"\u6253\u5F00",className:"open-target",onSearch:function(){window.open("/s/".concat(r.id,"?id=").concat(a.id))}}),(0,e.jsx)(G.Z,{visible:L,onCancel:function(){return w(!1)},bodyStyle:{maxHeight:600,overflowY:"auto",padding:0},maskClosable:!1,width:650,onOk:function(){var j;w(!1),console.log((0,J.ZN)((j=C.current)===null||j===void 0?void 0:j.getValues()))},children:S.schema&&(0,e.jsx)(ge.Z,{ref:C,initialValues:a.value,schema:S.schema,footerVisible:!1,onSubmit:function(j){console.log(j)}})})]})},qe=function(n){var a=n.visible,o=n.onClose,i=(0,l.useState)([]),r=(0,g.Z)(i,2),s=r[0],c=r[1],v=(0,R.IE)();return(0,e.jsxs)(G.Z,{visible:a,onCancel:o,title:"\u5E26\u503C\u94FE\u63A5\u8BBE\u7F6E",maskClosable:!1,bodyStyle:{maxHeight:360,overflow:"auto"},children:[s.map(function(m){return(0,e.jsx)(Je,{item:m,onChange:function(C){var S=s.findIndex(function(h){return h.id===C.id});s.splice(S,1,C),c((0,Q.Z)(s))},onDelete:function(C){c((0,Q.Z)(s.filter(function(S){return S.id!==C})))}},m.id)}),(0,e.jsx)(I.Z,{block:!0,type:"primary",ghost:!0,onClick:function(){var x=(0,Ye.Ox)();s.push({id:x,url:"".concat(Ge(v.id),"?id=").concat(x)}),c((0,Q.Z)(s))},children:"\u6DFB\u52A0"})]})},_e=ne.Z.Search;function et(u){return"".concat(window.location.origin,"/s/").concat(u)}var tt=function(){var n=(0,R.IE)(),a=et(n.id),o=(0,l.useState)(""),i=(0,g.Z)(o,2),r=i[0],s=i[1],c=(0,l.useState)(!1),v=(0,g.Z)(c,2),m=v[0],x=v[1];(0,l.useEffect)(function(){function h(){return O.apply(this,arguments)}function O(){return O=(0,ie.Z)(H().mark(function L(){return H().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:ae.toDataURL(a,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.3,margin:5}).then(function(E){s(E)}).catch(function(E){console.error(E)});case 1:case"end":return N.stop()}},L)})),O.apply(this,arguments)}h()},[a]);var C=(0,l.useCallback)(function(){var h=(0,ie.Z)(H().mark(function O(L){return H().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:ae.toDataURL(a,{errorCorrectionLevel:"H",margin:5,width:L}).then(function(E){s(E);var j=document.createElement("a");j.href=E,j.setAttribute("download","".concat(n.name,"_").concat(L,".png")),document.body.appendChild(j),j.click(),document.body.removeChild(j)});case 1:case"end":return N.stop()}},O)}));return function(O){return h.apply(this,arguments)}}(),[a,n]),S=(0,e.jsxs)(se.Z,{onClick:function(O){return C(parseInt(O.key))},children:[(0,e.jsx)(se.Z.Item,{children:"\u5C0F\u53F7"},256),(0,e.jsx)(se.Z.Item,{children:"\u4E2D\u53F7"},512),(0,e.jsx)(se.Z.Item,{children:"\u5927\u53F7"},1024)]});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsx)("span",{children:"\u95EE\u5377\u94FE\u63A5"}),(0,e.jsx)(_e,{value:a,style:{width:300},enterButton:"\u6253\u5F00",className:"open-target",onSearch:function(){window.open("/s/".concat(n.id))}})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:10},children:[(0,e.jsx)("div",{style:{border:"1px solid #e1e7f2",borderRadius:3,boxShadow:"0px 3px 8px 0px rgb(224 229 236 / 40%)",width:100,height:100},children:(0,e.jsx)("img",{src:r,height:95,width:95})}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,e.jsx)($e.Z,{overlay:S,placement:"bottomLeft",children:(0,e.jsx)(I.Z,{children:"\u4E0B\u8F7D\u4E8C\u7EF4\u7801"})}),(0,e.jsxs)(I.Z,{type:"primary",ghost:!0,style:{marginTop:10},onClick:function(){return x(!0)},children:["\u5E26\u503C\u94FE\u63A5",(0,e.jsx)(y.Z,{overlay:"\u94FE\u63A5\u6DFB\u52A0\u53C2\u6570\uFF0C\u5C06\u81EA\u52A8\u5E94\u7528\u4E3A\u95EE\u5377\u7684\u7B54\u6848\u3002",children:(0,e.jsx)(B.Z,{className:"setting-prompt",style:{color:"#1891ff"}})})]})]}),(0,e.jsx)(qe,{visible:m,onClose:function(){return x(!1)}})]})]})};K.default.config({duration:1,maxCount:1});var nt=(0,Z.Pi)(function(){var u,n=(0,Z.cI)(),a=(0,R.IE)(),o=(0,l.useState)(!!((u=a.setting)!==null&&u!==void 0&&u.answerSetting.initialValues)),i=(0,g.Z)(o,2),r=i[0],s=i[1];return(0,l.useEffect)(function(){n.setFieldState("answerSetting.initialValues",function(c){return c.display=r?"visible":"none"})},[r,n]),(0,e.jsx)(Z.RV,{form:n,children:(0,e.jsx)(Z.Wo,{name:"answerSetting",children:(0,e.jsx)("div",{children:(0,e.jsxs)(b.Z,{title:(0,e.jsxs)("div",{className:"setting-title",children:[(0,e.jsx)(W.Z,{style:{marginRight:10}}),"\u95EE\u5377\u663E\u793A"]}),className:"answer-setting",extra:(0,e.jsx)(ke,{}),children:[(0,e.jsx)("div",{className:"setting-item",children:(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u5F00\u542F\u81EA\u52A8\u6682\u5B58",(0,e.jsx)(y.Z,{overlay:"\u52FE\u9009\u540E\uFF0C\u53EF\u4EE5\u81EA\u52A8\u4FDD\u5B58\u672C\u6B21\u672A\u63D0\u4EA4\u7684\u586B\u5199\u5185\u5BB9\uFF0C\u518D\u6B21\u6253\u5F00\u95EE\u5377\u53EF\u663E\u793A\u4E0A\u6B21\u672A\u63D0\u4EA4\u7684\u586B\u5199\u5185\u5BB9\u3002",children:(0,e.jsx)(B.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(q,{name:"autoSave"})]})}),(0,e.jsx)("div",{className:"setting-item",children:(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u663E\u793A\u9898\u76EE\u5E8F\u53F7",(0,e.jsx)(y.Z,{overlay:"\u52FE\u9009\u540E\uFF0C\u95EE\u5377\u4E2D\u7684\u9898\u76EE\u4F1A\u6309\u6392\u5217\u987A\u5E8F\u4ECE1\u5F00\u59CB\u663E\u793A\u9898\u76EE\u5E8F\u53F7\u3002",children:(0,e.jsx)(B.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(q,{name:"questionNumber"})]})}),(0,e.jsx)("div",{className:"setting-item",children:(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u663E\u793A\u8FDB\u5EA6\u6761",(0,e.jsx)(y.Z,{overlay:"\u52FE\u9009\u540E\uFF0C\u586B\u5199\u8005\u6ED1\u52A8\u9875\u9762\u53EF\u4EE5\u770B\u5230\u5F53\u524D\u95EE\u5377\u586B\u5199\u8FDB\u5EA6\u3002",children:(0,e.jsx)(B.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(q,{name:"progressBar"})]})}),(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u8BBE\u7F6E\u95EE\u5377\u9ED8\u8BA4\u7B54\u6848",(0,e.jsx)(y.Z,{overlay:"\u8BBE\u7F6E\u7684\u7B54\u6848\u5C06\u4F5C\u4E3A\u9ED8\u8BA4\u7B54\u6848\u5E26\u5165\u95EE\u5377",children:(0,e.jsx)(B.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(T.Z,{checked:r,onChange:function(v){s(v)}})]}),(0,e.jsx)("div",{className:"setting-item-content",children:(0,e.jsx)(be,{name:"initialValues"})})]})]})})})})}),Tt=t(54421),le=t(38272),Vt=t(94233),Ce=t(51890),kt=t(71153),oe=t(60331),$t=t(48736),st=t(27049),Ht=t(62999),Ee=t(51753),Wt=t(18106),ye=t(67164),Y=t(68489),it=t(60780),at=t.n(it),ut=t(49101),rt=z.Z.Option,lt=(0,Z.Pi)(function(u){var n=u.onChange,a=u.orgTreeData,o=u.positions,i=(0,l.useState)(),r=(0,g.Z)(i,2),s=r[0],c=r[1],v=(0,l.useState)(),m=(0,g.Z)(v,2),x=m[0],C=m[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(k.Z,{gutter:10,children:[(0,e.jsx)(P.Z,{span:16,children:(0,e.jsx)(Ee.Z,{onChange:function(h){return c(h)},style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:[{title:"\u53D1\u8D77\u4EBA\u5F53\u524D\u90E8\u95E8",value:"${currentOrgId}",key:"${currentOrgId}"},{title:"\u53D1\u8D77\u4EBA\u4E0A\u7EA7\u90E8\u95E8",value:"${parentOrgId}",key:"${parentOrgId}"}].concat((0,Q.Z)(a)),placeholder:"\u8BF7\u9009\u62E9\u673A\u6784",treeDefaultExpandAll:!0,allowClear:!0,value:s})}),(0,e.jsx)(P.Z,{span:8,children:(0,e.jsx)(z.Z,{style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u5C97\u4F4D",allowClear:!0,value:x,onChange:function(h){return C(h)},children:o.map(function(S){return(0,e.jsx)(rt,{value:S.id,children:S.name},S.id)})})})]}),(0,e.jsx)(k.Z,{style:{marginTop:10},children:(0,e.jsx)(P.Z,{children:(0,e.jsx)(I.Z,{icon:(0,e.jsx)(ut.Z,{}),onClick:function(){(s||x)&&n("P:".concat(s||"",":").concat(x||""))},children:"\u6DFB\u52A0"})})})]})}),ce=ye.Z.TabPane,Se=z.Z.Option,ot=(0,Z.Pi)(function(u){var n=u.onChange,a=u.tabs,o=a===void 0?["user","role","position"]:a,i=(0,Y.m2)(),r=(0,l.useState)(u.value||[]),s=(0,g.Z)(r,2),c=s[0],v=s[1];(0,l.useEffect)(function(){v(u.value||[])},[u.value]);var m=(0,Y.LF)(c),x=i.depts,C=i.users,S=i.roles,h=i.positions,O=(0,l.useState)(),L=(0,g.Z)(O,2),w=L[0],N=L[1];(0,l.useEffect)(function(){w&&i.loadUsers({orgId:w,pageSize:1024})},[w,i]);var E=(0,l.useMemo)(function(){return at()(x.map(function(d){return{value:d.id,title:d.name,key:d.id,parentId:d.parentId}}),{parentProperty:"parentId",customID:"value"})},[x]),j=function(f){var A=(0,Q.Z)(c);f.forEach(function(p){A.includes(p)||A.push(p)}),v(A),n(A)},U=function(){for(var f=arguments.length,A=new Array(f),p=0;p<f;p++)A[p]=arguments[p];var V=(0,Q.Z)(c.filter(function(ue){return!A.includes(ue)}));v(V),n(V)};return(0,e.jsx)("div",{style:{width:400},children:(0,e.jsxs)(ye.Z,{defaultActiveKey:"user",children:[(0,e.jsx)(ce,{tab:"\u6210\u5458",disabled:!o.includes("user"),children:(0,e.jsxs)("div",{style:{height:400,overflowY:"auto",overflowX:"hidden"},children:[(0,e.jsxs)(k.Z,{gutter:20,children:[(0,e.jsx)(P.Z,{span:16,children:(0,e.jsx)(Ee.Z,{onChange:function(f){return N(f)},style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:E,placeholder:"\u8BF7\u9009\u62E9\u673A\u6784",treeDefaultExpandAll:!0,allowClear:!0})}),(0,e.jsx)(P.Z,{span:8,children:(0,e.jsx)(z.Z,{style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u6210\u5458",allowClear:!0,showSearch:!0,mode:"multiple",onChange:function(f){return j(f)},maxTagCount:0,value:c.filter(function(d){return d.startsWith("U:")}),dropdownRender:function(f){return(0,e.jsxs)("div",{children:[f,(0,e.jsx)(st.Z,{style:{margin:"4px 0"}}),(0,e.jsx)("div",{style:{display:"flex",flexWrap:"nowrap",padding:8},children:(0,e.jsx)(I.Z,{size:"small",type:"link",onClick:function(){return j(C.map(function(p){return"U:".concat(p.id)}))},children:"\u5168\u9009"})})]})},children:C.map(function(d){return(0,e.jsx)(Se,{value:"U:".concat(d.id),children:d.name},d.id)})})})]}),(0,e.jsx)(_.Z,{style:{marginTop:20},wrap:!0,children:c.filter(function(d){return d.startsWith("U:")}).map(function(d){return(0,e.jsx)(oe.Z,{closable:!0,color:"blue",onClose:function(){return U(d)},children:m.user[d.split(":")[1]]},d)})})]})},"user"),(0,e.jsx)(ce,{tab:"\u89D2\u8272",disabled:!o.includes("role"),children:(0,e.jsxs)("div",{style:{height:400,overflowY:"auto",overflowX:"hidden"},children:[(0,e.jsx)(z.Z,{style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",allowClear:!0,showSearch:!0,mode:"multiple",value:c.filter(function(d){return d.startsWith("R:")}),onChange:function(f){return j(f)},maxTagCount:0,children:S.map(function(d){return(0,e.jsx)(Se,{value:"R:".concat(d.id),children:d.name},d.id)})}),(0,e.jsx)(_.Z,{style:{marginTop:20},wrap:!0,children:c.filter(function(d){return d.startsWith("R:")}).map(function(d){return(0,e.jsx)(oe.Z,{closable:!0,color:"blue",onClose:function(){return U(d)},children:m.role[d.split(":")[1]]},d)})})]})},"role"),(0,e.jsx)(ce,{tab:"\u673A\u6784\u5C97\u4F4D",disabled:!o.includes("position"),children:(0,e.jsxs)("div",{style:{height:400,overflowY:"auto",overflowX:"hidden"},children:[(0,e.jsx)(lt,{positions:h,orgTreeData:E,onChange:function(f){return j([f])}}),(0,e.jsx)(_.Z,{style:{marginTop:20},wrap:!0,children:c.filter(function(d){return d.startsWith("P:")}).map(function(d){var f=d.split(":"),A=(0,g.Z)(f,3),p=A[1],V=A[2];return(0,e.jsxs)(oe.Z,{closable:!0,color:"blue",onClose:function(){return U(d)},children:[m.org[p],"-",m.position[V]]},p+":"+V)})})]})},"position")]})})}),ct=ot,dt=t(37809),vt=function(n){var a=(0,l.useState)([]),o=(0,g.Z)(a,2),i=o[0],r=o[1];return(0,e.jsx)(G.Z,{title:"\u8BBE\u7F6E\u534F\u4F5C\u7BA1\u7406\u5458",visible:!0,onCancel:n.onCancel,onOk:function(){return n.onOk(i)},children:(0,e.jsx)(ct,{tabs:["user"],onChange:function(c){r(c.map(function(v){return v.split(":")[1]}))}})})},ht=function(){var n=(0,R.IE)(),a=n.id,o=(0,l.useState)([]),i=(0,g.Z)(o,2),r=i[0],s=i[1],c=(0,l.useState)(!1),v=(0,g.Z)(c,2),m=v[0],x=v[1],C=function(){return Y.hi.getProjectPartner(a).then(function(h){h&&s(h)})};return(0,l.useEffect)(function(){C()},[]),(0,e.jsxs)("div",{children:[(0,e.jsx)(b.Z,{className:"answer-setting",title:(0,e.jsxs)("div",{className:"setting-title",children:[(0,e.jsx)(dt.Z,{}),(0,e.jsxs)("div",{children:["\u534F\u4F5C\u7BA1\u7406\u5458\u5217\u8868",(0,e.jsx)(y.Z,{overlay:"\u534F\u4F5C\u8005\u53EF\u4EE5\u534F\u52A9\u521B\u5EFA\u8005\u8FDB\u884C\u7F16\u8F91\u95EE\u5377\u3001\u7BA1\u7406\u6570\u636E\u7B49\u64CD\u4F5C\u3002",children:(0,e.jsx)(B.Z,{className:"setting-prompt",style:{marginLeft:5}})})]})]}),extra:(0,e.jsx)("a",{href:"#",onClick:function(){return x(!0)},children:"\u8BBE\u7F6E\u534F\u4F5C\u7BA1\u7406\u5458"}),children:(0,e.jsx)(le.ZP,{itemLayout:"horizontal",dataSource:r,renderItem:function(h){return(0,e.jsxs)(le.ZP.Item,{actions:h.type!==1?[(0,e.jsx)("a",{onClick:function(){G.Z.confirm({title:"\u5220\u9664\u534F\u4F5C\u8005",content:(0,e.jsxs)("div",{children:["\u786E\u5B9A\u5220\u9664\u534F\u4F5C\u8005 ",(0,e.jsx)("b",{children:h.user.name}),"\u5417\uFF1F"]}),onOk:function(){Y.hi.deleteProjectPartner(h.id,a).then(function(w){w.success&&C()})}})},children:"\u5220\u9664"},"list-loadmore-edit")]:[],children:[(0,e.jsx)(le.ZP.Item.Meta,{avatar:(0,e.jsx)(Ce.C,{src:h.user.avatar?"/api/public/preview/".concat(h.user.avatar):""}),title:h.user.name}),(0,e.jsx)("div",{children:h.type===1?"\u521B\u5EFA\u8005":"\u534F\u4F5C\u8005"})]})}})}),m&&(0,e.jsx)(vt,{onCancel:function(){return x(!1)},onOk:function(h){Y.hi.addProjectPartner({userIds:h,projectId:a}).then(function(){C(),x(!1)})}})]})},mt=t(56931),gt=(0,Z.Pi)(function(){var u,n,a=(0,R.IE)(),o=(0,Z.cI)(),i=(0,l.useState)(!!((u=a.setting)!==null&&u!==void 0&&(n=u.submittedSetting)!==null&&n!==void 0&&n.contentHtml)),r=(0,g.Z)(i,2),s=r[0],c=r[1];return(0,l.useEffect)(function(){o.setFieldState("submittedSetting.contentHtml",function(v){return v.display=s?"visible":"none"})},[s,o]),(0,e.jsx)(Z.Wo,{name:"submittedSetting",children:(0,e.jsx)("div",{children:(0,e.jsxs)(b.Z,{title:(0,e.jsxs)("div",{className:"setting-title",children:[(0,e.jsx)(mt.Z,{}),"\u6295\u653E\u4E0E\u5206\u4EAB"]}),className:"submitted-setting",children:[(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u7B54\u9898\u5B8C\u6210\u540E\u8DF3\u8F6C\u81EA\u5B9A\u4E49\u9875\u9762",(0,e.jsx)(y.Z,{overlay:"\u4F60\u53EF\u4EE5\u5728\u8868\u5355\u63D0\u4EA4\u9875\u9762\u8BBE\u7F6E\u66F4\u4E3A\u4E30\u5BCC\u591A\u5F69\u7684\u5185\u5BB9\uFF0C\u5305\u62EC\u63D2\u5165\u56FE\u7247\u3001\u8BBE\u7F6E\u5B57\u53F7\u3001\u5B57\u4F53\u989C\u8272\u3001\u5E8F\u53F7\u3001\u8BBE\u7F6E\u8D85\u94FE\u63A5\u7B49\u7B49\u3002",children:(0,e.jsx)(B.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(T.Z,{checked:s,onChange:function(m){c(m)}})]}),(0,e.jsx)("div",{className:"setting-item-content",children:(0,e.jsx)(Ue,{name:"contentHtml"})})]}),(0,e.jsx)("div",{className:"setting-item",children:(0,e.jsx)(tt,{})})]})})})}),Kt=t(14965),ft=t(77121),Ze=t(1603),pe=t(90586);K.default.config({duration:1,maxCount:1});var xt=(0,Z.Pi)(function(){var u,n,a,o,i,r=(0,R.IE)(),s=(0,Z.cI)(),c=(0,l.useState)(!!((u=r.setting)!==null&&u!==void 0&&u.answerSetting.cookieLimit)),v=(0,g.Z)(c,2),m=v[0],x=v[1],C=(0,l.useState)(!!((n=r.setting)!==null&&n!==void 0&&n.answerSetting.ipLimit)),S=(0,g.Z)(C,2),h=S[0],O=S[1],L=(0,l.useState)(!!((a=r.setting)!==null&&a!==void 0&&a.answerSetting.password)),w=(0,g.Z)(L,2),N=w[0],E=w[1];(0,l.useEffect)(function(){var D;E(!!((D=r.setting)!==null&&D!==void 0&&D.answerSetting.password))},[r.setting]),(0,l.useEffect)(function(){s.setFieldState("answerSetting.password",function(D){return D.display=N?"visible":"none"})},[N,s]),(0,l.useEffect)(function(){s.setFieldState("answerSetting.cookieLimit",function(F){return F.display=m?"visible":"none"});var D=s.getFieldState("answerSetting.cookieLimit",function(F){return F.value});m&&!D&&s.setFieldState("answerSetting.cookieLimit",function(F){return F.value={limitNum:1,limitFreq:"only"}})},[m,s]),(0,l.useEffect)(function(){s.setFieldState("answerSetting.ipLimit",function(F){return F.display=h?"visible":"none"});var D=s.getFieldState("answerSetting.ipLimit",function(F){return F.value});h&&!D&&s.setFieldState("answerSetting.ipLimit",function(F){return F.value={limitNum:1,limitFreq:"only"}})},[h,s]);var j=(0,l.useState)(!!((o=r.setting)!==null&&o!==void 0&&o.answerSetting.endTime)),U=(0,g.Z)(j,2),d=U[0],f=U[1],A=(0,l.useState)(!!((i=r.setting)!==null&&i!==void 0&&i.answerSetting.maxAnswers)),p=(0,g.Z)(A,2),V=p[0],ue=p[1];return(0,l.useEffect)(function(){s.setFieldState("answerSetting.endTime",function(D){return D.display=d?"visible":"none"})},[d,s]),(0,l.useEffect)(function(){s.setFieldState("answerSetting.maxAnswers",function(D){return D.display=V?"visible":"none"})},[V,s]),(0,e.jsx)("div",{children:(0,e.jsxs)(b.Z,{title:(0,e.jsxs)("div",{className:"setting-title",children:[(0,e.jsx)(Ze.Z,{style:{marginRight:10}}),"\u56DE\u6536\u8BBE\u7F6E"]}),className:"answer-setting",children:[(0,e.jsx)("div",{className:"setting-item",children:(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u9700\u8981\u767B\u5F55",(0,e.jsx)(y.Z,{overlay:"\u52FE\u9009\u540E\uFF0C\u53EA\u6709\u767B\u5F55\u7528\u6237\u624D\u53EF\u4EE5\u586B\u5199\u95EE\u5377\u3002",children:(0,e.jsx)(B.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(q,{name:"loginRequired",basePath:"answerSetting"})]})}),(0,e.jsx)("div",{className:"setting-item",children:(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsx)("span",{children:"\u53EA\u80FD\u5FAE\u4FE1\u586B\u5199"}),(0,e.jsx)(q,{name:"wechatOnly",basePath:"answerSetting"})]})}),(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u51ED\u5BC6\u7801\u586B\u5199",(0,e.jsx)(y.Z,{overlay:"\u53EA\u6709\u8F93\u5165\u5BC6\u7801\u624D\u80FD\u586B\u5199\u95EE\u5377",children:(0,e.jsx)(B.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(T.Z,{checked:N,onChange:function(F){E(F)}})]}),(0,e.jsx)("div",{className:"setting-item-content",children:(0,e.jsx)(we,{style:{width:200},name:"password",basePath:"answerSetting"})})]}),(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u6BCF\u53F0\u7535\u8111\u6216\u624B\u673A\u7B54\u9898\u6B21\u6570\u9650\u5236",(0,e.jsx)(y.Z,{overlay:"\u6839\u636E cookie \u8FDB\u884C\u9650\u5236",children:(0,e.jsx)(B.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(T.Z,{checked:m,onChange:function(F){x(F)}})]}),(0,e.jsx)("div",{className:"setting-item-content",children:(0,e.jsx)(xe,{name:"cookieLimit",basePath:"answerSetting"})})]}),(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u6BCF\u4E2AIP\u7B54\u9898\u6B21\u6570\u9650\u5236",(0,e.jsx)(y.Z,{overlay:"\u6839\u636E IP \u8FDB\u884C\u9650\u5236",children:(0,e.jsx)(B.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(T.Z,{checked:h,onChange:function(F){O(F)}})]}),(0,e.jsx)("div",{className:"setting-item-content",children:(0,e.jsx)(xe,{name:"ipLimit",basePath:"answerSetting"})})]}),(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsx)("span",{children:"\u8BBE\u7F6E\u95EE\u5377\u7ED3\u675F\u65F6\u95F4"}),(0,e.jsx)(T.Z,{checked:d,onChange:function(F){f(F)}})]}),(0,e.jsx)("div",{className:"setting-item-content",children:(0,e.jsx)(pe.P,{name:"endTime",isMoment:!0,basePath:"answerSetting",children:(0,e.jsx)(ft.Z,{showTime:!0})})})]}),(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsx)("span",{children:"\u8BBE\u7F6E\u95EE\u5377\u56DE\u6536\u4E0A\u9650"}),(0,e.jsx)(T.Z,{checked:V,onChange:function(F){ue(F)}})]}),(0,e.jsx)("div",{className:"setting-item-content",children:V&&(0,e.jsxs)(e.Fragment,{children:["\u56DE\u6536",(0,e.jsx)(pe.P,{name:"maxAnswers",basePath:"answerSetting",children:(0,e.jsx)(fe.Z,{style:{margin:"0 5px"},min:1})}),"\u4EFD\u95EE\u5377\u540E\uFF0C\u505C\u6B62\u6536\u96C6"]})})]})]})})}),Fe=t(64031),jt=(0,Z.Pi)(function(){var u=$("-content"),n=(0,R.IE)(),a=(0,l.useMemo)(function(){return(0,Fe.Np)({initialValues:n.setting,effects:function(){(0,Fe.Zj)("*",function(i){console.log(i.address.toString(),i.value);var r={},s=r;i.path.forEach(function(c,v){var m={};v===i.path.length-1?s[c]=i.value:s[c]=m,s=m}),Y.hi.updateSetting({id:n.id,settingKey:i.address.toString(),settingValue:i.value}).then(function(c){c.success&&K.default.info("\u4FDD\u5B58\u4E2D")})})}})},[n.setting]);return(0,e.jsx)(Z.RV,{form:a,children:(0,e.jsx)("div",{className:u,children:(0,e.jsxs)(k.Z,{gutter:[2,2],children:[(0,e.jsx)(P.Z,{xs:24,sm:8,xl:6,children:(0,e.jsx)(nt,{})}),(0,e.jsx)(P.Z,{xs:24,sm:8,xl:6,children:(0,e.jsx)(xt,{})}),(0,e.jsx)(P.Z,{xs:24,sm:8,xl:6,children:(0,e.jsx)(gt,{})}),(0,e.jsx)(P.Z,{xs:24,sm:8,xl:6,children:(0,e.jsx)(ht,{})})]})})})}),zt=t(7359),Be=t(27279),Ae=t(8212),Ct=t(50206),Et=t(94184),yt=t.n(Et),De=Be.Z.Panel,St=[{key:"answerSetting",title:"\u6570\u636E\u6536\u96C6\u8BBE\u7F6E",icon:(0,e.jsx)(Ae.Z,{}),description:"\u57FA\u672C\u7684\u95EE\u5377\u586B\u5199\u8BBE\u7F6E"},{key:"answerLimitSetting",title:"\u7B54\u9898\u9650\u5236",icon:(0,e.jsx)(Ae.Z,{}),description:"\u95EE\u5377\u7B54\u9898\u9650\u5236"},{key:"memberSetting",title:"\u534F\u540C\u7F16\u8F91",icon:(0,e.jsx)(Ct.Z,{}),description:"\u8BBE\u7F6E\u534F\u4F5C\u7BA1\u7406\u5458"},{key:"submittedSetting",title:"\u63D0\u4EA4\u95EE\u5377\u6570\u636E\u540E",icon:(0,e.jsx)(Ze.Z,{}),description:"\u95EE\u5377\u63D0\u4EA4\u5B8C\u6210\u9875\u9762\u8BBE\u7F6E"}],Qt=(0,Z.Pi)(function(){var u=$("-nav"),n=(0,l.useContext)(te),a=n.settingStore,o=a.activePanel;return(0,e.jsx)("div",{className:u,children:(0,e.jsxs)(Be.Z,{accordion:!0,expandIcon:function(r){var s=r.isActive;return(0,e.jsx)(je.Z,{rotate:s?90:0})},defaultActiveKey:"1",children:[(0,e.jsx)(De,{header:"\u57FA\u7840\u8BBE\u7F6E",style:{padding:0},children:St.map(function(i){return(0,e.jsxs)(k.Z,{className:yt()("nav-panel-item",{active:o===i.key}),onClick:function(){return a.activePanel=i.key},children:[(0,e.jsx)(P.Z,{span:4,children:(0,e.jsx)(Ce.C,{icon:i.icon,shape:"square"})}),(0,e.jsx)(P.Z,{span:20,children:(0,e.jsxs)(k.Z,{children:[(0,e.jsx)(P.Z,{span:24,children:i.title}),(0,e.jsx)(P.Z,{span:24,style:{fontSize:12,color:"#8c8c8c"},children:i.description})]})})]},i.key)})},"1"),(0,e.jsx)(De,{header:"\u9AD8\u7EA7\u8BBE\u7F6E",children:(0,e.jsx)("p",{children:"todo"})},"2")]})})}),Zt=t(69610),pt=t(54941),Ft=function(){function u(n){(0,Zt.Z)(this,u),this.rootStore=void 0,this.activePanel=void 0,this.rootStore=n,this.activePanel="answerSetting",this.makeObservable()}return(0,pt.Z)(u,[{key:"makeObservable",value:function(){(0,J.Ou)(this,{rootStore:J.LO.ref,activePanel:J.LO.ref})}}]),u}(),Bt=t(77613),At=t(27400),Ne=(0,Bt.P)(function(){var u=(0,R.IE)(),n=(0,At.a)(),a=n.isMobile,o=(0,l.useMemo)(function(){return new Ft(u)},[u]);return(0,e.jsx)(te.Provider,{value:{prefixCls:"survey-setting",settingStore:o},children:(0,e.jsx)("div",{className:"survey-setting",children:(0,e.jsx)(jt,{})})})}),Dt=Ne}}]);