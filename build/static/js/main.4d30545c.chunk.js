(this["webpackJsonpfirebase-react"]=this["webpackJsonpfirebase-react"]||[]).push([[0],{154:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},172:function(e,t){},174:function(e,t){},185:function(e,t){},187:function(e,t){},214:function(e,t){},216:function(e,t){},217:function(e,t){},222:function(e,t){},224:function(e,t){},243:function(e,t){},255:function(e,t){},258:function(e,t){},279:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(40),o=a.n(n),s=(a(154),a(4)),u=a(55),i=(a(155),a(157),a(280),u.a.initializeApp({apiKey:"AIzaSyA9I0kddPRgthC7YMY4dCor7TjznRQzrLo",authDomain:"aristotell-book-platforms.firebaseapp.com",databaseURL:"https://aristotell-book-platforms-default-rtdb.firebaseio.com",projectId:"aristotell-book-platforms",storageBucket:"aristotell-book-platforms.appspot.com",messagingSenderId:"466989169035",appId:"1:466989169035:web:a4300927ac6f3aee2a178e",measurementId:"G-S693FWB9XW"})),l=i.auth(),j=i.database(),b=(u.a.remoteConfig(),u.a.database.ServerValue.TIMESTAMP),d=i,h=a(2),O=Object(r.createContext)();function f(){return Object(r.useContext)(O)}function p(e){var t=e.children,a=Object(r.useState)(),c=Object(s.a)(a,2),n=c[0],o=c[1],u=Object(r.useState)(!0),i=Object(s.a)(u,2),j=i[0],b=i[1];Object(r.useEffect)((function(){return l.onAuthStateChanged((function(e){o(e),b(!1)}))}),[]);var d={currentUser:n,SignUp:function(e,t){return l.createUserWithEmailAndPassword(e,t)},SignIn:function(e,t){return l.signInWithEmailAndPassword(e,t)},LogOut:function(){return l.signOut()}};return Object(h.jsx)(O.Provider,{value:d,children:!j&&t})}var x=a(10),m=a.n(x),v=a(13),k=a(14),g=a(287),S=a(285),y=a(286),C=a(282);function N(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),o=Object(s.a)(n,2),u=o[0],i=o[1],l=Object(r.useState)(""),j=Object(s.a)(l,2),b=j[0],d=j[1],O=Object(r.useState)(!1),p=Object(s.a)(O,2),x=p[0],N=p[1],L=f().SignIn,B=Object(k.f)(),M=function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,i(""),N(!0),e.next=6,L(a,b);case 6:B.push("/Books"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i("Email/Password Did Not Match!");case 12:N(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(g.a,{children:Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Sign In"}),u&&Object(h.jsx)(S.a,{variant:"danger",children:u}),Object(h.jsxs)(y.a,{onSubmit:M,children:[Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Email"}),Object(h.jsx)(y.a.Control,{type:"email",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Enter Emails",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Password"}),Object(h.jsx)(y.a.Control,{type:"password",value:b,onChange:function(e){return d(e.target.value)},placeholder:"Enter Password",required:!0})]}),Object(h.jsx)(C.a,{type:"submit",disabled:x,className:"w-100",children:"Sign In"})]})]})})}function L(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),o=Object(s.a)(n,2),u=o[0],i=o[1],l=Object(r.useState)(""),j=Object(s.a)(l,2),b=j[0],d=j[1],O=Object(r.useState)(""),p=Object(s.a)(O,2),x=p[0],N=p[1],L=Object(r.useState)(!1),B=Object(s.a)(L,2),M=B[0],w=B[1],P=f().SignUp,E=Object(k.f)(),A=function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),b===x){e.next=3;break}return e.abrupt("return",i("Password Did Not Match"));case 3:return e.prev=3,i(""),w(!0),e.next=8,P(a,b);case 8:E.push("/Login"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),i("Failed to Create Account");case 14:w(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(g.a,{children:Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Register"}),u&&Object(h.jsx)(S.a,{variant:"danger",children:u}),Object(h.jsxs)(y.a,{onSubmit:A,children:[Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Email"}),Object(h.jsx)(y.a.Control,{type:"email",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Enter Emails",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Password"}),Object(h.jsx)(y.a.Control,{type:"password",value:b,onChange:function(e){return d(e.target.value)},placeholder:"Enter Password",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Password Confirmations"}),Object(h.jsx)(y.a.Control,{type:"password",value:x,onChange:function(e){return N(e.target.value)},placeholder:"Enter Password",required:!0})]}),Object(h.jsx)(C.a,{type:"submit",disabled:M,className:"w-100",children:"Register"})]})]})})}a(167);var B=a(19),M=Object(r.createContext)();function w(){return Object(r.useContext)(M)}function P(e){var t=e.children,a=Object(r.useState)(""),c=Object(s.a)(a,2),n={currentMode:c[0],setCurrentMode:c[1]};return Object(h.jsx)(M.Provider,{value:n,children:t})}function E(){return Object(h.jsx)("div",{className:"shimmer-wrapper",children:Object(h.jsx)("div",{className:"shimmer-effects"})})}a(168);function A(){var e=[1,2,3,4,5].map((function(e){return Object(h.jsxs)("div",{className:"skeleton-wrapper",children:[Object(h.jsx)("div",{className:"skeleton"}),Object(h.jsx)(E,{})]},e)}));return Object(h.jsx)(h.Fragment,{children:e})}function q(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),o=Object(s.a)(n,2),u=o[0],i=o[1],l=Object(r.useState)(!0),b=Object(s.a)(l,2),d=b[0],O=b[1],p=w(),x=p.currentMode,S=p.setCurrentMode,N=f().LogOut,L=Object(k.f)(),M=function(){var e=Object(v.a)(m.a.mark((function e(){var t,a,r,n=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",a=j.ref("".concat(t,"Books")),e.next=4,a.once("value");case 4:r=e.sent,setTimeout((function(){if(r.exists()){var e=r.val();c(e)}O(!1)}),1e3);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){M()}),[]);return Object(h.jsx)(g.a,{children:Object(h.jsxs)(g.a.Body,{className:"text-center",children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Books"}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"},children:[Object(h.jsx)(C.a,{onClick:N,children:"Log Out"}),Object(h.jsx)(C.a,{onClick:function(){return L.push("/New")},children:"Add Books"}),Object(h.jsx)(C.a,{onClick:function(){var e=x;"Vuforia/"===x?(S(""),e=""):(S("Vuforia/"),e="Vuforia/"),c([]),O(!0),M(e)},children:"Vuforia/"===x?"Hidden":"Books"})]}),Object(h.jsx)(y.a.Group,{className:"mt-2",children:Object(h.jsx)(y.a.Control,{type:"text",value:u,onChange:function(e){return i(e.target.value)},placeholder:"Search Books",required:!0})}),d&&0===a.length&&Object(h.jsx)(A,{}),(!d||0!==a.length)&&Object(h.jsx)("div",{className:"scrollThings",children:Object.keys(a).filter((function(e){return""===u||e.toLowerCase().includes(u.toLowerCase())?e:null})).map((function(e,t){return Object(h.jsx)("div",{className:"LinkObj pt-2 pb-2",children:Object(h.jsx)(B.b,{to:"/Books/".concat(e),children:"".concat(a[e].BookName," by ").concat(a[e].Author)})},e)}))})]})})}var D=a(28),G=a(148),I=a.n(G),R=d.remoteConfig();R.defaultConfig={serverAccessKey:"6558664d17740dfea767e48f600350f0ccb732cc",serverSecretKey:"8fb06d29526a6785c8edbd8a4ce07e0ce42acf28"};var U="",z="",T=function(){var e=Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.fetchAndActivate();case 2:return U=R.getString("AccessKey"),z=R.getString("SecretKey"),e.abrupt("return",new Promise((function(e,t){e({accessKey:U,secretKey:z})})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(v.a)(m.a.mark((function e(t,a){var r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=I.a.create({baseURL:t.url,headers:t.headers,responseType:"json"}),e.next=3,r({method:t.method,data:a}).catch((function(e){console.log(e)}));case 3:return c=e.sent,e.abrupt("return",new Promise((function(e,t){e(c)})));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(v.a)(m.a.mark((function e(t){var a,r,c,n,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={},"delete"!==t.method&&(a=JSON.parse(t.body)),U||z){e.next=5;break}return e.next=5,T();case 5:return r={serverAccessKey:U,serverSecretKey:z},c=Object(D.c)(r),a.VWSKey=c,n={url:D.a+t.path,method:t.method,headers:{"Content-Type":t.type}},e.next=11,F(n,JSON.stringify(a));case 11:return o=e.sent,e.abrupt("return",new Promise((function(e,t){e(o)})));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(v.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={path:"",method:"post",type:"application/json",body:t},e.next=3,_(a);case 3:return r=e.sent,e.abrupt("return",new Promise((function(e,t){e(r)})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(v.a)(m.a.mark((function e(t,a){var r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={path:t,method:"put",type:"application/json",body:a},e.next=3,_(r);case 3:return c=e.sent,e.abrupt("return",new Promise((function(e,t){e(c)})));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),V=function(){var e=Object(v.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={path:t,method:"delete",type:"application/json",body:""},e.next=3,_(a);case 3:return r=e.sent,e.abrupt("return",new Promise((function(e,t){e(r)})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function W(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),o=Object(s.a)(n,2),u=o[0],i=o[1],l=Object(r.useState)(!1),b=Object(s.a)(l,2),d=b[0],O=b[1],f=Object(r.useState)(!0),p=Object(s.a)(f,2),x=p[0],N=p[1],L=Object(r.useState)(""),M=Object(s.a)(L,2),P=M[0],E=M[1],q=w().currentMode,D=Object(k.g)().booksId,G=Object(k.f)(),I=Object(r.useRef)((function(){}));I.current=Object(v.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.ref("".concat(q,"Manager")).child("".concat(D)),e.next=3,t.once("value");case 3:a=e.sent,setTimeout((function(){if(a.exists()){var e=a.val();c(e)}N(!1)}),1e3);case 5:case"end":return e.stop()}}),e)}))),Object(r.useEffect)((function(){I.current()}),[]);var R=function(){var e=Object(v.a)(m.a.mark((function e(){var t,a,r,c,n,o,s,u,l,b,d;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),O(!0),t=j.ref("".concat(q,"Manager")).child("".concat(D)),e.next=5,t.once("value");case 5:a=e.sent,r=[],a.exists()&&(c=a.val(),n=Object.keys(c).map((function(e,t){return e})),r=n),o=[],s=0;case 10:if(!(s<r.length)){e.next=19;break}return u=j.ref("".concat(q,"Cloud Reco")).child("".concat(D,"<bookPlat>").concat(r[s])),e.next=14,u.once("value");case 14:(l=e.sent).exists()&&(b=l.val(),o.push(b.UID));case 16:s++,e.next=10;break;case 19:case 20:if(0===o.length){e.next=26;break}return d=o.shift(),e.next=24,V(d);case 24:e.next=20;break;case 26:r.map((function(e){return j.ref("".concat(q,"Cloud Reco")).child("".concat(D,"<bookPlat>").concat(e)).remove(),null})),r.map((function(e){return j.ref("".concat(q,"Marker")).child("".concat(D,"<bookPlat>").concat(e)).remove(),null})),j.ref("".concat(q,"Books")).child("".concat(D)).remove(),j.ref("".concat(q,"Manager")).child("".concat(D)).remove(),j.ref("".concat(q,"Store")).child("".concat(D)).remove(),i("Books Deleted Successfully!"),setTimeout(5e3),G.push("/Books/");case 34:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(g.a,{children:Object(h.jsxs)(g.a.Body,{className:"text-center",children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Marker"}),u&&Object(h.jsxs)(S.a,{variant:"success",children:[" ",u," "]}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"},children:[Object(h.jsx)(C.a,{onClick:function(){return G.push("/Store/".concat(D))},disabled:d,children:"Edit Store"}),Object(h.jsx)(C.a,{onClick:function(){return G.push("/Marker/".concat(D))},disabled:d,children:"Add Marker"}),Object(h.jsx)(C.a,{className:"btn btn-danger",onClick:function(){return R()},disabled:d,children:"Delete Books"})]}),Object(h.jsx)(y.a.Group,{className:"mt-2",children:Object(h.jsx)(y.a.Control,{type:"text",value:P,onChange:function(e){return E(e.target.value)},placeholder:"Search Marker",required:!0})}),x&&0===a.length&&Object(h.jsx)(A,{}),!x&&0!==a.length&&Object(h.jsx)("div",{className:"scrollThings",children:Object.keys(a).filter((function(e){return""===P||e.toLowerCase().includes(P.toLowerCase())?e:null})).map((function(e,t){var r=a[e].UpdatedAt,c=new Date(r).getTime(),n=(new Date).getTime();return!r||n-c>12e4?Object(h.jsx)("div",{className:"LinkObj pt-2 pb-2",children:Object(h.jsx)(B.b,{to:"/Books/".concat(D,"/").concat(e),children:"".concat(e)})},e):null}))})]})})}var H=a(283);function Y(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),o=Object(s.a)(n,2),u=o[0],i=o[1],l=Object(r.useState)(""),d=Object(s.a)(l,2),O=d[0],f=d[1],p=Object(r.useState)(""),x=Object(s.a)(p,2),N=x[0],L=x[1],B=Object(r.useState)(""),M=Object(s.a)(B,2),P=M[0],E=M[1],A=Object(r.useState)(""),q=Object(s.a)(A,2),G=q[0],I=q[1],R=Object(r.useState)(""),U=Object(s.a)(R,2),z=U[0],T=U[1],F=Object(r.useState)(""),_=Object(s.a)(F,2),J=_[0],V=_[1],W=Object(r.useState)({}),Y=Object(s.a)(W,2),Q=Y[0],X=Y[1],Z=Object(r.useState)(!1),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=Object(r.useState)(""),re=Object(s.a)(ae,2),ce=re[0],ne=re[1],oe=Object(r.useState)(""),se=Object(s.a)(oe,2),ue=se[0],ie=se[1],le=Object(k.f)(),je=w().currentMode,be=Object(k.g)().booksId,de=Object(r.useRef)((function(){}));de.current=function(){j.ref("".concat(je,"Books")).child("".concat(be)).get().then((function(e){if(e.exists()){var t=e.val();i(t.Author),c(t.BookName),E(t.Cover),I(t.Publisher)}})),j.ref("".concat(je,"Store")).child(be).get().then((function(e){if(e.exists()){var t=e.val();V(t.Synopsis)}}))};var he=function(){var e=Object(v.a)(m.a.mark((function e(t){var r,c,n,o,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),ne(""),ie(""),te(!0),r=!1,j.ref("".concat(je,"Manager")).child(be).child("".concat(z)).get().then((function(e){if(e.exists())return ie("Marker Already Exist!"),te(!1),void(r=!0)})),!0!==r){e.next=8;break}return e.abrupt("return");case 8:return c={Author:u,Cover:P,Marker:z,Model:O,Name:a,Publisher:G,Size:N,Synopsis:J},e.next=11,Object(D.b)(Q);case 11:return n=e.sent,o=Object(D.e)("".concat(be,"<bookPlat>").concat(z),c,n),e.next=15,K(o);case 15:if(s=e.sent,e.prev=16,"TargetCreated"!==s.data.result_code){e.next=31;break}return e.next=20,j.ref("".concat(je,"Books")).child(be).update({Cover:P,Publisher:G});case 20:return e.next=22,j.ref("".concat(je,"Cloud Reco")).child("".concat(be,"<bookPlat>").concat(z)).update({UID:s.data.target_id});case 22:return e.next=24,j.ref("".concat(je,"Manager")).child(be).child(z).update({Name:z,CreatedAt:b,UpdatedAt:b});case 24:return e.next=26,j.ref("".concat(je,"Marker")).child("".concat(be,"<bookPlat>").concat(z)).update({Author:u,Cover:P,Marker:z,Model:O,Name:a,Publisher:G,Size:N,Synopsis:J});case 26:ne("Marker Uploaded Successfully!"),setTimeout(3e3),le.push("/Books/".concat(be)),e.next=32;break;case 31:ie(s.data.result_code);case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(16),ie("Bad Request!");case 37:te(!1);case 38:case"end":return e.stop()}}),e,null,[[16,34]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){de.current()}),[]),Object(h.jsx)(g.a,{children:Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:a}),ce&&Object(h.jsxs)(S.a,{variant:"success",children:[" ",ce," "]}),ue&&Object(h.jsxs)(S.a,{variant:"danger",children:[" ",ue," "]}),Object(h.jsxs)(y.a,{onSubmit:he,children:[Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Name"}),Object(h.jsx)(y.a.Control,{type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Enter Books Name",readOnly:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Author"}),Object(h.jsx)(y.a.Control,{type:"text",value:u,onChange:function(e){return i(e.target.value)},placeholder:"Enter Author Name",readOnly:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Marker Name"}),Object(h.jsx)(y.a.Control,{type:"text",value:z,onChange:function(e){return T(e.target.value)},placeholder:"Enter Book Marker Name",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"3D Model Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:O,onChange:function(e){return f(e.target.value)},placeholder:"Enter 3D Model Link",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"3D Model Size"}),Object(h.jsx)(y.a.Control,{type:"text",value:N,onChange:function(e){return L(e.target.value)},placeholder:"Enter 3D Model Size",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Cover Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:P,onChange:function(e){return E(e.target.value)},placeholder:"Enter 3D Model Link",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Publisher Logo Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:G,onChange:function(e){return I(e.target.value)},placeholder:"Enter Book Publisher Logo Link",required:!0})]}),Object(h.jsx)(y.a.Group,{as:H.a,children:Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"formFile",children:"Marker Image"}),Object(h.jsx)("input",{type:"file",className:"form-control",accept:"image/png, image/jpeg",onChange:function(e){return function(e){X(e.target.files[0]),console.log(e.target.files[0])}(e)},id:"formFile",required:!0})]})}),Object(h.jsx)(C.a,{type:"submit",disabled:ee,className:"w-100",children:"Upload Marker"})]})]})})}function Q(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),o=Object(s.a)(n,2),u=o[0],i=o[1],l=Object(r.useState)(""),d=Object(s.a)(l,2),O=d[0],f=d[1],p=Object(r.useState)(""),x=Object(s.a)(p,2),N=x[0],L=x[1],B=Object(r.useState)(""),M=Object(s.a)(B,2),P=M[0],E=M[1],A=Object(r.useState)(""),q=Object(s.a)(A,2),G=q[0],I=q[1],R=Object(r.useState)(""),U=Object(s.a)(R,2),z=U[0],T=U[1],F=Object(r.useState)(""),_=Object(s.a)(F,2),K=_[0],W=_[1],Y=Object(r.useState)(""),Q=Object(s.a)(Y,2),X=Q[0],Z=Q[1],$=Object(r.useState)({}),ee=Object(s.a)($,2),te=ee[0],ae=ee[1],re=Object(r.useState)(!1),ce=Object(s.a)(re,2),ne=ce[0],oe=ce[1],se=Object(r.useState)(""),ue=Object(s.a)(se,2),ie=ue[0],le=ue[1],je=Object(r.useState)(""),be=Object(s.a)(je,2),de=be[0],he=be[1],Oe=w().currentMode,fe=Object(k.f)(),pe=Object(k.g)(),xe=pe.booksId,me=pe.markerId,ve=Object(r.useRef)((function(){}));ve.current=function(){j.ref("".concat(Oe,"Books")).child("".concat(xe)).get().then((function(e){if(e.exists()){var t=e.val();i(t.Author),c(t.BookName),E(t.Cover),I(t.Publisher)}})),j.ref("".concat(Oe,"Cloud Reco")).child("".concat(xe,"<bookPlat>").concat(me)).get().then((function(e){if(e.exists()){var t=e.val();Z(t.UID)}})),j.ref("".concat(Oe,"Marker")).child("".concat(xe,"<bookPlat>").concat(me)).get().then((function(e){if(e.exists()){var t=e.val();f(t.Model),L(t.Size),T(me)}})),j.ref("".concat(Oe,"Store")).child("".concat(xe)).get().then((function(e){if(e.exists()){var t=e.val();W(t.Synopsis)}}))};var ke=function(){var e=Object(v.a)(m.a.mark((function e(t){var r,c,n,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),le(""),he(""),oe(!0),r={Author:u,Cover:P,Marker:z,Model:O,Name:a,Publisher:G,Size:N,Synopsis:K},e.next=7,Object(D.b)(te);case 7:return c=e.sent,n=Object(D.d)(r,c),e.next=11,J(X,n);case 11:if(o=e.sent,e.prev=12,"Success"!==o.data.result_code){e.next=25;break}return e.next=16,j.ref("".concat(Oe,"Books")).child(xe).update({Cover:P,Publisher:G});case 16:return e.next=18,j.ref("".concat(Oe,"Manager")).child(xe).child(z).update({UpdatedAt:b});case 18:return e.next=20,j.ref("".concat(Oe,"Marker")).child("".concat(xe,"<bookPlat>").concat(me)).update({Author:u,Cover:P,Marker:z,Model:O,Name:a,Publisher:G,Size:N,Synopsis:K});case 20:le("Data Updated Successfully!"),setTimeout(3e3),fe.push("/Books"),e.next=26;break;case 25:he(o.data.result_code);case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(12),he("Bad Request");case 31:oe(!1);case 32:case"end":return e.stop()}}),e,null,[[12,28]])})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(v.a)(m.a.mark((function e(){var t,a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return le(""),he(""),oe(!0),e.next=5,V(X);case 5:if(t=e.sent,e.prev=6,"Success"!==t.data.result_code){e.next=25;break}return e.next=10,j.ref("".concat(Oe,"Cloud Reco")).child("".concat(xe,"<bookPlat>").concat(me)).remove();case 10:return e.next=12,j.ref("".concat(Oe,"Manager")).child("".concat(xe)).child("".concat(me)).remove();case 12:return e.next=14,j.ref("".concat(Oe,"Marker")).child("".concat(xe,"<bookPlat>").concat(me)).remove();case 14:return a=!1,r=j.ref("".concat(Oe,"Manager")).child("".concat(xe)),e.next=18,r.once("value");case 18:c=e.sent,a=c.exists(),le("Marker Deleted Successfully!"),setTimeout(3e3),!1===a?(j.ref("".concat(Oe,"Books")).child("".concat(xe)).remove(),j.ref("".concat(Oe,"Store")).child("".concat(xe)).remove(),fe.push("/Books/")):fe.push("/Books/".concat(xe)),e.next=26;break;case 25:he(t.data.result_code);case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(6),he("Bad Request");case 31:oe(!1);case 32:case"end":return e.stop()}}),e,null,[[6,28]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){ve.current()}),[]),Object(h.jsx)(g.a,{children:Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:z}),ie&&Object(h.jsxs)(S.a,{variant:"success",children:[" ",ie," "]}),de&&Object(h.jsxs)(S.a,{variant:"danger",children:[" ",de," "]}),Object(h.jsxs)(y.a,{onSubmit:ke,children:[Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Name"}),Object(h.jsx)(y.a.Control,{type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Enter Books Name",readOnly:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Author"}),Object(h.jsx)(y.a.Control,{type:"text",value:u,onChange:function(e){return i(e.target.value)},placeholder:"Enter Author Name",readOnly:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"3D Model Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:O,onChange:function(e){return f(e.target.value)},placeholder:"Enter 3D Model Link",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"3D Model Size"}),Object(h.jsx)(y.a.Control,{type:"text",value:N,onChange:function(e){return L(e.target.value)},placeholder:"Enter 3D Model Size",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Cover Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:P,onChange:function(e){return E(e.target.value)},placeholder:"Enter 3D Model Link",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Publisher Logo Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:G,onChange:function(e){return I(e.target.value)},placeholder:"Enter Book Publisher Logo Link",required:!0})]}),Object(h.jsx)(y.a.Group,{as:H.a,children:Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"formFile",children:"Marker Image"}),Object(h.jsx)("input",{type:"file",className:"form-control",accept:"image/png, image/jpeg",onChange:function(e){return function(e){ae(e.target.files[0]),console.log(e.target.files[0])}(e)},id:"formFile",required:!0})]})}),Object(h.jsx)(C.a,{type:"submit",disabled:ne,className:"w-100",children:"Update Marker"}),Object(h.jsx)(C.a,{onClick:ge,disabled:ne,className:"btn btn-danger w-100",children:"Delete Marker"})]})]})})}function X(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),o=Object(s.a)(n,2),u=o[0],i=o[1],l=Object(r.useState)(""),b=Object(s.a)(l,2),d=b[0],O=b[1],f=Object(r.useState)(""),p=Object(s.a)(f,2),x=p[0],N=p[1],L=Object(r.useState)(""),B=Object(s.a)(L,2),M=B[0],P=B[1],E=Object(r.useState)(!1),A=Object(s.a)(E,2),q=A[0],D=A[1],G=Object(r.useState)(""),I=Object(s.a)(G,2),R=I[0],U=I[1],z=w().currentMode,T=Object(k.g)().booksId,F=Object(r.useRef)((function(){}));F.current=function(){j.ref("".concat(z,"Books")).child(T).get().then((function(e){if(e.exists()){var t=e.val();P(t.BookName)}})),j.ref("".concat(z,"Store")).child(T).get().then((function(e){if(e.exists()){var t=e.val();c(t.Store1),i(t.Store2),O(t.Store3),N(t.Synopsis)}}))};var _=function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),U(""),D(!0),e.next=5,j.ref("".concat(z,"Store")).child(T).update({Store1:a,Store2:u,Store3:d,Synopsis:x});case 5:U("Data Updated Successfully!"),D(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){F.current()}),[]),Object(h.jsx)(g.a,{children:Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:M}),R&&Object(h.jsxs)(S.a,{variant:"success",children:[" ",R," "]}),Object(h.jsxs)(y.a,{onSubmit:_,children:[Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Store 1 Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Enter Store1 Link",required:!0}),Object(h.jsx)(y.a.Label,{children:"Store 2 Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:u,onChange:function(e){return i(e.target.value)},placeholder:"Enter Store 2 Link",required:!0}),Object(h.jsx)(y.a.Label,{children:"Store 3 Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:d,onChange:function(e){return O(e.target.value)},placeholder:"Enter Store 3 Link",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Synopsis"}),Object(h.jsx)(y.a.Control,{type:"text",value:x,onChange:function(e){return N(e.target.value)},placeholder:"Enter Book Synopsis",required:!0})]}),Object(h.jsx)(C.a,{type:"submit",disabled:q,className:"w-100",children:"Update Store"})]})]})})}var Z=Object(r.createContext)();function $(){return Object(r.useContext)(Z)}function ee(e){var t=e.children,a=Object(r.useState)(""),c=Object(s.a)(a,2),n=c[0],o=c[1],u=Object(r.useState)(""),i=Object(s.a)(u,2),l=i[0],d=i[1],O=Object(r.useState)(""),f=Object(s.a)(O,2),p=f[0],x=f[1],g=Object(r.useState)(""),S=Object(s.a)(g,2),y=S[0],C=S[1],N=Object(r.useState)(""),L=Object(s.a)(N,2),B=L[0],M=L[1],P=Object(r.useState)(""),E=Object(s.a)(P,2),A=E[0],q=E[1],G=Object(r.useState)(""),I=Object(s.a)(G,2),R=I[0],U=I[1],z=Object(r.useState)({}),T=Object(s.a)(z,2),F=T[0],_=T[1],J=Object(r.useState)(""),V=Object(s.a)(J,2),W=V[0],H=V[1],Y=Object(r.useState)(""),Q=Object(s.a)(Y,2),X=Q[0],$=Q[1],ee=Object(r.useState)(""),te=Object(s.a)(ee,2),ae=te[0],re=te[1],ce=Object(r.useState)(""),ne=Object(s.a)(ce,2),oe=ne[0],se=ne[1],ue=Object(r.useState)(""),ie=Object(s.a)(ue,2),le=ie[0],je=ie[1],be=Object(r.useState)(""),de=Object(s.a)(be,2),he=de[0],Oe=de[1],fe=Object(r.useState)(!1),pe=Object(s.a)(fe,2),xe=pe[0],me=pe[1],ve=Object(r.useState)(),ke=Object(s.a)(ve,2),ge=ke[0],Se=ke[1],ye=Object(k.f)(),Ce=Object(r.useRef)((function(){})),Ne=w().currentMode;Ce.current=function(){j.ref("".concat(Ne,"Books")).on("value",(function(e){Se(e.numChildren()+1)}))},Object(r.useEffect)((function(){Ce.current()}),[]);var Le=function(){var e=Object(v.a)(m.a.mark((function e(t){var a,r,c,o,s,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),je(""),Oe(""),me(!0),a=!1,j.ref("".concat(Ne,"Books")).child("".concat(n,"<bookPlat>").concat(l)).on("value",(function(e){if(e.exists())return Oe("Books Already Exist!"),me(!1),void(a=!0)})),!0!==a){e.next=8;break}return e.abrupt("return");case 8:return j.ref("".concat(Ne,"Books")).child("".concat(n,"<bookPlat>").concat(l)).off("value"),r={Author:l,Cover:B,Marker:R,Model:p,Name:n,Publisher:A,Size:y,Synopsis:oe},e.next=12,Object(D.b)(F);case 12:return c=e.sent,o=Object(D.e)("".concat(n,"<bookPlat>").concat(l,"<bookPlat>").concat(R),r,c),e.next=16,K(o);case 16:if(s=e.sent,e.prev=17,"TargetCreated"!==s.data.result_code){e.next=35;break}return u="".concat(n,"<bookPlat>").concat(l),e.next=22,j.ref("".concat(Ne,"Books")).child(u).update({Author:l,BookName:n,CreatedAt:b,Cover:B,Entry:ge,Publisher:A});case 22:return e.next=24,j.ref("".concat(Ne,"Cloud Reco")).child("".concat(u,"<bookPlat>").concat(R)).update({UID:s.data.target_id});case 24:return e.next=26,j.ref("".concat(Ne,"Manager")).child(u).child(R).update({Name:R,CreatedAt:b,UpdatedAt:b});case 26:return e.next=28,j.ref("".concat(Ne,"Marker")).child("".concat(n,"<bookPlat>").concat(l,"<bookPlat>").concat(R)).update(r);case 28:return e.next=30,j.ref("".concat(Ne,"Store")).child(u).update({Store1:W,Store2:X,Store3:ae,Synopsis:oe});case 30:je("Data Updated Successfully!"),setTimeout(3e3),ye.push("/Books/"),e.next=36;break;case 35:Oe(s.data.result_code);case 36:e.next=41;break;case 38:e.prev=38,e.t0=e.catch(17),Oe("Bad Request!");case 41:me(!1);case 42:case"end":return e.stop()}}),e,null,[[17,38]])})));return function(t){return e.apply(this,arguments)}}(),Be={BookName:n,setBookName:o,Author:l,setAuthor:d,Model:p,setModel:x,Size:y,setSize:C,Cover:B,setCover:M,Publisher:A,setPublisher:q,Markers:R,setMarkers:U,MarkerImage:F,setMarkerImage:_,Store1:W,setStore1:H,Store2:X,setStore2:$,Store3:ae,setStore3:re,Synopsis:oe,setSynopsis:se,report:le,setReport:je,error:he,setError:Oe,requesting:xe,setRequest:me,PostBooksStore:Le};return Object(h.jsx)(Z.Provider,{value:Be,children:t})}function te(){var e=Object(k.f)(),t=$(),a=t.BookName,r=t.setBookName,c=t.Author,n=t.setAuthor,o=t.Model,s=t.setModel,u=t.Size,i=t.setSize,l=t.Cover,j=t.setCover,b=t.Publisher,d=t.setPublisher,O=t.Markers,f=t.setMarkers,p=t.setMarkerImage,x=t.report,m=t.error;return Object(h.jsx)(g.a,{children:Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"New Books"}),x&&Object(h.jsxs)(S.a,{variant:"success",children:[" ",x," "]}),m&&Object(h.jsxs)(S.a,{variant:"danger",children:[" ",m," "]}),Object(h.jsxs)(y.a,{onSubmit:function(t){t.preventDefault(),e.push("/New/Store")},children:[Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Name"}),Object(h.jsx)(y.a.Control,{type:"text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Enter Books Name",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Author"}),Object(h.jsx)(y.a.Control,{type:"text",value:c,onChange:function(e){return n(e.target.value)},placeholder:"Enter Author Name",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Marker Name"}),Object(h.jsx)(y.a.Control,{type:"text",value:O,onChange:function(e){return f(e.target.value)},placeholder:"Enter Book Marker Name",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"3D Model Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:o,onChange:function(e){return s(e.target.value)},placeholder:"Enter 3D Model Link",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"3D Model Size"}),Object(h.jsx)(y.a.Control,{type:"text",value:u,onChange:function(e){return i(e.target.value)},placeholder:"Enter 3D Model Size",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Cover Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:l,onChange:function(e){return j(e.target.value)},placeholder:"Enter 3D Model Link",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Publisher Logo Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:b,onChange:function(e){return d(e.target.value)},placeholder:"Enter Book Publisher Logo Link",required:!0})]}),Object(h.jsx)(y.a.Group,{as:H.a,children:Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"formFile",children:"Marker Image"}),Object(h.jsx)("input",{type:"file",className:"form-control",accept:"image/png, image/jpeg",onChange:function(e){return function(e){p(e.target.files[0]),console.log(e.target.files[0])}(e)},id:"formFile",required:!0})]})}),Object(h.jsx)(C.a,{type:"submit",className:"w-100",children:"Add Books"})]})]})})}function ae(){var e=$(),t=e.BookName,a=e.Store1,r=e.setStore1,c=e.Store2,n=e.setStore2,o=e.Store3,s=e.setStore3,u=e.Synopsis,i=e.setSynopsis,l=e.report,j=e.error,b=e.requesting,d=e.PostBooksStore,O=Object(k.f)();return Object(h.jsx)(g.a,{children:Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:t}),!t&&O.push("/New"),l&&Object(h.jsxs)(S.a,{variant:"success",children:[" ",l," "]}),j&&Object(h.jsxs)(S.a,{variant:"danger",children:[" ",j," "]}),Object(h.jsxs)(y.a,{onSubmit:d,children:[Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Store 1 Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Enter Store1 Link",required:!0}),Object(h.jsx)(y.a.Label,{children:"Store 2 Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:c,onChange:function(e){return n(e.target.value)},placeholder:"Enter Store 2 Link",required:!0}),Object(h.jsx)(y.a.Label,{children:"Store 3 Link"}),Object(h.jsx)(y.a.Control,{type:"text",value:o,onChange:function(e){return s(e.target.value)},placeholder:"Enter Store 3 Link",required:!0})]}),Object(h.jsxs)(y.a.Group,{className:"mb-2",children:[Object(h.jsx)(y.a.Label,{children:"Book Synopsis"}),Object(h.jsx)(y.a.Control,{type:"text",value:u,onChange:function(e){return i(e.target.value)},placeholder:"Enter Book Synopsis",required:!0})]}),Object(h.jsx)(C.a,{type:"submit",disabled:b,className:"w-100",children:"Add Store"})]})]})})}function re(){var e=f().currentUser,t=Object(k.f)();return Object(h.jsx)("div",{children:Object(h.jsx)(k.c,{children:Object(h.jsxs)(P,{children:[Object(h.jsx)(k.a,{exact:!0,path:"/",children:e?Object(h.jsx)(q,{}):t.push("/Login")}),Object(h.jsx)(k.a,{path:"/Register",component:L}),Object(h.jsx)(k.a,{path:"/Login",component:N}),e?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k.a,{exact:!0,path:"/Books",component:q}),Object(h.jsx)(k.a,{exact:!0,path:"/Books/:booksId",component:W}),Object(h.jsx)(k.a,{exact:!0,path:"/Marker/:booksId",component:Y}),Object(h.jsx)(k.a,{exact:!0,path:"/Books/:booksId/:markerId",component:Q}),Object(h.jsx)(k.a,{exact:!0,path:"/Store/:booksId",component:X}),Object(h.jsxs)(ee,{children:[Object(h.jsx)(k.a,{exact:!0,path:"/New",component:te}),Object(h.jsx)(k.a,{exact:!0,path:"/New/Store",component:ae})]})]}):t.push("/Login")]})})})}var ce=a(284);var ne=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)(B.a,{children:Object(h.jsx)(ce.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(h.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(h.jsx)(p,{children:Object(h.jsx)(re,{})})})})})})})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,288)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),r(e),c(e),n(e),o(e)}))};a(278);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(ne,{})}),document.getElementById("root")),oe()},28:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s}));a(84);var r="/api/",c=function(e,t,a){var r={name:e,width:50,image:a,active_flag:!0,application_metadata:s(t)};return JSON.stringify(r)},n=function(e,t){var a={image:t,application_metadata:s(e)};return JSON.stringify(a)},o=function(e){return new Promise((function(t,a){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result.split(",")[1])},r.onerror=function(e){return a(e)}}))},s=function(t){return new e.from(JSON.stringify(t)).toString("base64")}}).call(this,a(15).Buffer)}},[[279,1,2]]]);
//# sourceMappingURL=main.4d30545c.chunk.js.map